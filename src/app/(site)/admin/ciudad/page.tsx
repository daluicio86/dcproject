import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Pagination } from "@/components/Tables/Pagination";
import CiudadListing from "@/components/Ciudad/CiudadList";
import { getPaginatedCiudades } from "@/actions/ciudad/ciudad-pagination";
export const metadata: Metadata = {
    title: "Lista de servicios| Buying and selling",
};

interface Props {
    searchParams?: {
        page?: string;
    }
}

export default async function CiudadesPage({ searchParams }: Props) {
    const params = await searchParams; // 👈 resolver la Promise
    const page = params?.page ? parseInt(params.page) : 1;

    const { ciudades, currentPage, totalPages } = await getPaginatedCiudades({ page });


    /*if (!categories || categories.length === 0) {
        redirect('/admin/category');
    }*/

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

