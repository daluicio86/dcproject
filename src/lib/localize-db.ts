export type LangCode = "en" | "de" | "es";

export function pickLocalizedValue(
  base: string | null | undefined,
  en: string | null | undefined,
  de: string | null | undefined,
  lang: string | null | undefined,
) {
  const code = (lang ?? "en").slice(0, 2) as LangCode;
  if (code === "en") return en?.trim() || base || "";
  if (code === "de") return de?.trim() || base || "";
  return base || "";
}

