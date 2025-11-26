"use server";

import prisma from "@/lib/prisma";

export const getCiudades= async () => {
  try {
    const ciudades = await prisma.ciudad.findMany({
      include: {
        servicios: true,
        propiedades: true,
      },
    });

    if (!ciudades) return null;

    return ciudades.map(ciudad => ({
      ...ciudad,
      descripcion: ciudad.descripcion ?? undefined
    }));
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener ciudades");
  }
};
