
"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Servicio } from '@/interface';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { useTranslation } from 'react-i18next'



const ServicioCardV1: React.FC<{ item: Servicio }> = ({ item }) => {
  const { nombre , images } = item

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
          {/*<Link href={`/servicio/${nombre}`}>
            {mainImage && (
              <Image
                src={mainImage}
                alt={nombre}
                width={440}
                height={300}
                className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75'
                unoptimized={true}
              />
            )}
          </Link>*/}

          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((ele, index) => {
                  return (
                    <CarouselItem key={index}>
                      <Link href={`/servicio/${nombre}`}>
                        <Image
                          src={typeof ele === 'string' ? ele : (ele as any).src ?? (ele as any).url ?? ''}
                          alt={index.toString()}
                          width={250}
                          height={250}
                          className="rounded-2xl w-full h-96"
                          unoptimized={true}
                        />
                      </Link>
                    </CarouselItem>
                  );
                })}
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
        <div className="p-2">
          <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-6 justify-between mb-6">
            <div className="flex flex-col justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 shadow-sm border border-gray-200 dark:border-gray-700 w-full min-h-[260px]">
              <div>
                <Link href={`/servicio/${nombre}`}>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {nombre}
                  </h3>
                </Link>
                <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed line-clamp-5">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicioCardV1
