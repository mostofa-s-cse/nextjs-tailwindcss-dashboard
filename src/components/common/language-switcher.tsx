"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { Languages } from "lucide-react";
import { locales, defaultLocale, type Locale } from "@/src/lib/i18n";

const LOCALE_LABELS: Record<Locale, { flag: string; name: string }> = {
  en: { flag: "🇺🇸", name: "English" },
  bn: { flag: "🇧🇩", name: "বাংলা" },
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  // Determine current locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const currentLocale: Locale =
    locales.includes(firstSegment as Locale) && firstSegment !== defaultLocale
      ? (firstSegment as Locale)
      : defaultLocale;

  // Get the path without locale prefix
  const pathWithoutLocale =
    currentLocale !== defaultLocale && segments[0] === currentLocale
      ? "/" + segments.slice(1).join("/")
      : pathname;

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    let newPath: string;

    if (newLocale === defaultLocale) {
      // For default locale (en), use path without locale prefix
      newPath = pathWithoutLocale || "/";
    } else {
      // For other locales, add locale prefix
      newPath = `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    }

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <Languages className="h-4 w-4" />
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? "bg-accent" : ""}
          >
            {LOCALE_LABELS[locale].flag} {LOCALE_LABELS[locale].name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
