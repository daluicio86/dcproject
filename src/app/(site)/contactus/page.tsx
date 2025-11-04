
"use client";
import { createUpdateContact } from '@/actions/contact/create-update-contacts';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';



import { useTranslation } from 'react-i18next';

export default function ContactUs() {

  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    //formData.append("id", crypto.randomUUID());
    //formData.append("fechaCreacion", new Date().toISOString());
    ;
    const { ok } = await createUpdateContact(formData);

    if (!ok) {
      alert('Contacto no se pudo actualizar');
      return;
    }
    form?.reset();
  };


  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'ph:house-simple-fill'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            {t("contactUs.breadcrumb")}
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            {t("contactUs.title")}
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6'>
            {t("contactUs.description")}
          </p>
        </div>
      </div>
      {/* form */}
      <div className='border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-12'>
          <div className='relative w-fit'>
            <Image
              src={'/images/contactUs/contactUs.jpg'}
              alt='wall'
              width={497}
              height={535}
              className='rounded-2xl brightness-50 h-full'
              unoptimized={true}
            />
            <div className='absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2'>
              <h5 className='text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white'>
                {t("contactUs.formTitle")}
              </h5>
              <p className='text-sm xs:text-base mobile:text-xm font-normal text-white/80'>
                {t("contactUs.formDescription")}
              </p>
            </div>
            <div className='absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white'>
              <Link href={'https://wa.me/+593999567412?text=Hello%20Rent or Buy%2C%20I%20have%20a%20question?'} className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:phone'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    (+593)99-956-7412
                  </p>
                </div>
              </Link>
              <Link href="mailto:elizabethlinacardenas@hotmail.com" className="w-fit">
                <div className="flex items-center gap-4 group w-fit">
                  <Icon icon="ph:envelope-simple" width={32} height={32} />
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary">
                    elizabethlinacardenas@hotmail.com
                  </p>
                </div>
              </Link>
              <div className='flex items-center gap-4'>
                <Icon icon={'ph:map-pin'} width={32} height={32} />
                <p className='text-sm xs:text-base mobile:text-xm font-normal'>
                  Quito, Ecuador
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1/2'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col lg:flex-row gap-6'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='nombre'
                    placeholder={t("contactUs.namePlaceholder")}
                    required
                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                  />
                  <input
                    type='number'
                    name='telefono'
                    id='telefono'
                    autoComplete='telefono'
                    placeholder={t("contactUs.phonePlaceholder")}
                    required
                    className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                  />
                </div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  placeholder={t("contactUs.emailPlaceholder")}
                  required
                  className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline'
                />
                <textarea
                  rows={8}
                  cols={50}
                  name='mensaje'
                  id='mensaje'
                  placeholder={t("contactUs.messagePlaceholder")}
                  required
                  className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline'></textarea>
                <button className='px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300'>
                  {t("contactUs.sendMessage")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
