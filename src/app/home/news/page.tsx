"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Link from "next/link";
import { createNews } from "@/app/api/news/create";
export default function Page() {
  const { toast } = useToast();
  const [content, setContent] = useState("");
  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      await createNews(content);
      setContent("");
      toast({
        title: "投稿に成功しました",
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "投稿に失敗しました",
      });
    }
  }
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
      <form className=" w-full text-center " onSubmit={handleSubmit}>
        <div className="content">
          <h2 className="text-center mb-2">内容</h2>
          <textarea
            className="content-box border border-gray-300 p-2 bg-gray-100 h-36 w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button type="submit">投稿する</Button>
      </form>
    </main>
  );
}
