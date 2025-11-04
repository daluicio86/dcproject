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
  precio: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  metros: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  altura: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  categoriaId: z.string(),
  tipoPropiedadId: z.string(),
  ciudadId: z.string(),
  rentaVenta: z.string(),
  temperatura: z.string(),
  amenities: z.coerce.string().transform((val) => val.split(",")),
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

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let propiedad: Propiedad;

      if (id) {
        // Actualizar
        propiedad = await prisma.propiedad.update({
          where: { id },
          data: {
            ...(({ categoriaId, tipoPropiedadId, ciudadId, amenities, ...other }) =>
              other)(rest),
            categoria: { connect: { id: rest.categoriaId } }, // Use actual category id
            tipoPropiedad: { connect: { id: rest.tipoPropiedadId } },
            ciudad: { connect: { id: rest.ciudadId } },
            amenities: {
              connect: (rest.amenities as string[]).map((id) => ({ id })),
            },
          },
        });
      } else {
        // Crear
        propiedad = await prisma.propiedad.create({
          data: {
            // Remove categoriaId, tipoPropiedadId, ciudadId and amenities from rest
            ...(({ categoriaId, tipoPropiedadId, ciudadId, amenities, ...other }) =>
              other)(rest),
            categoria: { connect: { id: rest.categoriaId } }, // Use actual category id
            tipoPropiedad: { connect: { id: rest.tipoPropiedadId } },
            ciudad: { connect: { id: rest.ciudadId } },
            amenities: {
              connect: (rest.amenities as string[]).map((id) => ({ id })),
            },
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

        await prisma.propiedadImage.createMany({
          data: images.map((image) => ({
            url: image!,
            propiedadId: propiedad.id,
          })),
        });
      }

      return {
        propiedad,
      };
    });

    // Todo: RevalidatePaths
    revalidatePath("/admin/propiedads");
    revalidatePath(`/admin/propiedad/${propiedad.slug}`);
    revalidatePath(`/propiedad/${propiedad.slug}`);

    return {
      ok: true,
      propiedad: prismaTx.propiedad,
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
