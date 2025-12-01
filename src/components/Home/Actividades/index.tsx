"use client";

import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Actividades = () => {
  const { t } = useTranslation();

  const actividades = [
    {
      title: t("actividadesForm.activity1.name"),
      items: [
        t("actividadesForm.activity1.act1"),
        t("actividadesForm.activity1.act2"),
        t("actividadesForm.activity1.act3"),
        t("actividadesForm.activity1.act4"),
        t("actividadesForm.activity1.act5"),
      ],
    },
    {
      title: t("actividadesForm.activity2.name"),
      items: [
        t("actividadesForm.activity2.act1"),
        t("actividadesForm.activity2.act2"),
        t("actividadesForm.activity2.act3"),
        t("actividadesForm.activity2.act4"),
        t("actividadesForm.activity2.act5"),
      ],
    },
    {
      title: t("actividadesForm.activity3.name"),
      items: [
        t("actividadesForm.activity3.act1"),
        t("actividadesForm.activity3.act2"),
        t("actividadesForm.activity3.act3"),
        t("actividadesForm.activity3.act4"),
        t("actividadesForm.activity3.act5"),
      ],
    },
    {
      title: t("actividadesForm.activity4.name"),
      items: [
        t("actividadesForm.activity4.act1"),
        t("actividadesForm.activity4.act2"),
        t("actividadesForm.activity4.act3"),
        t("actividadesForm.activity4.act4"),
        t("actividadesForm.activity4.act5"),
      ],
    },
    {
      title: t("actividadesForm.activity6.name"),
      items: [
        t("actividadesForm.activity6.act1"),
        t("actividadesForm.activity6.act2"),
        t("actividadesForm.activity6.act3"),
        t("actividadesForm.activity6.act4"),
        t("actividadesForm.activity6.act5"),
      ],
    },
    {
      title: t("actividadesForm.activity7.name"),
      items: [
        t("actividadesForm.activity7.act1"),
        t("actividadesForm.activity7.act2"),
        t("actividadesForm.activity7.act3"),
        t("actividadesForm.activity7.act4"),
        t("actividadesForm.activity7.act5"),
      ],
    },
  ];

  return (
    <section className="bg-white relative py-12" id="actividades">
      
      {/* Decoración */}
      <div className="absolute right-0 top-0 opacity-10">
        <Image
          src="/images/testimonial/Vector.png"
          alt="decor"
          width={700}
          height={1039}
          unoptimized
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">        
        {/* Título */}
        <div className="text-center mb-14 relative z-10">
          <p className="text-base font-semibold flex justify-center items-center gap-2 text-black">
            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
            {t("actividadesForm.title")}
          </p>

          <h2 className="text-3xl lg:text-4xl text-black font-semibold mt-2">
            {t("actividadesForm.description")}
          </h2>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {actividades.map((actividad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {actividad.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {actividad.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Actividades;
