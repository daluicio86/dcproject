"use server";

import { prisma } from "../../../lib/prisma";

export const getAmenities = async () => {
  try {
    const amenities = await prisma.amenities.findMany({
      where: {
        estado: true,
      },
    });

    if (!amenities) return null;

    return {
      ...amenities,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener amenidades");
  }
};
