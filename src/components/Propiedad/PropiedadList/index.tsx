
import { Pagination } from '@/components/ui/pagination/Pagination'
import PropiedadCard from '../Card/Card'
import { Propiedad } from '@/interface/propiedad.interface';

const PropiedadListing: React.FC<{ propiedads: Propiedad[], currentPage: number, totalPages: number }> = ({ propiedads, currentPage, totalPages }) => {
  
  return (
    <section className='!pt-0 pb-24'>
      <div className='container mx-auto max-w-[1400px] px-5 lg:px-8'>
        <div className='grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3'>
          {propiedads.map((propiedad, index) => (
            <div key={index} className=''>
              <PropiedadCard item={propiedad} />
            </div>
          ))}
        </div>
        { totalPages > 0 && <Pagination totalPages={totalPages} /> }
      </div>
    </section>
  )
}

export default PropiedadListing;
