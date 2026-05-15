"use server";

import { prisma } from "@/lib/prisma";

export const getCategories = async (tipo:number) => {
  try {
    const categorias = await prisma.categoria.findMany({
      where: {
        estado: true,
        tipo: tipo
      },
    });

    if (!categorias) return null;

    return {
      ...categorias,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
};
