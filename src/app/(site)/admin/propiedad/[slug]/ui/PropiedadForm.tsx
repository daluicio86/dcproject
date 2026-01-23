"use client";

import { useForm } from "react-hook-form";
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

const enumTipoMedida = [
  { id: "m", name: "m²" },
  { id: "ha", name: "ha" },
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
  title: string;
  description: string;
  apto: string;
  precio: number;
  metros: number;
  tipoMedida: string;
  altura: number;
  address: string;
  geoLink: string;

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
  const { t } = useTranslation();

  const { handleSubmit, register, setValue, watch } = useForm<FormInputs>({
    defaultValues: {
      ...propiedad,
      precio: propiedad.precio ?? undefined,
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
  const onSubmit = async (data: FormInputs) => {
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

        // asegúrate que quede 100% al final del archivo
        perFileProgress[index] = 100;
        updateGlobalProgress();

        return { url: media.url, type: media.type as "image" | "video" };
      });

      const results = await runWithConcurrency(tasks, CONCURRENCY);
      uploads.push(...results);

      // Datos del formulario
      formData.append("title", data.title);
      formData.append("slug", data.title);
      formData.append("description", data.description);
      formData.append("apto", data.apto);
      formData.append("precio", data.precio.toString());
      formData.append("metros", data.metros.toString());
      formData.append("tipoMedida", data.tipoMedida);
      formData.append("altura", data.altura.toString());
      formData.append("address", data.address);
      formData.append("geoLink", data.geoLink);
      formData.append("esPrincipal", "false");
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

      const { ok } = await createUpdatePropiedad(formData);
      if (!ok) {
        alert("Error al guardar");
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
              ✕
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

      <div className="mx-auto w-full lg:w-2/3 xl:w-1/2 px-4">
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
          className="flex flex-col gap-6 mb-5"
        >
          <div className="flex flex-col gap-8 mt-5">
            <div className="flex flex-col lg:flex-row gap-6">
              <input
                {...register("title", { required: true })}
                type="text"
                id="title"
                placeholder={t("propiedadForm.title")}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />

              <div className="flex items-center gap-2 w-full">
                <input
                  {...register("precio", { required: true })}
                  type="number"
                  id="precio"
                  placeholder={t("propiedadForm.price")}
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />

                <label
                  htmlFor="precio"
                  className="text-sm text-gray-500 whitespace-nowrap"
                >
                  USD
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
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
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <input
                type="text"
                {...register("geoLink", { required: false })}
                name="geoLink"
                id="geoLink"
                autoComplete="off"
                placeholder={t("propiedadForm.geoLink")}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <input
                {...register("metros", { required: true })}
                type="number"
                name="metros"
                id="metros"
                autoComplete="off"
                placeholder={t("propiedadForm.metros")}
                required
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              />

              <select
                {...register("tipoMedida", { required: true })}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                {enumTipoMedida ? (
                  Object.values(enumTipoMedida).map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    Medidas no definido
                  </option>
                )}
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex items-center gap-2 w-full">
                <input
                  {...register("altura", { required: false })}
                  type="number"
                  name="altura"
                  id="altura"
                  autoComplete="off"
                  placeholder={t("propiedadForm.altura")}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                />
                <label
                  htmlFor="precio"
                  className="text-sm text-gray-500 whitespace-nowrap"
                >
                  msnm
                </label>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
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
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
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
              <div className="flex items-center gap-2 w-full">
                <select
                  {...register("temperatura", { required: true })}
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
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
                <label
                  htmlFor="precio"
                  className="text-sm text-gray-500 whitespace-nowrap"
                >
                  centigrados
                </label>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
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
            </div>
          </div>
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

          <input
            type="file"
            multiple
            accept="image/*,video/*"
            {...register("images")}
            className="border p-2"
          />

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
                      ✕
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
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            className="bg-primary text-white px-6 py-3 rounded-full"
            disabled={isUploading}
          >
            {isUploading ? "Guardando..." : "Guardar"}
          </button>
        </form>
      </div>
    </>
  );
};
