import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

// Opción 1: Si estás usando Next.js 14+ (recomendado)
export default async function AmenitiesPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  
  console.log('Slug recibido:', slug);
  
  // Validación del slug
  if (!slug) {
    redirect('/admin/amenitie');
  }

  let amenitie: { id: string; name: string; estado: boolean; } | null = null;
  
  if (slug !== 'new') {
    try {
      amenitie = await getAmenitieByName(slug);
    } catch (error) {
      console.error('Error fetching amenitie:', error);
    }
  }

  const title = slug === 'new' ? 'Nuevo amenitie' : 'Editar amenitie';
  
  return (
    <>
      <HeroSub 
        title="Gestión de Amenities" 
        description="Gestiona tus servicios fácilmente con nuestra plataforma intuitiva." 
        badge="Amenities" 
      />
      <AmenitieForm 
        title={title} 
        item={amenitie ?? {}} 
      />
    </>
  );
}