// types/next.d.ts

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// Tipado base global para las páginas del App Router
declare global {
  /**
   * Tipado genérico para las props de una página dinámica
   * Ejemplo de uso:
   * export default async function Page({ params }: PageProps<{ slug: string }>) { ... }
   */
  export type PageProps<T extends Record<string, string> = {}> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}

export {};
