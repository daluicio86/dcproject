"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Ciudad } from "@/interface/ciudad.interface";
import { createUpdateCiudad } from "@/actions/ciudad/create-update-ciudad";
import { Servicio } from "@/interface";
import { useState } from "react";
import Image from "next/image";

interface Props {
  item: Partial<Ciudad> | null;
  servicios: Servicio[];
}

interface FormCiudadInputs {
  id?: string;
  nombre: string;
  descripcion?: string;
  url?: FileList;
  servicios: string[];
}

export const CiudadForm = ({ item }: Props) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";
  const [preview, setPreview] = useState<string | null>(item?.url ?? null);
  const [removeImage, setRemoveImage] = useState(false);

  const { handleSubmit, register, setValue } = useForm<FormCiudadInputs>({
    defaultValues: {
      id: item?.id ? String(item.id) : undefined,
      nombre: item?.nombre ?? undefined,
      descripcion: item?.descripcion ?? undefined,
      url: undefined,
      servicios: item?.servicios ? item.servicios.map((a) => a.id) : [],
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setRemoveImage(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setRemoveImage(true);
    setValue("url", undefined as any);
  };

  const onSubmit = async (data: FormCiudadInputs) => {
    const formData = new FormData();
    if (item && item.id) formData.append("id", String(item.id ?? ""));
    formData.append("nombre", data.nombre ?? "");
    formData.append("descripcion", data.descripcion ?? "");

    if (!removeImage && data.url && data.url.length > 0) formData.append("url", data.url[0]);

    formData.append("removeImage", String(removeImage));
    formData.append("servicios", data.servicios.toString());

    const { ok } = await createUpdateCiudad(formData);
    if (!ok) {
      alert(lang === "es" ? "La ciudad no se pudo guardar" : lang === "de" ? "Stadt konnte nicht gespeichert werden" : "City could not be saved");
      return;
    }

    router.replace(`/admin/ciudad`);
  };

  return (
    <div className="flex items-center justify-center px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md">
        <div className="flex flex-col gap-8 mt-5">
          <input type="text" placeholder={lang === "es" ? "Nombre de la ciudad" : lang === "de" ? "Stadtname" : "City name"} required {...register("nombre", { required: true })} className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full" />

          <textarea {...register("descripcion", { required: false })} rows={8} cols={50} name="descripcion" id="descripcion" placeholder={t("propiedadForm.description")} required className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"></textarea>

          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold">{lang === "es" ? "Imagen" : lang === "de" ? "Bild" : "Image"}</span>

            {preview ? (
              <div className="flex flex-col items-center">
                <Image width={256} height={160} src={preview} alt="Vista previa" className="w-64 h-40 object-cover rounded-xl shadow-md border border-gray-300 mb-3" />
                <button type="button" onClick={handleRemoveImage} className="text-sm text-red-500 hover:underline">
                  {lang === "es" ? "Quitar imagen" : lang === "de" ? "Bild entfernen" : "Remove image"}
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">{lang === "es" ? "No hay imagen seleccionada" : lang === "de" ? "Kein Bild ausgewählt" : "No image selected"}</p>
            )}

            <input type="file" {...register("url")} onChange={handleFileChange} className="p-2 border rounded-md bg-gray-200" accept="image/png, image/jpeg, image/avif" />
          </div>

          <button type="submit" className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full lg:w-fit hover:cursor-pointer hover:bg-dark duration-300">
            {lang === "es" ? "Guardar" : lang === "de" ? "Speichern" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
