"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getPropiedadBySlug } from "@/actions/propiedad/get-propiedad-by-slug";
import { getPropiedads } from "@/actions/propiedad/get-propiedads";
import { Propiedad } from "@/interface";
import { pickLocalizedValue } from "@/lib/localize-db";
import { useTranslation } from "react-i18next";

export default function DetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const [item, setItem] = useState<Propiedad | null>(null);
  const [allProps, setAllProps] = useState<Propiedad[]>([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      const [detail, all] = await Promise.all([getPropiedadBySlug(slug, true), getPropiedads()]);
      if (detail) {
        setItem({
          ...detail,
          address: detail.address ?? "",
          description: detail.description ?? "",
          apto: detail.apto ?? "",
          geoLink: detail.geoLink ?? "",
          rentaVenta: detail.rentaVenta ?? undefined,
          temperatura: detail.temperatura ?? undefined,
          tipoMedida: detail.tipoMedida ?? undefined,
          tipoMedida1: detail.tipoMedida1 ?? undefined,
          ciudadId: detail.ciudadId ?? undefined,
        } as Propiedad);
        setNotFound(false);
      } else {
        setItem(null);
        setNotFound(true);
      }
      setAllProps((all ?? []) as any);
      setLoaded(true);
    };
    load();
  }, [slug]);

  const title = item ? pickLocalizedValue(item.title, item.titleEn, item.titleDe, lang) : "";
  const address = item ? pickLocalizedValue(item.address, item.addressEn, item.addressDe, lang) : "";
  const description = item
    ? pickLocalizedValue(item.description, item.descriptionEn, item.descriptionDe, lang)
    : "";
  const t = {
    detailsTitle: lang === "es" ? "InformaciÃƒÂ³n de Propiedad" : lang === "de" ? "Immobilieninformationen" : "Property Information",
    propertyDetails: lang === "es" ? "Detalles de la Propiedad" : lang === "de" ? "Objektdetails" : "Property Details",
    similar: lang === "es" ? "Propiedades Similares" : lang === "de" ? "Ãƒâ€žhnliche Immobilien" : "Similar Properties",
    seeMore: lang === "es" ? "MÃƒÂ¡s detalles" : lang === "de" ? "Mehr Details" : "More details",
    send: lang === "es" ? "ENVIAR MENSAJE" : lang === "de" ? "NACHRICHT SENDEN" : "SEND MESSAGE",
    noDescription: lang === "es" ? "No hay descripciÃƒÂ³n disponible." : lang === "de" ? "Keine Beschreibung verfÃƒÂ¼gbar." : "No description available.",
    name: lang === "es" ? "Nombre" : lang === "de" ? "Name" : "Name",
    email: lang === "es" ? "Correo" : lang === "de" ? "E-Mail" : "Email",
    phone: lang === "es" ? "TelÃƒÂ©fono" : lang === "de" ? "Telefon" : "Phone",
  };

  const gallery = useMemo(() => {
    if (!item?.images?.length) return [{ id: 0, url: "/images/properties/property8.jpg" } as any];
    return item.images;
  }, [item]);

  useEffect(() => {
    setImgIndex(0);
  }, [slug]);

  const prevImg = () => setImgIndex((p) => (p === 0 ? gallery.length - 1 : p - 1));
  const nextImg = () => setImgIndex((p) => (p === gallery.length - 1 ? 0 : p + 1));

  const similar = useMemo(() => {
    if (!item) return [];
    return [...allProps]
      .filter((p) => p.slug !== item.slug)
      .map((p) => {
        let score = 0;
        if (item.ciudadId && p.ciudadId === item.ciudadId) score += 4;
        if (p.categoriaId === item.categoriaId) score += 3;
        if (p.tipoPropiedadId === item.tipoPropiedadId) score += 2;
        if (p.rentaVenta && item.rentaVenta && p.rentaVenta === item.rentaVenta) score += 1;
        const diff = Math.abs(Number(p.precio ?? 0) - Number(item.precio ?? 0));
        return { p, score, diff };
      })
      .sort((a, b) => (b.score - a.score) || (a.diff - b.diff))
      .slice(0, 3)
      .map((x) => x.p);
  }, [allProps, item]);

  const waMessage = encodeURIComponent(
    `Hola, me interesa la propiedad: ${title}.\nNombre: ${name || "-"}\nCorreo: ${email || "-"}\nTelÃƒÂ©fono: ${phone || "-"}`,
  );

  if (!loaded) {
    return <section className="pt-44 pb-20"><div className="container max-w-8xl mx-auto px-5">Loading...</div></section>;
  }

  if (notFound) {
    return <section className="pt-44 pb-20"><div className="container max-w-8xl mx-auto px-5"><h1 className="text-center text-2xl font-semibold text-[#10263b]">Propiedad no encontrada</h1></div></section>;
  }

  return (
    <div className="bg-[#f3f4f6] pt-[110px] pb-16 md:pt-[122px]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="mb-2 text-4xl font-semibold leading-tight tracking-tight text-[#0d2e49] md:text-5xl">{title}</h1>
            <p className="mb-6 flex items-center gap-2 text-lg text-black/60"><Icon icon="ph:map-pin" width={18} height={18} />{address}</p>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative h-[320px] sm:h-[440px] lg:h-[520px]">
                {String(gallery[imgIndex]?.url || "").includes(".mp4") ? (
                  <video src={gallery[imgIndex]?.url} controls className="h-full w-full object-cover" />
                ) : (
                  <Image src={gallery[imgIndex]?.url || "/images/properties/property8.jpg"} alt={title} fill className="object-cover" unoptimized />
                )}
              </div>

              {gallery.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white transition hover:bg-black/65"><Icon icon="solar:alt-arrow-left-linear" width={20} height={20} /></button>
                  <button onClick={nextImg} className="absolute bottom-4 left-16 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white transition hover:bg-black/65"><Icon icon="solar:alt-arrow-right-linear" width={20} height={20} /></button>
                </>
              )}
              <span className="absolute bottom-4 right-4 rounded-full bg-black/45 px-3 py-1 text-sm font-semibold text-white">{imgIndex + 1}/{gallery.length}</span>
            </div>

            <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-3xl font-semibold text-[#10263b]">{t.propertyDetails}</h2>
              <p className="text-lg leading-8 text-black/70">{description || t.noDescription}</p>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12">
            <aside className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm lg:sticky lg:top-[130px]">
              <Image src="/images/users/arlene.jpg" alt="Elizabeth Cardenas" width={500} height={500} className="w-full h-56 rounded-2xl object-cover mb-4" unoptimized />
              <h3 className="mb-1 text-3xl font-semibold tracking-tight text-[#0d2e49]">ELIZABETH CARDENAS</h3>
              <p className="text-sm text-black/70"><strong>{t.phone}:</strong> (+593)99-956-7412</p>
              <p className="mb-6 text-sm text-black/70"><strong>{t.email}:</strong> elizabethlinacardenas@hotmail.com</p>

              <h4 className="mb-4 text-2xl font-semibold text-[#0d2e49]">{t.detailsTitle}</h4>
              <div className="space-y-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.name} className="w-full rounded-full border border-black/15 px-4 py-3" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} className="w-full rounded-full border border-black/15 px-4 py-3" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.phone} className="w-full rounded-full border border-black/15 px-4 py-3" />
                <textarea readOnly value={`Estoy interesado/a en [ ${title} ]`} className="w-full min-h-[96px] rounded-3xl border border-black/15 px-4 py-3" />
              </div>

              <Link
                href={`https://wa.me/593999567412?text=${waMessage}`}
                target="_blank"
                className="mt-4 inline-block w-full rounded-full bg-[#08364a] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-[#052737]"
              >
                {t.send}
              </Link>
            </aside>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-3xl font-semibold tracking-tight text-[#10263b]">{t.similar}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {similar.map((sp) => {
              const cardTitle = pickLocalizedValue(sp.title, sp.titleEn, sp.titleDe, lang);
              const cardAddress = pickLocalizedValue(sp.address, sp.addressEn, sp.addressDe, lang);
              return (
                <article key={sp.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <div className="h-56 w-full shrink-0" style={{ backgroundImage: `url('${sp.images?.[0]?.url ?? "/images/properties/property8.jpg"}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="mb-2 text-2xl font-semibold leading-tight text-[#10263b]">{cardTitle}</h4>
                    <p className="mb-4 text-base text-black/55">{cardAddress || "Ecuador"}</p>
                    <Link href={`/properties/${sp.slug}`} className="mt-auto text-base font-semibold text-[#10263b] hover:underline">{t.seeMore}</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
