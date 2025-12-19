"use server";

import { prisma } from "../../../lib/prisma";

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
    const orden = ["cayambe", "quito", "pedro vicente maldonado"];

    const normalizar = (str: string) =>
      str.trim().toLowerCase();

    const ciudades = await prisma.ciudad.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        servicios: {
          include: { images: true },
        },
        propiedades: {
          include: { images: true },
        },
      },
      orderBy: { nombre: "asc" },
    });

    const ciudadesOrdenadas = ciudades.sort(
      (a, b) =>
        orden.indexOf(normalizar(a.nombre)) -
        orden.indexOf(normalizar(b.nombre))
    );

    const totalCount = await prisma.ciudad.count();
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      ciudades: ciudadesOrdenadas,
    };
  } catch (error) {
    throw new Error("No se pudo cargar las ciudades");
  }
};
