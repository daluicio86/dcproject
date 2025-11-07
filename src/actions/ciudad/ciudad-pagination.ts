"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedCiudades = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const ciudades = await prisma.ciudad.findMany({
      take: take,
      skip: (page - 1) * take,
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

    // 2. Obtener el total de páginas
    // todo:
    const totalCount =
      await prisma.ciudad.count(/*{ where: { estado: true } }*/);

    const totalPages = Math.ceil(totalCount / take);
    return {
      currentPage: page,
      totalPages: totalPages,
      ciudades: ciudades.map((city) => ({
        ...city,
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
