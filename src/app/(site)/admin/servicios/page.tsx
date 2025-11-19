import { getPaginatedServiciosWithImages } from '@/actions/servicio/servicio-pagination';
import ServicioListing from '@/components/Servicio/ServicioList';
import HeroSub from '@/components/shared/HeroSub';
import Link from 'next/link';
import React from 'react'

export default async function ServiciosPage({ 
    searchParams 
}: { 
    searchParams?: Promise<{ 
        page?: string;
        rentaVenta?: string;
        temperatura?: string;
        tipoPropiedad?: string;
        categoria?: string;
        precioMin?: string;
        precioMax?: string;
    }> 
}) {
    // Desestructurar después del await
    const params = await searchParams;
    const page = params?.page;
    const pageNumber = Number(page ?? "1");

    const {
        servicios = [],
        currentPage = 1,
        totalPages = 1,
    } = (await getPaginatedServiciosWithImages({ page: pageNumber })) ?? {};
    
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
                servicios={servicios}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    )
}