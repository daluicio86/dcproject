"use server";

import prisma from "@/lib/prisma";

export const deleteTipoPropiedad = async (tipoPropiedadId: string) => {
  try {
    const deleted = await prisma.tipoPropiedad.findFirst({
      where: { id: tipoPropiedadId },
    });

    if (!deleted) {
      return {
        ok: false,
        message: "No se pudo eliminar el tipoPropiedad",
      };
    }

    deleted.estado = false;
    await prisma.tipoPropiedad.update({
      where: { id: tipoPropiedadId },
      data: deleted,
    });

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo eliminar la servicios",
    };
  }
};
