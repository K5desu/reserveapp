import { useSession } from "next-auth/react";
export function RyuAuthenticator() {
  const { data: session, status } = useSession();
  let emailDomain = "";
  if (session) {
    emailDomain = session.user?.email || "";
  }
  if (
    status === "authenticated" &&
    emailDomain === "testuserforryukoku@gmail.com"
  ) {
    return true;
  } else {
    return false;
  }
}
