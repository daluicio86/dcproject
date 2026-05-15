'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { TipoPropiedad } from '@prisma/client';
import { z } from 'zod';



const tipoPropiedadSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(3).max(500),
  estado: z.coerce.boolean().optional().default(true),
});


export const createUpdateService = async( formData: FormData ) => {

  const data = Object.fromEntries( formData );
  const tipoPropiedadParsed = tipoPropiedadSchema.safeParse( data );

  if ( !tipoPropiedadParsed.success) {
    return { ok: false }
  }

  const tipoPropiedad = tipoPropiedadParsed.data;

  const { id, ...rest } = tipoPropiedad;
  try {
    const prismaTx = await prisma.$transaction( async (tx) => {
  
      let tipoPropiedad: TipoPropiedad;
      //const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase() );
  
      if ( id ) {
        // Actualizar
        tipoPropiedad = await prisma.tipoPropiedad.update({
          where: { id },
          data: {
            ...rest,
          }
        });
  
      } else {
        // Crear
        tipoPropiedad = await prisma.tipoPropiedad.create({
          data: {
            ...rest,
          }
        })
      }
  
  
      
      return {
        tipoPropiedad
      }
    });


    // Todo: RevalidatePaths
    revalidatePath('/admin/services');
    revalidatePath(`/admin/services/${ tipoPropiedad.name }`);
    revalidatePath(`/services/${ tipoPropiedad.name }`);


    return {
      ok: true,
      tipoPropiedad: prismaTx.tipoPropiedad,
    }

    
  } catch (error) {
    
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear'
    }
  }

}
