/*
  Warnings:

  - You are about to drop the `_AmenitiesToPropiedad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_AmenitiesToPropiedad" DROP CONSTRAINT "_AmenitiesToPropiedad_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AmenitiesToPropiedad" DROP CONSTRAINT "_AmenitiesToPropiedad_B_fkey";

-- DropTable
DROP TABLE "public"."_AmenitiesToPropiedad";
