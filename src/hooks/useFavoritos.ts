"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";

export function useFavoritos() {
  const { data: session } = useSession();
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId || isLoading) return;

    const fetchFavoritos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/favoritos/list?userId=${userId}`);
        const data = await response.json();
        setFavoritos(data.map((f: any) => f.propiedadId));
      } catch (err) {
        console.error("Error cargando favoritos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoritos();
  }, [userId]); // Removed isLoading from dependencies to prevent infinite loops

  const toggleFavorito = useCallback(
    async (propiedadId: string) => {
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
    },
    [userId]
  );

  return { favoritos, toggleFavorito, userId, isLoading };
}
