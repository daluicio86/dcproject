"use server";

import prisma from "@/lib/prisma";

export const getPropiedads = async (limit = 100) => {
  try {
    const propiedads = await prisma.propiedad.findMany({
      take: limit,
      include: {
        images: {
          select: {
            url: true,
          },
        },
        amenities: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    return propiedads;
  } catch (error) {
    console.log(error);
    return [];
  }
};
