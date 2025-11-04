-- AlterTable
ALTER TABLE "public"."accounts" ADD COLUMN     "contactoId" TEXT;

-- AlterTable
ALTER TABLE "public"."sessions" ADD COLUMN     "contactoId" TEXT;

-- CreateTable
CREATE TABLE "public"."Contacto" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "telefono" TEXT DEFAULT '',
    "email" TEXT NOT NULL,
    "mensaje" TEXT,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("id")
);
