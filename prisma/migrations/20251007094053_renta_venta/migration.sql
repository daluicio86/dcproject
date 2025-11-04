-- CreateEnum
CREATE TYPE "public"."RentaVenta" AS ENUM ('renta', 'venta');

-- AlterTable
ALTER TABLE "public"."Propiedad" ADD COLUMN     "rentaVenta" TEXT,
ADD COLUMN     "ubicacion" TEXT;
