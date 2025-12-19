export interface Propiedad {
  id: string;
  title: string;
  slug: string;
  description?: string;
  apto?: string;
  precio: number | null;
  metros: number;
  altura: number;
  address: string;
  geoLink: string;
  esPrincipal: boolean;
  tipoPropiedadId: string;
  tipoMedida: string;
  //ubicacion?: string;
  rentaVenta?: string;
  temperatura?: string;

  ciudadId?: string;

  categoriaId: string;
  userId: string;
  images: string[];
  amenities?: { id: string; name: string }[];
  sevicios?: { id: string; nombre: string }[];
}

export interface PropiedadImage {
  id: number;
  url: string;
  type?: string; // "image" | "video"
}
