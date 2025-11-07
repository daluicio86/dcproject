
import { getPaginatedServiciosWithImages } from '@/actions/servicio/servicio-pagination';
import ServicioListing from '@/components/Servicio/ServicioList';
import HeroSub from '@/components/shared/HeroSub';
import Link from 'next/link';
import React from 'react'

interface Props {
    searchParams: {
        page?: string;
    };
}

export default async function ServiciosPage({ searchParams }: Props) {
    const params = await searchParams
    const page = Number(params.page ?? "1");

    const {
        servicios = [],
        currentPage = 1,
        totalPages = 1,
    } = (await getPaginatedServiciosWithImages({ page })) ?? {};
    return (
        <>
            <HeroSub
                title="Gestión de Servicios"
                description="Administra y organiza tus servicios de manera eficiente."
                badge="Servicios"
            />
            <div className="flex justify-end mb-5">
                <Link href="/admin/servicio/new"
                    className="px-8 py-4 rounded-full bg-primary text-white
                                text-base font-semibold hover:cursor-pointer
                                hover:bg-dark duration-300"
                >
                    Nuevo
                </Link>
            </div>
            <ServicioListing
                servicios={servicios.map((p: any) => ({
                    ...p,
                }))}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    )
}
