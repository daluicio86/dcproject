<<<<<<< HEAD
﻿"use client";

import { Categoria } from "@/interface";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";
import { Icon } from "@iconify/react";
=======
"use client";

import { Categoria } from "@/interface";
import { TipoPropiedad } from "@/interface/tipoPropiedad.interface";
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const enumRentaVenta = [
  { id: "1", name: "Renta" },
  { id: "2", name: "Venta" },
  { id: "3", name: "Inversores de propiedades" },
];

const enumClima = [
  { id: "1", name: "Seco 10.20°" },
  { id: "2", name: "Seco 10.25°" },
  { id: "3", name: "SubTropical 10.30°" },
  { id: "4", name: "Húmedo 60%" },
];

interface Props {
  categories: Categoria[];
  tiposPropiedad: TipoPropiedad[];
}

export function PropertyFilters({ categories, tiposPropiedad }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
<<<<<<< HEAD
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) ?? "en";

  const [categoria, setCategoria] = useState(searchParams.get("categoria") || "");
  const [rentaVenta, setRentaVenta] = useState(searchParams.get("rentaVenta") || "");
  const [temperatura, setTemperatura] = useState(searchParams.get("temperatura") || "");
  const [tipoPropiedad, setTipoPropiedad] = useState(searchParams.get("tipoPropiedad") || "");
  const [precioMin, setPrecioMin] = useState(searchParams.get("precioMin") || "");
  const [precioMax, setPrecioMax] = useState(searchParams.get("precioMax") || "");

  const ui = {
    title: lang === "es" ? "Encuentra tu propiedad ideal" : lang === "de" ? "Finden Sie Ihre ideale Immobilie" : "Find your ideal property",
    subtitle:
      lang === "es"
        ? "Filtra por tipo, clima, categoría y rango de precio."
        : lang === "de"
          ? "Filtern Sie nach Typ, Klima, Kategorie und Preisspanne."
          : "Filter by type, climate, category, and price range.",
    rentSale: lang === "es" ? "Renta / Venta" : lang === "de" ? "Miete / Verkauf" : "Rent / Sale",
    climate: lang === "es" ? "Clima" : lang === "de" ? "Klima" : "Climate",
    category: lang === "es" ? "Categoría" : lang === "de" ? "Kategorie" : "Category",
    propertyType: lang === "es" ? "Tipo de Propiedad" : lang === "de" ? "Immobilientyp" : "Property Type",
    minPrice: lang === "es" ? "Precio mínimo" : lang === "de" ? "Mindestpreis" : "Min price",
    maxPrice: lang === "es" ? "Precio máximo" : lang === "de" ? "Maximalpreis" : "Max price",
    all: lang === "es" ? "Todos" : lang === "de" ? "Alle" : "All",
    search: lang === "es" ? "Buscar" : lang === "de" ? "Suchen" : "Search",
    clear: lang === "es" ? "Limpiar filtros" : lang === "de" ? "Filter löschen" : "Clear filters",
    noRentSale: lang === "es" ? "No se definió renta/venta" : lang === "de" ? "Keine Miet-/Verkaufsoption" : "The rental or sale is not defined.",
    noClimate: lang === "es" ? "No se definió clima" : lang === "de" ? "Klima nicht definiert" : "Climate not defined",
    noCategory: lang === "es" ? "No hay categorías" : lang === "de" ? "Keine Kategorien verfügbar" : "There are no categories",
    noType: lang === "es" ? "No hay tipos de propiedad" : lang === "de" ? "Keine Immobilientypen verfügbar" : "There are no property types",
  };
=======
  const { t } = useTranslation();

  const [categoria, setCategoria] = useState(
    searchParams.get("categoria") || "",
  );
  const [rentaVenta, setRentaVenta] = useState(
    searchParams.get("rentaVenta") || "",
  );
  const [temperatura, setTemperatura] = useState(
    searchParams.get("temperatura") || "",
  );
  const [tipoPropiedad, setTipoPropiedad] = useState(
    searchParams.get("tipoPropiedad") || "",
  );

  const [precioMin, setPrecioMin] = useState(
    searchParams.get("precioMin") || "",
  );
  const [precioMax, setPrecioMax] = useState(
    searchParams.get("precioMax") || "",
  );
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (categoria) params.set("categoria", categoria);
    else params.delete("categoria");

    if (rentaVenta) params.set("rentaVenta", rentaVenta);
    else params.delete("rentaVenta");

    if (temperatura) params.set("temperatura", temperatura);
    else params.delete("temperatura");

    if (tipoPropiedad) params.set("tipoPropiedad", tipoPropiedad);
    else params.delete("tipoPropiedad");

    if (precioMin) params.set("precioMin", precioMin);
    else params.delete("precioMin");

    if (precioMax) params.set("precioMax", precioMax);
    else params.delete("precioMax");

    router.push(`/properties?${params.toString()}`);
  };

