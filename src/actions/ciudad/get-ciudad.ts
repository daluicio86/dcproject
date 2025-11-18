"use server";

import prisma from "@/lib/prisma";

export const getCiudades = async (limit = 100) => {
  try {
    const ciudades = await prisma.ciudad.findMany({
      take: limit,
      include: {
        servicios: {
          select: {
            id: true,
            nombre: true,
            slug: true,
          },
        },
        propiedades: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    if (!ciudades) return null;

    return {
      ...ciudades,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener ciudades");
  }
};
