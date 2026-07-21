import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js"

interface HeroSubProps {
    title: string;
    description: string;
    badge: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, description, badge }) => {

    return (
        <section className="relative isolate overflow-hidden bg-[#0a2934] px-5 pb-24 pt-[255px] text-center text-white xl:pt-[150px]" >
            <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#2bd0a3]/20 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#e9b62d]/10 blur-3xl" />
            <div className="relative mx-auto max-w-5xl">
            <div className='mb-5 flex items-center justify-center gap-2.5'>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <Icon
                        icon={'ph:house-simple-fill'}
                        width={20}
                        height={20}
                        className='text-[#55dfb6]'
                    />
                </span>
                <p className='text-xs font-bold uppercase tracking-[0.22em] text-[#64e4bd]'>
                    {badge}
                </p>
            </div>
            <h1 className="relative text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl" >{title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-7 text-white/65 sm:text-lg">
                {description}
            </p>
            </div>
        </section>
    );
};

export default HeroSub;
