import { readFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

process.loadEnvFile?.(".env");

const applyChanges = process.argv.includes("--apply");
const report = JSON.parse(await readFile("duplicate-property-images-report.json", "utf8"));
const intentionallyDistinctIds = new Set([1853, 1854]);

const idsToDelete = report.duplicateGroups.flatMap((group) => {
  const ids = group.images.map((image) => image.id);
  if (ids.some((id) => intentionallyDistinctIds.has(id))) return [];
  return ids.slice(1);
});

console.log(JSON.stringify({
  mode: applyChanges ? "apply" : "dry-run",
  duplicateRows: idsToDelete.length,
  idsToDelete,
}, null, 2));

if (applyChanges && idsToDelete.length > 0) {
  const prisma = new PrismaClient();
  const result = await prisma.propiedadImage.deleteMany({
    where: { id: { in: idsToDelete } },
  });
  await prisma.$disconnect();
  console.log(`Filas eliminadas: ${result.count}`);
}
