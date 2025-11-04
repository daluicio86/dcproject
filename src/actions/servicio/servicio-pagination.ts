"use server";
import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedServiciosWithImages = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 🔹 Construir dinámicamente los filtros

    // 1. Obtener los servicios filtrados
    const servicios = await prisma.servicio.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        images: {
          select: { url: true },
        },
      },
      //where: { nombre: { contains: searchTerm, mode: "insensitive" } }, // 👈 aquí usamos el objeto dinámico
    });

    // 2. Calcular total de registros con los mismos filtros
    const totalCount = await prisma.servicio.count();

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      servicios: servicios.map((p) => ({
        ...p,
        images: p.images.map((img) => img.url),
      })),
    };
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo cargar los servicios");
  }
};
