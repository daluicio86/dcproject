"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Propiedad } from "@/interface";

function formatPriceEcuador(value: number | string) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + " USD";
}

const PropiedadCard: React.FC<{ item: Propiedad }> = ({ item }) => {
  const {
    title,
    slug,
    apto,
    precio,
    tipoMedida,
    metros,
    altura,
    address,
    images,
  } = item;
  const { data: session } = useSession();
  const { t } = useTranslation();

  let url = `/admin/propiedad/${slug}`;
  if (!session || session.user?.role !== "admin") url = `/properties/${slug}`;

  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => api?.scrollTo(index);

  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10
          bg-white/80 dark:bg-white/5 backdrop-blur
          shadow-sm hover:shadow-xl dark:hover:shadow-white/10
          transition-all duration-300
        "
      >
        {/* MEDIA */}
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
            <CarouselContent>
              {images.map((ele, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[320px] overflow-hidden rounded-t-2xl">
                    {ele.url.includes(".mp4") ? (
                      <video
                        src={ele.url}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={ele.url}
                        alt={title ?? index.toString()}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    )}

                    {/* Overlay gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    {/* Top badges */}
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                        <Icon
                          icon="solar:tag-price-linear"
                          width={16}
                          height={16}
                        />
                        ${precio !== null ? formatPriceEcuador(precio) : "N/A"}
                      </span>

                      {!!apto && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                          <Icon
                            icon="solar:verified-check-linear"
                            width={16}
                            height={16}
                          />
                          Terreno apto: {apto}
                        </span>
                      )}
                    </div>

                    {/* Hover CTA icon */}
                    <div className="absolute right-4 top-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/95 shadow-md">
                        <Icon
                          icon="solar:arrow-right-linear"
                          width={22}
                          height={22}
                          className="text-black"
                        />
                      </div>
                    </div>

                    {/* Navigation buttons (optional) */}
                    {count > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => api?.scrollPrev()}
                          className="
                              absolute left-3 top-1/2 -translate-y-1/2
                              grid h-10 w-10 place-items-center rounded-full
                              bg-white/85 hover:bg-white shadow
                              opacity-0 group-hover:opacity-100 transition
                            "
                          aria-label="Anterior"
                        >
                          <Icon
                            icon="solar:alt-arrow-left-linear"
                            width={22}
                            height={22}
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() => api?.scrollNext()}
                          className="
                              absolute right-3 top-1/2 -translate-y-1/2
                              grid h-10 w-10 place-items-center rounded-full
                              bg-white/85 hover:bg-white shadow
                              opacity-0 group-hover:opacity-100 transition
                            "
                          aria-label="Siguiente"
                        >
                          <Icon
                            icon="solar:alt-arrow-right-linear"
                            width={22}
                            height={22}
                          />
                        </button>
                      </>
                    )}

                    {/* Dots */}
                    {count > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur">
                          {Array.from({ length: count }).map((_, index) => {
                            const active = current === index + 1;
                            return (
                              <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={[
                                  "h-2.5 rounded-full transition-all",
                                  active
                                    ? "w-7 bg-white"
                                    : "w-2.5 bg-white/55 hover:bg-white/80",
                                ].join(" ")}
                                aria-label={`Ir a la imagen ${index + 1}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Link href={url}>
                <h3 className="truncate text-lg font-semibold text-black dark:text-white group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </Link>
              <p className="mt-1 flex items-center gap-1 text-sm text-black/60 dark:text-white/60">
                <Icon icon="solar:map-point-linear" width={16} height={16} />
                <span className="truncate">{address}</span>
              </p>
            </div>

            {/* Small chip to show count */}
            {count > 0 && (
              <span className="shrink-0 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-black/70 dark:text-white/70">
                {current}/{count}
              </span>
            )}
          </div>

          {/* Stats */}
          {/*<div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] p-3">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/10">
                <Icon icon="solar:bed-linear" width={18} height={18} />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-black/55 dark:text-white/55">
                  Apto
                </p>
                <p className="text-sm font-semibold text-black dark:text-white truncate">
                  {apto}
                </p>
              </div>
            </div>
          </div>*/}
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] p-3">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/10">
                <Icon
                  icon="lineicons:arrow-all-direction"
                  width={18}
                  height={18}
                />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-black/55 dark:text-white/55">
                  Área
                </p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {metros}
                  {tipoMedida === "ha" ? (
                    "ha"
                  ) : (
                    <>
                      m<sup>2</sup>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/10">
                <Icon icon="lineicons:arrow-up" width={18} height={18} />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-black/55 dark:text-white/55">
                  Altura
                </p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {altura} msnm
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-black/50 dark:text-white/50">
              {t("Ver detalles") ?? "Ver detalles"}
            </span>

            <Link
              href={url}
              className="
                inline-flex items-center gap-2 rounded-full
                bg-primary px-4 py-2 text-sm font-semibold text-white
                hover:opacity-95 active:scale-[0.98] transition
              "
            >
              {t("Explorar") ?? "Explorar"}
              <Icon icon="solar:arrow-right-linear" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropiedadCard;
