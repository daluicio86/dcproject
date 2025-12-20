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
import { useEffect, useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
type ExistingImage = {
    id: number;
    url: string;
};

const enumRentaVenta = [
    { id: "1", name: "Renta" },
    { id: "2", name: "Venta" },
    { id: "3", name: "Inversores de propiedades" }
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

    /* ------------------------------------------------------------------ */
    /* IMAGE STATE */
    /* ------------------------------------------------------------------ */
    const [existingImages, setExistingImages] = useState<ExistingImage[]>(
        propiedad.images ?? []
    );
    const [imagesToDelete, setImagesToDelete] = useState<number[]>([]);
    const [newImages, setNewImages] = useState<File[]>([]);

    const watchedImages = watch("images");

    useEffect(() => {
        if (!watchedImages) return;
        setNewImages(Array.from(watchedImages));
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
        const updated = newImages.filter((_, i) => i !== index);
        setNewImages(updated);

        const dt = new DataTransfer();
        updated.forEach((file) => dt.items.add(file));
        setValue("images", dt.files);
    };

    /* ------------------------------------------------------------------ */
    /* SUBMIT */
    /* ------------------------------------------------------------------ */
    const onSubmit = async (data: FormInputs) => {
        const formData = new FormData();

        if (propiedad.id) {
            formData.append("id", propiedad.id.toString());
        }

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

        /* 🔥 IMÁGENES A BORRAR (IDs) */
        imagesToDelete.forEach((id) => {
            formData.append("imagesToDelete", id.toString());
        });

        /* 🔥 IMÁGENES NUEVAS */
        if (data.images) {
            Array.from(data.images).forEach((file) => {
                formData.append("images", file);
            });
        }

        const { ok } = await createUpdatePropiedad(formData);
        if (!ok) {
            alert("Error al guardar");
            return;
        }

        router.push("/admin/propiedads");
    };

    /* ------------------------------------------------------------------ */
    /* RENDER */
    /* ------------------------------------------------------------------ */
    return (
        <>
            <HeroSub
                title="Property Maintenance."
                description="Property Management: Control each property's data from one place."
                badge="Properties"
            />

            <div className="mx-auto w-full lg:w-2/3 xl:w-1/2 px-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mb-5">

                    <div className='flex flex-col gap-8 mt-5'>
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


                        <div className='flex flex-col lg:flex-row gap-6'>
                            <input
                                {...register("address", { required: false })}
                                type='text'
                                name='address'
                                id='address'
                                autoComplete='address'
                                placeholder={t("propiedadForm.address")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <input
                                type='text'
                                {...register("geoLink", { required: false })}
                                name='geoLink'
                                id='geoLink'
                                autoComplete='off'
                                placeholder={t("propiedadForm.geoLink")}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <input
                                {...register("metros", { required: true })}
                                type='number'
                                name='metros'
                                id='metros'
                                autoComplete='off'
                                placeholder={t("propiedadForm.metros")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />

                            <select
                                {...register("tipoMedida", { required: true })}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                {enumTipoMedida ? (
                                    Object.values(enumTipoMedida).map((tipo) => (
                                        <option key={tipo.id} value={tipo.id}>
                                            {tipo.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    Medidas no definido
                                </option>}
                            </select>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    {...register("altura", { required: false })}
                                    type='number'
                                    name='altura'
                                    id='altura'
                                    autoComplete='off'
                                    placeholder={t("propiedadForm.altura")}
                                    required
                                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                                />
                                <label
                                    htmlFor="precio"
                                    className="text-sm text-gray-500 whitespace-nowrap"
                                >
                                    msnm
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <input
                                {...register("apto", { required: false })}
                                type='text'
                                name='apto'
                                id='apto'
                                autoComplete='off'
                                placeholder={t("propiedadForm.apto")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <select
                                {...register("rentaVenta", { required: true })}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    {t("propiedadForm.selectRentaVenta")}
                                </option>
                                {enumRentaVenta ? (
                                    Object.values(enumRentaVenta).map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No esta definida la renta o venta
                                </option>}
                            </select>
                            <div className="flex items-center gap-2 w-full">
                                <select
                                    {...register("temperatura", { required: true })}
                                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                                >
                                    <option key={-1} value=''>
                                        {t("propiedadForm.selectClimate")}
                                    </option>
                                    {enumClima ? (
                                        Object.values(enumClima).map((tipo) => (
                                            <option key={tipo.id} value={tipo.id}>
                                                {tipo.name}
                                            </option>
                                        ))
                                    ) : <option key={-1} value=''>
                                        Clima no definido
                                    </option>}
                                </select>
                                <label
                                    htmlFor="precio"
                                    className="text-sm text-gray-500 whitespace-nowrap"
                                >
                                    centigrados
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <select
                                {...register("categoriaId", { required: true })}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    {t("propiedadForm.selectCategory")}
                                </option>
                                {categories ? (
                                    Object.values(categories).map((categoria) => (
                                        <option key={categoria.id} value={categoria.id}>
                                            {categoria.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No existen categorías
                                </option>}
                            </select>
                            <select
                                {...register("tipoPropiedadId", { required: true })}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    Selecciona Tipo Propiedad
                                </option>
                                {tiposPropiedad ? (
                                    Object.values(tiposPropiedad).map((tipo) => (
                                        <option key={tipo.id} value={tipo.id}>
                                            {tipo.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No existen tipos de propiedad
                                </option>}
                            </select>
                        </div>
                    </div>


                    <textarea
                        {...register("description", { required: false })}
                        rows={8}
                        cols={50}
                        name='description'
                        id='description'
                        placeholder={t("propiedadForm.description")}
                        required
                        className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline'></textarea>

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
                                    <div key={media.id} className="relative h-40 rounded-xl overflow-hidden">
                                        {isVideo ? (
                                            <video
                                                src={media.url}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                controls
                                            />
                                        ) : (
                                            <img
                                                src={media.url}
                                                alt="Media propiedad"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeExistingImage(
                                                    existingImages.findIndex((i) => i.id === media.id)
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
                    {newImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {newImages.map((file, index) => {
                                const url = URL.createObjectURL(file);
                                const isVideo = file.type.startsWith("video");

                                return (
                                    <div
                                        key={`${file.name}-${index}`}
                                        className="relative h-40 rounded-xl overflow-hidden"
                                    >
                                        {isVideo ? (
                                            <video
                                                src={url}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                muted
                                                controls
                                            />
                                        ) : (
                                            <Image
                                                src={url}
                                                alt="Nueva imagen"
                                                fill
                                                className="object-cover"
                                                onLoad={() => URL.revokeObjectURL(url)}
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
                                );
                            })}
                        </div>
                    )}


                    <button className="bg-primary text-white px-6 py-3 rounded-full">
                        Guardar
                    </button>
                </form>
            </div>
        </>
    );
};
