"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Propiedad } from "@prisma/client";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const propiedadSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  address: z.string(),
  description: z.string(),
  apto: z.string(),
  geoLink: z.string(),
  precio: z.coerce.number().min(0),
  metros: z.coerce.number().min(0),
  altura: z.coerce.number().min(0),
  categoriaId: z.string(),
  tipoPropiedadId: z.string(),
  ciudadId: z.string().optional().nullable(), // <-- Ahora es opcional
  rentaVenta: z.string(),
  temperatura: z.string(),
});

export const createUpdatePropiedad = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const propiedadParsed = propiedadSchema.safeParse(data);
  if (!propiedadParsed.success) {
    console.log(propiedadParsed.error);
    return { ok: false };
  }

  const propiedad = propiedadParsed.data;
  propiedad.slug = propiedad.slug.toLowerCase().replace(/ /g, "-").trim();

  const { id, ...rest } = propiedad;

  // 🔥 imágenes a eliminar desde el frontend
  const imagesToDelete = formData.getAll("imagesToDelete") as string[];

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let propiedad: Propiedad;

      if (id) {
        const { categoriaId, tipoPropiedadId, ciudadId, ...propiedadData } = rest;

        propiedad = await tx.propiedad.update({
          where: { id },
          data: {
            ...propiedadData,
            categoria: { connect: { id: categoriaId } },
            tipoPropiedad: { connect: { id: tipoPropiedadId } },
            ciudad: { connect: { id: ciudadId } },
          },
        });
      } else {
        // Crear
        const { categoriaId, tipoPropiedadId, ciudadId, ...propiedadData } = rest;

        propiedad = await tx.propiedad.create({
          data: {
            ...propiedadData,
            categoria: { connect: { id: categoriaId } },
            tipoPropiedad: { connect: { id: tipoPropiedadId } },
            ciudad: { connect: { id: ciudadId } },
          },
        });
      }

      /* ------------------------------------------------------------------
          🔥 ELIMINAR IMÁGENES SELECCIONADAS
      ------------------------------------------------------------------ */

      if (imagesToDelete.length > 0) {
        const imagesDB = await tx.propiedadImage.findMany({
          where: { id: { in: imagesToDelete } },
        });

        // 1. Eliminar de Cloudinary
        for (const img of imagesDB) {
          // extraer public_id desde la URL
          const publicId = img.url.split("/").pop()?.split(".")[0];
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }
        }

        // 2. Eliminar en Prisma
        await tx.propiedadImage.deleteMany({
          where: { id: { in: imagesToDelete } },
        });
      }

      /* ------------------------------------------------------------------
          🔥 SUBIR IMÁGENES NUEVAS
      ------------------------------------------------------------------ */

      const newImages = formData.getAll("images") as File[];

      if (newImages && newImages.length > 0) {
        const uploaded = await uploadImages(newImages);

        if (!uploaded) throw new Error("Error subiendo imágenes");

        await tx.propiedadImage.createMany({
          data: uploaded.map((url) => ({
            url,
            propiedadId: propiedad.id,
          })),
        });
      }

      return { propiedad };
    });

    // Revalidate paths
    revalidatePath("/admin/propiedads");
    revalidatePath(`/admin/propiedad/${propiedad.slug}`);
    revalidatePath(`/propiedad/${propiedad.slug}`);

    return { ok: true, propiedad: prismaTx.propiedad };

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Revisar los logs, no se pudo actualizar/crear",
    };
  }
};


// SUBIDA DE IMÁGENES
const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");

        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${base64Image}`
        );

        return result.secure_url;
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages.filter(Boolean) as string[];
  } catch (error) {
    console.log(error);
    return [];
  }
};
