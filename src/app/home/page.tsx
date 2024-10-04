"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";
import { RyuAuthenticator } from "@/lib/ryu-authentcator";
import createUser from "../api/user/createUser";
import NotAllowed from "@/components/notAllowed";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const IsRyu = RyuAuthenticator();
  useEffect(() => {
    async function create() {
      if (IsRyu && session && session.user?.email) {
        await createUser(session.user.email);

        // articlesを使用して何かを行う
      }
    }
    create();

    if (IsRyu) {
      setLoading(false);
    }
  }, []);
  return (
    <main className="flex flex-col items-center p-4 bg-white border-2 border-gray-300">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>
      ) : !IsRyu ? (
        <NotAllowed />
      ) : (
        <>
          <div className="w-full h-full relative">
            <Link href="/home/mypage">
              <Image src={"/Group 1.png"} width={50} height={50} alt="cover" />
            </Link>
          </div>
          <h2 className="text-red-500 text-4xl mb-5">使用状況</h2>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </>
      )}
    </main>
  );
}
