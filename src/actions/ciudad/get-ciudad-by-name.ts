"use server";

import prisma from "@/lib/prisma";

export const getCiudadByName = async (nombre: string) => {
  try {
    const nombreLimpio = decodeURIComponent(nombre.trim());
    const ciudad = await prisma.ciudad.findFirst({
      where: { nombre: nombreLimpio },
      include: {
        // 👈 Incluye las propiedades asociadas a la ciudad
        servicios: {
          include: {
            images: true, // 👈 Incluye las imágenes asociadas a cada servicio
          },
        },
        propiedades: {
          include: {
            images: true, // 👈 Incluye las imágenes asociadas a cada propiedad
          },
        },
      },
    });
    console.log("Ciudad obtenida por nombre:", ciudad);
    return ciudad ?? null;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener ciudad por nombre");
  }
};
