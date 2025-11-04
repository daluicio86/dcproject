/*
  Warnings:

  - You are about to drop the `CiudadServicio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CiudadServicio" DROP CONSTRAINT "CiudadServicio_ciudadId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CiudadServicio" DROP CONSTRAINT "CiudadServicio_servicioId_fkey";

-- DropTable
DROP TABLE "public"."CiudadServicio";

-- CreateTable
CREATE TABLE "public"."_CiudadToServicio" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CiudadToServicio_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CiudadToServicio_B_index" ON "public"."_CiudadToServicio"("B");

-- AddForeignKey
ALTER TABLE "public"."_CiudadToServicio" ADD CONSTRAINT "_CiudadToServicio_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Ciudad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CiudadToServicio" ADD CONSTRAINT "_CiudadToServicio_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
