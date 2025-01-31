import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
  
    // Redirect `/about` to `/about-us`
    if (pathname === '/about'){
      return NextResponse.redirect(new URL('/about-us', request.url));
    }
  
    return NextResponse.next();
  }
