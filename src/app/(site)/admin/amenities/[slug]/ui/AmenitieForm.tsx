"use client";

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { Amenities } from "@/interface/amenitie.interface";
import { createUpdateAmenitie } from "@/actions/amenitie/create-update-amenitie";

interface Props {
    title: string;
    item: Partial<Amenities> | null;
}

interface FormAmenitieInputs {
    id?: string
    name?: string
    estado?: boolean
}



export const AmenitieForm = ({ title, item }: Props) => {

    const router = useRouter();
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormAmenitieInputs>({
        defaultValues: {
            ...item
        },
    });

    const onSubmit = async (data: FormAmenitieInputs) => {
        const formData = new FormData();

        const { ...serviceToSave } = data;

        if (item && item.id) {
            formData.append("id", String(item.id ?? ""));
        }

        formData.append("name", serviceToSave.name ?? "");
        formData.append("estado", 'true');


        const { ok, amenitie: updatedAmenitie } = await createUpdateAmenitie(formData);

        if (!ok) {
            alert('Amenitie no se pudo actualizar');
            return;
        }

        router.replace(`/admin/amenities`)
        /*router.refresh();
        alert('Contacto actualizado correctamente');*/
    };

    return (
        <div className="flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md"
            >
                <div className="flex flex-col lg:flex-row gap-6">
                    <input
                        type="text"
                        id="name"
                        placeholder="Nombre"
                        required
                        {...register("name", { required: true })}
                        className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                    />

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
