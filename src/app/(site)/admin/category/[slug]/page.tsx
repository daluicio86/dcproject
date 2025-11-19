import { redirect } from 'next/navigation';
import HeroSub from '@/components/shared/HeroSub';
import { CategoryForm } from './ui/CategoryForm';
import { getCategoryByName } from '@/actions/categories/get-category-by-name';

// Next.js 15.2 requiere await con params
export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // DEBES usar await con params en Next.js 15.2
  const { slug } = await params;

  
  // Validación del slug
  if (!slug) {
    redirect('/admin/category');
  }
  let category: { id: string; name: string; estado: boolean; } | null = null;
  
  if (slug !== 'new') {
    try {
      category = await getCategoryByName(slug);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }

  const title = slug === 'new' ? 'Nuevo category' : 'Editar category';
  
  return (
    <>
      <HeroSub
        title="Gestión de Categorías"
        description="Gestiona tus categorías fácilmente con nuestra plataforma intuitiva."
        badge="Categorías"
      />
      <CategoryForm title={title} item={category ?? {}} />
    </>
  );
}