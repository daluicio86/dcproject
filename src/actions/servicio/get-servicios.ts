"use server";

import prisma from "@/lib/prisma";

export const getServicios = async () => {
  try {
    const servicios = await prisma.servicio.findMany({
      include: {
        images: true,
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
