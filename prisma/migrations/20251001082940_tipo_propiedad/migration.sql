/*
  Warnings:

  - You are about to drop the column `tipoPropiedad` on the `Propiedad` table. All the data in the column will be lost.
  - Added the required column `tipoPropiedadId` to the `Propiedad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Propiedad" DROP COLUMN "tipoPropiedad",
ADD COLUMN     "tipoPropiedadId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."TipoPropiedad";

-- CreateTable
CREATE TABLE "public"."TipoPropiedad" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TipoPropiedad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoPropiedad_name_key" ON "public"."TipoPropiedad"("name");

-- AddForeignKey
ALTER TABLE "public"."Propiedad" ADD CONSTRAINT "Propiedad_tipoPropiedadId_fkey" FOREIGN KEY ("tipoPropiedadId") REFERENCES "public"."TipoPropiedad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
