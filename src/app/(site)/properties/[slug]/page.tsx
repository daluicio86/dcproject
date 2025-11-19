"use client"
import React, { useEffect } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import { getPropiedadBySlug } from '@/actions';
import notFound from '@/app/not-found';
import { Propiedad } from '@/interface';
import { useFavoritos } from '@/hooks/useFavoritos';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

export default function Details(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = useParams();
  const { data: session } = useSession();
  const { favoritos, toggleFavorito } = useFavoritos();
  const { t } = useTranslation();

  const [item, setItem] = React.useState<Propiedad | null>(null);
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

    const fetchData = async () => {
      const result = await getPropiedadBySlug(typeof slug === 'string' ? slug : '');
      if (result) {
        setItem({
          ...result,
          address: result.address ?? "",
          rentaVenta: result.rentaVenta === null ? '' : result.rentaVenta,
          temperatura: result.temperatura === null ? '' : result.temperatura,
        });
      } else {
        setItem(null);
        notFound();
      }
    };
    fetchData();
  }, [api, slug]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Resto de tu componente...
  return (
    <section className="!pt-44 pb-20 relative" >
      {/* ... tu JSX existente ... */}
    </section>
  );
}