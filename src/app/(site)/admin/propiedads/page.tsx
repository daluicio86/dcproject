import { getPaginatedPropiedadsWithImages } from '@/actions/propiedad/propiedad-pagination';
import PropiedadListing from '@/components/Propiedad/PropiedadList';
import HeroSub from '@/components/shared/HeroSub';
import Link from 'next/link';
import React from 'react'
import PropiedadAdminList from '@/components/Propiedad/PropiedadAdminList';

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export const dynamic = 'force-dynamic';

export default async function PropiedadPage({ searchParams }: Props) {
    const { page: pageParam } = await searchParams;
    const page = pageParam ? parseInt(pageParam) : 1;

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
            <PropiedadAdminList
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
