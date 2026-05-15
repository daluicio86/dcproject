<<<<<<< HEAD
﻿export interface Propiedad {
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
=======
export interface Propiedad {
  id: string;
  title: string;
  slug: string;
  description?: string;
  apto?: string;
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
  precio: number | null;
  metros: number;
  area: number;
  altura: number;
  address: string;
<<<<<<< HEAD
  addressEn?: string | null;
  addressDe?: string | null;
=======
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
  geoLink: string;
  esPrincipal: boolean;
  tipoPropiedadId: string;
  tipoMedida?: string;
  tipoMedida1?: string;
<<<<<<< HEAD
  rentaVenta?: string;
  temperatura?: string;
  ciudadId?: string;
=======
  //ubicacion?: string;
  rentaVenta?: string;
  temperatura?: string;

  ciudadId?: string;

>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
  categoriaId: string;
  userId: string;
  images: PropiedadImage[];
  amenities?: { id: string; name: string }[];
  sevicios?: { id: string; nombre: string }[];
}

export interface PropiedadImage {
  id: number;
  url: string;
<<<<<<< HEAD
  type?: string;
=======
  type?: string; // "image" | "video"
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
}
