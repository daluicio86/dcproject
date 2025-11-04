"use server";
import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}
export const getPaginatedContacts = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los contactos
    const contacts = await prisma.contacto.findMany({
      take: take,
      skip: (page - 1) * take,
    });

    // 2. Obtener el total de páginas
    // item:
    const totalCount = await prisma.contacto.count();
    
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      contacts: contacts.map((contact) => ({
        ...contact
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los contactos");
  }
};
