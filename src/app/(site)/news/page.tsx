"use client";

import HeroSub from "@/components/shared/HeroSub";
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

  return (
    <>
      <HeroSub
        title={content.pageTitle}
        description={content.pageDescription}
        badge={content.badge}
      />

      <section className="pt-0!">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {content.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#e7f7f2] px-3 py-1 text-xs font-semibold text-[#169f78]">
                    {item.category}
                  </span>
                  <span className="text-xs text-black/50">{item.date}</span>
                </div>

                <h2 className="mb-3 text-2xl font-semibold leading-tight text-[#16212b]">
                  {item.title}
                </h2>

                <p className="text-sm leading-6 text-black/65">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
