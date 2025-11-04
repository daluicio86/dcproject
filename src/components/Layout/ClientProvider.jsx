"use client";

import React, { createContext, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../app/i18n";

export const LanguageContext = createContext();

export const ClientProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};
