import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";
import sharp from "sharp";

process.loadEnvFile?.(".env");
const prisma = new PrismaClient();

const properties = await prisma.propiedad.findMany({
  select: {
    id: true,
    title: true,
    slug: true,
    images: {
      where: { type: { not: "video" } },
      select: { id: true, url: true },
      orderBy: { id: "asc" },
    },
  },
  orderBy: { title: "asc" },
});

const media = properties.flatMap((property) =>
  property.images.map((image, index) => ({
    id: property.id,
    title: property.title,
    slug: property.slug,
    imageCount: property.images.length,
    coverId: image.id,
    coverUrl: image.url,
    position: index + 1,
  })),
);
const results = [];
let nextIndex = 0;
async function worker() {
  while (nextIndex < media.length) {
    const property = media[nextIndex++];
    try {
      const response = await fetch(property.coverUrl, { signal: AbortSignal.timeout(20_000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const source = Buffer.from(await response.arrayBuffer());
      const analysis = await sharp(source)
        .rotate()
        .flatten({ background: "white" })
        .resize(128, 128, { fit: "inside" })
        .greyscale()
        .stats();
      const channel = analysis.channels[0];
      const isBlank = channel.mean >= 245 && channel.stdev <= 18;
      results.push({
        id: property.id,
        title: property.title,
        slug: property.slug,
        coverId: property.coverId,
        coverUrl: property.coverUrl,
        imageCount: property.imageCount,
        position: property.position,
        mean: Number(channel.mean.toFixed(2)),
        stdev: Number(channel.stdev.toFixed(2)),
        entropy: Number(analysis.entropy.toFixed(4)),
        status: isBlank ? "blank" : "ok",
      });
    } catch (error) {
      results.push({
        id: property.id,
        title: property.title,
        slug: property.slug,
        coverId: property.coverId,
        coverUrl: property.coverUrl,
        position: property.position,
        status: "error",
        error: String(error),
      });
    }
  }
}

await Promise.all(Array.from({ length: 12 }, worker));
results.sort((left, right) => left.title.localeCompare(right.title));
await writeFile("blank-property-covers-report.json", JSON.stringify(results, null, 2));

const summary = {
  properties: properties.length,
  blank: results.filter((item) => item.status === "blank"),
  noImage: properties.filter((item) => item.images.length === 0).map(({ id, title, slug }) => ({ id, title, slug })),
  errors: results.filter((item) => item.status === "error"),
};
console.log(JSON.stringify(summary, null, 2));
await prisma.$disconnect();
