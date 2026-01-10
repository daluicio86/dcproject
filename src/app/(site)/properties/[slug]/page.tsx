"use client"
import React, { useEffect } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import { getPropiedadBySlug } from '@/actions';
import notFound from '@/app/not-found';
import { Propiedad, PropiedadImage } from '@/interface';
import { useFavoritos } from '@/hooks/useFavoritos';

import { useTranslation } from 'react-i18next';

export default function Details() {
    const params = useParams();
    const slug = params.slug as string;

    const { favoritos, toggleFavorito } = useFavoritos();
    const { t } = useTranslation();

    const [item, setItem] = React.useState<Propiedad | null>(null);
    const [images, setImages] = React.useState<PropiedadImage[]>([]);

    const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [lightboxSrc, setLightboxSrc] = React.useState<string>("");
    const [lightboxIsVideo, setLightboxIsVideo] = React.useState(false);

    const openLightbox = (src: string, isVideo: boolean) => {
        setLightboxSrc(src);
        setLightboxIsVideo(isVideo);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxSrc("");
        setLightboxIsVideo(false);
    };

    // Cerrar con ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
        };

        if (lightboxOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [lightboxOpen]);


    // Separar el efecto para cargar los datos
    useEffect(() => {
        const fetchData = async () => {
            if (!slug) return;

            const result = await getPropiedadBySlug(slug);
            if (result) {
                setItem({
                    ...result,
                    address: result.address ?? "",
                    rentaVenta: result.rentaVenta === null ? '0' : result.rentaVenta,
                    temperatura: result.temperatura === null ? '0' : result.temperatura,
                    geoLink: result.geoLink ?? "",
                    images: result.images ?? [],
                    tipoMedida: result.tipoMedida ?? undefined,
                    ciudadId: result.ciudadId ?? undefined,
                });
                setImages(result.images ?? []);
            } else {
                setItem(null);
                notFound();
            }
        };
        fetchData();
    }, [slug]);

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    React.useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[92vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeLightbox}
                            className="absolute top-2 right-2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>

                        {lightboxIsVideo ? (
                            <video
                                src={lightboxSrc}
                                className="w-full h-full object-contain rounded-xl bg-black"
                                controls
                                autoPlay
                            />
                        ) : (
                            // Para fullscreen mejor <img> (evita líos de next/image y dominios)
                            <img
                                src={lightboxSrc}
                                alt="Vista completa"
                                className="max-w-full max-h-full w-auto h-auto rounded-xl"
                            />
                        )}
                    </div>
                </div>
            )}

            <section className="!pt-44 pb-20 relative" >
                <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                    <div className="grid grid-cols-12 items-end gap-6">
                        <div className="lg:col-span-8 col-span-12">
                            <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.title}</h1>
                            <div className="flex gap-2.5">
                                <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                                <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.address}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <div className='flex'>
                                <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                    <Icon icon="ph:cloud" width={20} height={20} />
                                    <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                        {item?.apto}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                    <Icon icon={'lineicons:arrow-up'} width={20} height={20} />
                                    <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                        {item?.altura}msnm
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                    <Icon
                                        icon={'lineicons:arrow-all-direction'}
                                        width={20}
                                        height={20}
                                    />
                                    {item?.tipoMedida === "ha" ? (<p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                        {item?.metros}ha
                                    </p>) : (<p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                        {item?.metros}m<sup>2</sup>
                                    </p>)}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-8 mt-10">
                        {/* Carrusel a la izquierda */}
                        <div className="lg:col-span-8 col-span-12">
                            <Carousel setApi={setApi} className="rounded-2xl overflow-hidden w-full">
                                <CarouselContent>
                                    {images.map((ele, index) => (
                                        <CarouselItem key={ele.id ?? ele.url}>
                                            {ele.url.includes('.mp4') ? (
                                                <div className="relative w-full h-96">
                                                    <video
                                                        src={ele.url}
                                                        controls
                                                        className="rounded-2xl w-full h-full object-cover"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => openLightbox(ele.url, true)}
                                                        className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-2 rounded-full text-sm"
                                                    >
                                                        Pantalla completa
                                                    </button>
                                                </div>

                                            ) : (
                                                <Image
                                                    src={ele.url}
                                                    alt={index.toString()}
                                                    width={1600}
                                                    height={900}
                                                    className="rounded-2xl w-full h-96 object-cover cursor-zoom-in"
                                                    unoptimized
                                                    onClick={() => openLightbox(ele.url, false)}
                                                />


                                            )}

                                            {/*<Image
                                            src={ele.url}
                                            width={1600}
                                            height={900}
                                            className="w-full h-[420px] object-cover rounded-2xl"
                                            alt={`img-${index}`}
                                        />*/}
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* Dots abajo centrados */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleDotClick(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${current - 1 === i ? "bg-white scale-125" : "bg-white/50"}`}
                                        />
                                    ))}
                                </div>
                            </Carousel>
                        </div>

                        {/* Favorites a la derecha */}
                        <div className="lg:col-span-4 col-span-12">
                            <div className="bg-primary/10 p-8 rounded-2xl relative overflow-hidden">
                                <p className='text-sm text-dark/50 dark:text-white'>Favorites</p>

                                {item && (
                                    <button
                                        onClick={() => toggleFavorito(item.id)}
                                        className="text-xl mt-1"
                                    >
                                        {favoritos?.includes(item.id) ? "❤️" : "🤍"}
                                    </button>
                                )}

                                <Link
                                    href="#"
                                    className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8'
                                >
                                    {t("btnText1")}
                                </Link>

                                <div className="absolute right-0 top-4 opacity-30">
                                    <Image src="/images/properties/vector.svg" width={300} height={300} alt="vector" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-12 gap-8 mt-10">
                        <div className="lg:col-span-8 col-span-12">
                            <h3 className='text-xl font-medium'>Property details</h3>
                            {/*<div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/property-details.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/property-details-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Property details</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        One of the few homes in the area with a private pool.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/smart-home-access.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/smart-home-access-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Smart home access</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Easily check yourself in with a modern keypad system.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/energyefficient.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/energyefficient-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Energy efficient</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Built in 2025 with sustainable and smart-home features.
                                    </p>
                                </div>
                            </div>
                        </div>*/}
                            <div className="flex flex-col gap-5">
                                <p className='text-dark dark:text-white text-xm '>
                                    {item?.description}
                                </p>
                            </div>
                            {/* <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>What this property offers</h3>
                            <div className="grid grid-cols-3 mt-5 gap-6">
                         <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:aperture" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Smart Home Integration</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:chart-pie-slice" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Spacious Living Areas</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:television-simple" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Energy Efficiency</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:sun" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Natural Light</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:video-camera" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Security Systems</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:cloud" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Outdoor Spaces</p>
                                </div>
                                {item?.amenities && item.amenities.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2.5">
                                        <p className='text-base dark:text-white text-dark'>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                    </div>
                    <iframe
                        src={item?.geoLink}
                        width="1114" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl w-full">
                    </iframe>*/}
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            {/* <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                        <p className='text-sm text-dark/50 dark:text-white'>Favorites</p>
                        {item && (
                            <button
                                onClick={() => item && toggleFavorito(item.id)}
                                className="text-xl mt-1"
                            >
                                {favoritos?.includes(item.id) ? "❤️" : "🤍"}
                            </button>
                        )}
                        <Link href="#" className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                            {t("btnText1")}
                        </Link>
                        <div className="absolute right-0 top-4 -z-[1]">
                            <Image src="/images/properties/vector.svg" width={400} height={500} alt="vector" unoptimized={true} />
                        </div>
                    </div>
                   {testimonials.slice(0, 1).map((item, index) => (
                            <div key={index} className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
                                <Icon icon="ph:house-simple" width={44} height={44} className="text-primary" />
                                <p className='text-xm text-dark dark:text-white'>{item.review}</p>
                                <div className="flex items-center gap-6">
                                    <Image src={item.image} alt={item.name} width={400} height={500} className='w-20 h-20 rounded-2xl' unoptimized={true} />
                                    <div className="">
                                        <h3 className='text-xm text-dark dark:text-white'>{item.name}</h3>
                                        <h4 className='text-base text-dark/50 dark:text-white/50'>{item.position}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}*/}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}