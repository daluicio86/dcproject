
import { redirect } from 'next/navigation';
import React from 'react'
import { PropiedadForm } from './ui/PropiedadForm';
import { getCategories } from "@/actions/categories/get-categories";
import { getAmenities } from '@/actions/amenitie/get-amenitie';
import { getTiposPropiedad } from '@/actions/tipoPropiedad/get-tipoPropiedad';
import { getPropiedadBySlug } from '@/actions';
import { getCiudades } from '@/actions/ciudad/get-ciudad';


interface Props {
    params: {
        slug: string;
    }
}
//export default async function PropiedadPage({ params }: Props) {


export default async function PropiedadPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const [propiedad, categories, amenities, tiposPropiedad, ciudades] = await Promise.all([
        getPropiedadBySlug(slug),
        getCategories(2),
        getAmenities(),
        getTiposPropiedad(),
        getCiudades()
    ]);

    /*if (!propiedad) {
        redirect('/admin/propiedads');
    }*/

    // Todo: new
    if (!propiedad && slug !== 'new') {
        redirect('/admin/propiedads')
    }
    return (
        <>
            {/*<div>{title}</div>*/}
            <PropiedadForm
                propiedad={
                    propiedad
                        ? {
                            ...propiedad,
                            address: propiedad.address === null ? undefined : propiedad.address,
                            temperatura: propiedad.temperatura === null ? undefined : propiedad.temperatura,
                            rentaVenta: propiedad.rentaVenta === null ? undefined : propiedad.rentaVenta,
                            apto: propiedad.apto === null ? undefined : propiedad.apto,
                            description: propiedad.description === null ? undefined : propiedad.description,
                            userId: propiedad.userId === null ? undefined : propiedad.userId,
                        }
                        : {}
                }
                ciudades={ciudades ?? []}
                categories={categories ?? []}
                amenities={amenities ?? []}
                tiposPropiedad={tiposPropiedad ?? []}
            />
        </>
    )
}
