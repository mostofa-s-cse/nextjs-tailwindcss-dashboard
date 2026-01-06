"use client";

import { usePathname } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/src/lib/i18n";

export function useLocaleUrl() {
  const pathname = usePathname() ?? "/";

  // Get current locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const currentLocale: Locale =
    locales.includes(firstSegment as Locale) && firstSegment !== defaultLocale
      ? (firstSegment as Locale)
      : defaultLocale;

  // Helper to create locale-aware URLs
  const localizeUrl = (url: string) => {
    if (url === "#" || url.startsWith("http")) return url;
    if (currentLocale === defaultLocale) return url;
    return `/${currentLocale}${url}`;
  };

  return { currentLocale, localizeUrl };
}

