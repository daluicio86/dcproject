'use server';

import { revalidatePath } from 'next/cache';
import { Categoria } from '@prisma/client';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const categorySchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(3).max(500),
  tipo: z.coerce
    .number()
    .min(0)
    .transform( val => Number(val.toFixed(0)) ),
  estado: z.coerce.boolean().optional().default(true),
});


export const createUpdateCategory = async( formData: FormData ) => {

  const data = Object.fromEntries( formData );
  const categoryParsed = categorySchema.safeParse( data );

  if ( !categoryParsed.success) {
    console.log( categoryParsed.error );
    return { ok: false }
  }

  const categoria = categoryParsed.data;

  const { id, ...rest } = categoria;
  try {
    const prismaTx = await prisma.$transaction( async (tx) => {
  
      let categoria: Categoria;
      //const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase() );
  
      if ( id ) {
        // Actualizar
        categoria = await prisma.categoria.update({
          where: { id },
          data: {
            ...rest,
          }
        });
  
      } else {
        // Crear
        categoria = await prisma.categoria.create({
          data: {
            ...rest,
            tipo: 1, // Replace 0 with the appropriate value or get it from formData
          }
        })
      }
  
  
      
      return {
        categoria
      }
    });


    // Todo: RevalidatePaths
    revalidatePath('/admin/categorys');
    revalidatePath(`/admin/categorys/${ categoria.name }`);
    revalidatePath(`/categorys/${ categoria.name }`);


    return {
      ok: true,
      categoria: prismaTx.categoria,
    }

    
  } catch (error) {
    
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear'
    }
  }

}
