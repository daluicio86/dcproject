"use client";
import HeroSub from '@/components/shared/HeroSub';
import React from 'react'
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();
  const geolink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8413543.324962867!2d-89.20553627011843!3d-1.3434721425502112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902387dda89a4bd5%3A0x9d76af04119c3702!2sEcuador!5e1!3m2!1ses-419!2sec!4v1758709358802!5m2!1ses-419!2sec";

  return (
    <div>
      <HeroSub
        title={t("welcome")}
        description={t("tagline")}
        badge=""
      />
      <iframe
        src={geolink}
        width="1114"
        height="400"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full"
      />
    </div>
  )
}
