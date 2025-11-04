
import { redirect } from 'next/navigation';
import { CategoryForm } from './ui/CategoryForm';
import { getCategoryByName } from '@/actions/categories/get-category-by-name';
import HeroSub from '@/components/shared/HeroSub';

interface Props {
  params: {
    slug: string;
  }
}

export default async function CategoryPage({ params }: Props) {

  const { slug } = params;

  const [category] = await Promise.all([
    getCategoryByName(slug),
  ]);


  // Todo: new
  if (!category && slug !== 'new') {
    redirect('/admin/category')
  }

  const title = (slug === 'new') ? 'Nueva categoría' : 'Editar categoría'

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