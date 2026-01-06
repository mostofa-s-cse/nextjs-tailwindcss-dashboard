import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";
import { Providers } from "./providers";
import { locales, type Locale } from "@/src/lib/i18n";

import enMessages from "../../locales/en.json";
import bnMessages from "../../locales/bn.json";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js App with Themes & Localization",
};

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  bn: bnMessages,
};

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const localeMessages = messages[locale];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale} messages={localeMessages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
