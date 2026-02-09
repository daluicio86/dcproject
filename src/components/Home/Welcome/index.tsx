"use client";
import HeroSub from "@/components/shared/HeroSub";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPaginatedPropiedadsWithImages } from "@/actions/propiedad/propiedad-pagination";
import PropiedadListing from "@/components/Propiedad/PropiedadList";

interface Propiedad {
  id: string;
  rentaVenta?: string;
  temperatura?: string;
  tipoMedida?: string;
  ciudadId?: string;
  geoLink: string;
  images: Array<{
    id: string;
    url: string;
    type?: string;
  }>;
  title: string;
  slug: string;
  precio?: number | null;
  metros: number;
  altura?: number;
  address?: string;
  esPrincipal: boolean;
  tipoPropiedadId?: string | undefined;
  categoriaId?: string;
  userId?: string;
}

export const Welcome = () => {
  const { t } = useTranslation();
  const [propiedads, setPropiedads] = useState<Propiedad[]>([]);
  const geolink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8413543.324962867!2d-89.20553627011843!3d-1.3434721425502112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902387dda89a4bd5%3A0x9d76af04119c3702!2sEcuador!5e1!3m2!1ses-419!2sec!4v1758709358802!5m2!1ses-419!2sec";
  const page = 1;
  const rentaVenta = undefined;
  const temperatura = undefined;
  const tipoPropiedad = undefined;
  const categoria = undefined;
  const precioMin = 0;
  const precioMax = 100000000000000;

  useEffect(() => {
    const fetchPropiedads = async () => {
      const result = await getPaginatedPropiedadsWithImages({
        page,
        rentaVenta,
        esPrincipal: true,
        temperatura,
        tipoPropiedad,
        categoriaId: categoria,
        precioMinimo: precioMin,
        precioMaximo: precioMax,
      });
      setPropiedads(
        result.propiedads.map((p) => ({
          ...p,
          rentaVenta: p.rentaVenta ?? undefined,
          temperatura: p.temperatura ?? undefined,
          tipoMedida: p.tipoMedida ?? undefined,
          ciudadId: p.ciudadId ?? undefined,
          geoLink: p.geoLink ?? "",
          images: p.images?.map((img) => ({
            id: String(img.id),
            url: img.url,
            type: img.type ?? undefined,
          })) ?? [],
        }))
      );
    };
    fetchPropiedads();
  }, [page, rentaVenta, temperatura, tipoPropiedad, categoria, precioMin, precioMax]);

  return (
    <div>
      <HeroSub title={t("welcome")} description={t("tagline")} badge="" />
      {!propiedads || propiedads.length === 0 ? (
        <div className="mx-20">
          <h1 className="text-center text-gray-500">
            No properties were found.
          </h1>
        </div>
      ) : (
        <>
          <PropiedadListing
            propiedads={propiedads.map((p) => ({
              ...p,
              slug: p.slug ?? "",
              rentaVenta: p.rentaVenta === null ? undefined : p.rentaVenta,
              temperatura: p.temperatura === null ? undefined : p.temperatura,
              tipoMedida: p.tipoMedida === null ? undefined : p.tipoMedida,
              ciudadId: p.ciudadId === null ? undefined : p.ciudadId,
              geoLink: p.geoLink ?? "",
              precio: p.precio ?? null,
              metros: p.metros ?? 0,
              altura: p.altura ?? 0,
              address: p.address ?? "",
              esPrincipal: p.esPrincipal ?? false,
              tipoPropiedadId: p.tipoPropiedadId ?? "",
              categoriaId: p.categoriaId ?? "",
              userId: p.userId ?? "",
              images:
                p.images?.map((img) => ({
                  id: Number(img.id),
                  url: img.url,
                  type: img.type ?? undefined,
                })) ?? [],
            }))}
            currentPage={1}
            totalPages={1}
          />
        </>
      )}
      <iframe
        src={geolink}
        width="1114"
        height="400"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full"
      />
    </div>
  );
};
