/*
  Warnings:

  - You are about to drop the column `estadp` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "estadp",
ADD COLUMN     "estado" BOOLEAN NOT NULL DEFAULT true;
