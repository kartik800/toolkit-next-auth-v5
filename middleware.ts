import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
 DEFAULT_LOGIN_REDIRECT,
 apiAuthPrefix,
 authRoutes,
 publicRoutes   
} from "@/routes"

const {auth} = NextAuth(authConfig);

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth; // turn this to boolean by adding two !!
    
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return null
    }

    if(isAuthRoute) {
        if(isLoggedIn) {
            // nexturl as second parameter change "/settings" (DEFAULT_LOGIN_REDIRECT) to "localhost:3000/settings"
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if(!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}  