import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

type Props = {
  searchParams?: {
    slug?: string;
  };
};

//export default async function AmenitiePage({ searchParams }: Props) {


  export default async function AmenitiesPage({ searchParams }: { searchParams?: { slug?: string } }) {

  const params = await searchParams;

  console.log('Slug recibido:', params); // Debugging line
  const amenitie = await getAmenitieByName(params?.slug ?? '');

  /*if (!amenitie && params?.slug !== 'new') {
    redirect('/admin/amenitie');
  }*/

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
