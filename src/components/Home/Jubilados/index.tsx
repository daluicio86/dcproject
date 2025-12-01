"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import DropdownMenu from "@/components/ui/dropdown/DropdownMenu";

const hospitales = [
  { name: "Hospital Metropolitano", url: "https://www.hospitalmetropolitano.org/es" },
  { name: "Hospital de los Valles", url: "https://www.hospitaldelosvalles.com/" },
  { name: "Hospital del Holding", url: "https://hospitaldelholding.com/" },
];

const Jubilados = () => {
  const { t } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

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

  // testimonials is now imported directly
  return (
    <section className="bg-white relative overflow-hidden" id="jubilados">
      <div className="absolute right-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div className="container mx-auto px-6 max-w-6xl">        
        {/* Título */}
        <div className="text-center mb-14 relative z-10">
          <p className="text-base font-semibold flex justify-center items-center gap-2 text-black">
            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
            {t("jubiladosForm.whyEcuador")}
          </p>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason1")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason2")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason3")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason4")}
          </h2>
          <DropdownMenu t={t} items={hospitales} />
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason6")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason7")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason8")}
          </h2>
          <h2 className="lg:text-24 text-24 text-black">
            {t("jubiladosForm.reason9")}
          </h2>
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden mt-10 mb-10">
          <Image
            src="/images/tumbaco/tumbaco2.jpg"
            alt="Tumbaco"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            unoptimized
          />
        </div>
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jubilados;