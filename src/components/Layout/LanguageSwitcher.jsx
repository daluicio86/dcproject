"use client";

import React, { useContext } from "react";
import { LanguageContext } from "./ClientProvider";

export default function LanguageSwitcher() {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <select translate="no" aria-label="Seleccionar idioma"
        className="bg-transparent border border-gray-300 text-gray-100 focus:text-gray-500 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
         dark:focus:border-blue-500"
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue="en"
      >
        <option value="en" lang="en">English</option>
        <option value="es" lang="es">Español</option>
        <option value="de" lang="de">Deutsch</option>
      </select>
    </>
  );
}
