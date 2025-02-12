import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware to restrict access to certain pages
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define restricted paths
  const restrictedPaths = ["/team", "/testimonials"];

  // Check if the current path is restricted
  if (restrictedPaths.some((path) => pathname.startsWith(path))) {
    // Return a 404 response for restricted pages
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // Allow access to other pages
  return NextResponse.next();
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ["/team", "/testimonials"],
};
