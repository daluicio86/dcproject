'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { redirect, usePathname, useSearchParams } from 'next/navigation';


interface Props {
  totalPages: number;
}


export const Pagination = ({ totalPages }: Props) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN( +pageString ) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString) ) {
    redirect( pathname );
  }
  const createPageUrl = ( pageNumber: number | string ) => {

    const params = new URLSearchParams( searchParams );

    if ( pageNumber === '...' ) {
      return `${ pathname }?${ params.toString() }`
    }

    if ( +pageNumber <= 0 ) {
      return `${ pathname }`; //   href="/kid";
    }

    if ( +pageNumber > totalPages ) { // Next > 
      return `${pathname}?${ params.toString() }`;
    }

    params.set('page', pageNumber.toString());
    return `${  pathname }?${ params.toString() }`;

  }

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;



  return (
    <div className="flex justify-center pt-8 pb-16">
      <nav aria-label="Pagination">
        <ul className="flex list-none items-center justify-center gap-3">
          <li>
            <Link
              aria-disabled={!hasPreviousPage}
              tabIndex={hasPreviousPage ? 0 : -1}
              className={clsx(
                "block rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors",
                hasPreviousPage
                  ? "hover:bg-gray-50"
                  : "pointer-events-none text-gray-400"
              )}
              href={ createPageUrl( hasPreviousPage ? currentPage - 1 : currentPage ) }
            >
              Previous
            </Link>
          </li>

          <li>
            <span
              aria-current="page"
              className="block min-w-[64px] rounded-md bg-[#043f57] px-4 py-2 text-center text-sm font-bold text-white shadow-sm"
            >
              {currentPage}/{totalPages}
            </span>
          </li>

          <li>
            <Link
              aria-disabled={!hasNextPage}
              tabIndex={hasNextPage ? 0 : -1}
              className={clsx(
                "block rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors",
                hasNextPage
                  ? "hover:bg-gray-50"
                  : "pointer-events-none text-gray-400"
              )}
              href={ createPageUrl( hasNextPage ? currentPage + 1 : currentPage ) }
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
