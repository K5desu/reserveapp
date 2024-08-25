import React from "react";
import { useSession, signIn } from "next-auth/react";
export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Load />;
  } else {
    return (
      <button
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 "
        onClick={() => signIn("google", {}, { prompt: "login" })}
      >
        <GoogleIcon />
        <p className="hidden md:block">ログイン</p>
      </button>
    );
  }
}
