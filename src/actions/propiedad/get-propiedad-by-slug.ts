"use server";

import { prisma } from "@/lib/prisma";

<<<<<<< HEAD
export async function getPropiedadBySlug(slug: string, onlyPublished = false) {
  try {
    const where: any = { slug };
    void onlyPublished;
    const propiedad = await prisma.propiedad.findFirst({
      where,
=======
export async function getPropiedadBySlug(slug: string) {
  try {
    const propiedad = await prisma.propiedad.findFirst({
      where: { slug },
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
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
