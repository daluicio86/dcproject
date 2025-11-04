
import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getCiudadByName } from '@/actions/ciudad/get-ciudad-by-name';
import { CiudadForm } from './ui/CiudadForm';
import { getServicios } from '@/actions/servicio/get-servicios';

interface Props {
  params: {
    nombre: string;
  }
}

export default async function CiudadPage({ params }: Props) {

  const { nombre } = await params;
  const [ciudad, servicios] = await Promise.all([
    getCiudadByName(nombre),
    getServicios(),
  ]);

  // Todo: new
  if (!ciudad && nombre !== 'new') {
    redirect('/admin/ciudad')
  }


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
      <CiudadForm item={ciudad ?? {}} servicios={normalizedServicios}/>
    </>
  );
}