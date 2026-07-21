"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Propiedad } from "@/interface/propiedad.interface";
import { createUpdatePropiedad } from "@/actions/propiedad/create-update-propiedad";
import { useRouter } from "next/navigation";
import { Categoria, Ciudad } from "@/interface";
import { useTranslation } from "react-i18next";
import HeroSub from "@/components/shared/HeroSub";
import { useSession } from "next-auth/react";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";
import { useEffect, useMemo, useRef, useState } from "react";
import { uploadToCloudinaryWithProgress } from "@/lib/cloudinary-upload";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
type ExistingImage = {
  id: number;
  url: string;
};

type NewMedia = {
  file: File;
  preview: string; // objectURL creado 1 vez
  isVideo: boolean;
};

const enumRentaVenta = [
  { id: "1", name: "Renta" },
  { id: "2", name: "Venta" },
  { id: "3", name: "Inversores de propiedades" },
];

const enumClima = [
  { id: "1", name: "Seco 10-20°" },
  { id: "2", name: "Seco 10-25°" },
  { id: "3", name: "SubTropical 10-30°" },
  { id: "4", name: "Húmedo 60%" },
];

const enumTipoMedida1 = [
  { id: "m", name: "m²" },
  { id: "ft2", name: "ft²" },
];

const enumTipoMedida2 = [
  { id: "ha", name: "ha" },
  { id: "acres", name: "acres" },
];

interface Props {
  propiedad: Partial<Propiedad> & {
    images?: ExistingImage[];
  };
  categories: Categoria[];
  tiposPropiedad: TipoPropiedad[];
  ciudades: Ciudad[];
}

interface FormInputs {
  titleEn?: string;
  titleDe?: string;
  title: string;
  description: string;
  descriptionEn?: string;
  descriptionDe?: string;
  apto: string;
  aptoEn?: string;
  aptoDe?: string;
  precio: number;
  metros?: number;
  ft2?: number;
  area?: number;
  acres?: number;
  tipoMedida?: string;
  tipoMedida1?: string;
  altura: number;
  address: string;
  addressEn?: string;
  addressDe?: string;
  geoLink: string;

  esPrincipal: boolean;
  ciudadId?: string;
  rentaVenta?: string;
  temperatura?: string;

  categoriaId: string;
  tipoPropiedadId: string;

  images?: FileList;
}

/* ------------------------------------------------------------------ */
/* HELPERS */
/* ------------------------------------------------------------------ */

// Concurrencia limitada: ejecuta tareas async con "limit" en paralelo
async function runWithConcurrency<T>(
  tasks: Array<() => Promise<T>>,
  limit: number,
): Promise<T[]> {
  const results: T[] = new Array(tasks.length);
  let nextIndex = 0;

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    async () => {
      while (true) {
        const current = nextIndex++;
        if (current >= tasks.length) break;
        results[current] = await tasks[current]();
      }
    },
  );

  await Promise.all(workers);
  return results;
}

