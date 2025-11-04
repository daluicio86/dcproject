"use client"

import { useSession, signOut, signIn } from "next-auth/react"

export const LogoutButton = () => {
    const { data: session, status } = useSession();
    {/*if (status === 'loading') {
        return (
            <button className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'>
                <span className="group-hover:text-gray-700">Espere ...</span>
            </button>
        )
    }
    if (status === 'unauthenticated') {
        return (
            <button onClick={() => signIn()} className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'>
                <span className="group-hover:text-gray-700">Ingresar</span>
            </button>
        )
    }*/}

    if (status === 'authenticated') {
        return (
            <button className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'
                onClick={() => signOut()}>
                Cerrar Sesión
            </button>
        )
    }
}
