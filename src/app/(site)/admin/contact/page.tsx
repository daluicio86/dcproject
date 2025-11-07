import { getContacts } from '@/actions/contact/get-contacts';
import { redirect } from 'next/navigation';
import React from 'react'
import { ContactForm } from './ui/ContactForm';


export default async function ContactPage() {

    const [contact] = await Promise.all([
        getContacts()
    ]);

    if (!contact) {
        redirect('/admin/contacts')
    }
    const title = !contact ? 'Nuevo contacto' : 'Editar contacto'
    return (
        <>
            <div>{title}</div>
            <ContactForm contact={contact} />
        </>
    )
}
