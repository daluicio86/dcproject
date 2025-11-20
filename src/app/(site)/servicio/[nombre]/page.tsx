import { redirect } from 'next/navigation';
import React from 'react'
import { getServicioByNombre } from '@/actions/servicio/get-servicio-by-slug';
import { getCiudades } from '@/actions/ciudad/get-ciudad';
import ServicioDetail from '@/components/Servicio/Card/Detail';

interface Props {
    params: Promise<{
        nombre: string;
    }>;
}

export default async function ServicioPage({ params }: Props) {
    // Desestructurar la Promise
    const { nombre } = await params;

    const [servicio, ciudades] = await Promise.all([
        getServicioByNombre(nombre),
        getCiudades(),
    ]);

    if (!servicio) {
        redirect('/servicios');
    }

    return (
        <>
            <ServicioDetail item={{
                ...servicio,
                images: servicio.images.map((url: string) => ({ url, id: url }))
            }} />
        </>
    );
}