<<<<<<< HEAD
  const handleClearFilters = () => {
    setCategoria("");
    setRentaVenta("");
    setTemperatura("");
    setTipoPropiedad("");
    setPrecioMin("");
    setPrecioMax("");
    router.push("/properties");
  };

  const selectClass =
    "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-base text-[#1e252b] shadow-sm outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20";
  const inputClass =
    "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-base text-[#1e252b] shadow-sm outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20";

  return (
    <section className="!pt-0">
      <div className="relative overflow-x-hidden pb-16">
        <div className="mx-auto w-full max-w-[1050px] px-4">
          <form onSubmit={handleFilter}>
            <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
              <div className="mb-6 text-left">
                <h3 className="text-2xl font-semibold text-[#0f2132] sm:text-3xl">{ui.title}</h3>
                <p className="mt-1 text-sm text-[#647282] sm:text-base">{ui.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.rentSale}</label>
                  <select value={rentaVenta} onChange={(e) => setRentaVenta(e.target.value)} className={selectClass}>
                    <option key={-1} value="">{t("propiedadForm.selectRentaVenta")}</option>
                    {enumRentaVenta ? (
                      Object.values(enumRentaVenta).map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))
                    ) : (
                      <option key={-10} value="">{ui.noRentSale}</option>
                    )}
                    <option key={-2} value="">{ui.all}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.climate}</label>
                  <select value={temperatura} onChange={(e) => setTemperatura(e.target.value)} className={selectClass}>
                    <option key={-1} value="">{t("propiedadForm.selectClimate")}</option>
                    {enumClima ? (
                      Object.values(enumClima).map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>{tipo.name}</option>
                      ))
                    ) : (
                      <option key={-11} value="">{ui.noClimate}</option>
                    )}
                    <option key={-2} value="">{ui.all}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.category}</label>
                  <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className={selectClass}>
                    <option key={-1} value="">{t("propiedadForm.selectCategory")}</option>
                    {categories ? (
                      Object.values(categories).map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))
                    ) : (
                      <option key={-12} value="">{ui.noCategory}</option>
                    )}
                    <option key={-2} value="">{ui.all}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.propertyType}</label>
                  <select value={tipoPropiedad} onChange={(e) => setTipoPropiedad(e.target.value)} className={selectClass}>
                    <option key={-1} value="">{ui.propertyType}</option>
                    {tiposPropiedad ? (
                      Object.values(tiposPropiedad).map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>{tipo.name}</option>
                      ))
                    ) : (
                      <option key={-13} value="">{ui.noType}</option>
                    )}
                    <option key={-2} value="">{ui.all}</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.minPrice}</label>
                  <input type="number" placeholder={ui.minPrice} value={precioMin} onChange={(e) => setPrecioMin(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#334154]">{ui.maxPrice}</label>
                  <input type="number" placeholder={ui.maxPrice} value={precioMax} onChange={(e) => setPrecioMax(e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={handleClearFilters} className="inline-flex h-12 items-center justify-center rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-[#334154] transition hover:bg-[#f6f8fa]">
                  {ui.clear}
                </button>
                <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#08364a] px-6 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#072b3a]">
                  <Icon icon="solar:magnifer-linear" width={18} height={18} />
                  {ui.search}
                </button>
              </div>
=======
  return (
    <section className="pt-0!">
      <div className="text-center bg-cover pb-20 relative overflow-x-hidden">
        <div className="justify-center mx-auto w-full lg:w-2/3 xl:w-1/2 px-4">
          <form onSubmit={handleFilter}>
            <div className="flex flex-col lg:flex-row gap-6">
              <select
                onChange={(e) => setRentaVenta(e.target.value)}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  {t("propiedadForm.selectRentaVenta")}
                </option>
                {enumRentaVenta ? (
                  Object.values(enumRentaVenta).map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    The rental or sale is not defined.
                  </option>
                )}
                <option key={-2} value="">
                  All
                </option>
              </select>
              <select
                onChange={(e) => setTemperatura(e.target.value)}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  {t("propiedadForm.selectClimate")}
                </option>
                {enumClima ? (
                  Object.values(enumClima).map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    Climate not defined
                  </option>
                )}
                <option key={-2} value="">
                  All
                </option>
              </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-5">
              <select
                onChange={(e) => setCategoria(e.target.value)}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  {t("propiedadForm.selectCategory")}
                </option>
                {categories ? (
                  Object.values(categories).map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    There are no categories
                  </option>
                )}
                <option key={-2} value="">
                  All
                </option>
              </select>
              <select
                onChange={(e) => setTipoPropiedad(e.target.value)}
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
              >
                <option key={-1} value="">
                  Select Property Type
                </option>
                {tiposPropiedad ? (
                  Object.values(tiposPropiedad).map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.name}
                    </option>
                  ))
                ) : (
                  <option key={-1} value="">
                    There are no types of property
                  </option>
                )}
                <option key={-2} value="">
                  All
                </option>
              </select>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-5">
              <input
                type="number"
                placeholder="Precio mín."
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                className="border p-2 rounded w-32"
              />
              <input
                type="number"
                placeholder="Precio máx."
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                className="border p-2 rounded w-32"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-5"></div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-5">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Search
              </button>
>>>>>>> 36f3b4b4c01dbdfc5db8f637c6cf1498a3ad9921
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
