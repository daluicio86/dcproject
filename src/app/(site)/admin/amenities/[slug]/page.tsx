import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { getAmenitieByName } from '@/actions/amenitie/get-amenitie-by-name';
import { AmenitieForm } from './ui/AmenitieForm';

// Para deployment en Vercel, genera estáticamente las páginas conocidas
export async function generateStaticParams() {
  return [
    { slug: 'new' }
    // Puedes agregar más slugs estáticos si los conoces
  ];
}

export default async function AmenitiesPage({ 
  params 
}: { 
  params: Promise<{ slug?: string }> 
}) {
  // Desestructuración correcta para Vercel
  const { slug } = await params;
  
  console.log('Slug recibido:', slug);
  
  // Validación más robusta
  if (!slug) {
    redirect('/admin/amenitie');
  }

  let amenitie: { id: string; name: string; estado: boolean; } | null = null;
  
  // Solo buscar en la base de datos si no es 'new'
  if (slug !== 'new') {
    try {
      amenitie = await getAmenitieByName(slug);
      
      // Redirigir si no existe la amenitie (opcional)
      // if (!amenitie) {
      //   redirect('/admin/amenitie');
      // }
    } catch (error) {
      console.error('Error fetching amenitie:', error);
      // En caso de error, puedes redirigir o mostrar un estado de error
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