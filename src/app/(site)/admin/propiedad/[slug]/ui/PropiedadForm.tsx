"use client";

import { useForm } from "react-hook-form";
import { Propiedad, PropiedadImage as PropiedadWithImage } from "@/interface/propiedad.interface";
import { createUpdatePropiedad } from "@/actions/propiedad/create-update-propiedad";
import { useRouter } from 'next/navigation';
import {  Categoria, Ciudad } from "@/interface";
import { useTranslation } from "react-i18next";
import HeroSub from "@/components/shared/HeroSub";
import { useSession } from "next-auth/react";
//import { clsx } from "clsx";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";

interface Props {
    propiedad: Partial<Propiedad> & { PropiedadImage?: PropiedadWithImage[] };
    categories: Categoria[];
    //amenities: Amenities[];
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
    { id: "1", name: "Seco 10.20°" },
    { id: "2", name: "Seco 10.25°" },
    { id: "3", name: "SubTropical 10.30°" },
    { id: "4", name: "Húmedo 60%" },
];

// Add this enum definition or import it from the correct file if it already exists
/*enum TipoPropiedad {
    Habitacion = "habitacion",
    Casa = "casa",
    Loft = "loft",
    Hacienda = "hacienda"
}

const tiposCategoria = [
    { value: TipoPropiedad.Habitacion, text: "Habitación", selected: false },
    { value: TipoPropiedad.Casa, text: "Casa", selected: false },
    { value: TipoPropiedad.Loft, text: "Loft", selected: false },
    { value: TipoPropiedad.Hacienda, text: "Hacienda", selected: false },
];*/

//export const PropiedadForm = ({ propiedad, categories, amenities, tiposPropiedad, ciudades }: Props) => {

export const PropiedadForm = ({
    propiedad,
    categories = [],
    //amenities = [],
    tiposPropiedad = [],
    ciudades = []
}: Props) => {
    const { data: session } = useSession();
    const router = useRouter();
    const { t } = useTranslation();

    const ciudadesArray = Object.values(ciudades);
    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormInputs>({
        defaultValues: {
            ...propiedad,
            precio: propiedad?.precio ?? undefined,
            images: undefined
        } as FormInputs,
    });

    /*const slugify = (text: string) => {
        return text
            .toString()
            .normalize("NFD")                   // separa acentos
            .replace(/[\u0300-\u036f]/g, "")    // quita acentos
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")               // espacios → guiones
            .replace(/[^a-z0-9-]/g, "");        // quita símbolos raros
    };*/

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

        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
        }

        const { ok, propiedad: updatedPropiedad } = await createUpdatePropiedad(formData);
        if (!ok) {
            alert('Propiedad no se pudo actualizar');
            return;
        }

        //router.replace(`/admin/propiedad/${ updatedContact?.slug }`)

        router.push('/admin/propiedads');
        alert('Propiedad actualizado correctamente');
    };

    //watch("amenities");

    /*const onAmenityChanged = (amenity: string) => {
        const amenities = new Set(getValues("amenities"));
        if (amenities.has(amenity)) {
            amenities.delete(amenity);
        } else {
            amenities.add(amenity);
        }
        setValue("amenities", Array.from(amenities));
    };*/

    return (

        <>
            <HeroSub
                title="Property Maintenance."
                description="Property Management: Control each property's data from one place."
                badge="Properties"
            />
            <div className="text-center bg-cover pb-20 relative overflow-x-hidden">
                <div className='justify-center mx-auto w-full lg:w-2/3 xl:w-1/2 px-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <select
                                    {...register("ciudadId", { required: true })}
                                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                                >
                                    <option key={-1} value=''>
                                        {t("selectCiudad")}
                                    </option>
                                    {ciudadesArray.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.nombre}
                                        </option>
                                    ))}

                                </select>
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
                            {/*<div className="flex flex-col gap-4">
                                <span className="text-lg font-semibold">Servicios</span>

                                <div className="flex flex-wrap justify-between">
                                    {Object.values(amenities ?? {}).map((amenity) => (
                                        <div
                                            key={amenity.id}
                                            onClick={() => onAmenityChanged(amenity.id)}
                                            className={clsx(
                                                "text-black/80 dark:text-white/80 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 mb-2 hover:cursor-pointer",
                                                {
                                                    "bg-blue-500 text-white": Array.isArray(getValues("amenities")) && getValues("amenities").includes(amenity.id),
                                                }
                                            )}
                                        >
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>*/}


                            <textarea
                                {...register("description", { required: false })}
                                rows={8}
                                cols={50}
                                name='description'
                                id='description'
                                placeholder={t("propiedadForm.description")}
                                required
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline'></textarea>

                            <div className="flex flex-col gap-4">
                                <span className="text-lg font-semibold">Fotos</span>
                                <input
                                    type="file"
                                    {...register('images')}
                                    multiple
                                    className="p-2 border rounded-md bg-gray-200"
                                    accept="image/png, image/jpeg, image/avif"
                                />
                            </div>


                            <button className='px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300'>
                                {t("propiedadForm.submitButton")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
