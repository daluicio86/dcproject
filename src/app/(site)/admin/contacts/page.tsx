import HeroSub from "@/components/shared/HeroSub";
import React from "react";
import { Metadata } from "next";
import { getPaginatedContacts } from "@/actions/contact/contact-pagination";
import ContactListing from "@/components/Contact/ContactList";

export const metadata: Metadata = {
    title: "Lista de servicios| Buying and selling",
};

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function ContactsPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const pageNumber = page ? parseInt(page) : 1;

    const { contacts, currentPage, totalPages } = await getPaginatedContacts({ page: pageNumber });

    return (
        <>
            <HeroSub
                title="Gestión de Contactos"
                description="Administra y organiza tus contactos de manera eficiente."
                badge="Contactos"
            />
            <ContactListing contacts={contacts} currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};