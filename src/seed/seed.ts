import bcryptjs from "bcryptjs";

interface SeedProperties {
  title: string;
  slug: string;
  description: string;
  apto: string;
  price: number;
  metros: number;
  altura: number;
  address: string;
  geoLink: string;
  categoriaId?: string;
  categoria: string;
  images?: string[];
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

interface SeedCategory {
  name: string;
  tipo: 1 | 2 | 3 | 4;
}

interface SeedAmenities {
  name: string;
  estado: boolean;
}

interface SeedTipoPropiedades {
  name: string;
  estado: boolean;
}

interface SeedData {
  users: SeedUser[];
  categories: SeedCategory[];
  properties: SeedProperties[];
  amenities: SeedAmenities[];
  tipoPropiedades: SeedTipoPropiedades[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "diego.aluicio@google.com",
      name: "Diego Aluicio",
      password: bcryptjs.hashSync("Alejandro*1"),
      role: "admin",
    },
    {
      email: "alejandro.sarduy@google.com",
      name: "Alejandro Sarduy",
      password: bcryptjs.hashSync("Alejandro*1"),
      role: "user",
    },
  ],
  categories: [
    { name: "General", tipo: 1 },
    { name: "Propiedades en la ciudad", tipo: 2 },
    { name: "Propiedades en el campo", tipo: 2 },
  ],
  amenities: [
    { name: "Bosque privado", estado: true },
    { name: "Río o quebrada natural", estado: true },
    { name: "Lago o estanque artificial", estado: true },
    { name: "Huerto orgánico", estado: true },
    { name: "Árboles frutales", estado: true },
    { name: "Senderos ecológicos", estado: true },
    { name: "Zona de camping", estado: true },
    { name: "Mirador panorámico", estado: true },
    { name: "Área de fogata", estado: true },
    { name: "Jardines ornamentales", estado: true },
    { name: "Casa principal amoblada", estado: true },
    { name: "Cabañas para huéspedes", estado: true },
    { name: "Piscina", estado: true },
    { name: "Jacuzzi exterior", estado: true },
    { name: "Área BBQ techada", estado: true },
    { name: "Terraza o pérgola", estado: true },
    { name: "Cocina campestre", estado: true },
    { name: "Chimenea interior", estado: true },
    { name: "Conexión a internet satelital (Starlink)", estado: true },
    { name: "Energía solar o híbrida", estado: true },
    { name: "Agua de pozo o vertiente natural", estado: true },
    { name: "Cancha de fútbol", estado: true },
    { name: "Cancha de vóley o ecuavóley", estado: true },
    { name: "Juegos infantiles", estado: true },
    { name: "Billar o futbolín", estado: true },
    { name: "Zona de lectura o descanso", estado: true },
    { name: "Cine al aire libre", estado: true },
    { name: "Pesca recreativa", estado: true },
    { name: "Paseos en caballo", estado: true },
    { name: "Senderos para caminatas", estado: true },
    { name: "Rutas para cuatrimoto o bicicleta", estado: true },
    { name: "Invernadero", estado: true },
    { name: "Área de cultivo o pastizal", estado: true },
    { name: "Corrales para ganado", estado: true },
    { name: "Gallinero o chanchera", estado: true },
    { name: "Bodega o taller", estado: true },
    { name: "Sistema de riego", estado: true },
    { name: "Casa de cuidador", estado: true },
    { name: "Paneles solares", estado: true },
    { name: "Pozo séptico", estado: true },
    { name: "Sistema de captación de agua lluvia", estado: true },
    { name: "Portón eléctrico", estado: true },
    { name: "Guardianía o caseta de ingreso", estado: true },
    { name: "Cercado perimetral", estado: true },
    { name: "Cámaras de seguridad", estado: true },
    { name: "Alarma o sensores de movimiento", estado: true },
    { name: "Camino empedrado o lastrado", estado: true },
    { name: "Iluminación exterior solar", estado: true },
    { name: "Área de parqueadero", estado: true },
    { name: "Señalización interna", estado: true },
    { name: "Acceso privado", estado: true },
    { name: "Agua potable", estado: true },
    { name: "Electricidad estable", estado: true },
    { name: "Recolección de basura", estado: true },
    { name: "Cobertura móvil o WiFi satelital", estado: true },
    { name: "Área de lavandería", estado: true },
    { name: "Baños exteriores para eventos", estado: true },
    { name: "Zona de camping familiar", estado: true },
    { name: "Espacio para eventos o reuniones", estado: true },
    { name: "Taller artesanal o de carpintería", estado: true },
    { name: "Zona de descanso con hamacas", estado: true },
  ],
  tipoPropiedades: [
    { name: "Casa", estado: true },
    { name: "Terreno", estado: true },
    //{ name: "Hacienda", estado: true },
  ],
  properties: [
    {
      title: "Terreno en la ciudad",
      slug: "terreno-en-la-ciudad",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      apto: "No",
      price: 50000,
      metros: 300,
      altura: 0,
      address: "Calle 123, Ciudad, País",
      geoLink: "https://maps.google.com/?q=loc:40.7128,-74.0060",
      categoria: "Terreno en la ciudad",
      images: ["1.jpg", "2.jpg"],
    },
    {
      title: "Terreno en el campo",
      slug: "terreno-en-el-campo",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      apto: "No",
      price: 30000,
      metros: 500,
      altura: 0,
      address: "Calle 456, Campo, País",
      geoLink: "https://maps.google.com/?q=loc:40.7128,-74.0060",
      categoria: "Terreno en el campo",
      images: ["1.jpg", "2.jpg"],
    },
  ],
};
