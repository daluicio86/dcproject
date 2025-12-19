"use server";

import { prisma } from "../../../lib/prisma";

export const deleteCategory = async (categoriaId: string) => {
  try {
    const deleted = await prisma.categoria.findFirst({
      where: { id: categoriaId },
    });

    if (!deleted) {
      return {
        ok: false,
        message: "No se pudo eliminar la categoria",
      };
    }

    deleted.estado = false;
    await prisma.categoria.update({
      where: { id: categoriaId },
      data: deleted,
    });

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo eliminar la categoria",
    };
  }
};
