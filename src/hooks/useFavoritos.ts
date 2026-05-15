"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useFavoritos() {
  const { data: session } = useSession();
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const userId = session?.user?.id;
  useEffect(() => {
    if (!userId) return;
    fetch(`/api/favoritos/list?userId=${userId}`)
      .then((r) => r.json())
      .then((data) => setFavoritos(data.map((f: any) => f.propiedadId)))
      .catch((err) => console.error("Error cargando favoritos:", err));
  }, [userId]);

  const toggleFavorito = async (propiedadId: string) => {
    if (!userId) return alert("Debes iniciar sesión para agregar favoritos");

    const res = await fetch(`/api/favoritos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ propiedadId }),
    });

    const data = await res.json();

    if (data.status === "added") {
      setFavoritos((prev) => [...prev, propiedadId]);
    } else if (data.status === "removed") {
      setFavoritos((prev) => prev.filter((f) => f !== propiedadId));
    } else {
      console.error("Error:", data.error || "Error desconocido");
    }
  };

  return { favoritos, toggleFavorito, userId };
}
