import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");
  if (host && !host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = `www.${url.hostname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path*"], // Apply middleware to all routes
};
