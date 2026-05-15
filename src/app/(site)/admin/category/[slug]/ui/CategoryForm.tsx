<<<<<<< HEAD
﻿"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
=======
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
import { Categoria } from "@prisma/client";
import { createUpdateCategory } from "@/actions/categories/create-update-category";
import { useTranslation } from "react-i18next";

interface Props {
<<<<<<< HEAD
  title: string;
  item: Partial<Categoria> | null;
}

interface FormCategoryInputs {
  id?: string;
  name?: string;
  tipo: number;
  estado?: boolean;
}

const tipoCategoria = [{ value: "1", text: "General", selected: false }];

export const CategoryForm = ({ item }: Props) => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const { handleSubmit, register } = useForm<FormCategoryInputs>({ defaultValues: { ...item } });

  const onSubmit = async (data: FormCategoryInputs) => {
    const formData = new FormData();
    if (item && item.id) formData.append("id", String(item.id ?? ""));
    formData.append("name", data.name ?? "");
    formData.append("tipo", String(data.tipo ?? ""));
    formData.append("estado", "true");

    const { ok } = await createUpdateCategory(formData);
    if (!ok) {
      alert(lang === "es" ? "La categoría no se pudo actualizar" : lang === "de" ? "Kategorie konnte nicht aktualisiert werden" : "Category could not be updated");
      return;
    }

    router.replace(`/admin/category`);
  };

  return (
    <div className="flex items-center justify-center px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md">
        <div className="flex flex-col lg:flex-row gap-6">
          <select {...register("tipo", { required: true })} className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full">
            <option key={-1} value="">{lang === "es" ? "Seleccionar tipo" : lang === "de" ? "Typ auswählen" : "Select type"}</option>
            {tipoCategoria.map((categoria) => (
              <option key={categoria.value} value={categoria.value}>{categoria.text}</option>
            ))}
          </select>

          <input type="text" id="name" placeholder={lang === "es" ? "Nombre" : lang === "de" ? "Name" : "Name"} required {...register("name", { required: true })} className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full" />

          <button type="submit" className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full lg:w-fit hover:cursor-pointer hover:bg-dark duration-300">
            {lang === "es" ? "Guardar" : lang === "de" ? "Speichern" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
=======
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
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
};
