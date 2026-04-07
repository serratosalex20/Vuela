import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const token = req.auth;

  // Protected routes
  const riderRoutes = ["/rider-dashboard"];
  const pilotRoutes = ["/pilot-dashboard"];

  const isRiderRoute = riderRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isPilotRoute = pilotRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If accessing protected route without auth, redirect to login
  if ((isRiderRoute || isPilotRoute) && !token) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Role-based access control
  if (isRiderRoute && token?.user) {
    const role = (token.user as { role?: string }).role;
    if (role !== "RIDER" && role !== "ADMIN") {
      return NextResponse.redirect(
        new URL("/pilot-dashboard", req.nextUrl.origin)
      );
    }
  }

  if (isPilotRoute && token?.user) {
    const role = (token.user as { role?: string }).role;
    if (role !== "PILOT" && role !== "ADMIN") {
      return NextResponse.redirect(
        new URL("/rider-dashboard", req.nextUrl.origin)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/rider-dashboard/:path*", "/pilot-dashboard/:path*"],
};
