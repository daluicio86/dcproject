import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Pagination } from "@/components/Tables/Pagination";
import { getPaginatedAmenities } from "@/actions/amenitie/amenitie-pagination";
import AmenitiesListing from "@/components/Amenities/AmenitieList";

export const metadata: Metadata = {
    title: "Lista de servicios| Buying and selling",
};

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function AmenitiesPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const pageNumber = page ? parseInt(page) : 1;

    const { amenities, totalPages } = await getPaginatedAmenities({ page: pageNumber });

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