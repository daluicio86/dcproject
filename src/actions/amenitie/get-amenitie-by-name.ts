'use server';

import prisma from '@/lib/prisma';


export const getAmenitieByName = async( name: string ) => {


  try {
    const nombreLimpio = decodeURIComponent(name.trim());
    const amenitie = await prisma.amenities.findFirst({
      where: { name: nombreLimpio },

    });
    return amenitie ?? null;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener amenitie por nombre");
  }

}