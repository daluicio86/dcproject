"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type NewsItem = {
  title: string;
  date: string;
  category: string;
  summary: string;
};

export default function NewsPage() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const content = useMemo(() => {
    if (lang === "es") {
      return {
        pageTitle: "Noticias de Turismo en Ecuador",
        pageDescription: "Novedades y oportunidades que están atrayendo viajeros a Ecuador.",
        badge: "Noticias",
        items: [
          {
            title: "Quito fortalece rutas culturales para visitantes internacionales",
            date: "Mayo 2026",
            category: "Cultura",
            summary: "Nuevas rutas guiadas en el centro histórico incluyen museos, gastronomía local y talleres artesanales.",
          },
          {
            title: "Galápagos lanza iniciativa de turismo sostenible",
            date: "Mayo 2026",
            category: "Naturaleza",
            summary: "Operadores y autoridades presentan programas de bajo impacto enfocados en conservación marina.",
          },
          {
            title: "Rutas andinas en tren ganan popularidad",
            date: "Abril 2026",
            category: "Aventura",
            summary: "Aumentan las reservas de viajeros que buscan paisajes de altura y experiencias culturales.",
          },
          {
            title: "La costa ecuatoriana crece en ecoturismo de playa",
            date: "Abril 2026",
            category: "Costa",
            summary: "Ayampe y Puerto López atraen más visitantes por surf, avistamiento de ballenas y reservas costeras.",
          },
          {
            title: "Lodges amazónicos amplían experiencias comunitarias",
            date: "Marzo 2026",
            category: "Amazonía",
            summary: "Se fortalecen experiencias de selva con guías locales, educación ambiental y cultura ancestral.",
          },
          {
            title: "Ecuador impulsa el turismo gastronómico por provincias",
            date: "Marzo 2026",
            category: "Gastronomía",
            summary: "Campañas regionales destacan rutas del cacao, cocina tradicional y experiencias farm-to-table.",
          },
        ] as NewsItem[],
      };
    }

    if (lang === "de") {
      return {
        pageTitle: "Tourismusnachrichten in Ecuador",
        pageDescription: "Aktuelle Highlights und Chancen, die Reisende nach Ecuador ziehen.",
        badge: "Nachrichten",
        items: [
          {
            title: "Quito stärkt kulturelle Routen für internationale Besucher",
            date: "Mai 2026",
            category: "Kultur",
            summary: "Neue Führungen im historischen Zentrum verbinden Museen, lokale Gastronomie und Handwerksworkshops.",
          },
          {
            title: "Galapagos startet Initiative für nachhaltigen Tourismus",
            date: "Mai 2026",
            category: "Natur",
            summary: "Behörden und Anbieter führen Programme mit geringem Umwelteinfluss und Fokus auf Meeresschutz ein.",
          },
          {
            title: "Anden-Zugrouten werden bei Abenteurern beliebter",
            date: "April 2026",
            category: "Abenteuer",
            summary: "Mehr Buchungen auf landschaftlich reizvollen Routen mit Bergpanorama und kulturellen Stopps.",
          },
          {
            title: "Ecuadors Küste verzeichnet Wachstum im Öko-Strandtourismus",
            date: "April 2026",
            category: "Küste",
            summary: "Orte wie Ayampe und Puerto López ziehen Surfer und Naturreisende zunehmend an.",
          },
          {
            title: "Amazonas-Lodges bauen gemeinschaftsbasierte Angebote aus",
            date: "März 2026",
            category: "Amazonas",
            summary: "Gemeinschaftsprojekte bieten Regenwaldtouren mit lokalen Guides und kulturellem Austausch.",
          },
          {
            title: "Ecuador fördert kulinarischen Tourismus in den Provinzen",
            date: "März 2026",
            category: "Gastronomie",
            summary: "Regionale Kampagnen heben Kakao-Routen, traditionelle Küche und lokale Produzenten hervor.",
          },
        ] as NewsItem[],
      };
    }

    return {
      pageTitle: "Tourism News in Ecuador",
      pageDescription: "Latest highlights and opportunities that are attracting travelers to Ecuador.",
      badge: "News",
      items: [
        {
          title: "Quito strengthens cultural routes for international visitors",
          date: "May 2026",
          category: "Culture",
          summary: "New guided routes in Quito's historic center now include immersive experiences in museums, local gastronomy, and artisan workshops.",
        },
        {
          title: "Galapagos launches sustainable travel initiative",
          date: "May 2026",
          category: "Nature",
          summary: "Local authorities and tour operators introduced low-impact visitor programs focused on marine conservation and responsible tourism.",
        },
        {
          title: "Andean train routes gain popularity among adventure travelers",
          date: "April 2026",
          category: "Adventure",
          summary: "Scenic routes connecting mountain towns are seeing a rise in bookings from travelers seeking high-altitude landscapes and cultural stops.",
        },
        {
          title: "Ecuadorian coast reports growth in eco-beach tourism",
          date: "April 2026",
          category: "Coast",
          summary: "Destinations like Ayampe and Puerto López attract more visitors interested in surfing, whale watching, and protected beach reserves.",
        },
        {
          title: "Amazon lodges expand community-based experiences",
          date: "March 2026",
          category: "Amazon",
          summary: "Community-led eco-lodges offer rainforest exploration with local guides, biodiversity education, and indigenous cultural activities.",
        },
        {
          title: "Ecuador promotes culinary tourism across provinces",
          date: "March 2026",
          category: "Gastronomy",
          summary: "Regional campaigns highlight traditional dishes, cacao routes, and farm-to-table experiences for travelers seeking authentic flavors.",
        },
      ] as NewsItem[],
    };
  }, [lang]);

  const newsImages = [
    "/images/blog/blog-1.jpg",
    "/images/blog/blog-2.jpg",
    "/images/blog/blog-3.jpg",
    "/images/blog/blog-4.jpg",
    "/images/blog/blog-5.jpg",
    "/images/blog/blog-6.jpg",
  ];

  const editorial = lang === "es"
    ? { eyebrow: "Historias que inspiran", feature: "Ecuador en movimiento", description: "Cultura, naturaleza y nuevas oportunidades vistas desde cada región del país." }
    : lang === "de"
      ? { eyebrow: "Inspirierende Geschichten", feature: "Ecuador in Bewegung", description: "Kultur, Natur und neue Chancen aus allen Regionen des Landes." }
      : { eyebrow: "Stories that inspire", feature: "Ecuador in motion", description: "Culture, nature, and emerging opportunities from every region of the country." };

  return (
    <main className="bg-[#f4f1ea]">
      <section className="relative isolate min-h-[650px] overflow-hidden pt-[110px] xl:pt-[96px]">
        <Image src="/images/blog/blog-9.jpg" alt="Noticias de Ecuador" fill priority className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,33,0.94),rgba(7,35,45,0.72)_55%,rgba(7,35,45,0.18))]" />
        <div className="relative mx-auto flex min-h-[553px] max-w-[1400px] items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-4xl text-white">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md"><Icon icon="ph:newspaper-clipping-bold" width={18} className="text-[#5ce0b8]" />{editorial.eyebrow}</p>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.23em] text-[#5ce0b8]">{editorial.feature}</p>
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{content.pageTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{editorial.description}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#f4f1ea] pb-24 pt-12 sm:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.items.map((item, index) => (
              <article key={item.title} className="group relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_12px_35px_rgba(15,45,55,0.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(15,45,55,0.15)]">
                <div className="relative h-52 overflow-hidden">
                  <Image src={newsImages[index]} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092b36]/50 to-transparent" />
                </div>
                <div className="relative min-h-[280px] p-7">
                <span className="absolute right-5 top-3 text-7xl font-semibold text-black/[0.025]">{String(index + 1).padStart(2, "0")}</span>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="relative rounded-full bg-[#e1f7f0] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#087e5e]">
                    {item.category}
                  </span>
                  <span className="text-xs text-black/50">{item.date}</span>
                </div>

                <h2 className="relative mb-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#16212b] transition group-hover:text-[#0d8766]">
                  {item.title}
                </h2>

                <p className="relative text-sm leading-7 text-black/60">{item.summary}</p>
                <div className="absolute inset-x-7 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-[#31c99b] transition duration-300 group-hover:scale-x-100" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
