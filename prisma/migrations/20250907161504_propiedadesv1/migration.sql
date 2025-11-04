/*
  Warnings:

  - Added the required column `geoLink` to the `Propiedad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Propiedad" ADD COLUMN     "esPrincipal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "geoLink" TEXT NOT NULL;
