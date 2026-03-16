import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { getPaginatedPropiedadsWithImages } from "@/actions/propiedad/propiedad-pagination";
import { PropertyFilters } from "@/components/Properties/PropertyFilters ";
import { getCategories } from "@/actions/categories/get-categories";
import { getTiposPropiedad } from "@/actions/tipoPropiedad/get-tipoPropiedad";
import PropiedadList from "@/components/Propiedad/PropiedadList";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: "List of properties | Buying and selling",
};

type SearchParams = {
  page?: string;
  rentaVenta?: string;
  temperatura?: string;
  tipoPropiedad?: string;
  categoria?: string;
  precioMin?: string;
  precioMax?: string;
};

/** ✅ Cache: cosas “estáticas” que no cambian a cada rato */
const getCategoriesCached = unstable_cache(
  async () => getCategories(2),
  ["categories-2"],
  { revalidate: 60 * 60 }, // 1 hora
);

const getTiposPropiedadCached = unstable_cache(
  async () => getTiposPropiedad(),
  ["tipos-propiedad"],
  { revalidate: 60 * 60 }, // 1 hora
);

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  /** ✅ Esto ya NO consultará a DB cada render */
  const [categories, tiposPropiedad] = await Promise.all([
    getCategoriesCached(),
    getTiposPropiedadCached(),
  ]);

  const page = params.page ? parseInt(params.page, 10) : 1;
  const rentaVenta = params.rentaVenta || undefined;
  
  const temperatura = params.temperatura || undefined;
  const tipoPropiedad = params.tipoPropiedad || undefined;
  const categoria = params.categoria || undefined;

  const precioMin = params.precioMin ? parseInt(params.precioMin, 10) : 0;
  const precioMax = params.precioMax
    ? parseInt(params.precioMax, 10)
    : 100000000000000;

  /** 🔁 Esta consulta se hace por request (normal para listado paginado con filtros) */
  const { propiedads, currentPage, totalPages } =
    await getPaginatedPropiedadsWithImages({
      page,
      rentaVenta,
      temperatura,
      tipoPropiedad,
      categoriaId: categoria,
      precioMinimo: precioMin,
      precioMaximo: precioMax,
    });

  return (
    <>
      <HeroSub
        title="Discover inspiring designed homes."
        description="Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living."
        badge="Properties"
      />

      <PropertyFilters
        categories={categories ?? []}
        tiposPropiedad={tiposPropiedad ?? []}
      />

      {!propiedads || propiedads.length === 0 ? (
        <div className="mx-20">
          <h1 className="text-center text-gray-500">
            No properties were found.
          </h1>
        </div>
      ) : (
        <PropiedadList
          propiedads={propiedads.map((p) => ({
            ...p,
            rentaVenta: p.rentaVenta === null ? undefined : p.rentaVenta,
            temperatura: p.temperatura === null ? undefined : p.temperatura,
            tipoMedida: p.tipoMedida === null ? undefined : p.tipoMedida,
            tipoMedida1: p.tipoMedida1 === null ? undefined : p.tipoMedida1,
            area: p.area === null ? undefined : p.area,
            ciudadId: p.ciudadId === null ? undefined : p.ciudadId,
            geoLink: p.geoLink ?? "",
            images:
              p.images?.map((img) => ({
                id: img.id,
                url: img.url,
                type: img.type ?? undefined,
              })) ?? [],
          }))}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
