"use client"

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/app/api/navlink'
import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'admin'
  const { i18n } = useTranslation()

  const labels = useMemo(() => {
    const lang = i18n.language?.slice(0, 2)
    if (lang === 'es') return { home: 'Inicio', properties: 'Propiedades', news: 'Noticias', investors: 'Inversionistas', contact: 'Contacto', schedule: 'Agendar', login: 'Ingresar', manager: 'Gestionar Propiedades' }
    if (lang === 'de') return { home: 'Startseite', properties: 'Immobilien', news: 'Nachrichten', investors: 'Investoren', contact: 'Kontakt', schedule: 'Termin', login: 'Anmelden', manager: 'Immobilien Verwalten' }
    return { home: 'Home', properties: 'Properties', news: 'News', investors: 'Investors', contact: 'Contact', schedule: 'Schedule', login: 'Login', manager: 'Manage Properties' }
  }, [i18n.language])

  const menuItems = useMemo(() => {
    const base = navLinks.filter((link) => link.role === 'user')
    if (!isAdmin) return base
    const propertiesManager = navLinks.find((link) => link.href === '/admin/propiedads')
    return propertiesManager ? [...base, propertiesManager] : base
  }, [isAdmin])

  const socialIcons = [
    'ph:facebook-logo-fill',
    'ri:twitter-x-fill',
    'ph:youtube-logo-fill',
    'ph:instagram-logo-fill',
    'ri:tiktok-fill',
    'ph:flickr-logo-fill',
    'ph:linkedin-logo-fill',
  ]

  const languageOptions = ['en', 'de', 'es'] as const
  const setLang = (lng: 'en' | 'de' | 'es') => {
    i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') localStorage.setItem('lang', lng)
  }

  const resolveLabel = (href: string) => {
    if (href === '/') return labels.home
    if (href === '/properties') return labels.properties
    if (href.includes('/news')) return labels.news
    if (href.includes('/investors')) return labels.investors
    if (href.includes('/contact')) return labels.contact
    if (href.includes('/admin/propiedads')) return labels.manager
    return href
  }

  const nonPropertyItems = menuItems.filter((item) => item.href !== '/properties' && item.href !== '/admin/propiedads')
  const propertySubmenuItems = [
    { href: '/properties', label: labels.properties },
    ...(isAdmin ? [{ href: '/admin/propiedads', label: labels.manager }] : []),
  ]

  return (
    <header className='fixed top-0 z-50 w-full border-b border-black/10 bg-dark shadow-[0_6px_20px_rgba(0,0,0,0.12)]'>
      <div className='mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10'>
        <div className='lg:hidden py-3'>
          <div className='flex justify-center'>
            <Link href='/' className='block shrink-0'>
              <Image src='/images/header/logo.jpeg' alt='Logo' width={220} height={220} className='h-[74px] w-auto object-contain' unoptimized />
            </Link>
          </div>

          <div className='mt-3 flex items-center justify-center gap-3'>
            {socialIcons.map((icon) => (
              <Link key={icon} href='#' className='flex h-9 w-9 items-center justify-center rounded-full bg-[#17395a] text-white'>
                <Icon icon={icon} width={18} height={18} />
              </Link>
            ))}
          </div>

          <div className='mt-3 flex items-center justify-center gap-2'>
            {languageOptions.map((lng) => (
              <button key={lng} onClick={() => setLang(lng)} className={`rounded-md px-2 py-1 text-xs font-bold uppercase ${i18n.language?.startsWith(lng) ? 'bg-[#17395a] text-white' : 'bg-white text-[#17395a]'}`}>
                {lng}
              </button>
            ))}
          </div>

          <div className='mt-4 flex justify-center'>
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='rounded-md border border-[#e0a11d] bg-[#efefef] p-2 text-[#4b4b4b]' aria-label='Abrir menu'>
              <Icon icon={navbarOpen ? 'ph:x-bold' : 'ph:list-bold'} width={24} height={24} />
            </button>
          </div>

          {navbarOpen && (
            <div className='mt-4 rounded-2xl border border-black/10 bg-white p-5 shadow-lg'>
              <ul className='flex flex-col gap-4'>
                {isAdmin ? (
                  <li>
                    <details className='group'>
                      <summary className='flex list-none items-center justify-between text-base font-medium text-[#5e6570] cursor-pointer'>
                        <span>{labels.properties}</span>
                        <Icon icon='ph:caret-down-bold' width={12} height={12} className='text-[#7d848e]' />
                      </summary>
                      <div className='mt-2 flex flex-col gap-2 rounded-xl border border-black/10 bg-[#f8fafb] p-2'>
                        {propertySubmenuItems.map((sub) => (
                          <Link key={sub.href} href={sub.href} onClick={() => setNavbarOpen(false)} className='rounded-lg px-3 py-2 text-sm font-medium text-[#304355] hover:bg-white'>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  </li>
                ) : (
                  <li>
                    <Link href='/properties' onClick={() => setNavbarOpen(false)} className='flex items-center justify-between text-base font-medium text-[#5e6570]'>
                      <span>{labels.properties}</span>
                    </Link>
                  </li>
                )}
                {nonPropertyItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setNavbarOpen(false)} className='flex items-center justify-between text-base font-medium text-[#5e6570]'>
                      <span>{resolveLabel(item.href)}</span>
                      <Icon icon='ph:caret-down-bold' width={12} height={12} className='text-[#7d848e]' />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href='/signin' onClick={() => setNavbarOpen(false)} className='text-base font-semibold text-[#17395a]'>
                    {labels.login}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <nav className='hidden h-[96px] items-center justify-between lg:flex'>
          <Link href='/' className='block shrink-0'>
            <Image src='/images/header/logo.jpeg' alt='Logo' width={220} height={220} className='h-[74px] w-auto object-contain sm:h-[80px] lg:h-[86px]' unoptimized />
          </Link>

          <div className='flex items-center gap-8'>
            <ul className='hidden items-center gap-10 lg:flex'>
              {isAdmin ? (
                <li className='relative group'>
                  <button type='button' className='inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'>
                    <span>{labels.properties}</span>
                    <Icon icon='ph:caret-down-bold' width={12} height={12} />
                  </button>
                  <div className='invisible absolute left-1/2 top-[145%] z-20 w-56 -translate-x-1/2 rounded-xl border border-white/20 bg-[#0f2f3f] p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100'>
                    {propertySubmenuItems.map((sub) => (
                      <Link key={sub.href} href={sub.href} className='block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white'>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li>
                  <Link href='/properties' className='text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'>
                    <span>{labels.properties}</span>
                  </Link>
                </li>
              )}
              {nonPropertyItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'>
                    <span>{resolveLabel(item.href)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href='/signin' className='text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'>
                  {labels.login}
                </Link>
              </li>
              <li>
                <Link href='/contactus' className='rounded-xl bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.02em] text-[#07384a] transition hover:bg-[#e7eef1]'>
                  {labels.schedule}
                </Link>
              </li>
            </ul>

            <div className='flex gap-2'>
              {languageOptions.map((lng) => (
                <button key={lng} onClick={() => setLang(lng)} className={`rounded-md px-2 py-1 text-xs font-bold uppercase ${i18n.language?.startsWith(lng) ? 'bg-white text-[#07384a]' : 'bg-white/20 text-white'}`}>
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header >
  )
}

export default Header
