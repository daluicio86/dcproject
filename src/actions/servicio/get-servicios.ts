"use server";

import prisma from "@/lib/prisma";

export const getServicios = async (limit = 100) => {
  try {
    const servicios = await prisma.servicio.findMany({
      take: limit,
      include: {
        images: {
          select: {
            url: true,
          },
        },
      },
      orderBy: {
        nombre: "asc",
      },
    });

    return servicios;
  } catch (error) {
    console.log(error);
    return [];
  }
};
