
import { redirect } from 'next/navigation';
import React from 'react'
import { ServicioForm } from './ui/ServicioForm';
import { getServicioByNombre } from '@/actions/servicio/get-servicio-by-slug';
import { getCiudades } from '@/actions/ciudad/get-ciudad';


interface Props {
    params: {
        nombre: string;
    }
}
export default async function ServicioPage({ params }: Props) {

    const { nombre } = await params;
    const [servicio] = await Promise.all([
        getServicioByNombre(nombre),
    ]);

    const [ciudades] = await Promise.all([
        getCiudades(),
    ]);

    /*if (!servicio) {
        redirect('/admin/servicios');
    }*/

    // Todo: new
    if (!servicio && nombre !== 'new') {
        redirect('/admin/servicios')
    }
    //const title = !servicio ? 'Nueva servicio' : 'Editar servicio'
    return (
        <>
            {/*<div>{title}</div>*/}
            <ServicioForm
                servicio={servicio ? { ...servicio, } : {}}
                ciudades={ciudades ? { ...ciudades, } : {}}
            />
        </>
    )
}
