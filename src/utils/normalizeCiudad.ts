export function normalizeCiudad<T extends { descripcion?: string | null; latitud?: string | null; longitud?: string | null; propiedades?: any[] }>(
    ciudad: T
): Omit<T, 'descripcion' | 'latitud' | 'longitud'> & { 
    descripcion?: string; 
    latitud?: string; 
    longitud?: string;
    propiedades?: Array<any>;
} {
    return {
        ...ciudad,
        descripcion: ciudad.descripcion ?? undefined,
        latitud: ciudad.latitud ?? undefined,
        longitud: ciudad.longitud ?? undefined,
        propiedades: ciudad.propiedades?.map(propiedad => ({
            ...propiedad,
            rentaVenta: propiedad.rentaVenta ?? undefined,
            temperatura: propiedad.temperatura ?? undefined,
        })) ?? []
    };
}

export function normalizeCiudades(ciudades: any[]) {
    return ciudades.map(normalizeCiudad);
}