"use server";

import { prisma } from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedTipoPropiedad= async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const tipoPropiedads = await prisma.tipoPropiedad.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        estado: true},
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.tipoPropiedad.count({ where: { estado: true } });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      tipoPropiedads: tipoPropiedads.map((tipoPropiedad) => ({
        ...tipoPropiedad,
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
