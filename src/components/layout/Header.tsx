"use client";
import Link from "next/link";
import RyuAdmin from "@/lib/ryuAdmin";
export default function Header() {
  const IsRyuAdmin = RyuAdmin();
  return (
    <header style={{ width: "100%", backgroundColor: "#F1F5F9" }}>
      <div className="h-[146px] flex justify-between items-center ">
        <div className="h-[146px] pl-6 pr-[25px] pt-[39px] pb-[35px]  justify-center items-center flex">
          <div className="h-[72px] text-red-600 text-3xl font-bold font-['Inter']">
            <Link href="./">
              龍谷大学<br></br>交流会館予約アプリ
            </Link>
          </div>

          {IsRyuAdmin && (
            <div>
              <Link href="">予約確認</Link>
              <Link href="">ニュース一覧</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
