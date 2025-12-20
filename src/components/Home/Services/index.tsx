
"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getPaginatedCiudades } from "@/actions/ciudad/ciudad-pagination";
import { Ciudad } from "@/interface";


const Servicios = () => {
  const { t } = useTranslation();
  const page = 1;

  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getPaginatedCiudades({ page });
        if (!mounted) return;
        const fetched = res.ciudades ?? [];
        const normalized: Ciudad[] = fetched.map((c: any) => ({
          id: c.id,
          nombre: c.nombre,
          url: c.url ?? null,
          servicios: c.servicios ?? [],
          propiedades: c.propiedades ?? [],
        }));
        setCiudades(normalized);
        setCurrentPage(res.currentPage ?? 1);
        setTotalPages(res.totalPages ?? 1);
      } catch (error) {
        console.error("Failed to load ciudades", error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [page]);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-4 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
              Ecuador
            </p>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-12 items-center gap-10">
          {ciudades?.map((item) => (
            <div key={item.id} className="lg:col-span-4 col-span-12">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href={`/ciudades/${item.nombre}`}>
                  <Image
                    src={item.url || ""}
                    alt="ciudades"
                    width={680}
                    height={386}
                    className="w-full h-80"
                    unoptimized={true}
                  />
                </Link>
                <Link href={`/ciudades/${item.nombre}`} className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                  <div className="flex justify-end mt-6 mr-6">
                    <div className="bg-white text-dark rounded-full w-fit p-4">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">
                      {item.nombre}
                    </h3>
                    <p className="text-white/80 text-base leading-6">
                      y sus cercanías.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Servicios;
