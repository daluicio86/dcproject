-- AlterTable
ALTER TABLE "public"."Propiedad" ALTER COLUMN "temperatura" DROP NOT NULL,
ALTER COLUMN "temperatura" SET DATA TYPE TEXT;
