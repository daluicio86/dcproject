"use server";

import { prisma } from "@/lib/prisma";

export const getTiposPropiedad = async () => {
  try {
    const tipos = await prisma.tipoPropiedad.findMany({
      where: {
        estado: true,
      },
    });

    if (!tipos) return null;

    return {
      ...tipos,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
};
