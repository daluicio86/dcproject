"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../app/locales/en/translation.json";
import esTranslation from "../app/locales/es/translation.json";
import deTranslation from "../app/locales/de/translation.json";

i18n.use(initReactI18next).init({
  lng: "en", // idioma por defecto
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    de: { translation: deTranslation },
  }
});

export default i18n;
