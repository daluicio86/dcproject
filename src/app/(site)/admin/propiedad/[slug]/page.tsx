
import { redirect } from 'next/navigation';
import React from 'react'
import { PropiedadForm } from './ui/PropiedadForm';
import { getCategories } from "@/actions/categories/get-categories";
import { getAmenities } from '@/actions/amenitie/get-amenitie';
import { getTiposPropiedad } from '@/actions/tipoPropiedad/get-tipoPropiedad';
import { getPropiedadBySlug } from '@/actions';
import { getCiudades } from '@/actions/ciudad/get-ciudad';


/*interface Props {
    params: {
        slug: string;
    }
}*/
//export default async function PropiedadPage({ params }: Props) {


export default async function PropiedadPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
            
    const { slug } = await params;

    const [propiedad, categories, tiposPropiedad, ciudades] = await Promise.all([
        getPropiedadBySlug(slug),
        getCategories(2),
        getTiposPropiedad(),
        getCiudades()
    ]);

    /*if (!propiedad) {
        redirect('/admin/propiedads');
    }*/

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
                            geoLink: propiedad.geoLink === null ? undefined : propiedad.geoLink,
                        }
                        : {}
                }
                ciudades={Array.isArray(ciudades) ? ciudades.map(ciudad => ({
                    ...ciudad,
                    descripcion: ciudad.descripcion === null ? undefined : ciudad.descripcion,
                    propiedades: ciudad.propiedades.map(prop => ({
                        id: prop.id,
                        title: prop.title,
                        images: []
                    }))
                })) : []}
                categories={categories ?? []}
                //amenities={amenities ?? []}
                tiposPropiedad={tiposPropiedad ?? []}
            />
        </>
    )
}
