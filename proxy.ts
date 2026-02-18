import { NextRequest, NextResponse } from "next/server";
import i18n from "./i18n";

function getLocale() {
  return i18n.defaultLocale;
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale();
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)",
  ],
};
