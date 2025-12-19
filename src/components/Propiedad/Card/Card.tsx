
"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Propiedad } from '@/interface';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { useTranslation } from 'react-i18next'

function formatPriceEcuador(value) {
  return value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "'") + " USD";
}


const PropiedadCard: React.FC<{ item: Propiedad }> = ({ item }) => {
  const { title, slug, apto, precio, tipoMedida, metros,
    altura, address, images } = item
  const { t } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
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

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return (
    <div>
      <div className='relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20'>
        <div className='overflow-hidden rounded-t-2xl'>
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((ele, index) => (
                  <CarouselItem key={index}>
                    <Link href={`/admin/propiedad/${slug}`}>
                      {ele.url.includes('.mp4') ? (
                        <video
                          src={ele.url}
                          controls
                          className="rounded-2xl w-full h-96"
                        />
                      ) : (
                        <Image
                          src={ele.url}
                          alt={index.toString()}
                          width={250}
                          height={250}
                          className="rounded-2xl w-full h-96"
                          unoptimized={true}
                        />)}
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          <div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block'>
            <Icon
              icon={'solar:arrow-right-linear'}
              width={24}
              height={24}
              className='text-black'
            />
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6'>
            <div>
              <Link href={`/propiedad/${slug}`}>
                <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
                  {title}
                </h3>
              </Link>
              <p className='text-base font-normal text-black/50 dark:text-white/50'>
                {address}
              </p>
            </div>
            <div>
              <button className='text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10'>
                ${formatPriceEcuador(precio)}
              </button>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
              <Icon
                icon={'solar:bed-linear'}
                width={20}
                height={20}
              />

              <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                Terreno Apto: {apto}
              </p>
            </div>

            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
              <Icon
                icon={'lineicons:arrow-all-direction'}
                width={20}
                height={20}
              />
              {tipoMedida === "ha" ? (
                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                  {metros}ha
                </p>
              ) : (
                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                  {metros}m<sup>2</sup>
                </p>)}
            </div>
            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
              <Icon
                icon={'lineicons:arrow-up'}
                width={20} height={20} />
              <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                {altura}msnm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropiedadCard
