import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

type AmenitiePageProps = {
  params: {
    slug: string;
  };
};

export default async function AmenitiePage({ params }: AmenitiePageProps) {
  const { slug } =await params;

  console.log('Slug recibido:', params); // Debugging line

  const amenitie = await getAmenitieByName(slug);

  if (!amenitie && slug !== 'new') {
    redirect('/admin/amenitie');
  }

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
