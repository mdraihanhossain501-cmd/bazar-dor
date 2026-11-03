import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

// Use at the top of a protected server page.
// Not logged in -> redirect to sign in (the sign-in page shows a toast).
export async function requireSession() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin?reason=login-required");
  }

  return session;
}