"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex flex-col  justify-between p-5 bg-white border-2 border-gray-300">
      <header className="flex justify-end ">
        <Link
          href="/home/news/delete"
          className="pr-5 text-red-300 underline font-bold "
        >
          削除ページ
        </Link>
      </header>
      <form className=" w-full text-center ">
        <div className="date mb-5">
          <h2 className="text-center mb-2">日時</h2>
          <Input type="date" />
        </div>
        <div className="content">
          <h2 className="text-center mb-2">内容</h2>
          <textarea className="content-box border border-gray-300 p-2 bg-gray-100 h-36 w-full" />
        </div>
        <Button>投稿する</Button>
      </form>
    </main>
  );
}
