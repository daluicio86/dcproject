/*
  Warnings:

  - You are about to drop the column `serviciosId` on the `Propiedad` table. All the data in the column will be lost.
  - You are about to drop the `Amenities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Propiedad" DROP CONSTRAINT "Propiedad_serviciosId_fkey";

-- AlterTable
ALTER TABLE "public"."Propiedad" DROP COLUMN "serviciosId";

-- DropTable
DROP TABLE "public"."Amenities";

-- CreateTable
CREATE TABLE "public"."_PropiedadToServicios" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PropiedadToServicios_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PropiedadToServicios_B_index" ON "public"."_PropiedadToServicios"("B");

-- AddForeignKey
ALTER TABLE "public"."_PropiedadToServicios" ADD CONSTRAINT "_PropiedadToServicios_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Propiedad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PropiedadToServicios" ADD CONSTRAINT "_PropiedadToServicios_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
