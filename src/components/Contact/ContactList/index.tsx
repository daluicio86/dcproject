
import { Contacto } from '@prisma/client'
import ContactCard from '../Card/Card'
import { Pagination } from '@/components/ui/pagination/Pagination'

const ContactListing: React.FC<{ contacts: Contacto[], currentPage: number, totalPages: number }> = ({ contacts, currentPage, totalPages }) => {
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {contacts.map((contact, index) => (
            <div key={index} className=''>
              <ContactCard item={contact} />
            </div>
          ))}
        </div>
      </div>
      <Pagination totalPages={totalPages} />
    </section>
  )
}

export default ContactListing
