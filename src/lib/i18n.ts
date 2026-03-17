import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          Eliminar: "Eliminar",
          Explorar: "Explorar",
          "Ver detalles": "Ver detalles",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;