"use client";
import { emailData } from "@/lib/data";
import { useSession } from "next-auth/react";

export default function RyuAdmin() {
  const { data: session, status } = useSession();
  let IsRyuAdmin = false;
  if (status === "authenticated") {
    return true;
  }
  // emailData.map((email) => {
  //   if (session && session.user && email == session.user?.email) {
  //     IsRyuAdmin = true;
  //   }
  // });
  return IsRyuAdmin;
}
