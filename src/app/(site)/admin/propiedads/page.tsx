import { getPaginatedPropiedadsWithImages } from '@/actions/propiedad/propiedad-pagination';
import PropiedadListing from '@/components/Propiedad/PropiedadList';
import HeroSub from '@/components/shared/HeroSub';
import Link from 'next/link';
import React from 'react'

interface Props {
    searchParams: {
        page?: string;
    };
}

//export default async function PropiedadesPage({ searchParams }: Props) {
export default async function PropiedadPage({
    params
}: {
    params: Promise<{ page: number }>
}) {

    const { page } = await params;

    const {
        propiedads = [],
        currentPage = 1,
        totalPages = 1,
    } = (await getPaginatedPropiedadsWithImages({ page })) ?? {};
    return (
        <>
            <HeroSub
                title="Gestión de Propiedades"
                description="Administra y organiza tus propiedades de manera eficiente."
                badge="Propiedades"
            />
            <div className="flex justify-end mb-5">
                <Link href="/admin/propiedad/new"
                    className="px-8 py-4 rounded-full bg-primary text-white
                                text-base font-semibold hover:cursor-pointer
                                hover:bg-dark duration-300"
                >
                    Nuevo
                </Link>
            </div>
            <PropiedadListing
                propiedads={propiedads.map((p: any) => ({
                    ...p,
                    ubicacion: p.ubicacion === null ? undefined : p.ubicacion,
                }))}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    )
}
