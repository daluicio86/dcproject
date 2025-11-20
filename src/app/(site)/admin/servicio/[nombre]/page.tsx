import { redirect } from 'next/navigation';
import React from 'react'
import { ServicioForm } from './ui/ServicioForm';
import { getServicioByNombre } from '@/actions/servicio/get-servicio-by-slug';
import { getCiudades } from '@/actions/ciudad/get-ciudad';

interface Props {
    params: Promise<{ nombre: string }>;
}

export default async function ServicioPage({ params }: Props) {
    const { nombre } = await params;
    
    const [servicio, ciudades] = await Promise.all([
        getServicioByNombre(nombre),
        getCiudades(),
    ]);

    if (!servicio && nombre !== 'new') {
        redirect('/admin/servicios');
    }

    // Transformar las imágenes al tipo esperado por ServicioForm
    const servicioNormalizado = servicio ? {
        ...servicio,
        images: Array.isArray(servicio.images) 
            ? servicio.images.map((url: string, index: number) => ({
                id: index.toString(),
                url: url,
                servicioId: servicio.id
            }))
            : []
    } : {};

    return (
        <>
            <ServicioForm
                servicio={servicioNormalizado}
                ciudades={(ciudades ?? []).map(ciudad => ({
                    ...ciudad,
                    descripcion: ciudad.descripcion ?? undefined
                }))}
            />
        </>
    );
}