

import { Category } from '@/interface'
import CategoryCard from '../Card/Card'
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Link from 'next/link';

interface Props {
  items?: Category[]
}

const PropertiesListing: React.FC<Props> = async ({ items }: Props) => {

  return (
    <section className="bg-cover pb-20 relative overflow-x-hidden">
      <div className="flex flex-col gap-6 items-center justify-center">
        {/* Botón alineado a la derecha */}
        <div className="w-full max-w-2xl flex justify-end">
          <Link
            href="/admin/category/new"
            className="px-8 py-4 rounded-full bg-primary text-white
        text-base font-semibold hover:cursor-pointer
        hover:bg-dark duration-300"
          >
            Nuevo
          </Link>
        </div>

        {/* Tabla centrada */}
        <div className="w-full max-w-2xl">
          <Table className="w-full">
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                >
                  Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-left text-theme-xs dark:text-gray-400"
                >
                  Options
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {items?.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>


  )
}

export default PropertiesListing
