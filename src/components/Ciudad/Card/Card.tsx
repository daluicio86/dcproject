"use client";

import { useRouter } from 'next/navigation';
import { TableCell, TableRow } from '@/components/ui/table'
import { Ciudad } from '@/interface'
import {
  AiFillDelete
} from "react-icons/ai";
import { deleteCiudad } from '@/actions/ciudad/delete-ciudad';
import Link from 'next/link';
import Image from 'next/image';


const CiudadCard: React.FC<{ item: Ciudad }> = ({ item }) => {
  const { id, nombre } = item
  const router = useRouter();

  const handleDelete = async () => {
    const result = await deleteCiudad(id);
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
          <Link href={`/admin/ciudad/${item.nombre}`}>
            <Image
              src={item.url ?? '/placeholder.png'}
              alt={item.nombre}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
              {item.nombre}
            </h3>
          </Link>
        </div>
      </TableCell>
      <TableCell className="px-5 py-4 sm:px-6 text-start">
        <div className="flex items-center gap-3">

          <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
            {item.descripcion}
          </h3>
        </div>
      </TableCell>
      <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <button onClick={handleDelete} title="Eliminar">
          <AiFillDelete size={24} className="text-red-500" title='Delete' />
        </button>
      </TableCell>
    </TableRow>
  )
}

export default CiudadCard;
