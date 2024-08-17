import Link from "next/link";
import { session } from "@/lib/placeholderdata";

export default function Header() {
  return (
    <header style={{ width: "100%", backgroundColor: "#F1F5F9" }}>
      <div className="h-[146px] flex justify-between items-center ">
        <div className="h-[146px] pl-6 pr-[25px] pt-[39px] pb-[35px]  justify-center items-center flex">
          <div className="h-[72px] text-red-600 text-3xl font-bold font-['Inter']">
            <Link href="./">
              龍谷大学<br></br>交流会館予約アプリ
            </Link>
          </div>

          {!session && (
            <div>
              <Link href="/">home</Link>
              <Link href="/">Mypage</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
