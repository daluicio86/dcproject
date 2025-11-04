import HeroSub from "@/components/shared/HeroSub";
import CategoriesListing from "@/components/Categories/CategoryList";
import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Pagination } from "@/components/Tables/Pagination";
import { getPaginatedCategories } from "@/actions/categories/category-pagination";
export const metadata: Metadata = {
    title: "Lista de categorias| Buying and selling",
};

interface Props {
    searchParams?: {
        page?: string;
    }
}

export default async function CategoriesPage({ searchParams }: Props) {
    const params = await searchParams; // 👈 resolver la Promise
    const page = params?.page ? parseInt(params.page) : 1;

    const { categories, currentPage, totalPages } = await getPaginatedCategories({ page });

    /*if (!categories || categories.length === 0) {
        redirect('/admin/category');
    }*/

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

