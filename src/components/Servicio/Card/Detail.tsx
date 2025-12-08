
"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Servicio } from '@/interface';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { useTranslation } from 'react-i18next'



const ServicioDetail: React.FC<{ item: Servicio }> = ({ item }) => { 
  const { nombre, images } = item
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
    <div className='flex justify-center my-30 px-8'>
      
      <div className='relative rounded-2xl border border-dark/10 dark:border-white/10
       group hover:shadow-3xl duration-300 dark:hover:shadow-white/20 left-1/2 -translate-x-1/2'>
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
                      <Image
                        src={ele.url}
                        alt={index.toString()}
                        width={250}
                        height={250}
                        className="rounded-2xl w-3xl h-96"
                        unoptimized={true}
                      />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute left-1/2 -translate-x-1/2 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5 z-10">
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
              <Link href={`/admin/servicio/${nombre}`}>
                <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
                  {nombre}
                </h3>
              </Link>
              <p className='text-justify'>{item.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicioDetail
