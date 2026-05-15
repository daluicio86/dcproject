<<<<<<< HEAD
﻿"use client";
=======
"use client";
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921

import { useForm } from "react-hook-form";
import { Contacto } from "@/interface/contacto.interface";
import { createUpdateContact } from "@/actions/contact/create-update-contacts";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Props {
  contact: Partial<Contacto> | null;
}

interface FormContactInputs {
  id: number;
  name: string | null;
  telefono: string | null;
  email: string;
  mensaje: string | null;
  fechaCreacion: Date;
}

export const ContactForm = ({ contact }: Props) => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const { handleSubmit, register } = useForm<FormContactInputs>({
    defaultValues: {
      ...contact,
    },
  });

  const onSubmit = async (data: FormContactInputs) => {
    const formData = new FormData();

    if (contact && contact.id) {
      formData.append("id", String(contact.id ?? ""));
    }

    formData.append("name", data.name ?? "");
    formData.append("telefono", data.telefono ?? "");
    formData.append("email", data.email);
    formData.append("mensaje", data.mensaje ?? "");

    const { ok } = await createUpdateContact(formData);

    if (!ok) {
      alert(lang === "es" ? "Contacto no se pudo actualizar" : lang === "de" ? "Kontakt konnte nicht aktualisiert werden" : "Contact could not be updated");
      return;
    }

    router.refresh();
    alert(lang === "es" ? "Contacto actualizado correctamente" : lang === "de" ? "Kontakt erfolgreich aktualisiert" : "Contact updated successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>{lang === "es" ? "Nombre" : lang === "de" ? "Name" : "Name"}</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("name", { required: true })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>{lang === "es" ? "Teléfono" : lang === "de" ? "Telefon" : "Phone"}</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("telefono", { required: true })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>{lang === "es" ? "Mensaje" : lang === "de" ? "Nachricht" : "Message"}</span>
          <textarea rows={5} className="p-2 border rounded-md bg-gray-200" {...register("mensaje", { required: true })}></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>{lang === "es" ? "Email" : lang === "de" ? "E-Mail" : "Email"}</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("email", { required: true })} />
        </div>

        <button className="btn-primary w-full">{lang === "es" ? "Guardar" : lang === "de" ? "Speichern" : "Save"}</button>
      </div>
    </form>
  );
};
=======
import { useRouter } from 'next/navigation';

interface Props {
    contact: Partial<Contacto> | null;
}

interface FormContactInputs {
    id: number
    name: string | null
    telefono: string | null
    email: string
    mensaje: string | null
    fechaCreacion: Date
}

export const ContactForm = ({ contact }: Props) => {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { isValid },
    } = useForm<FormContactInputs>({
        defaultValues: {
            ...contact
        },
    });

    const onSubmit = async (data: FormContactInputs) => {
        const formData = new FormData();

        const { ...contactToSave } = data;

        if (contact && contact.id) {
            formData.append("id", String(contact.id ?? ""));
        }

        // Convertir null a string vacío
        formData.append("name", contactToSave.name ?? "");
        formData.append("telefono", contactToSave.telefono ?? "");
        formData.append("email", contactToSave.email);
        formData.append("mensaje", contactToSave.mensaje ?? "");

        const { ok, contact: updatedContact } = await createUpdateContact(formData);

        if (!ok) {
            alert('Contacto no se pudo actualizar');
            return;
        }

        router.refresh();
        alert('Contacto actualizado correctamente');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3"
        >
            {/* Textos */}
            <div className="w-full">
                <div className="flex flex-col mb-2">
                    <span>Nombre</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("name", { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Telefono</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("telefono", { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Mensaje</span>
                    <textarea
                        rows={5}
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("mensaje", { required: true })}
                    ></textarea>
                </div>

                <div className="flex flex-col mb-2">
                    <span>Email</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("email", { required: true })}
                    />
                </div>
                <button className="btn-primary w-full">Guardar</button>
            </div>
        </form>
    );
};
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
