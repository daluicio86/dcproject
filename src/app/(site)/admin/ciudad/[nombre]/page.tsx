import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { CiudadForm } from './ui/CiudadForm';
import { getServicios } from '@/actions/servicio/get-servicios';
import { getCiudadByName } from '@/actions/ciudad/get-ciudad-by-name';


// Next.js 15.2 requiere await con params
export default async function CiudadPage({ 
  params 
}: { 
  params: Promise<{ nombre: string }> 
}) {
  // DEBES usar await con params en Next.js 15.2
  const { nombre } = await params;
  
  
  // Validación del nombre
  if (!nombre) {
    redirect('/admin/ciudad');
  }
  const [ciudad, servicios] = await Promise.all([
    getCiudadByName(nombre),
    getServicios(),
  ]);

  const title = nombre === 'new' ? 'Nuevo ciudad' : 'Editar ciudad';
    // Normalize servicios.images to string[] (extract URLs) expected by CiudadForm
  const normalizedServicios = (servicios ?? []).map(s => ({
    ...s,
    images: Array.isArray((s as any).images)
      ? (s as any).images.map((img: any) => img.url)
      : [],
  }));
  return (
    <>
      <HeroSub
        title="Gestión de Ciudades"
        description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva."
        badge="Ciudades"
      />
      <CiudadForm item={ciudad ?? null} servicios={normalizedServicios}/>
    </>
  );
}