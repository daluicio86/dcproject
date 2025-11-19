import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

type AmenitiePageProps = {
  searchParams: {
    slug: string;
  };
};

export default async function AmenitiePage({ searchParams }: AmenitiePageProps) {
  
  const  params  =await searchParams;

  console.log('Slug recibido:', searchParams); // Debugging line
  const amenitie = await getAmenitieByName(params?.slug);

  if (!amenitie && params?.slug !== 'new') {
    redirect('/admin/amenitie');
  }

  const title = params?.slug === 'new' ? 'Nuevo amenitie' : 'Editar amenitie';
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
