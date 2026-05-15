import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

// Next.js 15.2 requiere await con params
export default async function AmenitiesPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // DEBES usar await con params en Next.js 15.2
  const { slug } = await params;
  
  
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