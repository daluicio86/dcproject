"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Propiedad } from "@/interface";
import { deletePropiedad } from "@/actions/propiedad/delete-propiedad";
import { pickLocalizedValue } from "@/lib/localize-db";

function formatPrice(value: number | string | null | undefined, lang: string) {
  if (value === null || value === undefined) {
    return lang === "es" ? "Precio por consultar" : lang === "de" ? "Preis auf Anfrage" : "Price on request";
  }
  const n = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(n)) return "$0";
  return `$${n.toLocaleString("en-US")}`;
}

const PropiedadAdminCard: React.FC<{ item: Propiedad }> = ({ item }) => {
  const { id, title, titleEn, titleDe, slug, precio, address, addressEn, addressDe, images } = item;
  const router = useRouter();
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";
  const url = `/admin/propiedad/${slug}`;

  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleDelete = async () => {
    const confirmed = window.confirm(lang === "es" ? "Â¿Seguro que quieres eliminar esta propiedad?" : lang === "de" ? "MÃ¶chten Sie diese Immobilie wirklich lÃ¶schen?" : "Are you sure you want to delete this property?");
    if (!confirmed) return;
    try {
      setIsDeleting(true);
      const resp = await deletePropiedad(id);
      if (!resp.ok) return alert(resp.message || (lang === "es" ? "No se pudo eliminar la propiedad" : lang === "de" ? "Immobilie konnte nicht gelÃ¶scht werden" : "Could not delete property"));
      alert(lang === "es" ? "Propiedad eliminada correctamente" : lang === "de" ? "Immobilie erfolgreich gelÃ¶scht" : "Property deleted successfully");
      router.refresh();
    } catch {
      alert(lang === "es" ? "OcurriÃ³ un error al eliminar la propiedad" : lang === "de" ? "Beim LÃ¶schen ist ein Fehler aufgetreten" : "An error occurred while deleting property");
    } finally {
      setIsDeleting(false);
    }
  };

  const safeImages = images?.length ? images : [{ id: 0, url: "/images/properties/property8.jpg" } as any];
  const detailsText = lang === "es" ? "MÃ¡s detalles" : lang === "de" ? "Mehr Details" : "More details";
  const deleteText = isDeleting ? (lang === "es" ? "Eliminando..." : lang === "de" ? "LÃ¶schen..." : "Deleting...") : (lang === "es" ? "Eliminar" : lang === "de" ? "LÃ¶schen" : "Delete");
  const localizedTitle = pickLocalizedValue(title, titleEn, titleDe, lang);
  const localizedAddress = pickLocalizedValue(address, addressEn, addressDe, lang);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative">
        <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
          <CarouselContent>
            {safeImages.map((ele, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] lg:h-[258px]">
                  {String(ele.url).includes(".mp4") ? <video src={ele.url} controls className="h-full w-full object-cover" /> : <Image src={ele.url} alt={localizedTitle ?? String(index)} fill className="object-cover" unoptimized />}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  {count > 1 && (
                    <>
                      <button type="button" onClick={() => api?.scrollPrev()} className="absolute bottom-4 left-4 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white" aria-label="Anterior"><Icon icon="solar:alt-arrow-left-linear" width={18} height={18} /></button>
                      <button type="button" onClick={() => api?.scrollNext()} className="absolute bottom-4 left-14 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white" aria-label="Siguiente"><Icon icon="solar:alt-arrow-right-linear" width={18} height={18} /></button>
                    </>
                  )}
                  {count > 0 && <span className="absolute bottom-4 right-4 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white">{current}/{count}</span>}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex grow flex-col p-5">
        <Link href={url}><h3 className="mb-2 min-h-[64px] text-[32px] font-semibold leading-[1.2] text-[#0f2132] hover:underline sm:min-h-[72px]">{localizedTitle}</h3></Link>
        <p className="mb-2 text-[24px] font-semibold leading-tight text-[#4a5561]">{formatPrice(precio, lang)}</p>
        <p className="mb-4 min-h-[24px] text-base text-[#6c7785] sm:min-h-[28px]">{localizedAddress || "Ecuador"}</p>
        <div className="mt-auto flex items-center justify-between">
          <Link href={url} className="text-base font-semibold text-[#0f2132] hover:underline">{detailsText}</Link>
          <button type="button" onClick={handleDelete} disabled={isDeleting} className="rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-700 disabled:opacity-60">{deleteText}</button>
        </div>
      </div>
    </article>
  );
};

export default PropiedadAdminCard;
