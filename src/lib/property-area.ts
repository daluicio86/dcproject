import { Propiedad } from "@/interface";

type AreaUnit = "m2" | "ft2" | "ha" | "acres";

const SQUARE_FEET_PER_SQUARE_METER = 10.7639104167;
const SQUARE_METERS_PER_HECTARE = 10_000;
const SQUARE_METERS_PER_ACRE = 4_046.8564224;

export const areaUnits: Array<{ key: AreaUnit; label: string }> = [
  { key: "m2", label: "m²" },
  { key: "ft2", label: "ft²" },
  { key: "ha", label: "ha" },
  { key: "acres", label: "acres" },
];

export function formatAreaValue(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === "") return "—";
  const numericValue = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return "—";
  return numericValue.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

export function getPropertyAreaValue(
  item: Pick<Propiedad, "metros" | "ft2" | "area" | "acres">,
  unit: AreaUnit,
) {
  const metros = Number(item.metros);
  const piesCuadrados = Number(item.ft2);
  const hectareas = Number(item.area);
  const acres = Number(item.acres);

  let squareMeters = 0;
  if (Number.isFinite(metros) && metros > 0) {
    squareMeters = metros;
  } else if (Number.isFinite(piesCuadrados) && piesCuadrados > 0) {
    squareMeters = piesCuadrados / SQUARE_FEET_PER_SQUARE_METER;
  } else if (Number.isFinite(hectareas) && hectareas > 0) {
    squareMeters = hectareas * SQUARE_METERS_PER_HECTARE;
  } else if (Number.isFinite(acres) && acres > 0) {
    squareMeters = acres * SQUARE_METERS_PER_ACRE;
  }

  if (squareMeters <= 0) return null;
  if (unit === "m2") return squareMeters;
  if (unit === "ft2") return squareMeters * SQUARE_FEET_PER_SQUARE_METER;
  if (unit === "ha") return squareMeters / SQUARE_METERS_PER_HECTARE;
  return squareMeters / SQUARE_METERS_PER_ACRE;
}

export function getPropertyAreaItems(
  item: Pick<Propiedad, "metros" | "ft2" | "area" | "acres">,
) {
  return areaUnits.map((unit) => ({
    ...unit,
    value: formatAreaValue(getPropertyAreaValue(item, unit.key)),
  }));
}
