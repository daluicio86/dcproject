export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string | null;
  images: ServicioImage[];
  ciudadId: string;
}

export interface ServicioImage {
  url: string;
}
