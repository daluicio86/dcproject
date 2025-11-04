-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" SET DEFAULT '';
