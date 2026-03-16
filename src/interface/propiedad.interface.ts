export interface Propiedad {
  id: string;
  title: string;
  slug: string;
  description?: string;
  apto?: string;
  precio: number | null;
  metros: number;
  area: number;
  altura: number;
  address: string;
  geoLink: string;
  esPrincipal: boolean;
  tipoPropiedadId: string;
  tipoMedida?: string;
  tipoMedida1?: string;
  //ubicacion?: string;
  rentaVenta?: string;
  temperatura?: string;

  ciudadId?: string;

  categoriaId: string;
  userId: string;
  images: PropiedadImage[];
  amenities?: { id: string; name: string }[];
  sevicios?: { id: string; nombre: string }[];
}

export interface PropiedadImage {
  id: number;
  url: string;
  type?: string; // "image" | "video"
}
