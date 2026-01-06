// Supported locales configuration
export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Type guard to check if a string is a valid locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: "English",
  bn: "বাংলা",
};
