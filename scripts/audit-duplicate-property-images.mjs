import { createHash } from "node:crypto";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";
import sharp from "sharp";

process.loadEnvFile?.(".env");

const prisma = new PrismaClient();
const concurrency = 12;

function hammingDistance(left, right) {
  let value = left ^ right;
  let distance = 0;
  while (value) {
    distance += Number(value & 1n);
    value >>= 1n;
  }
  return distance;
}

async function fingerprint(item) {
  const response = await fetch(item.url, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const source = Buffer.from(await response.arrayBuffer());
  const pixels = await sharp(source)
    .rotate()
    .resize(9, 8, { fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer();

  let differenceHash = 0n;
  for (let row = 0; row < 8; row += 1) {
    for (let column = 0; column < 8; column += 1) {
      differenceHash <<= 1n;
      if (pixels[row * 9 + column] > pixels[row * 9 + column + 1]) {
        differenceHash |= 1n;
      }
    }
  }

  return {
    ...item,
    differenceHash,
    contentHash: createHash("sha256").update(source).digest("hex"),
  };
}

async function mapConcurrent(items, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      try {
        results[index] = await mapper(items[index]);
      } catch (error) {
        results[index] = { ...items[index], error: String(error) };
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

const images = await prisma.propiedadImage.findMany({
  where: { type: { not: "video" } },
  select: {
    id: true,
    url: true,
    propiedadId: true,
    propiedad: { select: { title: true, slug: true } },
  },
  orderBy: { id: "asc" },
});

const fingerprints = await mapConcurrent(images, fingerprint);
const valid = fingerprints.filter((item) => !item.error);
const visited = new Set();
const duplicateGroups = [];

for (let leftIndex = 0; leftIndex < valid.length; leftIndex += 1) {
  const left = valid[leftIndex];
  if (visited.has(left.id)) continue;
  const group = [left];
  for (let rightIndex = leftIndex + 1; rightIndex < valid.length; rightIndex += 1) {
    const right = valid[rightIndex];
    if (visited.has(right.id)) continue;
    if (hammingDistance(left.differenceHash, right.differenceHash) <= 2) {
      group.push(right);
    }
  }
  if (group.length > 1) {
    group.forEach((item) => visited.add(item.id));
    duplicateGroups.push(group);
  }
}

const report = {
  auditedImages: images.length,
  downloadedImages: valid.length,
  failedImages: fingerprints.filter((item) => item.error),
  duplicateGroups: duplicateGroups.map((group) => ({
    exactSameFile: new Set(group.map((item) => item.contentHash)).size === 1,
    images: group.map(({ id, url, propiedadId, propiedad }) => ({
      id,
      url,
      propiedadId,
      title: propiedad.title,
      slug: propiedad.slug,
    })),
  })),
};

await writeFile("duplicate-property-images-report.json", JSON.stringify(report, null, 2));

const reviewGroups = report.duplicateGroups.filter((group) => !group.exactSameFile);
if (reviewGroups.length > 0) {
  const panels = [];
  for (let groupIndex = 0; groupIndex < reviewGroups.length; groupIndex += 1) {
    const group = reviewGroups[groupIndex];
    for (let imageIndex = 0; imageIndex < group.images.length; imageIndex += 1) {
      const image = group.images[imageIndex];
      const response = await fetch(image.url);
      const source = Buffer.from(await response.arrayBuffer());
      const photo = await sharp(source).rotate().resize(360, 230, { fit: "cover" }).jpeg().toBuffer();
      const label = Buffer.from(`<svg width="360" height="270"><rect width="360" height="40" fill="#111827"/><text x="12" y="26" fill="white" font-family="Arial" font-size="16">Grupo ${groupIndex + 1} · ID ${image.id}</text></svg>`);
      panels.push(await sharp(label).composite([{ input: photo, top: 40, left: 0 }]).jpeg().toBuffer());
    }
  }
  const rows = Math.ceil(panels.length / 2);
  await sharp({ create: { width: 720, height: rows * 270, channels: 3, background: "white" } })
    .composite(panels.map((input, index) => ({ input, left: (index % 2) * 360, top: Math.floor(index / 2) * 270 })))
    .jpeg({ quality: 90 })
    .toFile("duplicate-property-images-review.jpg");
}
console.log(JSON.stringify({
  auditedImages: report.auditedImages,
  downloadedImages: report.downloadedImages,
  failedImages: report.failedImages.length,
  duplicateGroups: report.duplicateGroups.length,
  duplicateImages: report.duplicateGroups.reduce((total, group) => total + group.images.length, 0),
}, null, 2));

await prisma.$disconnect();
