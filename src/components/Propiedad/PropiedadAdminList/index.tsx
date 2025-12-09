
import { Pagination } from '@/components/ui/pagination/Pagination'

import { Propiedad } from '@/interface/propiedad.interface';
import PropiedadAdminCard from '../Card/CardAdmin';

const PropiedadAdminListing: React.FC<{ propiedads: Propiedad[], currentPage: number, totalPages: number }> = ({ propiedads, currentPage, totalPages }) => {
  console.log('PropiedadAdminListing 11:', propiedads);
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {propiedads.map((propiedad, index) => (
            <div key={index} className=''>
              <PropiedadAdminCard item={propiedad} />
            </div>
          ))}
        </div>
        { totalPages > 0 && <Pagination totalPages={totalPages} /> }
      </div>
    </section>
  )
}

export default PropiedadAdminListing;
