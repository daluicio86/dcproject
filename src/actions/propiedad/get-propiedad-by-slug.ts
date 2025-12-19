"use server";

import { prisma } from "../../../lib/prisma";

export async function getPropiedadBySlug(slug: string) {
  try {
    const propiedad = await prisma.propiedad.findFirst({
      where: { slug },
      include: {
        images: {
          select: {
            id: true,
            url: true,
          },
        },
        // amenities: true,
      },
    });

    if (!propiedad) return null;

    return {
      ...propiedad,
      apto: propiedad.apto ?? "",
      description: propiedad.description ?? "",
      userId: propiedad.userId ?? "",
      // 🔥 IMPORTANTE: ya NO transformamos images
      images: propiedad.images,
      // amenities: propiedad.amenities ?? [],
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la propiedad por slug");
  }
}
