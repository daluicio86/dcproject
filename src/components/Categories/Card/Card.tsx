"use client";

import { useRouter } from 'next/navigation';
import { deleteCategory } from '@/actions/categories/delete-categorie';
import { TableCell, TableRow } from '@/components/ui/table'
import {
  AiFillDelete
} from "react-icons/ai";
import { Categoria } from '@/interface';


const CategoryCard: React.FC<{ item: Categoria }> = ({ item }) => {
  const { id, name } = item
  const router = useRouter();
  
  const handleDelete = async () => {
    const result = await deleteCategory(id);
    if (result.ok) {
      router.refresh();
    } else {
      console.error(result.message);
    }
  };
  return (
    <TableRow key={item.id}>
      <TableCell className="px-5 py-4 sm:px-6 text-start">
        <div className="flex items-center gap-3">
          <div>
            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {item.name}
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <button onClick={handleDelete} title="Eliminar">
          <AiFillDelete size={24} className="text-red-500"  title='Delete'/>
        </button>
      </TableCell>
    </TableRow>
  )
}

export default CategoryCard;
