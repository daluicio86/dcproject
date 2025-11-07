// types/next.d.ts
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

/**
 * Parche temporal: PageProps acepta params T o Promise<T>.
 * Esto elimina el error inmediato mientras investigas la declaración conflictiva.
 * - No es la solución ideal a largo plazo: recomiendo después buscar la definición que fuerza Promise<any>
 *   y unificar las declaraciones globales para que params sea consistente.
 */
declare global {
  export type PageProps<T extends Record<string, string | string[] | undefined> = {}> = {
    params: T | Promise<T>;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}

export {};