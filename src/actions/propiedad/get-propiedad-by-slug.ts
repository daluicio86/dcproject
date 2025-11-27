"use server";

import prisma from "@/lib/prisma";

export async function getPropiedadBySlug(slug: string) {
  try {
    const propiedad = await prisma.propiedad.findFirst({
      include: {
        images: true,
        //amenities: true,
      },
      where: { slug },
    });

    if (!propiedad) return null;

    return {
      ...propiedad,
      apto: propiedad.apto === null ? "" : propiedad.apto,
      description: propiedad.description === null ? "" : propiedad.description,
      userId: propiedad.userId === null ? "" : propiedad.userId,
      images: propiedad.images.map((image) => image.url) || [],
      //amenities: propiedad.amenities || [],
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la propiedad por slug");
  }
}
