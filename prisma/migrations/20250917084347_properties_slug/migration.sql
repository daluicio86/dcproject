/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Propiedad` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Propiedad` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Propiedad" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Propiedad_slug_key" ON "public"."Propiedad"("slug");
