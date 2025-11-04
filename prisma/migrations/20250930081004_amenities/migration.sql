-- CreateTable
CREATE TABLE "public"."Amenities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Amenities_name_key" ON "public"."Amenities"("name");
