"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Servicio } from "@prisma/client";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const servicioSchema = z.object({
  id: z.string().optional().nullable(),
  nombre: z.string().min(3).max(255),
  descripcion: z.string().min(3).max(5000).optional().nullable(),
  ciudadId: z.string().optional().nullable(),
});

export const createUpdateServicio = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const servicioParsed = servicioSchema.safeParse(data);

  if (!servicioParsed.success) {
    console.log(servicioParsed.error);
    return { ok: false };
  }

  const servicio = servicioParsed.data;
    const { id, ciudadId, ...rest } = servicio;

  try {
  const prismaTx = await prisma.$transaction(async (tx) => {
    let servicio: Servicio;

    if (id) {
      // Actualizar
      servicio = await prisma.servicio.update({
        where: { id },
        data: {
          ...(({ ...other }) => other)(rest),
          ...(ciudadId ? { ciudad: { connect: { id: ciudadId } } } : {}),
        },
      });
    } else {
      // Crear
      if (!ciudadId) {
        throw new Error("ciudadId es requerido para crear un servicio");
      }
      servicio = await prisma.servicio.create({
        data: {
          // Remove categoriaId, tipoServicioId, and amenities from rest
          ...(({ ...other }) => other)(rest),
          ciudad: { connect: { id: ciudadId } },
        },
      });
    }

    // Proceso de carga y guardado de imagenes
    // Recorrer las imagenes y guardarlas
    if (formData.getAll("images")) {
      // [https://url.jpg, https://url.jpg]
      const images = await uploadImages(formData.getAll("images") as File[]);
      if (!images) {
        throw new Error("No se pudo cargar las imágenes, rollingback");
      }

      await prisma.servicioImage.createMany({
        data: images.map((image) => ({
          url: image!,
          servicioId: servicio.id,
        })),
      });
    }

    return {
      servicio,
    };
  });

    // Todo: RevalidatePaths
    revalidatePath("/admin/servicios");
    revalidatePath(`/admin/servicio/${servicio.nombre}`);
    revalidatePath(`/servicio/${servicio.nombre}`);

    return {
      ok: true,
      servicio: prismaTx.servicio,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Revisar los logs, no se pudo actualizar/crear",
    };
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");

        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64Image}`)
          .then((r) => r.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages;
  } catch (error) {
    console.log(error);
    return null;
  }
};
