'use server';
import { prisma } from "@/lib/prisma";

export const getCategoryByName = async( name: string ) => {
  try {

    const categoria = await prisma.categoria.findFirst({
      where: {
        name: name,
        estado: true
      }
    })


    if ( !categoria ) return null;

    return {
      ...categoria,
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }



}