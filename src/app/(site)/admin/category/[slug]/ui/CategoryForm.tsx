"use client";

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Categoria } from "@prisma/client";
import { createUpdateCategory } from "@/actions/categories/create-update-category";
import { useTranslation } from "react-i18next";

interface Props {
    title: string;
    item: Partial<Categoria> | null;
}

interface FormCategoryInputs {
    id?: string
    name?: string
    tipo: number
    estado?: boolean
}

const tipoCategoria = [
    { value: "1", text: "General", selected: false },
];


export const CategoryForm = ({ title, item }: Props) => {

    const router = useRouter();
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormCategoryInputs>({
        defaultValues: {
            ...item
        },
    });

    const onSubmit = async (data: FormCategoryInputs) => {
        const formData = new FormData();

        const { ...categoryToSave } = data;

        if (item && item.id) {
            formData.append("id", String(item.id ?? ""));
        }

        formData.append("name", categoryToSave.name ?? "");
        formData.append("tipo", String(categoryToSave.tipo ?? ""));
        formData.append("estado", 'true');


        const { ok, categoria: updatedCategory } = await createUpdateCategory(formData);

        if (!ok) {
            alert('Categoría no se pudo actualizar');
            return;
        }

        router.replace(`/admin/category`)
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
                    <select
                        {...register("tipo", { required: true })}
                        className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full
                                     outline-primary focus:outline w-full"
                    >
                        <option key={-1} value="">
                            Seleccionar Tipo
                        </option>
                        {tipoCategoria?.map((categoria) => (
                            <option key={categoria.value} value={categoria.value}>
                                {categoria.text}
                            </option>
                        ))}
                    </select>

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
