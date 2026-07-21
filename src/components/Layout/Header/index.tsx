"use client"

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/app/api/navlink'
import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)
  const desktopMenuRef = useRef<HTMLLIElement | null>(null)
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

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
  ] as const
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

  const homeItem = menuItems.find((item) => item.href === '/')
  const nonPropertyItems = menuItems.filter((item) => item.href !== '/' && item.href !== '/properties' && item.href !== '/admin/propiedads')
  const propertySubmenuItems = [
    { href: '/properties', label: labels.properties },
    ...(isAdmin ? [{ href: '/admin/propiedads', label: labels.manager }] : []),
  ]

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!desktopMenuRef.current) return
      if (!desktopMenuRef.current.contains(event.target as Node)) {
        setDesktopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header className='fixed top-0 z-50 w-full border-b border-black/10 bg-dark shadow-[0_6px_20px_rgba(0,0,0,0.12)]'>
      <div className='mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-4 2xl:px-10'>
        <div className='py-3 xl:hidden'>
          <div className='flex items-center justify-between gap-3'>
            <Link href='/' className='flex shrink-0 items-center gap-3' aria-label='Properties in Ecuador — Inicio'>
              <Image src='/images/header/logo-transparent-v2.png' alt='' width={640} height={640} className='h-[54px] w-auto object-contain' unoptimized />
              <span className='flex flex-col text-left'>
                <span className='text-[12px] font-bold leading-tight tracking-wide text-white sm:text-[13px]'>Properties in Ecuador</span>
                <span className='mt-1 text-[9px] font-medium leading-tight tracking-[0.14em] text-white/70 sm:text-[10px]'>Retired Investors</span>
              </span>
            </Link>
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur' aria-label='Abrir menú'>
              <span aria-hidden='true' className='text-[25px] font-light leading-none'>{navbarOpen ? '×' : '☰'}</span>
            </button>
          </div>

          <div className='mt-2 flex items-center justify-end gap-1.5'>
            {languageOptions.map(({ code, label }) => (
              <button key={code} type='button' lang={code} translate='no' aria-label={`Cambiar idioma a ${label}`} onClick={() => setLang(code)} className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition ${i18n.language?.startsWith(code) ? 'bg-[#42d7b0] text-[#082d37]' : 'bg-white/10 text-white/80'}`}>
                {label}
              </button>
            ))}
          </div>

          {navbarOpen && (
            <div className='mt-4 rounded-2xl border border-black/10 bg-white p-5 shadow-lg'>
              <ul className='flex flex-col gap-4'>
                {homeItem && (
                  <li>
                    <Link href={homeItem.href} onClick={() => setNavbarOpen(false)} className='flex items-center justify-between text-base font-medium text-[#5e6570]'>
                      <span>{labels.home}</span>
                    </Link>
                  </li>
                )}
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

        <nav className='hidden h-[96px] items-center justify-between xl:flex'>
          <Link href='/' className='flex shrink-0 items-center gap-2 2xl:gap-3' aria-label='Properties in Ecuador — Inicio'>
            <Image src='/images/header/logo-transparent-v2.png' alt='' width={640} height={640} className='h-[64px] w-auto object-contain 2xl:h-[72px]' unoptimized />
            <span className='flex flex-col text-left'>
              <span className='whitespace-nowrap text-[12px] font-bold leading-tight tracking-wide text-white 2xl:text-[14px]'>Properties in Ecuador</span>
              <span className='mt-1 whitespace-nowrap text-[9px] font-medium leading-tight tracking-[0.1em] text-white/80 2xl:text-[11px] 2xl:tracking-[0.14em]'>Retired Investors</span>
            </span>
          </Link>

          <div className='flex min-w-0 items-center gap-3 2xl:gap-8'>
            <ul className='hidden items-center gap-5 xl:flex 2xl:gap-10'>
              {homeItem && (
                <li>
                  <Link href={homeItem.href} className='text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'>
                    <span>{labels.home}</span>
                  </Link>
                </li>
              )}
              {isAdmin ? (
                <li ref={desktopMenuRef} className='relative'>
                  <button
                    type='button'
                    onClick={() => setDesktopMenuOpen((prev) => !prev)}
                    className='inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#d4e7ef]'
                  >
                    <span>{labels.properties}</span>
                    <Icon icon='ph:caret-down-bold' width={12} height={12} />
                  </button>
                  <div className={`${desktopMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-xl border border-white/20 bg-[#0f2f3f] p-2 shadow-xl transition`}>
                    {propertySubmenuItems.map((sub) => (
                      <Link key={sub.href} href={sub.href} onClick={() => setDesktopMenuOpen(false)} className='block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white'>
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
                <Link href='/contactus' className='rounded-xl bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.02em] text-[#07384a] transition hover:bg-[#e7eef1] 2xl:px-7'>
                  {labels.schedule}
                </Link>
              </li>
            </ul>

            <div className='flex shrink-0 gap-1 2xl:gap-2'>
              {languageOptions.map(({ code, label }) => (
                <button key={code} type='button' lang={code} translate='no' aria-label={`Cambiar idioma a ${label}`} onClick={() => setLang(code)} className={`rounded-md px-2 py-1 text-xs font-bold ${i18n.language?.startsWith(code) ? 'bg-white text-[#07384a]' : 'bg-white/20 text-white'}`}>
                  {label}
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
