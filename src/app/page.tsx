"use client";
import { ref, onValue, set } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const starCountRef = ref(database, "user");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.userId);
    });
  }, []);

  return (
    <main className="flex flex-col  justify-around p-5 bg-white border-4 border-gray-300 my-5">
      <div className="login-section flex-1 flex flex-col items-center justify-center  p-12 rounded bg-gray-100">
        <button
          className="login-button bg-red-500 text-white border-none p-4 text-lg rounded-full cursor-pointer w-full"
          onClick={() => signIn("google", {}, { prompt: "login" })}
        >
          login
        </button>
        <p className="instructions mt-2 text-sm">
          ご利用方法については
          <a href="#" className="text-red-500 no-underline">
            こちら
          </a>
        </p>
      </div>
    </main>
  );
}
