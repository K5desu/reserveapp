"use client";
import { emailData } from "@/lib/data";
import { useSession } from "next-auth/react";

export default function RyuAdmin() {
  const { data: session } = useSession();
  let IsRyuAdmin = false;

  emailData.map((email) => {
    if (session && session.user && email == session.user?.email) {
      IsRyuAdmin = true;
    }
  });
  return IsRyuAdmin;
}
