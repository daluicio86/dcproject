/*
  Warnings:

  - You are about to drop the `_CiudadToServicio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ciudadId` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_CiudadToServicio" DROP CONSTRAINT "_CiudadToServicio_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CiudadToServicio" DROP CONSTRAINT "_CiudadToServicio_B_fkey";

-- AlterTable
ALTER TABLE "public"."Servicio" ADD COLUMN     "ciudadId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."_CiudadToServicio";

-- AddForeignKey
ALTER TABLE "public"."Servicio" ADD CONSTRAINT "Servicio_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "public"."Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
