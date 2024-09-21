import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host");

  // Check if the domain contains 'www'
  if (host && host.startsWith("www.")) {
    const newHost = host.replace("www.", "");

    // Construct the new URL without 'www'
    const newUrl = new URL(req.url);
    newUrl.host = newHost;

    // Perform the redirect
    return NextResponse.redirect(newUrl.toString(), 308); // 308 to preserve method and body
  }

  // Continue without redirecting if the host does not contain 'www'
  return NextResponse.next();
}
