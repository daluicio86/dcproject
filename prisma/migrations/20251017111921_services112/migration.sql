/*
  Warnings:

  - The primary key for the `Ciudad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Servicio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Zona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZonaServicio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Zona" DROP CONSTRAINT "Zona_ciudadId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ZonaServicio" DROP CONSTRAINT "ZonaServicio_servicioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ZonaServicio" DROP CONSTRAINT "ZonaServicio_zonaId_fkey";

-- AlterTable
ALTER TABLE "public"."Ciudad" DROP CONSTRAINT "Ciudad_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ciudad_id_seq";

-- AlterTable
ALTER TABLE "public"."Servicio" DROP CONSTRAINT "Servicio_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Servicio_id_seq";

-- DropTable
DROP TABLE "public"."Zona";

-- DropTable
DROP TABLE "public"."ZonaServicio";

-- CreateTable
CREATE TABLE "public"."ServicioImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "servicioId" TEXT NOT NULL,

    CONSTRAINT "ServicioImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CiudadServicio" (
    "ciudadId" TEXT NOT NULL,
    "servicioId" TEXT NOT NULL,

    CONSTRAINT "CiudadServicio_pkey" PRIMARY KEY ("ciudadId","servicioId")
);

-- AddForeignKey
ALTER TABLE "public"."ServicioImage" ADD CONSTRAINT "ServicioImage_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "public"."Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CiudadServicio" ADD CONSTRAINT "CiudadServicio_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "public"."Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CiudadServicio" ADD CONSTRAINT "CiudadServicio_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "public"."Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
