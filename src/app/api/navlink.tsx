<<<<<<< HEAD
﻿import { NavLinks } from '@/types/navlink'
=======
import { NavLinks } from '@/types/navlink'
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921

export const navLinks: NavLinks[] = [
  { label: 'Home', href: '/', role: 'user' },
  { label: 'Properties', href: '/properties', role: 'user' },
<<<<<<< HEAD
  { label: 'News', href: '/news', role: 'user' },
=======
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
  { label: 'Properties Manager', href: '/admin/propiedads', role: 'admin' },
  { label: 'Categories Manager', href: '/admin/category', role: 'admin' },
  //{ label: 'Amenities Manager', href: '/admin/amenities', role: 'admin' },
  { label: 'City manager', href: '/admin/ciudad', role: 'admin' },
  { label: 'Services Manager', href: '/admin/servicios', role: 'admin' },
  { label: 'Investors', href: '/investors', role: 'user' },
  { label: 'Contact', href: '/contactus', role: 'user' },
  { label: 'Contact Manager', href: '/admin/contacts', role: 'admin' },
]
