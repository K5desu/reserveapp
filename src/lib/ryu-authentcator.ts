import { useSession } from "next-auth/react";
export function RyuAuthenticator() {
  const { data: session, status } = useSession();
  let emailDomain = "";
  if (session) {
    emailDomain =
      session.user?.email && session.user.email.includes("@")
        ? session.user.email.split("@")[1]
        : "";
  }
  if (status === "authenticated" && emailDomain === "mail.ryukoku.ac.jp") {
    return true;
  } else {
    return false;
  }
}
