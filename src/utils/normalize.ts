export function normalizeNullToUndefined<T extends Record<string, any>>(obj: T | null): Partial<T> | null {
  if (!obj) return null;
  
  const normalized: Partial<T> = {};
  
  Object.keys(obj).forEach(key => {
    const value = obj[key as keyof T];
    normalized[key as keyof T] = (value === null ? undefined : value) as any;
  });
  
  return normalized;
}