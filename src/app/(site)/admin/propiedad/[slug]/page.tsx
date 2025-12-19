
import React from 'react'
import { PropiedadForm } from './ui/PropiedadForm';
import { getCategories } from "@/actions/categories/get-categories";
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
    const cleanSlug = decodeURIComponent(slug).replace(/\s+/g, "-").toLowerCase().trim();

    const [propiedad, categories, tiposPropiedad, ciudades] = await Promise.all([
        getPropiedadBySlug(cleanSlug),
        getCategories(2),
        getTiposPropiedad(),
        getCiudades()
    ]);

    /*if (!propiedad) {
        redirect('/admin/propiedads');
    }

    if (!propiedad && slug !== 'new') {
        redirect('/admin/propiedads')
    }*/


    return (
        <>
            {/*<div>{title}</div>*/}
            <PropiedadForm
                propiedad={
                    propiedad
                        ? {
                            ...propiedad,
                            address: propiedad.address ?? undefined,
                            temperatura: propiedad.temperatura ?? undefined,
                            rentaVenta: propiedad.rentaVenta ?? undefined,
                            apto: propiedad.apto ?? undefined,
                            description: propiedad.description ?? undefined,
                            userId: propiedad.userId ?? undefined,
                            geoLink: propiedad.geoLink ?? undefined,
                            tipoMedida: propiedad.tipoMedida ?? undefined,
                            ciudadId: propiedad.ciudadId ?? undefined,
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
