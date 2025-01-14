import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './routes/routes';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authToken')?.value;
    const protectedRoutes = routes.filter(route => route.protected).map(route => route.path);
    const pathname = request.nextUrl.pathname;

    if (!token && protectedRoutes.some(path => pathname.startsWith(path))) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/meetingSummaries', '/'],
};

