/*
  Warnings:

  - You are about to drop the column `description` on the `Servicio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Servicio" DROP COLUMN "description",
ADD COLUMN     "descripcion" TEXT;
