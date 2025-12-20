"use server";

import prisma from "@/lib/prisma";

export const deleteAmenitie = async (amenitieId: string) => {
  try {
    const deleted = await prisma.amenities.findFirst({
      where: { id: amenitieId },
    });

    if (!deleted) {
      return {
        ok: false,
        message: "No se pudo eliminar el servicio",
      };
    }

    deleted.estado = false;
    await prisma.amenities.update({
      where: { id: amenitieId },
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
