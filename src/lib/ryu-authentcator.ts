import { useSession } from "next-auth/react";
export function RyuAuthenticator() {
  const { data: session, status } = useSession();
  let emailDomain = "";
  if (session) {
    emailDomain = session.user?.email || "";
  }
  if (
    status === "authenticated" &&
    emailDomain === "y220010@mail.ryukoku.ac.jp"
  ) {
    return true;
  } else {
    return false;
  }
}
