import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

type Props = {
  searchParams?: {
    slug?: string;
  };
};

export default async function AmenitiesPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  console.log('Slug recibido:', slug);

  const amenitie = await getAmenitieByName(slug);

  // Si usas "new" como modo creación:
  /*
  if (!amenitie && slug !== 'new') {
    redirect('/admin/amenitie');
  }
  */

  const title = slug === 'new' ? 'Nuevo amenitie' : 'Editar amenitie';

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
