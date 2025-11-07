import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

export default async function AmenitiePage({ params }: { params: { slug: string } }) {
  // NO usar "await" aquí
  const { slug } = params;

  const [amenitie] = await Promise.all([
    getAmenitieByName(slug)
  ]);

  //const amenitie = await getAmenitieByName(slug);

  // Todo: new
  if (!amenitie && slug !== 'new') {
    redirect('/admin/amenitie');
  }

  const title = (slug === 'new') ? 'Nuevo amenitie' : 'Editar amenitie';

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