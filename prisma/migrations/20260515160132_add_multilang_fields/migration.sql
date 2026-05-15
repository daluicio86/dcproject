-- AlterTable
ALTER TABLE "Amenities" ADD COLUMN     "nameDe" TEXT,
ADD COLUMN     "nameEn" TEXT;

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "nameDe" TEXT,
ADD COLUMN     "nameEn" TEXT;

-- AlterTable
ALTER TABLE "Ciudad" ADD COLUMN     "descripcionDe" TEXT,
ADD COLUMN     "descripcionEn" TEXT,
ADD COLUMN     "nombreDe" TEXT,
ADD COLUMN     "nombreEn" TEXT;

-- AlterTable
ALTER TABLE "Propiedad" ADD COLUMN     "addressDe" TEXT,
ADD COLUMN     "addressEn" TEXT,
ADD COLUMN     "aptoDe" TEXT,
ADD COLUMN     "aptoEn" TEXT,
ADD COLUMN     "descriptionDe" TEXT,
ADD COLUMN     "descriptionEn" TEXT,
ADD COLUMN     "titleDe" TEXT,
ADD COLUMN     "titleEn" TEXT;

-- AlterTable
ALTER TABLE "Servicio" ADD COLUMN     "descripcionDe" TEXT,
ADD COLUMN     "descripcionEn" TEXT,
ADD COLUMN     "nombreDe" TEXT,
ADD COLUMN     "nombreEn" TEXT;

-- AlterTable
ALTER TABLE "TipoPropiedad" ADD COLUMN     "nameDe" TEXT,
ADD COLUMN     "nameEn" TEXT;
