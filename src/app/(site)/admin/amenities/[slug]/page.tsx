import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

type Params = { slug: string };

// Tipamos params COMO Promise<Params> para cumplir la firma que espera PageProps
export default async function AmenitiePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const [amenitie] = await Promise.all([
    getAmenitieByName(slug)
  ]);

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