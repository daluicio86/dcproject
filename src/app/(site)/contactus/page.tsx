
"use client";
import { createUpdateContact } from '@/actions/contact/create-update-contacts';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';



import { useTranslation } from 'react-i18next';

const PHONE_PREFIXES = [
  { code: '+593', country: 'Ecuador' },
  { code: '+1', country: 'Estados Unidos / Canadá' },
  { code: '+34', country: 'España' },
  { code: '+49', country: 'Alemania' },
  { code: '+57', country: 'Colombia' },
  { code: '+51', country: 'Perú' },
  { code: '+52', country: 'México' },
  { code: '+54', country: 'Argentina' },
  { code: '+55', country: 'Brasil' },
  { code: '+56', country: 'Chile' },
  { code: '+58', country: 'Venezuela' },
  { code: '+44', country: 'Reino Unido' },
  { code: '+39', country: 'Italia' },
  { code: '+33', country: 'Francia' },
  { code: '+41', country: 'Suiza' },
] as const;

export default function ContactUs() {

  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0,2) ?? 'en';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const phonePrefix = String(formData.get('phonePrefix') ?? '+593');
    const phoneNumber = String(formData.get('telefono') ?? '').trim();
    formData.set('telefono', `${phonePrefix} ${phoneNumber}`);
    formData.delete('phonePrefix');
    //formData.append("id", crypto.randomUUID());
    //formData.append("fechaCreacion", new Date().toISOString());
    ;
    const { ok } = await createUpdateContact(formData);

    if (!ok) {
      alert(lang === 'es' ? 'Contacto no se pudo actualizar' : lang === 'de' ? 'Kontakt konnte nicht aktualisiert werden' : 'Contact could not be updated');
      return;
    }
    form?.reset();
  };


  return (
    <main className='bg-[#f4f1ea] pb-24 pt-[110px] xl:pt-[96px]'>
      <section className='relative isolate min-h-[570px] overflow-hidden !py-0'>
        <Image src='/images/contactUs/contactUs.jpg' alt='Contacto Properties in Ecuador' fill priority className='object-cover' unoptimized />
        <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,33,0.95),rgba(7,37,48,0.74)_58%,rgba(7,37,48,0.28))]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(76,225,180,0.2),transparent_28%)]' />
        <div className='relative mx-auto flex min-h-[570px] max-w-[1320px] items-center px-5 py-16 sm:px-8 lg:px-12'>
          <div className='max-w-3xl text-white'>
            <p className='mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md'>
              <Icon icon='ph:chat-circle-text-bold' width={18} className='text-[#5ce0b8]' /> {t("contactUs.breadcrumb")}
            </p>
            <h1 className='text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl'>{t("contactUs.title")}</h1>
            <p className='mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg'>{t("contactUs.description")}</p>
          </div>
        </div>
      </section>
      <div className='relative z-10 mx-auto -mt-20 max-w-[1320px] px-5 sm:px-8'>
      <div className='overflow-hidden rounded-[34px] border border-black/[0.06] bg-white p-3 shadow-[0_24px_70px_rgba(15,45,55,0.13)] sm:p-4'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch'>
          <div className='relative min-h-[520px] overflow-hidden rounded-[28px]'>
            <Image
              src={'/images/contactUs/contactUs.jpg'}
              alt='wall'
              width={497}
              height={535}
              className='absolute inset-0 h-full w-full object-cover brightness-[0.48]'
              unoptimized={true}
            />
            <div className='absolute left-7 top-8 right-7 flex flex-col gap-2 lg:left-10 lg:top-12'>
              <h5 className='text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white'>
                {t("contactUs.formTitle")}
              </h5>
              <p className='text-sm xs:text-base mobile:text-xm font-normal text-white/80'>
                {t("contactUs.formDescription")}
              </p>
            </div>
            <div className='absolute bottom-8 left-7 right-5 flex flex-col gap-4 text-white lg:bottom-12 lg:left-10'>
              <Link href={'https://wa.me/593994567412?text=Hello%20Rent or Buy%2C%20I%20have%20a%20question?'} className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:phone'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    (+593)99-456-7412
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
          <div className='p-3 sm:p-6 lg:p-8'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='nombre'
                    placeholder={t("contactUs.namePlaceholder")}
                    required
                    className='w-full rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 outline-none transition focus:border-[#24b98f] focus:ring-4 focus:ring-[#24b98f]/10'
                  />
                  <div className='flex w-full min-w-0'>
                    <select
                      name='phonePrefix'
                      id='phonePrefix'
                      defaultValue='+593'
                      aria-label={lang === 'es' ? 'Prefijo telefónico' : lang === 'de' ? 'Telefonvorwahl' : 'Phone prefix'}
                      className='w-44 shrink-0 rounded-l-2xl border border-r-0 border-black/10 bg-[#f7f8f6] px-4 py-4 text-sm outline-none focus:border-[#24b98f]'
                    >
                      {PHONE_PREFIXES.map(({ code, country }) => (
                        <option key={`${code}-${country}`} value={code} className='text-black'>
                          {country} ({code})
                        </option>
                      ))}
                    </select>
                    <input
                      type='tel'
                      name='telefono'
                      id='telefono'
                      autoComplete='tel-national'
                      inputMode='tel'
                      placeholder={t("contactUs.phonePlaceholder")}
                      required
                      className='min-w-0 flex-1 rounded-r-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 outline-none transition focus:border-[#24b98f] focus:ring-4 focus:ring-[#24b98f]/10'
                    />
                  </div>
                </div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  placeholder={t("contactUs.emailPlaceholder")}
                  required
                  className='rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 outline-none transition focus:border-[#24b98f] focus:ring-4 focus:ring-[#24b98f]/10'
                />
                <textarea
                  rows={8}
                  cols={50}
                  name='mensaje'
                  id='mensaje'
                  placeholder={t("contactUs.messagePlaceholder")}
                  required
                  className='rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 outline-none transition focus:border-[#24b98f] focus:ring-4 focus:ring-[#24b98f]/10'></textarea>
                <button className='inline-flex w-full items-center justify-center rounded-full bg-[#0a3442] px-8 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#11607a] mobile:w-fit'>
                  {t("contactUs.sendMessage")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}

