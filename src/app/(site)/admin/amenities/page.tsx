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
    searchParams?: {
        page?: string;
    }
}

export default async function CategoriesPage({ searchParams }: Props) {
    const params = await searchParams; // 👈 resolver la Promise
    const page = params?.page ? parseInt(params.page) : 1;

    const { amenities, currentPage, totalPages } = await getPaginatedAmenities({ page });

    /*if (!categories || categories.length === 0) {
        redirect('/admin/category');
    }*/

    return (
        <>
            <HeroSub
                title="Gestión de servicios"
                description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva."
                badge="Servicios"
            />
            <AmenitiesListing items={amenities} />
            <Pagination totalPages={totalPages} />
        </>
    );
};

