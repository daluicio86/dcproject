import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Pagination } from "@/components/Tables/Pagination";
import { getPaginatedAmenities } from "@/actions/amenitie/amenitie-pagination";
import AmenitiesListing from "@/components/Amenities/AmenitieList";
export const metadata: Metadata = {
    title: "Lista de servicios| Buying and selling",
};

export default async function AmenitiesPage({
    params,
}: {
    params: Promise<{ page?: string }>
}) {
    const { page } = await params;
    //const pageNumber = page ? parseInt(page) : 1;

    const { amenities, /*currentPage, */totalPages } = await getPaginatedAmenities({ page });

    return (
        <>
            <HeroSub
                title="Gestión de Amenities"
                description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva."
                badge="Amenities"
            />
            <AmenitiesListing items={amenities} />
            <Pagination totalPages={totalPages} />
        </>
    );
};

