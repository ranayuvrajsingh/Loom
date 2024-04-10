import { authMiddleware, withClerkMiddleware } from "@clerk/nextjs";

export default authMiddleware({});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
