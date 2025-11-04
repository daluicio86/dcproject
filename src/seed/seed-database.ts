//import { create } from "zustand";
import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  const { categories, users, properties, amenities, tipoPropiedades } = initialData;

  await Promise.all([
    await prisma.propiedadImage.deleteMany(),
    await prisma.propiedad.deleteMany(),
    await prisma.categoria.deleteMany(),
    await prisma.user.deleteMany(),
    await prisma.amenities.deleteMany(),
    await prisma.tipoPropiedad.deleteMany(),
  ]);
  console.log("Borrando base de datos...");

  await prisma.user.createMany({
    data: users,
  });
  console.log("Usuarios creados");

  await prisma.categoria.createMany({
    data: categories,
  });

  console.log("Categorias creadas");

  const categoriesDB = await prisma.categoria.findMany();

  const categoriesMap = categoriesDB.reduce((map, categoria) => {
    map[categoria.name.toLowerCase()] = categoria.id;
    return map;
  }, {} as Record<string, string>);

//tipo propiedades
  await prisma.tipoPropiedad.createMany({
    data: tipoPropiedades,
  });
  console.log("Tipo de propiedades creadas");

// amenities
  await prisma.amenities.createMany({
    data: amenities,
  });
  console.log("Amenities creados");


  // properties

  /*properties.forEach(async (propiedad) => {
    const { categoria, images, ...rest } = propiedad;

    const dbProperty = await prisma.propiedad.create({
      data: {
        ...rest,
        categoriaId: categoriesMap[categoria.toLowerCase()],
        ciudad: propiedad.ciudad || "Desconocida",
        temperatura: propiedad.temperatura || 0,
        precio: propiedad.precio || 0,
        serviciosId: propiedad.serviciosId || "",
      },
    });

    const imagesData = images?.map((image) => ({
      url: image,
      propiedadId: dbProperty.id,
    }));
    console.log({ imagesData });
    if (imagesData && imagesData.length > 0) {
      await prisma.propiedadImage.createMany({
        data: imagesData,
      });
    }
  });
  console.log("Propiedades creadas");

  await prisma.$disconnect();

  console.log("Seed ejecutado correctamente");*/
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
