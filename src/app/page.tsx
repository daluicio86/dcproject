"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import FeaturedStyledProperties from "@/components/Home/FeaturedStyledProperties"

export default function Home() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2)

  const tr = useMemo(() => {
    if (lang === "es") {
      return {
        hero: "Propiedades en Ecuador para Inversionistas Jubilados",
        whyTitle: "Por que Ecuador?",
        why: [
          ["1. Costo de vida accesible", "Vivir en Ecuador suele ser mas economico que en muchos paises de America y Europa."],
          ["2. Diversidad natural en poco espacio", "En pocas horas pasas de costa a Andes, Amazonia o Galapagos."],
          ["3. Climas para todos", "Costa calida, Andes templados, Amazonia humeda todo el ano."],
          ["4. Gente amable y estilo tranquilo", "Se valora la cercania, comunidad y un ritmo de vida mas calmado."],
          ["5. Salud accesible", "Hospitales publicos economicos y clinicas privadas de buena calidad."],
          ["6. Dolar como moneda", "Aporta estabilidad economica y evita devaluaciones bruscas."],
          ["7. Facilidades para extranjeros", "Opciones de visa para jubilados, inversion, trabajo y nomadas digitales."],
          ["8. Comida fresca y variada", "Frutas, verduras y mariscos durante todo el ano."],
          ["9. Cultura rica y diversa", "Tradiciones indigenas, mestizaje, festividades y gastronomia."],
        ],
        actKicker: "ACTIVIDADES EN ECUADOR",
        actTitle: "Ecuador ofrece experiencias para todo tipo de viajeros: naturaleza, aventura, cultura, gastronomia y relax.",
        contactKicker: "CONTACTANOS",
        contactTitle: "Agenda tu visita y da el primer paso a tu nuevo hogar.",
        contactSub: "Tu inversion es una experiencia unica.",
        call: "Llama hoy",
        faqKicker: "PREGUNTAS FRECUENTES",
        actCards: [
          {
            title: "1. Aventura y Naturaleza",
            items: [
              "Trekking a Quilotoa (crater volcanico con laguna turquesa)",
              "Escalar Cotopaxi o senderismo en el Parque Nacional Cotopaxi",
              "Visitar Chimborazo (el punto mas cercano al sol)",
              "Buceo y snorkel en Galapagos",
              "Canopy y rafting en Banos de Agua Santa",
            ],
          },
          {
            title: "2. Cultura y Ciudades",
            items: [
              "Centro Historico de Quito (Patrimonio UNESCO)",
              "Visitar Cuenca y sus iglesias coloniales",
              "Recorrer el Malecon 2000 en Guayaquil",
              "Conocer La Ronda y Mitad del Mundo",
              "Visitar museos",
            ],
          },
          {
            title: "3. Playas y Costa",
            items: [
              "Montanita (surf y vida nocturna)",
              "Ayampe (tranquilidad, yoga y surf)",
              "Los Frailes (de las mejores playas del pais)",
              "Salinas (balneario familiar)",
              "Puerto Lopez (avistamiento de ballenas)",
            ],
          },
          {
            title: "4. Amazonia",
            items: [
              "Cuyabeno: biodiversidad y fauna",
              "Yasuni: selva profunda y comunidades indigenas",
              "Tena: rafting y actividades de agua",
              "Paseos en canoa y avistamiento de delfines rosados",
            ],
          },
          {
            title: "5. Experiencias Unicas",
            items: [
              "Avistamiento de ballenas jorobadas en Manabi",
              "Cruzar la Nariz del Diablo (Riobamba - Alausi)",
              "Bosque Petrificado de Puyango",
              "Puentes colgantes en Mindo",
              "Rutas de cafe y chocolate en costa y Amazonia",
            ],
          },
          {
            title: "6. Mercados y Artesanias",
            items: [
              "Mercado de Otavalo (de los mas grandes de Sudamerica)",
              "Artesanias de Cuenca",
              "Sombreros de paja toquilla (mal llamados Panama Hat)",
              "Productos locales: cacao, cafe, ceramica y textiles",
            ],
          },
        ],
      }
    }

    if (lang === "de") {
      return {
        hero: "Immobilien in Ecuador fuer pensionierte Investoren",
        whyTitle: "Warum Ecuador?",
        why: [
          ["1. Erschwingliche Lebenshaltungskosten", "Ecuador ist oft guenstiger als viele Laender in Amerika und Europa."],
          ["2. Natuerliche Vielfalt auf kleinem Raum", "In wenigen Stunden von Kueste zu Anden, Amazonas oder Galapagos."],
          ["3. Klima fuer jeden Geschmack", "Warme Kueste, gemaessigte Anden, feuchter Amazonas das ganze Jahr."],
          ["4. Freundliche Menschen und entspannter Lebensstil", "Herzlichkeit, Gemeinschaft und ein ruhigeres Lebenstempo."],
          ["5. Bezahlbare Gesundheitsversorgung", "Guenstige oeffentliche Krankenhaeuser und gute Privatkliniken."],
          ["6. US-Dollar als Waehrung", "Sorgt fuer Stabilitaet und reduziert starke Abwertungen."],
          ["7. Moeglichkeiten fuer Auslaender", "Visa fuer Rentner, Investoren, Arbeit und digitale Nomaden."],
          ["8. Frische und vielfaeltige Lebensmittel", "Obst, Gemuese und Meeresfruechte das ganze Jahr."],
          ["9. Reiche und vielfaeltige Kultur", "Indigene Traditionen, Feste, Musik und Gastronomie."],
        ],
        actKicker: "AKTIVITAETEN IN ECUADOR",
        actTitle: "Ecuador bietet Erlebnisse fuer alle Reisetypen: Natur, Abenteuer, Kultur, Gastronomie und Entspannung.",
        contactKicker: "KONTAKT",
        contactTitle: "Vereinbaren Sie Ihren Besuch und machen Sie den ersten Schritt in Ihr neues Zuhause.",
        contactSub: "Ihre Investition ist ein einzigartiges Erlebnis.",
        call: "Jetzt anrufen",
        faqKicker: "FAQS",
        actCards: [
          {
            title: "1. Abenteuer und Natur",
            items: [
              "Trekking nach Quilotoa (Vulkankrater mit tuerkisfarbener Lagune)",
              "Cotopaxi besteigen oder wandern im Cotopaxi-Nationalpark",
              "Chimborazo besuchen (der sonnennachste Punkt der Erde)",
              "Tauchen und Schnorcheln auf Galapagos",
              "Canopy und Rafting in Banos de Agua Santa",
            ],
          },
          {
            title: "2. Kultur und Staedte",
            items: [
              "Historisches Zentrum von Quito (UNESCO-Welterbe)",
              "Cuenca und seine Kolonialkirchen besuchen",
              "Spaziergang am Malecon 2000 in Guayaquil",
              "La Ronda und Mitad del Mundo entdecken",
              "Museen besuchen",
            ],
          },
          {
            title: "3. Straende und Kueste",
            items: [
              "Montanita (Surfen und Nachtleben)",
              "Ayampe (Ruhe, Yoga, Surfen)",
              "Los Frailes (einer der besten Straende des Landes)",
              "Salinas (familienfreundlicher Badeort)",
              "Puerto Lopez (Walbeobachtung)",
            ],
          },
          {
            title: "4. Amazonas",
            items: [
              "Cuyabeno: Artenvielfalt und Tierwelt",
              "Yasuni: tiefer Regenwald und indigene Gemeinschaften",
              "Tena: Rafting und Wasseraktivitaeten",
              "Kanufahrten und Beobachtung rosafarbener Delfine",
            ],
          },
          {
            title: "5. Einzigartige Erlebnisse",
            items: [
              "Beobachtung von Buckelwalen in Manabi",
              "Ueberquerung der Teufelsnase (Riobamba - Alausi)",
              "Versteinerter Wald von Puyango",
              "Haengebruecken in Mindo",
              "Kaffee- und Schokoladentouren an Kueste und Amazonas",
            ],
          },
          {
            title: "6. Maerkte und Handwerk",
            items: [
              "Otavalo-Markt (einer der groessten Suedamerikas)",
              "Handwerkskunst aus Cuenca",
              "Sombreros aus Toquilla-Stroh (oft Panama-Hut genannt)",
              "Lokale Produkte: Kakao, Kaffee, Keramik und Textilien",
            ],
          },
        ],
      }
    }

    return {
      hero: "Properties in Ecuador for Retired Investors",
      whyTitle: "Why Ecuador?",
      why: [
        ["1. Affordable cost of living", "Living in Ecuador is often cheaper than in many countries in the Americas and Europe."],
        ["2. Natural diversity in a small area", "In a few hours you can go from coast to Andes, Amazon, or Galapagos."],
        ["3. Climates for all tastes", "Warm coast, temperate Andes, humid Amazon all year round."],
        ["4. Friendly people and relaxed lifestyle", "Warmth, community life, and a slower pace are part of daily life."],
        ["5. Affordable healthcare", "Inexpensive public hospitals and good quality private clinics."],
        ["6. US dollar as currency", "Economic stability and fewer sharp devaluations."],
        ["7. Facilities for foreigners", "Retiree, investment, work and digital nomad visa options."],
        ["8. Fresh and varied food", "Fruits, vegetables, and seafood available year-round."],
        ["9. Rich and varied culture", "Indigenous traditions, festivals, music, crafts, and gastronomy."],
      ],
      actKicker: "ACTIVITIES IN ECUADOR",
      actTitle: "Ecuador offers experiences for all types of travelers: nature, adventure, culture, gastronomy, and relaxation.",
      contactKicker: "CONTACT US",
      contactTitle: "Schedule your visit and take the first step toward your new home.",
      contactSub: "Your investment is a unique experience.",
      call: "Call today",
      faqKicker: "FAQs",
      actCards: [
        {
          title: "1. Adventure and Nature",
          items: [
            "Trekking to Quilotoa (volcanic crater with turquoise lagoon)",
            "Climbing Cotopaxi or hiking in Cotopaxi National Park",
            "Visiting Chimborazo (the closest point to the sun)",
            "Diving and snorkeling in the Galapagos Islands",
            "Canopy tours and rafting in Banos de Agua Santa",
          ],
        },
        {
          title: "2. Culture and Cities",
          items: [
            "Explore the Historic Center of Quito (UNESCO World Heritage Site)",
            "Visit Cuenca and its colonial churches",
            "Stroll along the Malecon 2000 in Guayaquil",
            "Explore La Ronda and Mitad del Mundo",
            "Visit museums",
          ],
        },
        {
          title: "3. Beaches and Coast",
          items: [
            "Montanita (surfing and nightlife)",
            "Ayampe (tranquility, yoga, surfing)",
            "Los Frailes (one of the best beaches in the country)",
            "Salinas (family-friendly beach resort)",
            "Puerto Lopez (whale watching)",
          ],
        },
        {
          title: "4. Amazon Rainforest",
          items: [
            "Cuyabeno: biodiversity and wildlife",
            "Yasuni: deep rainforest and indigenous communities",
            "Tena: rafting and water activities",
            "Canoe tours and pink dolphin watching",
          ],
        },
        {
          title: "5. Unique Experiences",
          items: [
            "Humpback whale watching in Manabi",
            "Crossing the Devil's Nose route (Riobamba - Alausi)",
            "Visiting the Puyango Petrified Forest",
            "Walking on suspension bridges in Mindo",
            "Coffee and chocolate tours on the coast and Amazon",
          ],
        },
        {
          title: "6. Markets and Handicrafts",
          items: [
            "Otavalo Market (one of the largest in South America)",
            "Handicrafts from Cuenca",
            "Toquilla straw hats (often called Panama Hat)",
            "Local products: cacao, coffee, ceramics, textiles",
          ],
        },
      ],
    }
  }, [lang])

  const heroUi = lang === "es"
    ? { badge: "Vivir e invertir en Ecuador", action: "Ver propiedades", contact: "Planificar una visita", note: "Una selección inmobiliaria para una nueva etapa de vida." }
    : lang === "de"
      ? { badge: "Leben und investieren in Ecuador", action: "Immobilien ansehen", contact: "Besuch planen", note: "Ausgewählte Immobilien für einen neuen Lebensabschnitt." }
      : { badge: "Live and invest in Ecuador", action: "View properties", contact: "Plan a visit", note: "A curated real estate collection for your next chapter." }

  return (
    <main className="bg-[#f5f1ea] pt-[110px] text-[#1f1f1f] xl:pt-[96px]">
      <section className="py-0" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="relative isolate min-h-[700px] overflow-hidden" style={{ backgroundImage: "url('/images/tumbaco/tumbaco2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,33,0.95),rgba(7,35,45,0.72)_55%,rgba(7,35,45,0.16))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(73,222,178,0.2),transparent_30%)]" />
            <div className="relative mx-auto flex min-h-[700px] max-w-[1400px] items-center px-5 py-16 sm:px-8 lg:px-12">
              <div className="max-w-4xl text-white">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">{heroUi.badge}</p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{tr.hero}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{heroUi.note}</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="#propiedades" className="rounded-full bg-[#43d7aa] px-7 py-4 text-center text-sm font-bold text-[#082129] shadow-xl transition hover:-translate-y-1 hover:bg-white">{heroUi.action}</Link>
                  <Link href="/contactus" className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20">{heroUi.contact}</Link>
                </div>
              </div>
            </div>
        </div>
      </section>

      <FeaturedStyledProperties />

      <section className="py-24">
        <div className="container mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="mb-12 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0b9c74]">Ecuador 360°</p><h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#1e252b] sm:text-6xl">{tr.whyTitle}</h2></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tr.why.map(([title, desc], index) => (
              <article key={title} className="group relative min-h-[190px] overflow-hidden rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(15,45,55,0.06)] transition hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute right-5 top-3 text-6xl font-semibold text-black/[0.025]">{String(index + 1).padStart(2, "0")}</span>
                <div className="mb-5 h-1 w-12 rounded-full bg-[#39ca9d] transition-all group-hover:w-20" />
                <h3 className="relative mb-3 text-lg font-semibold">{title}</h3>
                <p className="relative text-sm leading-6 text-black/60">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#16b887]">{tr.actKicker}</p>
            <h2 className="mx-auto max-w-5xl text-3xl font-semibold leading-tight text-[#1e252b] sm:text-5xl">{tr.actTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tr.actCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-[30px] font-semibold leading-tight text-[#13b786]">{card.title}</h3>
                <ul className="space-y-2 text-base leading-relaxed text-[#495564]">
                  {card.items.map((item) => (
                    <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[10px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#495564]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-[#232323] p-8 text-white sm:p-12">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/80">{tr.contactKicker}</p>
            <h2 className="mb-4 text-3xl font-semibold sm:text-5xl">{tr.contactTitle}</h2>
            <p className="mb-8 text-white/80">{tr.contactSub}</p>
            <div className="grid gap-4 text-base sm:grid-cols-3">
              <p>(+593)99-456-7412</p>
              <p>elizabethlinacardenas@hotmail.com</p>
              <p>Quito - Ecuador</p>
            </div>
            <div className="mt-8">
              <Link href="https://wa.me/593994567412" target="_blank" className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#232323] transition hover:bg-[#f0e9de]">
                {tr.call}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="min-h-[320px] rounded-2xl sm:min-h-[420px]" style={{ backgroundImage: "url('/images/faqs/620322660.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#16b887]">{tr.faqKicker}</p>
              <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#1e252b] sm:text-6xl">All about Amazing Farms</h2>
              <p className="mb-6 text-base text-black/55">We know that buying, selling, or investing in real estate can be overwhelming. Here are some frequently asked questions.</p>
              <div className="space-y-3">
                <details open className="rounded-xl border border-black/10 bg-white px-5 py-4"><summary className="cursor-pointer list-none text-2xl font-semibold text-[#1f1f1f]">1. Can I customize my estate?</summary></details>
                <details className="rounded-xl border border-black/10 bg-white px-5 py-4"><summary className="cursor-pointer list-none text-2xl font-semibold text-[#1f1f1f]">2. Where can I find estates?</summary></details>
                <details className="rounded-xl border border-black/10 bg-white px-5 py-4"><summary className="cursor-pointer list-none text-2xl font-semibold text-[#1f1f1f]">3. What steps to buy an estate?</summary></details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
