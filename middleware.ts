import { clerkMiddleware } from "@clerk/nextjs/server";
 
export default clerkMiddleware({
  // @ts-ignore
  publicRoutes: [
    '/', '/api/webhooks/clerk', '/api/webhooks/stripe'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};