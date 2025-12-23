"use server";

import { prisma } from "@/lib/prisma";
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
  tipoMedida: z.string(),
  altura: z.coerce.number().min(0),

  categoriaId: z.string(),
  tipoPropiedadId: z.string(),
  ciudadId: z.string().optional(),
  rentaVenta: z.string(),
  temperatura: z.string(),
});

/* ------------------------------------------------------------------
   TYPES
------------------------------------------------------------------ */
type UploadedMedia = {
  url: string;
  type: "image" | "video";
};

/* ------------------------------------------------------------------
   ACTION
------------------------------------------------------------------ */
export const createUpdatePropiedad = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const parsed = propiedadSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    return { ok: false };
  }

  const propiedadData = parsed.data;

  const slug = propiedadData.slug
    .toLowerCase()
    .replace(/%20/g, "-")
    .replace(/\s+/g, "-")
    .trim();

  const { id, categoriaId, tipoPropiedadId, ciudadId, ...rest } = propiedadData;

  const imagesToDelete = formData.getAll("imagesToDelete") as string[];
  const newFiles = formData.getAll("images") as File[];

  try {
    /* -------------------------------------------------------------
       1️⃣ OBTENER MEDIA A ELIMINAR (ANTES)
    ------------------------------------------------------------- */
    let mediaDBToDelete: { id: number; url: string }[] = [];

    if (imagesToDelete.length > 0) {
      mediaDBToDelete = await prisma.propiedadImage.findMany({
        where: { id: { in: imagesToDelete.map(Number) } },
        select: { id: true, url: true },
      });
    }

    /* -------------------------------------------------------------
       2️⃣ SUBIR MEDIA NUEVA (FUERA DE TRANSACCIÓN)
    ------------------------------------------------------------- */
    let uploadedMedia: UploadedMedia[] = [];

    if (newFiles.length > 0) {
      uploadedMedia = await uploadMedia(newFiles);
    }

    /* -------------------------------------------------------------
       3️⃣ TRANSACCIÓN DB
    ------------------------------------------------------------- */
    const propiedadTx = await prisma.$transaction(async (tx) => {
      let propiedad: Propiedad;

      /* -------- VALIDAR CIUDAD -------- */
      let ciudadExiste: { id: string } | null = null;

      if (ciudadId) {
        ciudadExiste = await tx.ciudad.findUnique({
          where: { id: ciudadId },
          select: { id: true },
        });
      }

      /* ---------------- UPDATE ---------------- */
      if (id) {
        const dataToUpdate: any = {
          ...rest,
          slug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadExiste) {
          dataToUpdate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.update({
          where: { id },
          data: dataToUpdate,
        });
      } else {
        /* ---------------- CREATE ---------------- */
        const dataToCreate: any = {
          ...rest,
          slug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadExiste) {
          dataToCreate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.create({
          data: dataToCreate,
        });
      }

      /* ---------------- ELIMINAR MEDIA (DB) ---------------- */
      if (imagesToDelete.length > 0) {
        await tx.propiedadImage.deleteMany({
          where: { id: { in: imagesToDelete.map(Number) } },
        });
      }

      /* ---------------- GUARDAR MEDIA (DB) ---------------- */
      if (uploadedMedia.length > 0) {
        await tx.propiedadImage.createMany({
          data: uploadedMedia.map((media) => ({
            url: media.url,
            type: media.type,
            propiedadId: propiedad.id,
          })),
        });
      }

      return propiedad;
    });

    /* -------------------------------------------------------------
       4️⃣ BORRAR MEDIA DE CLOUDINARY
    ------------------------------------------------------------- */
    if (mediaDBToDelete.length > 0) {
      await Promise.all(
        mediaDBToDelete.map(async (media) => {
          const publicId = media.url.split("/").pop()?.split(".")[0];
          if (!publicId) return;

          try {
            await cloudinary.uploader.destroy(publicId, {
              resource_type: "auto",
            });
          } catch (error) {
            console.error(`Error borrando ${publicId}`, error);
          }
        })
      );
    }

    /* -------------------------------------------------------------
       5️⃣ REVALIDACIÓN
    ------------------------------------------------------------- */
    revalidatePath("/admin/propiedads");
    revalidatePath(`/admin/propiedad/${slug}`);
    revalidatePath(`/propiedad/${slug}`);

    return { ok: true, propiedad: propiedadTx };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "No se pudo crear/actualizar la propiedad",
    };
  }
};

/* ------------------------------------------------------------------
   SUBIDA DE MEDIA (IMÁGENES + VIDEOS)
------------------------------------------------------------------ */
import streamifier from "streamifier";

/* ------------------------------------------------------------------
   SUBIDA DE MEDIA (IMÁGENES + VIDEOS)
------------------------------------------------------------------ */
const uploadMedia = async (files: File[]): Promise<UploadedMedia[]> => {
  const uploads: UploadedMedia[] = [];

  for (const file of files) {
    const isVideo = file.type.startsWith("video");

    if (file.size > 40 * 1024 * 1024) {
      throw new Error("El archivo es demasiado grande");
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await cloudinary.uploader.upload(
      buffer as any,
      {
        resource_type: isVideo ? "video" : "image",
        folder: "propiedades",
        chunk_size: 6 * 1024 * 1024,
      }
    );

    uploads.push({
      url: result.secure_url,
      type: isVideo ? "video" : "image",
    });
  }

  return uploads;
};

