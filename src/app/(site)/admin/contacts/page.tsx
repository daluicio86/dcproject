import { getPaginatedContacts } from '@/actions/contact/contact-pagination';
import ContactListing from '@/components/Contact/ContactList';
import HeroSub from '@/components/shared/HeroSub';
import React from 'react'

interface Props {
    searchParams: {
        page?: string;
    };
}

export default async function ContactPage({ searchParams }: Props) {
    const params = await searchParams
    const page = Number(params.page ?? "1");

    const { contacts, currentPage, totalPages } =
        await getPaginatedContacts({ page });

    return (
        <>
            <HeroSub
                title="Gestión de Contactos"
                description="Administra y organiza tus contactos de manera eficiente."
                badge="Contactos"
            />
            <ContactListing contacts={contacts} currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}
