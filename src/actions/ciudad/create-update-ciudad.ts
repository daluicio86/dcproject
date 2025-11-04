"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Ciudad } from "@prisma/client";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const ciudadSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(500),
  url: z.string().optional().nullable(),
  removeImage: z.string().optional().nullable(), // 🧩 nuevo campo
});

export const createUpdateCiudad = async (formData: FormData) => {
  const id = formData.get("id")?.toString() ?? null;
  const nombre = formData.get("nombre")?.toString().trim() ?? "";
  const descripcion = formData.get("descripcion")?.toString().trim() ?? "";
  const fileList = formData.getAll("url") as File[];
  const file = fileList[0];
  const removeImage = formData.get("removeImage")?.toString() ?? "false";
  const serviciosRaw = formData.get("servicios")?.toString() ?? "";

  const ciudadData = { id, nombre, descripcion,url: null as string | null, removeImage };

  const parsed = ciudadSchema.safeParse(ciudadData);
  if (!parsed.success) {
    console.log("Error de validación:", parsed.error);
    return { ok: false, message: "Datos inválidos" };
  }

  try {
    let currentCiudad: Ciudad | null = null;
    if (id) {
      currentCiudad = await prisma.ciudad.findUnique({ where: { id } });
    }

    // ⚙️ Lógica de imagen
    if (removeImage === "true") {
      // 🧨 Eliminar imagen de Cloudinary si existía
      if (currentCiudad?.url) await deleteImage(currentCiudad.url);
      ciudadData.url = null;
    } else if (file && file.size > 0) {
      // 🆕 Subir nueva imagen
      ciudadData.url = await uploadImage(file);
      // ❌ Borrar la anterior si se reemplaza
      if (currentCiudad?.url) await deleteImage(currentCiudad.url);
    } else if (currentCiudad?.url) {
      // 🔁 Mantener imagen anterior
      ciudadData.url = currentCiudad.url;
    }

    console.log("Ciudad lista para guardar:", serviciosRaw);

    const prismaTx = await prisma.$transaction(async (tx) => {
      let ciudad: Ciudad;

      if (id) {
        ciudad = await tx.ciudad.update({
          where: { id },
          data: {
            nombre: ciudadData.nombre,
            descripcion: ciudadData.descripcion,
            url: ciudadData.url,
            servicios: serviciosRaw
              ? {
                  connect: serviciosRaw.split(",").map((id) => ({ id })),
                }
              : undefined,
          },
          include: { servicios: true, propiedades: true},
        });
      } else {
        ciudad = await tx.ciudad.create({
          data: {
            nombre: ciudadData.nombre,
            descripcion: ciudadData.descripcion,
            url: ciudadData.url,
            servicios: serviciosRaw
              ? {
                  connect: serviciosRaw.split(",").map((id) => ({ id })),
                }
              : undefined,
          },
          include: { servicios: true, propiedades: true},
        });
      }

      return { ciudad };
    });

    revalidatePath("/admin/ciudad");
    revalidatePath(`/admin/ciudad/${ciudadData.nombre}`);
    revalidatePath(`/ciudad/${ciudadData.nombre}`);

    return { ok: true, ciudad: prismaTx.ciudad };
  } catch (error) {
    console.error("Error al guardar ciudad:", error);
    return { ok: false, message: "No se pudo guardar la ciudad." };
  }
};

const uploadImage = async (image: File) => {
  try {
    const buffer = await image.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:${image.type};base64,${base64Image}`,
      { folder: "ciudades" }
    );

    return result.secure_url;
  } catch (error) {
    console.error("Error subiendo imagen:", error);
    return null;
  }
};

// 🧹 Eliminar imagen de Cloudinary
const deleteImage = async (url: string) => {
  try {
    const publicId = url.split("/").slice(-1)[0].split(".")[0];
    await cloudinary.uploader.destroy(`ciudades/${publicId}`);
    console.log(`🗑️ Imagen eliminada: ${publicId}`);
  } catch (error) {
    console.error("Error eliminando imagen:", error);
  }
};
