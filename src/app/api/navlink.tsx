import { NavLinks } from '@/types/navlink'

export const navLinks: NavLinks[] = [
  { label: 'Home', href: '/', role: 'user' },
  { label: 'Properties', href: '/properties', role: 'user' },
  { label: 'Properties Manager', href: '/admin/propiedads', role: 'admin' },
  { label: 'Categories Manager', href: '/admin/category', role: 'admin' },
  { label: 'Amenities Manager', href: '/admin/amenities', role: 'admin' },
  { label: 'City manager', href: '/admin/ciudad', role: 'admin' },
  { label: 'Services Manager', href: '/admin/servicios', role: 'admin' },
  /*{ label: 'Blog', href: '/blogs', role: 'user' },*/
  { label: 'Contact', href: '/contactus', role: 'user' },
  { label: 'Contact Manager', href: '/admin/contacts', role: 'admin' },
]
