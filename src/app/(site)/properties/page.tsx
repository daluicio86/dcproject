import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
import { getPaginatedPropiedadsWithImages } from "@/actions/propiedad/propiedad-pagination";
import { Pagination } from "@/components/Tables/Pagination";
import { PropertyFilters } from "@/components/Properties/PropertyFilters ";
import { getCategories } from "@/actions/categories/get-categories";
import { getTiposPropiedad } from "@/actions/tipoPropiedad/get-tipoPropiedad";
import PropiedadAdminList from "@/components/Propiedad/PropiedadAdminList";
import PropiedadList from "@/components/Propiedad/PropiedadList";

export const metadata: Metadata = {
    title: "Lista de propiedades| Buying and selling",
};

interface SearchParams {
    page?: string;
    rentaVenta?: string;
    temperatura?: string;
    tipoPropiedad?: string;
    categoria?: string;
    precioMin?: string;
    precioMax?: string;
}

export default async function PropertiesPage({
    searchParams
}: {
    searchParams: Promise<SearchParams>
}) {
    // Desestructurar la Promise
    const params = await searchParams;

    const [categories, tiposPropiedad] = await Promise.all([
        getCategories(2),
        getTiposPropiedad()
    ]);

    const page = params?.page ? parseInt(params.page) : 1;
    const rentaVenta = params?.rentaVenta ? params.rentaVenta : undefined;
    const temperatura = params?.temperatura ? params.temperatura : undefined;
    const tipoPropiedad = params?.tipoPropiedad ? params.tipoPropiedad : undefined;
    const categoria = params?.categoria ? params.categoria : undefined;
    const precioMin = params?.precioMin ? parseInt(params.precioMin) : 0;
    const precioMax = params?.precioMax ? parseInt(params.precioMax) : 10000000;

    const { propiedads, currentPage, totalPages } = await getPaginatedPropiedadsWithImages({
        page,
        rentaVenta,
        temperatura,
        tipoPropiedad,
        categoriaId: categoria,
        precioMinimo: precioMin,
        precioMaximo: precioMax
    });

    return (
        <>
            <HeroSub
                title="Discover inspiring designed homes."
                description="Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living."
                badge="Properties"
            />
            <PropertyFilters categories={categories ?? []} tiposPropiedad={tiposPropiedad ?? []} />
            {!propiedads || propiedads.length === 0 ? (
                <div className="mx-20">
                    <h1 className="text-center text-gray-500">No se encontraron propiedades.</h1>
                </div>
            ) : (
                <>
                    <PropiedadList
                        propiedads={propiedads.map(p => ({
                            ...p,
                            rentaVenta: p.rentaVenta === null ? undefined : p.rentaVenta,
                            temperatura: p.temperatura === null ? undefined : p.temperatura,
                            tipoMedida: p.tipoMedida === null ? undefined : p.tipoMedida,
                            ciudadId: p.ciudadId === null ? undefined : p.ciudadId,
                            geoLink: p.geoLink ?? "",
                            images: p.images?.map((img) => ({
                                id: img.id,
                                url: img.url,
                                type: img.type ?? undefined,
                            })) ?? [],

                        }))}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    <Pagination totalPages={totalPages} />
                </>
            )}
        </>
    );
}