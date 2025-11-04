/*
  Warnings:

  - Made the column `metros` on table `Propiedad` required. This step will fail if there are existing NULL values in that column.
  - Made the column `altura` on table `Propiedad` required. This step will fail if there are existing NULL values in that column.
  - Made the column `precio` on table `Propiedad` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Propiedad" ALTER COLUMN "metros" SET NOT NULL,
ALTER COLUMN "metros" SET DEFAULT 0,
ALTER COLUMN "altura" SET NOT NULL,
ALTER COLUMN "altura" SET DEFAULT 0,
ALTER COLUMN "precio" SET NOT NULL,
ALTER COLUMN "precio" SET DEFAULT 0;
