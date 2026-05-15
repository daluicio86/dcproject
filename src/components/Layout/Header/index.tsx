<<<<<<< HEAD
﻿"use client"

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/app/api/navlink'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const menuItems = navLinks.filter((link) => link.role === 'user')
  const { i18n } = useTranslation()

  const labels = useMemo(() => {
    const lang = i18n.language?.slice(0, 2)
    if (lang === 'es') return { home: 'Inicio', properties: 'Propiedades', news: 'Noticias', investors: 'Inversionistas', contact: 'Contacto', schedule: 'Agendar', login: 'Ingresar' }
    if (lang === 'de') return { home: 'Startseite', properties: 'Immobilien', news: 'Nachrichten', investors: 'Investoren', contact: 'Kontakt', schedule: 'Termin', login: 'Anmelden' }
    return { home: 'Home', properties: 'Properties', news: 'News', investors: 'Investors', contact: 'Contact', schedule: 'Schedule', login: 'Login' }
  }, [i18n.language])

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
    if (href.includes('/properties')) return labels.properties
    if (href.includes('/news')) return labels.news
    if (href.includes('/investors')) return labels.investors
    if (href.includes('/contact')) return labels.contact
    return href
  }

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
                {menuItems.map((item) => (
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
              {menuItems.map((item) => (
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
=======
'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback, use } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { LogoutButton } from '@/components/Auth/LogoutButton'
import { useSession } from 'next-auth/react'
import { useTranslation } from "react-i18next";
import { navLinks } from '@/app/api/navlink'


const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { data: session, status } = useSession();
  const sideMenuRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation();
  const NavigateLinks = session?.user?.role === 'admin'
    ? navLinks
    : navLinks.filter(link => link.role === 'user');
  const userName = session?.user?.name ?? "No name";
  const userEmail = session?.user?.email ?? "No email";
  //const userRoles = session?.user?.role ?? ['client'];

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header className={`fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${sticky ? "top-3" : "top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${sticky ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-4 " : "shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/'>
              <Image
                src={'/images/header/logo.svg'}
                alt='logo'
                width={80}
                height={58}
                unoptimized={true}
                className={`${isHomepage ? sticky ? "block dark:hidden" : "hidden" : sticky ? "block dark:hidden" : "block dark:hidden"}`}
              />
              <Image
                src={'/images/header/logo.svg'}
                alt='logo'
                width={80}
                height={58}
                unoptimized={true}
                className={`${isHomepage ? sticky ? "hidden dark:block" : "block" : sticky ? "dark:block hidden" : "dark:block hidden"}`}
              />
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            <button
              className='hover:cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={32}
                height={32}
                className={`dark:hidden block ${isHomepage
                  ? sticky
                    ? 'text-dark'
                    : 'text-dark'
                  : 'text-dark'
                  }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={32}
                height={32}
                className={`dark:block hidden ${isHomepage
                  ? sticky
                    ? 'text-white'
                    : 'text-dark'
                  : 'text-white'}`}
              />
            </button>
            <div className={`hidden md:block`}>
              <Link href='#' className={`text-base text-dark flex items-center gap-2 border-r pr-6 ${isHomepage
                ? sticky
                  ? 'text-dark dark:text-white hover:text-primary border-dark dark:border-white'
                  : 'text-dark hover:text-primary'
                : 'text-dark hover:text-primary'
                }`}
              >
                {session?.user ? (
                  <>
                    <Icon icon={'ph:user'} width={24} height={24} />
                    {userName}
                  </>
                ) : (<></>)}

              </Link>
              <Link href='https://wa.me/+593995421104?text=Hello%20Rent or Buy%2C%20I%20have%20a%20question?'
                target='_blank'
                className={`text-base text-dark flex items-center gap-2 border-r pr-6 ${isHomepage
                  ? sticky
                    ? 'text-dark dark:text-white hover:text-primary border-dark dark:border-white'
                    : 'text-dark hover:text-primary'
                  : 'text-dark hover:text-primary'
                  }`}
              >
                <Icon icon={'ph:phone-bold'} width={24} height={24} />
                (+593)99-542-1104
              </Link>
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${isHomepage
                  ? sticky
                    ? 'text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white'
                    : 'text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white'
                  : 'bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300'
                  }`}
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>


            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {NavigateLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
                {status === 'unauthenticated' ? (
                  <li className='flex items-center gap-4'>
                    <Link href="/signin" className='py-4 px-8 bg-primary text-base leading-4 block w-fit
                     text-white rounded-full border border-primary font-semibold
                      mt-3 hover:bg-transparent hover:text-primary duration-300'>
                      {t("login.signIn")}
                    </Link>
                    {/*<Link href="/auth/register" className='py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300'>
                      {t("login.signUp")}
                    </Link>*/}
                  </li>
                ) : (
                  <li className='flex items-center gap-4'><LogoutButton /></li>)}
              </ul>
            </nav>
          </div>


          <div className='flex flex-col gap-1 my-16 text-white'>
            <p className='text-base sm:text-xm font-normal text-white/40'>
              {t("header.contact")}
            </p>
            <Link href="#" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              {userName}
            </Link>
            <Link href="#" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              {userEmail}
            </Link>
          </div>
        </div>
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
      </div>
    </header >
  )
}

export default Header
