import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

export default async function AmenitiePage({
  params,
}: {
  params: { nombre: string };
}) {
  const { nombre } = params;

  const amenitie = await getAmenitieByName(nombre);

  if (!amenitie && nombre !== 'new') {
    redirect('/admin/amenities');
  }

  const title = nombre === 'new' ? 'Nuevo amenitie' : 'Editar amenitie';

  return (
    <>
      <HeroSub
        title="Gestión de Amenities"
        description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva."
        badge="Amenities"
      />
      <AmenitieForm title={title} item={amenitie ?? {}} />
    </>
  );
}
