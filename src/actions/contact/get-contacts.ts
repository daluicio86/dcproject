'use server';

import prisma from '@/lib/prisma';



export const getContacts =  async()=> {

  try {
      const contacts = await prisma.contacto.findMany({
        orderBy: {
          name: 'asc'
        }
      });

     return contacts;

  } catch (error) {
    console.log(error);
    return [];
  }


}