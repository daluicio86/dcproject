import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { CiudadForm } from './ui/CiudadForm';
import { getServicios } from '@/actions/servicio/get-servicios';
import { getCiudadByName } from '@/actions/ciudad/get-ciudad-by-name';
import { normalizeNullToUndefined } from '@/utils/normalize';

export default async function CiudadPage({ 
  params 
}: { 
  params: Promise<{ nombre: string }> 
}) {
  const { nombre } = await params;
  
  if (!nombre) {
    redirect('/admin/ciudad');
  }

  const [ciudad, servicios] = await Promise.all([
    getCiudadByName(nombre),
    getServicios(),
  ]);

  const title = nombre === 'new' ? 'Nuevo ciudad' : 'Editar ciudad';

  // Normalizar servicios
  const normalizedServicios = (servicios ?? []).map(s => ({
    ...s,
    images: Array.isArray((s as any).images)
      ? (s as any).images.map((img: any) => img.url)
      : [],
  }));

  // Normalizar ciudad
  const normalizedCiudad = ciudad ? {
    ...normalizeNullToUndefined(ciudad),
    descripcion: ciudad.descripcion ?? undefined,
    propiedades: Array.isArray((ciudad as any).propiedades)
      ? (ciudad as any).propiedades.map((prop: any) => ({
          id: prop.id,
          title: prop.title,
          images: Array.isArray(prop.images)
            ? prop.images.map((img: any) => img.url)
            : [],
        }))
      : undefined,
  } : null;

  return (
    <>
      <HeroSub
        title="Gestión de Ciudades"
        description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva."
        badge="Ciudades"
      />
      <CiudadForm item={normalizedCiudad} servicios={normalizedServicios}/>
    </>
  );
}