function parseDecimalValue(value: unknown) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value !== "string") return 0;

  const normalizedValue = value.trim().replace(",", ".");
  if (!normalizedValue) return 0;

  const numericValue = Number(normalizedValue);
  return Number.isFinite(numericValue) ? numericValue : 0;
}

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */
export const PropiedadForm = ({
  propiedad,
  categories = [],
  tiposPropiedad = [],
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0,2) ?? "en";

  const { handleSubmit, register, setValue, watch } = useForm<FormInputs>({
    defaultValues: {
      ...propiedad,
      titleEn: propiedad.titleEn ?? undefined,
      titleDe: propiedad.titleDe ?? undefined,
      descriptionEn: propiedad.descriptionEn ?? undefined,
      descriptionDe: propiedad.descriptionDe ?? undefined,
      aptoEn: propiedad.aptoEn ?? undefined,
      aptoDe: propiedad.aptoDe ?? undefined,
      addressEn: propiedad.addressEn ?? undefined,
      addressDe: propiedad.addressDe ?? undefined,
      esPrincipal: Boolean(propiedad.esPrincipal),
      precio: propiedad.precio ?? undefined,
      metros: propiedad.metros ?? undefined,
      ft2: propiedad.ft2 ?? undefined,
      area: propiedad.area ?? undefined,
      acres: propiedad.acres ?? undefined,
      images: undefined,
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadLabel, setUploadLabel] = useState<string>("");

  /* ------------------------------------------------------------------ */
  /* IMAGE STATE */
  /* ------------------------------------------------------------------ */
  const [existingImages, setExistingImages] = useState<ExistingImage[]>(
    propiedad.images ?? [],
  );
  const [imagesToDelete, setImagesToDelete] = useState<number[]>([]);

  // NUEVO: en vez de File[] sueltos, guardamos file + preview + isVideo
  const [newMedia, setNewMedia] = useState<NewMedia[]>([]);

  // Lightbox / Modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string>("");
  const [lightboxIsVideo, setLightboxIsVideo] = useState(false);

  const openLightbox = (src: string, isVideo: boolean) => {
    setLightboxSrc(src);
    setLightboxIsVideo(isVideo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc("");
    setLightboxIsVideo(false);
  };

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    if (lightboxOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  const watchedImages = watch("images");

  // ✅ Crear previews SOLO una vez cuando cambia FileList.
  // ✅ Revocar las anteriores para no filtrar memoria.
  useEffect(() => {
    if (!watchedImages) return;

    const files = Array.from(watchedImages);

    // Crea nuevo estado con previews
    const mapped: NewMedia[] = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      isVideo: file.type.startsWith("video"),
    }));

    // Revoca previews anteriores
    setNewMedia((prev) => {
      prev.forEach((m) => URL.revokeObjectURL(m.preview));
      return mapped;
    });

    // Cleanup si el efecto se vuelve a correr o desmonta
    return () => {
      mapped.forEach((m) => URL.revokeObjectURL(m.preview));
    };
  }, [watchedImages]);

  /* ------------------------------------------------------------------ */
  /* IMAGE HANDLERS */
  /* ------------------------------------------------------------------ */
  const removeExistingImage = (index: number) => {
    const image = existingImages[index];
    setImagesToDelete((prev) => [...prev, image.id]);
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setNewMedia((prev) => {
      const toRemove = prev[index];
      if (toRemove) URL.revokeObjectURL(toRemove.preview); // ✅ revoca al borrar
      const updated = prev.filter((_, i) => i !== index);

      // reconstruye FileList para RHF (igual que hacías)
      const dt = new DataTransfer();
      updated.forEach((m) => dt.items.add(m.file));
      setValue("images", dt.files);

      return updated;
    });
  };

  /* ------------------------------------------------------------------ */
  /* SUBMIT */
  /* ------------------------------------------------------------------ */
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const metrosValue = parseDecimalValue(data.metros);
    const ft2Value = parseDecimalValue(data.ft2);
    const areaValue = parseDecimalValue(data.area);
    const acresValue = parseDecimalValue(data.acres);
    if (
      metrosValue <= 0 &&
      ft2Value <= 0 &&
      areaValue <= 0 &&
      acresValue <= 0
    ) {
      alert(
        lang === "es"
          ? "Debes ingresar al menos un valor de superficie."
          : lang === "de"
            ? "Bitte geben Sie mindestens einen Flachenwert ein."
            : "You must enter at least one area value.",
      );
      return;
    }

    const formData = new FormData();

    if (propiedad.id) formData.append("id", propiedad.id.toString());

    setIsUploading(true);
    setUploadProgress(0);
    setUploadLabel("");

    try {
      const uploads: { url: string; type: "image" | "video" }[] = [];

      // ✅ Progreso global real (promedio)
      const perFileProgress = new Array(newMedia.length).fill(0);

      // ✅ Throttle de updates (evita miles de renders)
      const lastUpdateRef = { t: 0 };
      const updateGlobalProgress = () => {
        const now = Date.now();
        if (now - lastUpdateRef.t < 120) return; // throttle ~8fps
        lastUpdateRef.t = now;

        const sum = perFileProgress.reduce((a, b) => a + b, 0);
        const avg = newMedia.length ? sum / newMedia.length : 100;
        setUploadProgress(Math.round(avg));
      };

      // ✅ Concurrencia limitada (3 a la vez)
      const CONCURRENCY = 3;

      const tasks = newMedia.map((m, index) => async () => {
        setUploadLabel(`Subiendo ${m.file.name}...`);

        const media = await uploadToCloudinaryWithProgress(
          m.file,
          (percent) => {
            // percent 0..100 de ese archivo
            perFileProgress[index] = Math.max(0, Math.min(100, percent));
            updateGlobalProgress();
          },
        );

        // asegurate que quede 100% al final del archivo
        perFileProgress[index] = 100;
        updateGlobalProgress();

        return { url: media.url, type: media.type as "image" | "video" };
      });

      const results = await runWithConcurrency(tasks, CONCURRENCY);
      uploads.push(...results);
      // Datos del formulario
      formData.append("title", data.title);
      formData.append("titleEn", data.titleEn ?? "");
      formData.append("titleDe", data.titleDe ?? "");
      formData.append("slug", data.title);
      formData.append("description", data.description);
      formData.append("descriptionEn", data.descriptionEn ?? "");
      formData.append("descriptionDe", data.descriptionDe ?? "");
      formData.append("apto", data.apto);
      formData.append("aptoEn", data.aptoEn ?? "");
      formData.append("aptoDe", data.aptoDe ?? "");
      formData.append("precio", data.precio.toString());
      formData.append("metros", String(metrosValue > 0 ? metrosValue : 0));
      formData.append("ft2", String(ft2Value > 0 ? ft2Value : 0));
      formData.append("area", String(areaValue > 0 ? areaValue : 0));
      formData.append("acres", String(acresValue > 0 ? acresValue : 0));
      formData.append("tipoMedida", "m2");
      formData.append("tipoMedida1", "ha");
      formData.append("altura", data.altura.toString());
      formData.append("address", data.address);
      formData.append("addressEn", data.addressEn ?? "");
      formData.append("addressDe", data.addressDe ?? "");
      formData.append("geoLink", data.geoLink);
      formData.append("esPrincipal", data.esPrincipal ? "true" : "false");
      formData.append("categoriaId", data.categoriaId);
      formData.append("tipoPropiedadId", data.tipoPropiedadId);
      formData.append("userId", session?.user?.id || "");

      if (data.rentaVenta) formData.append("rentaVenta", data.rentaVenta);
      if (data.temperatura) formData.append("temperatura", data.temperatura);
      if (data.ciudadId) formData.append("ciudadId", data.ciudadId);

      // IDs a borrar
      imagesToDelete.forEach((id) =>
        formData.append("imagesToDelete", id.toString()),
      );

      // Media subida
      if (uploads.length > 0) {
        formData.append("uploadedMedia", JSON.stringify(uploads));
      }

      console.log("🚀 ~ file: PropiedadForm.tsx:257 ~ onSubmit ~ formData:", data.esPrincipal);
      const { ok } = await createUpdatePropiedad(formData);
      if (!ok) {
        alert(lang === "es" ? "Error al guardar" : lang === "de" ? "Fehler beim Speichern" : "Error while saving");
        return;
      }

      // ✅ limpia estado al final
      setUploadLabel("");
      setUploadProgress(100);

      router.push("/admin/propiedads");
    } finally {
      setIsUploading(false);
      // opcional: resetear progreso tras un pequeño delay o dejarlo en 100
      // setUploadProgress(0);
    }
  };

  console.log("🚀 ~ file: PropiedadForm.tsx:263 ~ PropiedadForm ~ esPrincipal:", propiedad);
  /* ------------------------------------------------------------------ */
  /* RENDER */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Cerrar"
            >
              x
            </button>

            {lightboxIsVideo ? (
              <video
                src={lightboxSrc}
                className="w-full h-full object-contain rounded-xl bg-transparent"
                controls
                autoPlay
              />
            ) : (
              <img
                src={lightboxSrc}
                alt="Vista previa"
                className="w-full h-full object-scale-down rounded-xl bg-transparent"
              />
            )}
          </div>
        </div>
      )}

      <HeroSub
        title="Property Maintenance."
        description="Property Management: Control each property's data from one place."
        badge="Properties"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {isUploading && (
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4">
            <div className="text-sm mb-2">
              {uploadLabel || "Subiendo archivos..."}
            </div>
            <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <div className="text-xs mt-2 text-gray-500">{uploadProgress}%</div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 flex flex-col gap-8 rounded-3xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8"
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 w-full rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
              <input
                type="checkbox"
                id="esPrincipal"
                {...register("esPrincipal")}
                className="h-5 w-5 accent-primary"
              />
              <label
                htmlFor="esPrincipal"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Marcar como propiedad principal.
              </label>
            </div>
            <section className="flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Información principal</h2>
                <p className="mt-1 text-sm text-gray-500">Nombre y precio de la propiedad.</p>
              </div>
              <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <label htmlFor="title" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Nombre (ES)
                <input
                  {...register("title", { required: true })}
                  type="text"
                  id="title"
                  placeholder={t("propiedadForm.title")}
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
                </label>
                <label htmlFor="titleEn" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Title (EN)
                <input
                  {...register("titleEn")}
                  type="text"
                  id="titleEn"
                  placeholder="Title (EN)"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
                </label>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <label htmlFor="titleDe" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Titel (DE)
                <input
                  {...register("titleDe")}
                  type="text"
                  id="titleDe"
                  placeholder="Titel (DE)"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
                </label>

                <label htmlFor="precio" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Precio
                  <div className="relative">
                  <input
                    {...register("precio", { required: true })}
                    type="number"
                    id="precio"
                    placeholder={t("propiedadForm.price")}
                    className="w-full rounded-full border border-black/10 px-6 py-3.5 pr-20 outline-primary focus:outline dark:border-white/10"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-sm font-medium text-gray-500">
                    USD
                  </span>
                  </div>
                </label>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-5 border-t border-black/10 pt-7 dark:border-white/10">
              <div>
                <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Ubicación</h2>
                <p className="mt-1 text-sm text-gray-500">Direcciones y enlace del mapa.</p>
              </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <label htmlFor="address" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Dirección (ES)
              <input
                {...register("address", { required: false })}
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                placeholder={t("propiedadForm.address")}
                required
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
              <label htmlFor="addressEn" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Address (EN)
              <input
                {...register("addressEn")}
                type="text"
                id="addressEn"
                placeholder="Address (EN)"
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
              <label htmlFor="addressDe" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Adresse (DE)
              <input
                {...register("addressDe")}
                type="text"
                id="addressDe"
                placeholder="Adresse (DE)"
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <label htmlFor="geoLink" className="flex w-full flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Enlace a Google Maps
              <input
                type="text"
                {...register("geoLink", { required: false })}
                name="geoLink"
                id="geoLink"
                autoComplete="off"
                placeholder={t("propiedadForm.geoLink")}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
            </div>
            </section>
            <section className="flex flex-col gap-5 border-t border-black/10 pt-7 dark:border-white/10">
              <div>
                <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Superficie y altitud</h2>
                <p className="mt-1 text-sm text-gray-500">Ingrese las equivalencias disponibles y la altura.</p>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="metros" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  m² (metros cuadrados)
                </label>
                <input
                  {...register("metros")}
                  type="text"
                  inputMode="decimal"
                  name="metros"
                  id="metros"
                  autoComplete="off"
                  placeholder="m²"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ft2" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  pie² (pies cuadrados)
                </label>
                <input
                  {...register("ft2")}
                  type="text"
                  inputMode="decimal"
                  name="ft2"
                  id="ft2"
                  autoComplete="off"
                  placeholder="pie²"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="area" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  ha (hectáreas)
                </label>
                <input
                  {...register("area")}
                  type="text"
                  inputMode="decimal"
                  name="area"
                  id="area"
                  autoComplete="off"
                  placeholder="ha"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="acres" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  acres
                </label>
                <input
                  {...register("acres")}
                  type="text"
                  inputMode="decimal"
                  name="acres"
                  id="acres"
                  autoComplete="off"
                  placeholder="acres"
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
              </div>
            </div>


            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label htmlFor="altura" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Altura sobre el nivel del mar
                </label>
                <div className="relative">
                <input
                  {...register("altura", { required: false })}
                  type="number"
                  name="altura"
                  id="altura"
                  autoComplete="off"
                  placeholder={t("propiedadForm.altura")}
                  required
                  className="w-full rounded-full border border-black/10 px-6 py-3.5 pr-24 outline-primary focus:outline dark:border-white/10"
                />
                <span className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-sm font-medium text-gray-500">
                  msnm
                </span>
                </div>
              </div>
            </div>
            </section>

            <section className="flex flex-col gap-5 border-t border-black/10 pt-7 dark:border-white/10">
              <div>
                <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Clasificación</h2>
                <p className="mt-1 text-sm text-gray-500">Uso recomendado, modalidad, clima y tipo de propiedad.</p>
              </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <label className="flex flex-col gap-2" htmlFor="apto">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Propiedad apta para (ES)</span>
              <input
                {...register("apto", { required: false })}
                type="text"
                name="apto"
                id="apto"
                autoComplete="off"
                placeholder={t("propiedadForm.apto")}
                required
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
              <label className="flex flex-col gap-2" htmlFor="aptoEn">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Suitable for (EN)</span>
              <input
                {...register("aptoEn")}
                type="text"
                id="aptoEn"
                placeholder="Suitable for (EN)"
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
              <label className="flex flex-col gap-2" htmlFor="aptoDe">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Geeignet für (DE)</span>
              <input
                {...register("aptoDe")}
                type="text"
                id="aptoDe"
                placeholder="Geeignet für (DE)"
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Renta / Venta</span>
              <select
                {...register("rentaVenta", { required: true })}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  {t("propiedadForm.selectRentaVenta")}
                </option>
                {enumRentaVenta ? (
                  Object.values(enumRentaVenta).map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    No esta definida la renta o venta
                  </option>
                )}
              </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Clima</span>
                <div className="relative">
                <select
                  {...register("temperatura", { required: true })}
                  className="w-full rounded-full border border-black/10 px-6 py-3.5 pr-28 outline-primary focus:outline dark:border-white/10"
                >
                  <option key={-1} value="">
                    {t("propiedadForm.selectClimate")}
                  </option>
                  {enumClima ? (
                    Object.values(enumClima).map((tipo) => (
                      <option key={tipo.id} value={tipo.id}>
                        {tipo.name}
                      </option>
                    ))
                  ) : (
                    <option key={-1} value="">
                      Clima no definido
                    </option>
                  )}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-10 flex items-center text-sm text-gray-500">°C</span>
                </div>
              </label>
              </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Categoría</span>
              <select
                {...register("categoriaId", { required: true })}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  {t("propiedadForm.selectCategory")}
                </option>
                {categories ? (
                  Object.values(categories).map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    No existen categorías
                  </option>
                )}
              </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Tipo de propiedad</span>
              <select
                {...register("tipoPropiedadId", { required: true })}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  Selecciona Tipo Propiedad
                </option>
                {tiposPropiedad ? (
                  Object.values(tiposPropiedad).map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    No existen tipos de propiedad
                  </option>
                )}
              </select>
              </label>
            </div>
            </section>
          </div>
          <section className="flex flex-col gap-5 border-t border-black/10 pt-7 dark:border-white/10">
            <div>
              <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Descripciones</h2>
              <p className="mt-1 text-sm text-gray-500">Contenido público en los tres idiomas.</p>
            </div>
          <label htmlFor="description" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Descripción (ES)
          <textarea
            {...register("description", { required: false })}
            rows={8}
            cols={50}
            name="description"
            id="description"
            placeholder={t("propiedadForm.description")}
            required
            className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
          ></textarea>
          </label>
          <label htmlFor="descriptionEn" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Description (EN)
          <textarea
            {...register("descriptionEn")}
            rows={4}
            cols={50}
            id="descriptionEn"
            placeholder="Description (EN)"
            className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
          ></textarea>
          </label>
          <label htmlFor="descriptionDe" className="flex flex-col gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Beschreibung (DE)
          <textarea
            {...register("descriptionDe")}
            rows={4}
            cols={50}
            id="descriptionDe"
            placeholder="Beschreibung (DE)"
            className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
          ></textarea>
          </label>
          </section>

          <section className="flex flex-col gap-4 border-t border-black/10 pt-7 dark:border-white/10">
          <div>
            <h2 className="text-xl font-semibold text-[#172023] dark:text-white">Fotos y videos</h2>
            <p className="mt-1 text-sm text-gray-500">Seleccione los archivos que desea agregar a la propiedad.</p>
          </div>
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            {...register("images")}
            className="w-full rounded-2xl border border-dashed border-black/20 bg-gray-50 p-4 dark:border-white/20 dark:bg-white/5"
          />
          </section>

          {/* MEDIA EXISTENTE */}
          {existingImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {existingImages.map((media) => {
                const isVideo = media.url.match(/\.(mp4|webm|ogg)$/i);

                return (
                  <div
                    key={media.id}
                    className="relative h-40 rounded-xl overflow-hidden"
                  >
                    {isVideo ? (
                      <video
                        src={media.url}
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                        controls
                        onClick={() => openLightbox(media.url, true)}
                      />
                    ) : (
                      <img
                        src={media.url}
                        alt="Media propiedad"
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                        loading="lazy"
                        decoding="async"
                        onClick={() => openLightbox(media.url, false)}
                      />
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        removeExistingImage(
                          existingImages.findIndex((i) => i.id === media.id),
                        )
                      }
                      className="absolute top-2 right-2 z-10 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* MEDIA NUEVA (OPTIMIZADA) */}
          {newMedia.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newMedia.map((m, index) => (
                <div
                  key={`${m.file.name}-${index}`}
                  className="relative h-40 rounded-xl overflow-hidden"
                >
                  {m.isVideo ? (
                    <video
                      src={m.preview}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                      muted
                      playsInline
                      preload="none"
                      // sin controls en grid (más liviano)
                      onClick={() => openLightbox(m.preview, true)}
                    />
                  ) : (
                    <img
                      src={m.preview}
                      alt="Nueva imagen"
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                      loading="lazy"
                      decoding="async"
                      onClick={() => openLightbox(m.preview, false)}
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => removeNewImage(index)}
                    className="absolute top-2 right-2 z-10 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            className="bg-primary text-white px-6 py-3 rounded-full"
            disabled={isUploading}
          >
            {isUploading ? (lang === "es" ? "Guardando..." : lang === "de" ? "Speichern..." : "Saving...") : (lang === "es" ? "Guardar" : lang === "de" ? "Speichern" : "Save")}
          </button>
        </form>
      </div>
    </>
  );
};
