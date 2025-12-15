"use client";

import { useForm } from "react-hook-form";
import { Propiedad, PropiedadImage as PropiedadWithImage } from "@/interface/propiedad.interface";
import { createUpdatePropiedad } from "@/actions/propiedad/create-update-propiedad";
import { useRouter } from 'next/navigation';
import { Categoria, Ciudad } from "@/interface";
import { useTranslation } from "react-i18next";
import HeroSub from "@/components/shared/HeroSub";
import { useSession } from "next-auth/react";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
    propiedad: Partial<Propiedad> & { images?: string[] };
    categories: Categoria[];
    tiposPropiedad: TipoPropiedad[];
    ciudades: Ciudad[];
}

interface FormInputs {
    id: string
    title: string
    slug: string
    description: string
    apto: string
    precio: number
    metros: number
    altura: number
    address: string
    geoLink: string
    esPrincipal: boolean
    fechaCreacion: Date

    ciudadId?: string;
    rentaVenta?: string;
    temperatura?: string;

    categoriaId: string
    tipoPropiedadId: string

    userId: string
    images?: FileList;
    //amenities: string[];
}
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

export const PropiedadForm = ({
    propiedad,
    categories = [],
    tiposPropiedad = [],
}: Props) => {
    const { data: session } = useSession();
    const router = useRouter();
    const { t } = useTranslation();

    const {
        handleSubmit,
        register,
        setValue,
        watch,
    } = useForm<FormInputs>({
        defaultValues: {
            ...propiedad,
            precio: propiedad.precio ?? undefined,
            temperatura: propiedad.temperatura ?? undefined,
            images: undefined
        }
    });

    // 🔥 estados
    const [existingImages, setExistingImages] = useState<string[]>(propiedad.images ?? []);
    const [newImages, setNewImages] = useState<File[]>([]);

    const watchedImages = watch("images");

    // sync nuevas imágenes
    useEffect(() => {
        if (!watchedImages) return;
        setNewImages(Array.from(watchedImages));
    }, [watchedImages]);

    // ❌ eliminar imagen existente
    const removeExistingImage = (index: number) => {
        setExistingImages(prev => prev.filter((_, i) => i !== index));
    };

    // ❌ eliminar imagen nueva
    const removeNewImage = (index: number) => {
        const updated = newImages.filter((_, i) => i !== index);
        setNewImages(updated);

        const dt = new DataTransfer();
        updated.forEach(file => dt.items.add(file));
        setValue("images", dt.files);
    };

    const onSubmit = async (data: FormInputs) => {
        const formData = new FormData();

        const { images, ...propiedadToSave } = data;

        if (propiedad && propiedad.id) {
            formData.append("id", String(propiedad.id ?? ""));
        }

        formData.append("title", propiedadToSave.title);//
        formData.append("slug", propiedadToSave.title);
        formData.append("description", propiedadToSave.description);
        formData.append("apto", propiedadToSave.apto);
        formData.append("precio", propiedadToSave.precio?.toString());//
        formData.append("metros", propiedadToSave.metros?.toString());//
        formData.append("altura", propiedadToSave.altura?.toString());//
        formData.append("address", propiedadToSave.address);//
        formData.append("geoLink", propiedadToSave.geoLink);//
        //formData.append("esPrincipal", String(propiedadToSave.esPrincipal));
        formData.append("esPrincipal", String(false));
        formData.append("categoriaId", propiedadToSave.categoriaId);
        formData.append("tipoPropiedadId", propiedadToSave.tipoPropiedadId);
        //formData.append("amenities", propiedadToSave.amenities.toString());
        formData.append("userId", session?.user?.id || '');

        //formData.append("ubicacion", propiedadToSave.tipoPropiedadId);
        if (propiedadToSave.rentaVenta !== undefined) {
            formData.append("rentaVenta", propiedadToSave.rentaVenta);
        }
        if (propiedadToSave.temperatura !== undefined) {
            formData.append("temperatura", propiedadToSave.temperatura);
        }
        if (propiedadToSave.ciudadId !== undefined) {
            formData.append("ciudadId", propiedadToSave.ciudadId);
        }

        // 🔥 imágenes existentes que se conservan
        formData.append("existingImages", JSON.stringify(existingImages));

        // 🔥 nuevas imágenes
        if (data.images) {
            Array.from(data.images).forEach(file => {
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

    return (
        <>
            <HeroSub
                title="Property Maintenance."
                description="Property Management: Control each property's data from one place."
                badge="Properties"
            />

            <div className="mx-auto w-full lg:w-2/3 xl:w-1/2 px-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <div className='flex flex-col gap-8 mt-5'>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <input
                                {...register("title", { required: true })}
                                type='text'
                                name='title'
                                id='title'
                                autoComplete='Nombre'
                                placeholder={t("propiedadForm.title")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />

                            <input
                                {...register("precio", { required: true })}
                                type='number'
                                name='precio'
                                id='precio'
                                autoComplete='off'
                                placeholder={t("propiedadForm.price")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            />
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

                    <input
                        type="file"
                        multiple
                        {...register("images")}
                        className="border p-2"
                    />

                    {/* 🔥 EXISTENTES */}
                    {existingImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {existingImages.map((img, index) => (
                                <div key={img} className="relative group h-40">
                                    <img src={img} className="w-full h-full object-cover rounded-xl" />
                                    <button
                                        type="button"
                                        onClick={() => removeExistingImage(index)}
                                        className="absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 🔥 NUEVAS */}
                    {newImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {newImages.map((file, index) => {
                                const url = URL.createObjectURL(file);
                                return (
                                    <div key={index} className="relative group h-40">
                                        <Image
                                            src={url}
                                            alt="Property image"
                                            fill
                                            className="w-full h-full object-cover rounded-xl"
                                            onLoad={() => URL.revokeObjectURL(url)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeNewImage(index)}
                                            className="absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <button className="bg-primary text-white px-6 py-3 rounded-full">
                        {t("propiedadForm.submitButton")}
                    </button>
                </form>
            </div>
        </>
    );
};
