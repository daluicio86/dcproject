"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Propiedad } from "@/interface"; // ajusta esta ruta si hace falta
import { deletePropiedad } from "@/actions/propiedad/delete-propiedad";

function formatPriceEcuador(value: number | string) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + " USD";
}

const PropiedadAdminCard: React.FC<{ item: Propiedad }> = ({ item }) => {
  const {
    id,
    title,
    slug,
    apto,
    precio,
    tipoMedida,
    tipoMedida1,
    metros,
    area,
    altura,
    address,
    images,
  } = item;

  const { t } = useTranslation();
  const router = useRouter();

  const url = `/admin/propiedad/${slug}`;

  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => api?.scrollTo(index);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "¿Seguro que quieres eliminar esta propiedad?"
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);

      const resp = await deletePropiedad(id);

      if (!resp.ok) {
        alert(resp.message || "No se pudo eliminar la propiedad");
        return;
      }

      alert("Propiedad eliminada correctamente");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al eliminar la propiedad");
    } finally {
      setIsDeleting(false);
    }
  };

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
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
            <CarouselContent>
              {images.map((ele, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[320px] w-full overflow-hidden rounded-t-2xl">
                    {ele.url.includes(".mp4") ? (
                      <video
                        src={ele.url}
                        controls
                        className="h-full w-full object-cover"
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

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

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

                    <div className="absolute right-4 top-4 opacity-0 translate-y-1 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/95 shadow-md">
                        <Icon
                          icon="solar:arrow-right-linear"
                          width={22}
                          height={22}
                          className="text-black"
                        />
                      </div>
                    </div>

                    {count > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => api?.scrollPrev()}
                          className="
                            absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center
                            rounded-full bg-white/85 shadow transition hover:bg-white
                            opacity-0 group-hover:opacity-100
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
                            absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center
                            rounded-full bg-white/85 shadow transition hover:bg-white
                            opacity-0 group-hover:opacity-100
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

                    {count > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur">
                          {Array.from({ length: count }).map((_, index) => {
                            const active = current === index + 1;
                            return (
                              <button
                                key={index}
                                type="button"
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

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Link href={url}>
                <h3 className="truncate text-lg font-semibold text-black transition-colors group-hover:text-primary dark:text-white">
                  {title}
                </h3>
              </Link>
              <p className="mt-1 flex items-center gap-1 text-sm text-black/60 dark:text-white/60">
                <Icon icon="solar:map-point-linear" width={16} height={16} />
                <span className="truncate">{address}</span>
              </p>
            </div>

            {count > 0 && (
              <span className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70 dark:bg-white/10 dark:text-white/70">
                {current}/{count}
              </span>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-black/10 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-white/10">
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
                  {tipoMedida === "ft" ? "ft" : <>m<sup>2</sup></>}
                </p>

                {Number(area) > 0 && (
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {area}
                    {tipoMedida1 === "ha" ? "ha" : "acres"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-white/10">
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

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="
                inline-flex items-center gap-2 rounded-full
                bg-red-600 px-4 py-2 text-sm font-semibold text-white
                transition hover:bg-red-700 active:scale-[0.98]
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              {isDeleting ? "Eliminando..." : t("Eliminar")}
              <Icon
                icon="solar:trash-bin-trash-linear"
                width={18}
                height={18}
              />
            </button>

            <Link
              href={url}
              className="
                inline-flex items-center gap-2 rounded-full
                bg-primary px-4 py-2 text-sm font-semibold text-white
                transition hover:opacity-95 active:scale-[0.98]
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

export default PropiedadAdminCard;