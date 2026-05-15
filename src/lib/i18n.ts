import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "@/app/locales/en/translation.json";
import esTranslation from "@/app/locales/es/translation.json";
import deTranslation from "@/app/locales/de/translation.json";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lang");
    if (saved && ["en", "es", "de"].includes(saved)) return saved;
    const browser = navigator.language?.slice(0, 2);
    if (browser && ["en", "es", "de"].includes(browser)) return browser;
  }
  return "en";
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: getInitialLanguage(),
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
