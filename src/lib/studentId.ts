import { useSession } from "next-auth/react";
export function StudentId() {
  const { data: session, status } = useSession();
  let student_id = "";
  if (session) {
    student_id =
      session.user?.email && session.user.email.includes("@")
        ? session.user.email.split("@")[0]
        : "";
  }
  if (status === "authenticated") {
    return student_id;
  } else {
    return false;
  }
}
