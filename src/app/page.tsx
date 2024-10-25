"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { RyuAuthenticator } from "@/lib/ryu-authentcator";
import { useRouter } from "next/navigation";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const IsRyu = RyuAuthenticator();
  useEffect(() => {
    if (IsRyu) {
      router.push("/home");
    }
    setLoading(false);
  }, [IsRyu]);

  return (
    <main className="flex flex-col  justify-around p-5 bg-white border-4 border-gray-300 my-5">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="login-section flex-1 flex flex-col items-center justify-center  p-12 rounded bg-gray-100">
          <button
            className=" bg-red-500 text-white border-none h-14  text-lg rounded-full cursor-pointer w-full"
            onClick={() => signIn("google", {}, { prompt: "login" })}
          >
            login
          </button>
          <p className="instructions mt-2 text-sm">
            ご利用方法については
            <a
              href="https://foggy-direction-f3b.notion.site/12a221b8d6578046a432fb314b583b1d?pvs=4"
              className="text-red-500 no-underline"
            >
              こちら
            </a>
          </p>
        </div>
      )}
    </main>
  );
}
