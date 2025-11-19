import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Pagination } from "@/components/Tables/Pagination";
import CiudadListing from "@/components/Ciudad/CiudadList";
import { getPaginatedCiudades } from "@/actions/ciudad/ciudad-pagination";

export const metadata: Metadata = {
    title: "Lista de ciudades| Buying and selling",
};

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function CiudadesPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const pageNumber = page ? parseInt(page) : 1;
    const { ciudades, currentPage, totalPages } = await getPaginatedCiudades({ page: pageNumber });

    return (
        <>
            <HeroSub
                title="Gestión de Ciudades"
                description="Gestiona tus ciudades fácilmente con nuestra plataforma intuitiva."
                badge="Ciudades"
            />
            <CiudadListing items={ciudades} />
            <Pagination totalPages={totalPages} />
        </>
    );
};