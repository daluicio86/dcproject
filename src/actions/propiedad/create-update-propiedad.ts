"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Propiedad } from "@prisma/client";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

/* ------------------------------------------------------------------
   SCHEMA
------------------------------------------------------------------ */
const propiedadSchema = z.object({
  id: z.string().optional(),
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
  ciudadId: z.string().optional(), // 👈 opcional REAL
  rentaVenta: z.string(),
  temperatura: z.string(),
});

/* ------------------------------------------------------------------
   ACTION
------------------------------------------------------------------ */
export const createUpdatePropiedad = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const parsed = propiedadSchema.safeParse(data);
  if (!parsed.success) {
    console.log(parsed.error);
    return { ok: false };
  }

  const propiedadData = parsed.data;

  // 🔥 slug limpio
  const slug = propiedadData.slug
    .toLowerCase()
    .replace(/%20/g, "-")
    .replace(/\s+/g, "-")
    .trim();

  const { id, categoriaId, tipoPropiedadId, ciudadId, ...rest } = propiedadData;

  // 🔥 imágenes a eliminar
  const imagesToDelete = formData.getAll("imagesToDelete") as string[];

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let propiedad: Propiedad;

      /* ---------------- UPDATE ---------------- */
      if (id) {
        const dataToUpdate: any = {
          ...rest,
          slug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadId) {
          dataToUpdate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.update({
          where: { id },
          data: dataToUpdate,
        });
      }

      /* ---------------- CREATE ---------------- */
      else {
        const dataToCreate: any = {
          ...rest,
          slug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadId) {
          dataToCreate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.create({
          data: dataToCreate,
        });
      }

      /* ---------------- ELIMINAR IMÁGENES ---------------- */
      if (imagesToDelete.length > 0) {
        const imagesDB = await tx.propiedadImage.findMany({
          where: { id: { in: imagesToDelete } },
        });

        for (const img of imagesDB) {
          const publicId = img.url.split("/").pop()?.split(".")[0];
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }
        }

        await tx.propiedadImage.deleteMany({
          where: { id: { in: imagesToDelete } },
        });
      }

      /* ---------------- SUBIR IMÁGENES ---------------- */
      const newImages = formData.getAll("images") as File[];

      if (newImages.length > 0) {
        const uploaded = await uploadImages(newImages);

        await tx.propiedadImage.createMany({
          data: uploaded.map((url) => ({
            url,
            propiedadId: propiedad.id,
          })),
        });
      }

      return propiedad;
    });

    revalidatePath("/admin/propiedads");
    revalidatePath(`/admin/propiedad/${slug}`);
    revalidatePath(`/propiedad/${slug}`);

    return { ok: true, propiedad: prismaTx };

  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "No se pudo crear/actualizar la propiedad",
    };
  }
};

/* ------------------------------------------------------------------
   SUBIDA DE IMÁGENES
------------------------------------------------------------------ */
const uploadImages = async (images: File[]) => {
  const uploads = await Promise.all(
    images.map(async (image) => {
      const buffer = await image.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");

      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${base64}`
      );

      return result.secure_url;
    })
  );

  return uploads;
};
