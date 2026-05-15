"use client";

import React, { useContext } from "react";
import { LanguageContext } from "./ClientProvider";

const LENGUAJE_OPCIONES = [
  { id: "EN", nombre: "EN", value: 1, label: "EN" },
  { id: "ES", nombre: "ES", value: 2, label: "ES" },
  { id: "DE", nombre: "DE", value: 3, label: "DE" },
  // Agrega más opciones según sea necesario
];
export default function LanguageSwitcher() {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <select
        className="bg-transparent border border-gray-300 text-gray-100 focus:text-gray-500 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
         dark:focus:border-blue-500"
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue="en"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="de">DE</option>
      </select>
    </>
  );
}
