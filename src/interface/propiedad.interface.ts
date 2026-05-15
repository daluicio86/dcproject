export interface Propiedad {
  id: string;
  title: string;
  titleEn?: string | null;
  titleDe?: string | null;
  slug: string;
  description?: string;
  descriptionEn?: string | null;
  descriptionDe?: string | null;
  apto?: string;
  aptoEn?: string | null;
  aptoDe?: string | null;
  precio: number | null;
  metros: number;
  area: number;
  altura: number;
  address: string;
  addressEn?: string | null;
  addressDe?: string | null;
  geoLink: string;
  esPrincipal: boolean;
  tipoPropiedadId: string;
  tipoMedida?: string;
  tipoMedida1?: string;
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
  type?: string;
}
