"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const climateIcons = ["ph:sun-horizon", "ph:mountains", "ph:plant", "ph:wind"];
const climateAccents = ["#f4ad28", "#2c91a3", "#14a77d", "#c56e3d"];

export default function Investors() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const labels =
    lang === "es"
      ? {
          eyebrow: "Invierta con visión",
          explore: "Explorar propiedades",
          talk: "Hablar con un asesor",
          climates: "Cuatro climas, múltiples oportunidades",
          climatesSub: "Ecuador permite elegir el entorno que mejor se adapta a su estilo de vida y estrategia de inversión.",
          opportunity: "Una decisión que combina calidad de vida y patrimonio",
          opportunitySub: "Ubicación estratégica, diversidad natural y oportunidades inmobiliarias en un mismo destino.",
          stat1: "Clima todo el año",
          stat2: "Moneda estable",
          stat3: "Diversidad regional",
          cta: "Descubra dónde puede comenzar su próxima inversión.",
        }
      : lang === "de"
        ? {
            eyebrow: "Investieren mit Weitblick",
            explore: "Immobilien entdecken",
            talk: "Beratung anfragen",
            climates: "Vier Klimazonen, viele Möglichkeiten",
            climatesSub: "In Ecuador können Sie die Umgebung wählen, die am besten zu Ihrem Lebensstil und Ihrer Anlagestrategie passt.",
            opportunity: "Eine Entscheidung für Lebensqualität und Vermögensaufbau",
            opportunitySub: "Strategische Lage, natürliche Vielfalt und Immobilienchancen an einem Ort.",
            stat1: "Ganzjähriges Klima",
            stat2: "Stabile Währung",
            stat3: "Regionale Vielfalt",
            cta: "Entdecken Sie den idealen Ort für Ihre nächste Investition.",
          }
        : {
            eyebrow: "Invest with perspective",
            explore: "Explore properties",
            talk: "Talk to an advisor",
            climates: "Four climates, many opportunities",
            climatesSub: "Ecuador lets you choose the environment that best fits your lifestyle and investment strategy.",
            opportunity: "A decision that combines quality of life and long-term value",
            opportunitySub: "Strategic location, natural diversity, and real estate opportunities in one destination.",
            stat1: "Year-round climate",
            stat2: "Stable currency",
            stat3: "Regional diversity",
            cta: "Discover where your next investment can begin.",
          };

  const climates = [1, 2, 3, 4].map((number, index) => ({
    text: t(`investors.description.point${number}`),
    icon: climateIcons[index],
    accent: climateAccents[index],
    number: String(number).padStart(2, "0"),
  }));

  return (
    <main className="overflow-hidden bg-[#f4f1ea] pt-[110px] text-[#172023] xl:pt-[96px]">
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <Image src="/images/tumbaco/tumbaco2.jpg" alt="Paisaje de Ecuador" fill priority className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,33,0.94)_0%,rgba(8,31,40,0.78)_45%,rgba(8,31,40,0.22)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1400px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              <Icon icon="ph:trend-up-bold" width={17} height={17} className="text-[#4ce2b4]" />
              {labels.eyebrow}
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#65e5bd]">{t("investors.breadcrumb")}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {t("investors.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">{t("investors.description.name")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/properties" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#41d6a8] px-6 py-3.5 text-sm font-bold text-[#082129] transition hover:-translate-y-0.5 hover:bg-[#70e7c3]">
                {labels.explore}<Icon icon="ph:arrow-right-bold" width={18} height={18} />
              </Link>
              <Link href="/contactus" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20">
                {labels.talk}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_70px_rgba(17,45,55,0.12)] sm:p-9 lg:p-12">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0da67c]">Ecuador 360°</p>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{labels.climates}</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-black/55 sm:text-base">{labels.climatesSub}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {climates.map((climate) => (
                <article key={climate.number} className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-black/5 bg-[#f6f7f5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="absolute right-5 top-4 text-5xl font-semibold text-black/[0.035]">{climate.number}</span>
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: climate.accent }}>
                    <Icon icon={climate.icon} width={25} height={25} />
                  </div>
                  <p className="text-base font-semibold leading-7 text-[#24363d]">{climate.text}</p>
                  <div className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-full transition group-hover:scale-x-100" style={{ backgroundColor: climate.accent }} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="relative min-h-[430px] overflow-hidden rounded-[36px] shadow-2xl sm:min-h-[560px]">
            <Image src="/images/tumbaco/tumbaco1.jpg" alt="Naturaleza y desarrollo en Ecuador" fill className="object-cover transition duration-700 hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092732]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-[#092732]/75 p-4 text-center text-white backdrop-blur-md sm:p-5">
              {[labels.stat1, labels.stat2, labels.stat3].map((stat) => <p key={stat} className="text-xs font-semibold leading-5 sm:text-sm">{stat}</p>)}
            </div>
          </div>

          <div>
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#dff7ef] text-[#07956f]">
              <Icon icon="ph:globe-hemisphere-west" width={30} height={30} />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0da67c]">{t("investors.breadcrumb")}</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{labels.opportunity}</h2>
            <p className="mt-6 text-base leading-8 text-black/60">{t("investors.description1")}</p>
            <div className="mt-8 rounded-3xl border-l-4 border-[#1fc399] bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold leading-7 text-[#193640]">{labels.opportunitySub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1304px] overflow-hidden rounded-[38px] bg-[#0a2934] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-20">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#24cca0]/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#efb32e]/15 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#5ce0b8]">Properties in Ecuador</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{t("investors.title1")}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">{labels.cta}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/properties" className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0a2934] transition hover:-translate-y-0.5 hover:bg-[#e7fff7]">{labels.explore}</Link>
              <Link href="/contactus" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">{labels.talk}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
