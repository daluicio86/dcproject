import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Contacto } from '@prisma/client';

const ContactCard: React.FC<{ item: Contacto }> = ({ item }) => {
  const { name, email, telefono, mensaje } = item;
  return (
    <div>
      <div className='relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20'>
        <div className='p-6'>
          <div className='flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6'>
            <div>
              <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
                {name}
              </h3>
              <Link href={`mailto:${email}`}>
                <p className='text-xs font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
                  {email}
                </p>
              </Link>
              <p className='text-base font-normal text-black/50 dark:text-white/50'>
                {mensaje}
              </p>
            </div>
            <div>
              <Link href='https://wa.me/+593995421104?text=Hello%20Rent or Buy%2C%20I%20have%20a%20question?'
                target='_blank'
                className='text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10'>
                {telefono}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
