'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Amenities } from '@prisma/client';
//import { Amenities } from './app/generated/prisma-client'

import { z } from 'zod';



const amenitieSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(3).max(500),
  estado: z.coerce.boolean().optional().default(true),
});


export const createUpdateAmenitie = async( formData: FormData ) => {

  const data = Object.fromEntries( formData );
  const amenitieParsed = amenitieSchema.safeParse( data );

  if ( !amenitieParsed.success) {
    console.log( amenitieParsed.error );
    return { ok: false }
  }

  const amenitie = amenitieParsed.data;

  const { id, ...rest } = amenitie;
  try {
    const prismaTx = await prisma.$transaction( async (tx) => {

      let amenitie: Amenities;
      //const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase() );
  
      if ( id ) {
        // Actualizar
        amenitie = await prisma.amenities.update({
          where: { id },
          data: {
            ...rest,
          }
        });
  
      } else {
        // Crear
        amenitie = await prisma.amenities.create({
          data: {
            ...rest,
          }
        })
      }
  
  
      
      return {
        amenitie
      }
    });


    // Todo: RevalidatePaths
    revalidatePath('/admin/amenities');
    revalidatePath(`/admin/amenities/${ amenitie.name }`);
    revalidatePath(`/amenities/${ amenitie.name }`);


    return {
      ok: true,
      amenitie: prismaTx.amenitie,
    }

    
  } catch (error) {
    
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear'
    }
  }

}
