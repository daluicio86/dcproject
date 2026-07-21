"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function PropertiesHero() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";
  const copy = lang === "es"
    ? {
        badge: "Portafolio inmobiliario",
        title: "Encuentre el lugar donde comienza su próxima historia.",
        description: "Propiedades seleccionadas en los paisajes más atractivos de Ecuador, para vivir, retirarse o invertir con visión.",
        action: "Explorar oportunidades",
        stat1: "Regiones únicas",
        stat2: "Medidas verificadas",
        stat3: "Atención personalizada",
      }
    : lang === "de"
      ? {
          badge: "Immobilienportfolio",
          title: "Finden Sie den Ort, an dem Ihre nächste Geschichte beginnt.",
          description: "Ausgewählte Immobilien in Ecuadors attraktivsten Landschaften – zum Leben, Ruhestand oder Investieren.",
          action: "Möglichkeiten entdecken",
          stat1: "Einzigartige Regionen",
          stat2: "Geprüfte Flächen",
          stat3: "Persönliche Beratung",
        }
      : {
          badge: "Real estate portfolio",
          title: "Find the place where your next story begins.",
          description: "Curated properties across Ecuador’s most inspiring landscapes, selected for living, retirement, and investment.",
          action: "Explore opportunities",
          stat1: "Unique regions",
          stat2: "Verified dimensions",
          stat3: "Personal guidance",
        };

  return (
    <section className="relative isolate min-h-[700px] overflow-hidden pt-[110px] xl:pt-[96px]">
      <Image src="/images/tumbaco/tumbaco1.jpg" alt="Propiedades y paisajes de Ecuador" fill priority className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,33,0.94)_0%,rgba(6,34,44,0.78)_47%,rgba(6,34,44,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(72,221,177,0.22),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[603px] max-w-[1400px] items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
            <Icon icon="ph:buildings-bold" width={17} height={17} className="text-[#5ce0b8]" /> {copy.badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{copy.description}</p>
          <Link href="#property-search" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#43d7aa] px-7 py-4 text-sm font-bold text-[#082129] shadow-xl transition hover:-translate-y-1 hover:bg-white">
            {copy.action}<Icon icon="ph:arrow-down-bold" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 grid w-[min(92%,1040px)] -translate-x-1/2 grid-cols-1 overflow-hidden rounded-t-[28px] border border-b-0 border-white/15 bg-[#092b36]/80 text-white backdrop-blur-xl sm:grid-cols-3">
        {[copy.stat1, copy.stat2, copy.stat3].map((stat, index) => (
          <div key={stat} className={`flex items-center justify-center gap-3 px-5 py-5 text-sm font-semibold ${index ? "sm:border-l sm:border-white/10" : ""}`}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[#59ddb6]">{index + 1}</span>{stat}
          </div>
        ))}
      </div>
    </section>
  );
}
