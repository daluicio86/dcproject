'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const amenitieSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(3).max(500),
  estado: z.coerce.boolean().optional().default(true),
});

export const createUpdateAmenitie = async (formData: FormData) => {

  const data = Object.fromEntries(formData);
  const amenitieParsed = amenitieSchema.safeParse(data);

  if (!amenitieParsed.success) {
    console.log(amenitieParsed.error);
    return { ok: false };
  }

  const { id, ...rest } = amenitieParsed.data;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {

      let amenitie;

      if (id) {
        // ✅ Actualizar
        amenitie = await tx.amenities.update({
          where: { id },
          data: { ...rest },
        });
      } else {
        // ✅ Crear
        amenitie = await tx.amenities.create({
          data: { ...rest },
        });
      }

      return { amenitie };
    });

    // 🔄 Revalidate paths
    revalidatePath('/admin/amenities');
    revalidatePath(`/admin/amenities/${prismaTx.amenitie.name}`);
    revalidatePath(`/amenities/${prismaTx.amenitie.name}`);

    return {
      ok: true,
      amenitie: prismaTx.amenitie,
    };

  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear',
    };
  }
};
