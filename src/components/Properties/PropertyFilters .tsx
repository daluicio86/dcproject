"use client";

import { Categoria } from "@/interface";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const enumRentaVenta = [
    { id: "1", name: "Renta" },
    { id: "2", name: "Venta" },
    { id: "3", name: "Inversores de propiedades" }
];

const enumClima = [
    { id: "1", name: "Seco 10.20°" },
    { id: "2", name: "Seco 10.25°" },
    { id: "3", name: "SubTropical 10.30°" },
    { id: "4", name: "Húmedo 60%" },
];

interface Props {
    categories: Categoria[];
    tiposPropiedad: TipoPropiedad[];
}


export function PropertyFilters({ categories, tiposPropiedad }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { t } = useTranslation();

    const [categoria, setCategoria] = useState(searchParams.get("categoria") || "");
    const [rentaVenta, setRentaVenta] = useState(searchParams.get("rentaVenta") || "");
    const [temperatura, setTemperatura] = useState(searchParams.get("temperatura") || "");
    const [tipoPropiedad, setTipoPropiedad] = useState(searchParams.get("tipoPropiedad") || "");

    const [precioMin, setPrecioMin] = useState(searchParams.get("precioMin") || "");
    const [precioMax, setPrecioMax] = useState(searchParams.get("precioMax") || "");

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        if (categoria) params.set("categoria", categoria);
        else params.delete("categoria");

        if (rentaVenta) params.set("rentaVenta", rentaVenta);
        else params.delete("rentaVenta");

        if (temperatura) params.set("temperatura", temperatura);
        else params.delete("temperatura");

        if (tipoPropiedad) params.set("tipoPropiedad", tipoPropiedad);
        else params.delete("tipoPropiedad");

        if (precioMin) params.set("precioMin", precioMin);
        else params.delete("precioMin");

        if (precioMax) params.set("precioMax", precioMax);
        else params.delete("precioMax");

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <section className='pt-0!'>
            <div className="text-center bg-cover pb-20 relative overflow-x-hidden">
                <div className='justify-center mx-auto w-full lg:w-2/3 xl:w-1/2 px-4'>
                    <form onSubmit={handleFilter}>
                        <div className='flex flex-col lg:flex-row gap-6'>
                            <select
                                onChange={(e) => setRentaVenta(e.target.value)}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    {t("propiedadForm.selectRentaVenta")}
                                </option>
                                {enumRentaVenta ? (
                                    enumRentaVenta.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No esta definida la renta o venta
                                </option>}
                            </select>
                            <select
                                onChange={(e) => setTemperatura(e.target.value)}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    {t("propiedadForm.selectClimate")}
                                </option>
                                {enumClima ? (
                                    enumClima.map((tipo) => (
                                        <option key={tipo.id} value={tipo.id}>
                                            {tipo.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    Clima no definido
                                </option>}
                            </select>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-6 mt-5'>
                            <select
                                onChange={(e) => setCategoria(e.target.value)}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    {t("propiedadForm.selectCategory")}
                                </option>
                                {categories ? (
                                    categories.map((categoria) => (
                                        <option key={categoria.id} value={categoria.id}>
                                            {categoria.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No existen categorías
                                </option>}
                            </select>
                            <select
                                onChange={(e) => setTipoPropiedad(e.target.value)}
                                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                            >
                                <option key={-1} value=''>
                                    Selecciona Tipo Propiedad
                                </option>
                                {tiposPropiedad ? (
                                    tiposPropiedad.map((tipo) => (
                                        <option key={tipo.id} value={tipo.id}>
                                            {tipo.name}
                                        </option>
                                    ))
                                ) : <option key={-1} value=''>
                                    No existen tipos de propiedad
                                </option>}
                            </select>
                        </div>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-5'>
                            <input
                                type="number"
                                placeholder="Precio mín."
                                value={precioMin}
                                onChange={(e) => setPrecioMin(e.target.value)}
                                className="border p-2 rounded w-32"
                            />
                            <input
                                type="number"
                                placeholder="Precio máx."
                                value={precioMax}
                                onChange={(e) => setPrecioMax(e.target.value)}
                                className="border p-2 rounded w-32"
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-5'>
                            
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-5'>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Filtrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
