"use server";
import { prisma } from "../../../lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  rentaVenta?: string;
  temperatura?: string;
  tipoPropiedad?: string;
  categoriaId?: string;
  precioMinimo?: number;
  precioMaximo?: number;
}

export const getPaginatedPropiedadsWithImages = async ({
  page = 1,
  take = 12,
  rentaVenta,
  temperatura,
  categoriaId,
  tipoPropiedad,
  precioMinimo = 0,
  precioMaximo = 10000000,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 🔹 Construir dinámicamente los filtros
    const where: any = {
      precio: {
        gte: precioMinimo,
        lte: precioMaximo,
      },
    };

    if (rentaVenta) where.rentaVenta = rentaVenta;
    if (temperatura) where.temperatura = temperatura;
    if (categoriaId) where.categoriaId = categoriaId;
    if (tipoPropiedad) where.tipoPropiedad = { id: tipoPropiedad };

    // 1. Obtener los propiedads filtrados
    const propiedads = await prisma.propiedad.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        images: true,
        //amenities: true,
      },
      where, // 👈 aquí usamos el objeto dinámico
    });

    // 2. Calcular total de registros con los mismos filtros
    const totalCount = await prisma.propiedad.count({ where });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      propiedads: propiedads.map((p) => ({
        ...p,
        apto: p.apto ?? "",
        address: p.address ?? "",
        description: p.description ?? "",
        userId: p.userId ?? "",
        images: p.images.map((img) => img),
      })),
    };
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo cargar los propiedads");
  }
};
