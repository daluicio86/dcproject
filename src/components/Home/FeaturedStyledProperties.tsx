"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { getPaginatedPropiedadsWithImages } from "@/actions/propiedad/propiedad-pagination";
import { pickLocalizedValue } from "@/lib/localize-db";
import { getPropertyAreaItems } from "@/lib/property-area";

type PropertyItem = {
  id: string;
  title: string;
  titleEn?: string;
  titleDe?: string;
  slug: string;
  precio: number | null;
  metros: number;
  ft2: number;
  area: number;
  acres: number;
  address: string;
  addressEn?: string;
  addressDe?: string;
  images: Array<{ id: number; url: string }>;
};

const FeaturedStyledProperties = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";
  const [items, setItems] = useState<PropertyItem[]>([]);
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getPaginatedPropiedadsWithImages({
        page,
        take: 6,
        esPrincipal: true,
        precioMinimo: 0,
        precioMaximo: 100000000000,
      });
      setTotalPages(Math.max(1, Number(result.totalPages ?? 1)));

      setItems(
        (result.propiedads ?? []).map((p: any) => ({
          id: p.id,
          title: p.title,
          titleEn: p.titleEn ?? undefined,
          titleDe: p.titleDe ?? undefined,
          slug: p.slug,
          precio: p.precio ?? null,
          metros: p.metros ?? 0,
          ft2: p.ft2 ?? 0,
          area: p.area ?? 0,
          acres: p.acres ?? 0,
          address: p.address ?? "",
          addressEn: p.addressEn ?? undefined,
          addressDe: p.addressDe ?? undefined,
          images: (p.images ?? []).map((img: any) => ({ id: Number(img.id), url: img.url })),
        })),
      );

      const initialIndexes: Record<string, number> = {};
      (result.propiedads ?? []).forEach((p) => {
        initialIndexes[p.id] = 0;
      });
      setImageIndexes(initialIndexes);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const goPrev = (propertyId: string, total: number) => {
    if (total <= 1) return;
    setImageIndexes((prev) => {
      const current = prev[propertyId] ?? 0;
      return { ...prev, [propertyId]: current === 0 ? total - 1 : current - 1 };
    });
  };

  const goNext = (propertyId: string, total: number) => {
    if (total <= 1) return;
    setImageIndexes((prev) => {
      const current = prev[propertyId] ?? 0;
      return { ...prev, [propertyId]: current === total - 1 ? 0 : current + 1 };
    });
  };

  const title = lang === "es" ? "Propiedades destacadas" : lang === "de" ? "Ausgewählte Immobilien" : "Featured properties";
  const subtitle =
    lang === "es"
      ? "Encuentra oportunidades inmobiliarias en Ecuador."
      : lang === "de"
        ? "Finden Sie Immobilienchancen in Ecuador."
        : "Find real estate opportunities in Ecuador.";
  const previousLabel = lang === "es" ? "Anterior" : lang === "de" ? "Zurück" : "Previous";
  const nextLabel = lang === "es" ? "Siguiente" : lang === "de" ? "Weiter" : "Next";

  return (
    <section id="propiedades" className="py-16">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0">
        <div className="mb-12 text-center">
          <div className="mb-2 flex items-center justify-center">
            <Icon icon="ph:house-simple-fill" width={18} height={18} className="text-[#16b887]" />
          </div>
          <h2 className="mb-3 text-4xl font-semibold text-[#1e252b] sm:text-6xl">{title}</h2>
          <p className="text-lg text-[#75808b]">{subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const localizedTitle = pickLocalizedValue(item.title, item.titleEn, item.titleDe, lang);
            const localizedAddress = pickLocalizedValue(item.address, item.addressEn, item.addressDe, lang);
            const details = lang === "es" ? "Más detalles" : lang === "de" ? "Mehr Details" : "More details";
            const priceFallback = lang === "es" ? "Precio por consultar" : lang === "de" ? "Preis auf Anfrage" : "Price on request";

            return (
              <article key={item.id} className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <div
                  className="relative h-64 w-full"
                  style={{
                    backgroundImage: `url('${item.images[imageIndexes[item.id] ?? 0]?.url ?? item.images[0]?.url ?? "/images/properties/property8.jpg"}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {item.images.length > 1 && (
                    <>
                      <button type="button" aria-label="Imagen anterior" onClick={() => goPrev(item.id, item.images.length)} className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55">
                        <Icon icon="ph:caret-left-bold" width={16} height={16} />
                      </button>
                      <button type="button" aria-label="Siguiente imagen" onClick={() => goNext(item.id, item.images.length)} className="absolute bottom-4 left-14 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55">
                        <Icon icon="ph:caret-right-bold" width={16} height={16} />
                      </button>
                      <span className="absolute bottom-4 right-4 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {(imageIndexes[item.id] ?? 0) + 1}/{item.images.length}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-[26px] font-semibold leading-tight text-[#1e1e1e]">{localizedTitle}</h3>
                  <p className="mb-3 text-base font-semibold text-[#5f5f5f]">{item.precio ? `$${item.precio.toLocaleString("en-US")}` : priceFallback}</p>
                  <p className="mb-4 text-sm text-black/55">{localizedAddress || "Quito, Ecuador"}</p>
                  <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                    {getPropertyAreaItems(item).map((areaItem) => (
                      <div key={areaItem.key} className="rounded-xl bg-[#f3f4f6] px-3 py-2">
                        <span className="font-semibold text-[#1e1e1e]">{areaItem.label}: </span>
                        <span className="text-black/60">{areaItem.value}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`/properties/${item.slug}`} className="text-sm font-semibold text-[#1f1f1f] hover:underline">
                    {details}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
            className="rounded-lg border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#1f2a37] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {previousLabel}
          </button>
          <span className="rounded-lg bg-[#08364a] px-4 py-2 text-sm font-bold text-white">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages || loading}
            className="rounded-lg border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#1f2a37] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {nextLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStyledProperties;
