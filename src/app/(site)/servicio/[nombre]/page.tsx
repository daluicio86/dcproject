
import { redirect } from 'next/navigation';
import React from 'react'
import { getServicioByNombre } from '@/actions/servicio/get-servicio-by-slug';
import { getCiudades } from '@/actions/ciudad/get-ciudad';
import { ServicioForm } from '../../admin/servicio/[nombre]/ui/ServicioForm';
import ServicioListing from '@/components/Servicio/ServicioList';
import ServicioDetail from '@/components/Servicio/Card/Detail';


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
    if (!servicio) {
        redirect('/servicios')
    }
    //const title = !servicio ? 'Nueva servicio' : 'Editar servicio'
    return (
        <>
            <ServicioDetail item={servicio!} />
        </>
    )
}
