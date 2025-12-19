"use server";

import { prisma } from "../../../lib/prisma";

export const deleteCiudad = async (ciudadId: string) => {
  try {
    const deleted = await prisma.ciudad.findFirst({
      where: { id: ciudadId },
    });

    if (!deleted) {
      return {
        ok: false,
        message: "No se pudo eliminar la ciudad",
      };
    }

    await prisma.ciudad.delete({
      where: { id: ciudadId },
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
