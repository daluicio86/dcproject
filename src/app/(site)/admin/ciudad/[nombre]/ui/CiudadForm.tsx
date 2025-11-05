"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Ciudad } from "@/interface/ciudad.interface";
import { createUpdateCiudad } from "@/actions/ciudad/create-update-ciudad";
import { Servicio } from "@/interface";
import clsx from "clsx";
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
    const { t } = useTranslation();
    const [preview, setPreview] = useState<string | null>(item?.url ?? null);
    const [removeImage, setRemoveImage] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormCiudadInputs>({
        defaultValues: {
            id: item?.id ? String(item.id) : undefined,
            nombre: item?.nombre ?? undefined,
            descripcion: item?.descripcion ?? undefined,
            url: undefined,
            servicios: item?.servicios ? item.servicios.map(a => a.id) : [],
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
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

        if (!removeImage && data.url && data.url.length > 0) {
            formData.append("url", data.url[0]);
        }

        formData.append("removeImage", String(removeImage));
        formData.append("servicios", data.servicios.toString());


        const { ok } = await createUpdateCiudad(formData);
        if (!ok) return alert("Ciudad no se pudo guardar");

        router.replace(`/admin/ciudad`);
    };

    watch("servicios");
    const onServicioChanged = (servicio: string) => {
        const serviciosSet = new Set(getValues("servicios"));
        if (serviciosSet.has(servicio)) {
            serviciosSet.delete(servicio);
        } else {
            serviciosSet.add(servicio);
        }
        setValue("servicios", Array.from(serviciosSet));
    };


    return (
        <div className="flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md"
            >
                <div className="flex flex-col gap-8 mt-5">
                    {/* Nombre */}
                    <input
                        type="text"
                        placeholder="Nombre de la ciudad"
                        required
                        {...register("nombre", { required: true })}
                        className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                    />

                    <textarea
                        {...register("descripcion", { required: false })}
                        rows={8}
                        cols={50}
                        name='descripcion'
                        id='descripcion'
                        placeholder={t("propiedadForm.description")}
                        required
                        className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline'></textarea>


                    {/* Imagen */}
                    <div className="flex flex-col gap-4">
                        <span className="text-lg font-semibold">Imagen</span>

                        {preview ? (
                            <div className="flex flex-col items-center">
                                <Image
                                    width={256}
                                    height={160}
                                    src={preview}
                                    alt="Vista previa"
                                    className="w-64 h-40 object-cover rounded-xl shadow-md border border-gray-300 mb-3"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="text-sm text-red-500 hover:underline"
                                >
                                    Quitar imagen
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">No hay imagen seleccionada</p>
                        )}

                        <input
                            type="file"
                            {...register("url")}
                            onChange={handleFileChange}
                            className="p-2 border rounded-md bg-gray-200"
                            accept="image/png, image/jpeg, image/avif"
                        />
                    </div>

                    {/* Servicios */}
                    {/* <div className="flex flex-col gap-4">
                        <span className="text-lg font-semibold">Servicios</span>
                        <div className="flex flex-wrap justify-between">
                            {Object.values(servicios ?? {}).map((servicio) => (
                                <div
                                    key={servicio.id}
                                    onClick={() => onServicioChanged(servicio.id)}
                                    className={clsx(
                                        "text-black/80 dark:text-white/80 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 mb-2 hover:cursor-pointer transition-colors",
                                        {
                                            "bg-blue-500 text-white":
                                                Array.isArray(getValues("servicios")) &&
                                                getValues("servicios").includes(servicio.id),
                                        }
                                    )}
                                >
                                    <span>{servicio.nombre}</span>
                                </div>
                            ))}
                        </div>
                    </div>*/}
                    {/* Botón */}
                    <button
                        type="submit"
                        className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full lg:w-fit hover:cursor-pointer hover:bg-dark duration-300"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};
