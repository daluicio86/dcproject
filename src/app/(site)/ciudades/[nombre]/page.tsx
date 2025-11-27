"use client";

import React, { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { getCiudadByName } from "@/actions/ciudad/get-ciudad-by-name";
import notFound from "@/app/not-found";
import { Ciudad, Propiedad } from "@/interface";
import { useTranslation } from "react-i18next";
import ServicioCardV1 from "@/components/Servicio/Card/CardV1";
import PropiedadCardV1 from "@/components/Propiedad/Card/CardV1";

export default function Details() {
  const { nombre } = useParams();

  const [item, setItem] = useState<Ciudad | null>(null);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCiudadByName(typeof nombre === "string" ? nombre : "");


        if (result) {

          const sanitized = (() => {
            const data = result as unknown as Record<string, unknown>;

            const getString = (v: unknown) => (typeof v === "string" ? v : "");
            const getId = (v: unknown) => (v != null ? String(v) : "");
            const getNumber = (v: unknown) => (typeof v === "number" ? v : 0);

            const toStringArray = (v: unknown) => {
              if (Array.isArray(v)) {
                return (v as unknown[])
                  .map((el) => {
                    if (typeof el === "string") return el;
                    if (el && typeof el === "object") {
                      const obj = el as Record<string, unknown>;
                      if (typeof obj["url"] === "string") return obj["url"] as string;
                    }
                    return "";
                  })
                  .filter(Boolean);
              }
              if (typeof v === "string") return [v];
              return [];
            };

            const servicios = Array.isArray(data["servicios"])
              ? (data["servicios"] as unknown[]).map((s) => {
                const obj = s as Record<string, unknown>;
                return {
                  id: getId(obj["id"] ?? obj["_id"]),
                  nombre: getString(obj["title"] ?? obj["nombre"] ?? obj["name"]),
                  images: toStringArray(obj["images"] ?? obj["url"]),
                  descripcion: getString(obj["descripcion"] ?? obj["description"]),
                };
              })
              : [];

            const propiedades = Array.isArray(data["propiedades"])
              ? (data["propiedades"] as Propiedad[]).map((p) => {
                const obj = p as Propiedad;
                return {
                  id: getId(obj["id"] ?? obj["_id"]),
                  title: getString(obj["title"]),
                  slug: getString(obj["slug"]),
                  precio: getNumber(obj["precio"]),
                  apto: getString(obj["apto"]),
                  metros: getNumber(obj["metros"]),
                  altura: getNumber(obj["altura"]),
                  address: getString(obj["address"]),
                  images: toStringArray(obj["images"]),
                };
              })
              : [];

            const urlField = data["url"];
            const urlArray = toStringArray(urlField);
            const finalUrl = urlArray.length === 0 ? "" : urlArray.length === 1 ? urlArray[0] : urlArray;



            return {
              ...("nombre" in data ? { nombre: getString(data["nombre"]) } : {}),
              ...("id" in data ? { id: getId(data["id"] ?? data["_id"]) } : {}),
              descripcion: getString(data["descripcion"] ?? data["description"]),
              url: finalUrl,
              servicios,
              propiedades,
            } as unknown as Ciudad;
          })();
          
          setItem(sanitized);
        } else {
          setItem(null);
          notFound();
        }
      } catch (error) {
        console.error("Error al obtener la ciudad:", error);
      }
    };

    fetchData();
  }, [nombre]);

  // 🔹 2️⃣ useEffect SEPARADO para manejar el carousel
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // 🔹 3️⃣ Función para manejar los puntos del carousel
  const handleDotClick = (index: number) => {
    if (api) api.scrollTo(index);
  };

  // 🔹 4️⃣ Render
  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        {/* Título y ubicación */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item?.nombre}
            </h1>
            <div className="flex gap-2.5">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-xm">
                {item?.descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            <div className="relative">
              <Image
                src={item?.url || "/images/properties/property-1.jpg"}
                alt={item?.nombre || "Ciudad Image"}
                width={250}
                height={250}
                className="rounded-2xl w-full h-96"
                unoptimized
              />

              <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Imagen secundaria */}
          <div className="lg:col-span-4 lg:block hidden">
            {item?.url && Array.isArray(item.url) && item.url[1] && (
              <Image
                src={item.url[1]}
                alt="Ciudad Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized
              />
            )}
          </div>
        </div>

        {/* Detalles */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">{t("ciudadDetalles")}</h3>
            {/* Servicios */}

            <div className="relative">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {item?.servicios?.map((ele, index) => (
                    <CarouselItem key={index} className="pl-2 md:basis-1/3 sm:basis-1/2 basis-full">
                      <ServicioCardV1 key={ele.id} item={ele as any} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>


              <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>


            {/*<div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
              <h3 className="text-xl font-medium">{t("ciudadCercanias")}</h3>
              <div className="grid grid-cols-3 mt-5 gap-6">
                {item?.servicios &&
                  item.servicios.map((service) => (
                    <ServicioCardV1 key={service.id} item={service as any} />
                  ))}
              </div>
            </div>*/}
          </div>

          {/* Favoritos */}
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <Link
                href="/contactus"
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
              >
                {t("btnText1")}
              </Link>
              <div className="absolute right-0 top-4 -z-[1]">
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Propiedades */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">{t("ciudadPropiedades")}</h3>
            {/* Servicios */}

            <div className="relative">
              {/* Debug: Propiedades Carousel Item logged outside of JSX to avoid returning void */}
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {item?.propiedades?.map((ele, index) => (
                    <CarouselItem key={index} className="pl-2 md:basis-1/3 sm:basis-1/2 basis-full">
                      <PropiedadCardV1 key={ele.id} item={ele as Propiedad} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>


              <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>


            {/*<div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
              <h3 className="text-xl font-medium">{t("ciudadCercanias")}</h3>
              <div className="grid grid-cols-3 mt-5 gap-6">
                {item?.servicios &&
                  item.servicios.map((service) => (
                    <ServicioCardV1 key={service.id} item={service as any} />
                  ))}
              </div>
            </div>*/}
          </div>

          {/* Favoritos */}
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <Link
                href="/contactus"
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
              >
                {t("btnText1")}
              </Link>
              <div className="absolute right-0 top-4 -z-[1]">
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
