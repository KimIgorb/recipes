import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // если пользователь авторизован при первом рендере перенаправить его на страницу /recipes
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/recipes", req.url));
  }

  // Защита страниц для авторизованных пользователей
  if (!token && ["/recipes", "/recipes/:id", "/"].includes(pathname)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Запрет доступа к /signin авторизованным пользователям
  if (token && pathname === "/signin") {
    return NextResponse.redirect(new URL("/recipes", req.url));
  }

  return NextResponse.next();
}

export const config = { 
  matcher: ["/recipes", "/recipes/:id", "/", "/signin"]
};
