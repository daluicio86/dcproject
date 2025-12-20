'use server';

import { prisma } from "@/lib/prisma";

export const getTipoPropiedadByName = async( name: string ) => {


  try {

    const tipoPropiedad = await prisma.tipoPropiedad.findFirst({
      where: {
        name: name,
        estado: true
      }
    })


    if ( !tipoPropiedad ) return null;

    return {
      ...tipoPropiedad,
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }



}