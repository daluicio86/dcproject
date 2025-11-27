"use server";

import prisma from "@/lib/prisma";

export const getPropiedads = async () => {
  try {
    const propiedads = await prisma.propiedad.findMany({
      include: {
        images: true,
        //amenities: true,
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
