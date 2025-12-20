"use server";

import { prisma } from "@/lib/prisma";

export const deletePropiedad = async (propiedadId: string) => {
  try {
    const deleted = await prisma.propiedad.findFirst({
      where: { id: propiedadId },
    });

    if (!deleted) {
      return {
        ok: false,
        message: "No se pudo eliminar la propiedad",
      };
    }

    await prisma.propiedad.delete({
      where: { id: propiedadId },
    });

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo eliminar la propiedad",
    };
  }
};
