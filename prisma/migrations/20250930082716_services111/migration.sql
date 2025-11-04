/*
  Warnings:

  - You are about to drop the `Servicios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PropiedadToServicios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_PropiedadToServicios" DROP CONSTRAINT "_PropiedadToServicios_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PropiedadToServicios" DROP CONSTRAINT "_PropiedadToServicios_B_fkey";

-- DropTable
DROP TABLE "public"."Servicios";

-- DropTable
DROP TABLE "public"."_PropiedadToServicios";

-- CreateTable
CREATE TABLE "public"."Servicio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_PropiedadToServicio" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PropiedadToServicio_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servicio_name_key" ON "public"."Servicio"("name");

-- CreateIndex
CREATE INDEX "_PropiedadToServicio_B_index" ON "public"."_PropiedadToServicio"("B");

-- AddForeignKey
ALTER TABLE "public"."_PropiedadToServicio" ADD CONSTRAINT "_PropiedadToServicio_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Propiedad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PropiedadToServicio" ADD CONSTRAINT "_PropiedadToServicio_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
