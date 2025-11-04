/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Propiedad` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Propiedad` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ciudad` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviciosId` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperatura` to the `Propiedad` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TipoCategoria" AS ENUM ('General');

-- CreateEnum
CREATE TYPE "public"."TipoPropiedad" AS ENUM ('Habitacion', 'Casa', 'Loft', 'Hacienda');

-- CreateEnum
CREATE TYPE "public"."UbicacionPropiedad" AS ENUM ('ciudad', 'campo');

-- DropForeignKey
ALTER TABLE "public"."Propiedad" DROP CONSTRAINT "Propiedad_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Categoria" ADD COLUMN     "tipo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Propiedad" DROP COLUMN "categoryId",
DROP COLUMN "price",
ADD COLUMN     "categoriaId" TEXT NOT NULL,
ADD COLUMN     "ciudad" TEXT NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "serviciosId" TEXT NOT NULL,
ADD COLUMN     "temperatura" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tipoPropiedad" "public"."TipoPropiedad"[] DEFAULT ARRAY[]::"public"."TipoPropiedad"[],
ADD COLUMN     "ubicacion" "public"."UbicacionPropiedad"[] DEFAULT ARRAY[]::"public"."UbicacionPropiedad"[];

-- CreateTable
CREATE TABLE "public"."Servicios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Servicios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servicios_name_key" ON "public"."Servicios"("name");

-- AddForeignKey
ALTER TABLE "public"."Propiedad" ADD CONSTRAINT "Propiedad_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Propiedad" ADD CONSTRAINT "Propiedad_serviciosId_fkey" FOREIGN KEY ("serviciosId") REFERENCES "public"."Servicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
