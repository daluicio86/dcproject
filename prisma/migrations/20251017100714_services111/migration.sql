/*
  Warnings:

  - The primary key for the `Servicio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `estado` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Servicio` table. All the data in the column will be lost.
  - The `id` column on the `Servicio` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_PropiedadToServicio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombre` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_PropiedadToServicio" DROP CONSTRAINT "_PropiedadToServicio_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PropiedadToServicio" DROP CONSTRAINT "_PropiedadToServicio_B_fkey";

-- DropIndex
DROP INDEX "public"."Servicio_name_key";

-- AlterTable
ALTER TABLE "public"."Servicio" DROP CONSTRAINT "Servicio_pkey",
DROP COLUMN "estado",
DROP COLUMN "name",
ADD COLUMN     "nombre" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."_PropiedadToServicio";

-- CreateTable
CREATE TABLE "public"."Amenities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Zona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ciudadId" INTEGER NOT NULL,

    CONSTRAINT "Zona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ZonaServicio" (
    "zonaId" INTEGER NOT NULL,
    "servicioId" INTEGER NOT NULL,

    CONSTRAINT "ZonaServicio_pkey" PRIMARY KEY ("zonaId","servicioId")
);

-- CreateTable
CREATE TABLE "public"."_AmenitiesToPropiedad" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AmenitiesToPropiedad_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Amenities_name_key" ON "public"."Amenities"("name");

-- CreateIndex
CREATE INDEX "_AmenitiesToPropiedad_B_index" ON "public"."_AmenitiesToPropiedad"("B");

-- AddForeignKey
ALTER TABLE "public"."Zona" ADD CONSTRAINT "Zona_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "public"."Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ZonaServicio" ADD CONSTRAINT "ZonaServicio_zonaId_fkey" FOREIGN KEY ("zonaId") REFERENCES "public"."Zona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ZonaServicio" ADD CONSTRAINT "ZonaServicio_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "public"."Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AmenitiesToPropiedad" ADD CONSTRAINT "_AmenitiesToPropiedad_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AmenitiesToPropiedad" ADD CONSTRAINT "_AmenitiesToPropiedad_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Propiedad"("id") ON DELETE CASCADE ON UPDATE CASCADE;
