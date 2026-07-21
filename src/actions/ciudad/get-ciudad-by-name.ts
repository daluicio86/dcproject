"use server";

import { prisma } from "@/lib/prisma";

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
            images: {
              orderBy: [{ type: "asc" }, { id: "asc" }],
            },
          },
        },
      },
    });
    return ciudad ?? null;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener ciudad por nombre");
  }
};
