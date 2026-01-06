import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname has the default locale, redirect to remove it
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    const newPathname = pathname.replace(`/${defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // If no locale in pathname, rewrite to default locale internally
  if (!pathnameHasLocale) {
    // Rewrite to default locale (internal, URL stays the same)
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal paths and static files
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
