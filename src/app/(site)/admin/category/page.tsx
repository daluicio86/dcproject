import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Pagination } from "@/components/Tables/Pagination";
import CategoriesListing from '@/components/Categories/CategoryList';
import { getPaginatedCategories } from "@/actions/categories/category-pagination";

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

    const { categories, totalPages } = await getPaginatedCategories({ page: pageNumber });

    return (
        <>
            <HeroSub
                title="Gestión de categorías"
                description="Gestiona tus categorías fácilmente con nuestra plataforma intuitiva."
                badge="Categorías"
            />
            <CategoriesListing items={categories} />
            <Pagination totalPages={totalPages} />
        </>
    );
};