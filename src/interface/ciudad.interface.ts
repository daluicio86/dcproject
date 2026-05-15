import { PropiedadImage } from "./propiedad.interface";

export interface Ciudad {
  id: string;
  nombre: string;
  descripcion?: string;
  url: string | null;
  servicios: { id: string; nombre: string }[];
  propiedades: { id: string; title: string; images: PropiedadImage[] }[];
}
