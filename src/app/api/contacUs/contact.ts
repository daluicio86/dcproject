import { Contacto } from "@prisma/client";

export const registrarContacto = async (data: Contacto) => {
  const item = await fetch("/api/contacUs/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return item.json();
};
