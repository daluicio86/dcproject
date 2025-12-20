'use server';

import { prisma } from "@/lib/prisma";


export const getAmenitieByName = async( name: string ) => {


  try {

    const amenitie = await prisma.amenities.findFirst({
      where: {
        name: name,
        estado: true
      }
    })


    if ( !amenitie ) return null;

    return {
      ...amenitie,
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }



}