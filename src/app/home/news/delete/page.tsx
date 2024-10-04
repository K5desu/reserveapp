"use client";
import { useState, useEffect } from "react";
import NewsCard from "@/components/news/newsCard";
import { getAllNews } from "@/app/api/news/get";
import Link from "next/link";

export default function Page() {
  interface News {
    id: number;
    contents: string;
    date: string;
  }

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const newss = await getAllNews();
        setNews(newss);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <footer className="flex justify-center flex-col">
        <header className="flex justify-end">
          <Link
            href="/home/news/delete"
            className="pr-5 text-red-300 underline font-bold"
          >
            削除ページ
          </Link>
        </header>
        {news.map((news, index) => (
          <NewsCard
            key={index}
            contents={news.contents}
            date={news.date}
            IsDelete={true}
            id={news.id}
          />
        ))}
      </footer>
    </div>
  );
}
