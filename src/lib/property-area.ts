import { Propiedad } from "@/interface";

type AreaUnit = "m2" | "ft2" | "ha" | "acres";

export const areaUnits: Array<{ key: AreaUnit; label: string }> = [
  { key: "m2", label: "m2" },
  { key: "ft2", label: "ft2" },
  { key: "ha", label: "ha" },
  { key: "acres", label: "acres" },
];

export function formatAreaValue(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === "") return "N/D";
  const numericValue = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return "N/D";
  return numericValue.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

export function getPropertyAreaValue(
  item: Pick<Propiedad, "metros" | "ft2" | "area" | "acres">,
  unit: AreaUnit,
) {
  if (unit === "m2") return item.metros;
  if (unit === "ft2") return item.ft2;
  if (unit === "ha") return item.area;
  return item.acres;
}

export function getPropertyAreaItems(
  item: Pick<Propiedad, "metros" | "ft2" | "area" | "acres">,
) {
  return areaUnits.map((unit) => ({
    ...unit,
    value: formatAreaValue(getPropertyAreaValue(item, unit.key)),
  }));
}
