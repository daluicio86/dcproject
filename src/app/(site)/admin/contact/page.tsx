import { getContacts } from '@/actions/contact/get-contacts';
import { redirect } from 'next/navigation';
import React from 'react'
import { ContactForm } from './ui/ContactForm';


export default async function ContactPage() {

    const [contacts] = await Promise.all([
        getContacts()
    ]);

    const contact = contacts && contacts.length > 0 ? contacts[0] : null;

    if (!contact) {
        redirect('/admin/contacts')
    }
    const title = !contact ? 'Nuevo contacto' : 'Editar contacto'
    const contactWithNumberId = contact
        ? {
            ...contact,
            id: Number(contact.id),
            name: contact.name ?? undefined,
            telefono: contact.telefono ?? undefined,
            mensaje: contact.mensaje ?? undefined,
        }
        : null;
    return (
        <>
            <div>{title}</div>
            <ContactForm contact={contactWithNumberId} />
        </>
    )
}
