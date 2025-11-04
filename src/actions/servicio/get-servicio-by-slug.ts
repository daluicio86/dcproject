"use server";

import prisma from "@/lib/prisma";

export async function getServicioByNombre(nombre: string) {
  try {
    const nombreLimpio = decodeURIComponent(nombre.trim());
    const servicio = await prisma.servicio.findFirst({
      include: {
        images: true,
      },
      where: { nombre: nombreLimpio },
    });

    if (!servicio) return null;

    return {
      ...servicio,
      images: servicio.images.map((image) => image.url) || [],
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la servicio por nombre");
  }
}
