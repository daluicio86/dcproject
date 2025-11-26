"use client";

import { useForm } from "react-hook-form";
import { redirect, useRouter } from 'next/navigation';
import { useTranslation } from "react-i18next";
import HeroSub from "@/components/shared/HeroSub";
import { useSession } from "next-auth/react";
import { clsx } from "clsx";
import { Servicio, ServicioImage as ServicioWithImage } from "@/interface/servicio.interface";
import { createUpdateServicio } from "@/actions/servicio/create-update-servicio";
import { Ciudad } from "@/interface";

//import { Servicio } from "@/interface/servicio.interface";

interface Props {
    servicio: Partial<Servicio> & { ServicioImage?: ServicioWithImage[] };
    ciudades: Partial<Ciudad>[];
}

interface FormInputs {
    id: string
    nombre: string
    descripcion?: string;
    images?: FileList;
    ciudadId: string;
}

export const ServicioForm = ({ servicio, ciudades }: Props) => {
    const { data: session } = useSession();
    const router = useRouter();
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormInputs>({
        defaultValues: {
            ...servicio,
            ciudadId: servicio?.ciudadId ?? '',
            nombre: servicio?.nombre ?? '',
            descripcion: servicio?.descripcion ?? '',
            images: undefined
        },
    });

    const onSubmit = async (data: FormInputs) => {
        const formData = new FormData();

        const { images, ...servicioToSave } = data;

        if (servicio && servicio.id) {
            formData.append("id", String(servicio.id ?? ""));
        }

        formData.append("nombre", servicioToSave.nombre);
        formData.append("ciudadId", servicioToSave.ciudadId);
        formData.append("descripcion", servicioToSave.descripcion ?? "");

        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
        }

        const { ok, servicio: updatedServicio } = await createUpdateServicio(formData);
        if (!ok) {
            alert('Servicio no se pudo actualizar');
            return;
        }

        //router.replace(`/admin/servicio/${ updatedContact?.slug }`)

        router.push('/admin/servicios');
        alert('Servicio actualizado correctamente');
    };

    if (!session || session.user?.role !== 'admin') {
        redirect('/servicios');
    }

    return (

        <>
            <HeroSub
                title="Service Maintenance."
                description="Service Management: Control each service's data from one place."
                badge="Services"
            />
            <div className="text-center bg-cover pb-20 relative overflow-x-hidden">
                <div className='justify-center mx-auto w-full lg:w-2/3 xl:w-1/2 px-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-8 mt-5'>
                            <div className='flex flex-col gap-6'>
                                <select
                                    {...register("ciudadId", { required: true })}
                                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full
                                     outline-primary focus:outline w-full"
                                >
                                    <option key={-1} value="">
                                        {t("selectCiudad")}
                                    </option>
                                    {ciudades ? Object.values(ciudades).map((ciudad) => (
                                        <option key={ciudad.nombre} value={ciudad.id}>
                                            {ciudad.nombre}
                                        </option>
                                    )) : null}
                                </select>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-6'>
                                <input
                                    {...register("nombre", { required: true })}
                                    type='text'
                                    name='nombre'
                                    id='nombre'
                                    autoComplete='Nombre'
                                    placeholder={t("servicioForm.nombre")}
                                    required
                                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <textarea
                                    {...register("descripcion", { required: false })}
                                    rows={8}
                                    cols={50}
                                    name='descripcion'
                                    id='descripcion'
                                    placeholder={t("propiedadForm.description")}
                                    required
                                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline'></textarea>

                            </div>
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
                                {t("servicioForm.submitButton")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
