
import { Pagination } from '@/components/ui/pagination/Pagination'
import ServicioCard from '../Card/Card'
import { Servicio } from '@/interface/servicio.interface';

const ServicioListing: React.FC<{ servicios: Servicio[], currentPage: number, totalPages: number }> = ({ servicios, currentPage, totalPages }) => {
  
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {servicios.map((servicio, index) => (
            <div key={index} className=''>
              <ServicioCard item={servicio} />
            </div>
          ))}
        </div>
        { totalPages > 0 && <Pagination totalPages={totalPages} /> }
      </div>
    </section>
  )
}

export default ServicioListing;
