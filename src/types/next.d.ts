// src/types/next.d.ts

declare global {
  /**
   * Tipado genérico para las props de una página dinámica (Next.js App Router)
   * Ejemplo:
   * export default async function Page({ params }: PageProps<{ slug: string }>) { ... }
   */
  export type PageProps<T extends Record<string, string> = Record<string, string>> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}

export {};
