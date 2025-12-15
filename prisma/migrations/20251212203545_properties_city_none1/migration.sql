-- DropForeignKey
ALTER TABLE "public"."Propiedad" DROP CONSTRAINT "Propiedad_ciudadId_fkey";

-- AlterTable
ALTER TABLE "public"."Propiedad" ALTER COLUMN "ciudadId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Propiedad" ADD CONSTRAINT "Propiedad_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "public"."Ciudad"("id") ON DELETE SET NULL ON UPDATE CASCADE;
