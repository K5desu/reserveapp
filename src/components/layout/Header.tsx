"use client";
import Link from "next/link";
import RyuAdmin from "@/lib/ryuAdmin";
export default function Header() {
  const IsRyuAdmin = RyuAdmin();
  return (
    <header style={{ width: "100%", backgroundColor: "#F1F5F9" }}>
      <div className="h-[146px]  ">
        <div className="h-[146px] pl-6 pr-[25px] pt-[39px] pb-[35px]  flex-col justify-between items-center flex">
          <div className="h-[72px] text-red-600 text-3xl font-bold font-['Inter'] ml-5">
            <Link href="./">
              龍谷大学<br></br>交流会館予約アプリ
            </Link>
          </div>

          {IsRyuAdmin && (
            <div className="mr-5 flex gap-x-5">
              <Link
                href="/home/owner"
                className="px-4 py-2 border border-transparent rounded-md text-red-400"
              >
                予約確認
              </Link>
              <Link
                href="/home/news"
                className="px-4 py-2 border border-transparent rounded-md  text-red-400"
              >
                ニュース作成
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
