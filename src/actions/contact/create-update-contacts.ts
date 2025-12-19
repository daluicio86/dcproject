"use server";

import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
import { Contacto } from "@prisma/client";
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const contactSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string(),
  telefono: z.string(), // si llega como string
  email: z.string().email(),
  mensaje: z.string(),
});

export const createUpdateContact = async (formData: FormData) => {
  try {
    const data = Object.fromEntries(formData);
    const parsedData = contactSchema.parse(data);

    let newContact: Contacto;
    if (parsedData.id && parsedData.id !== "") {
      // Update existing contact
      newContact = await prisma.contacto.update({
        where: { id: parsedData.id },
        data: {
          name: parsedData.name,
          telefono: parsedData.telefono,
          email: parsedData.email,
          mensaje: parsedData.mensaje,
        },
      });
    } else {
      // Create new contact
      newContact = await prisma.contacto.create({
        data: {
          name: parsedData.name,
          telefono: parsedData.telefono,
          email: parsedData.email,
          mensaje: parsedData.mensaje,
        },
      });
    }

    revalidatePath("/admin/contacts");
    return { ok: true, contact: newContact };
  } catch (error: any) {
    console.error("Error en createUpdateContact:", error.message, error);
    return { ok: false, contact: null };
  }
};
