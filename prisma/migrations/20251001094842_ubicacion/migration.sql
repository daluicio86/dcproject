/*
  Warnings:

  - You are about to drop the column `ciudad` on the `Propiedad` table. All the data in the column will be lost.
  - You are about to drop the column `ubicacion` on the `Propiedad` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Propiedad" DROP COLUMN "ciudad",
DROP COLUMN "ubicacion";
