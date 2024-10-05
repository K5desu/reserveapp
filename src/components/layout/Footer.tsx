"use client";
import NewsCard from "@/components/news/newsCard";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

import { getAllNews } from "@/app/api/news/get";
export default function Footer() {
  interface News {
    id: number;
    contents: string;
    date: string;
  }
  const [news, setNews] = useState<News[]>([]);
  const pathname = usePathname();
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
    <>
      {pathname != "/home/news/delete" ? (
        <footer className="flex  justify-center flex-col">
          {news.map((news, index) => (
            <NewsCard
              key={index}
              contents={news.contents}
              date={news.date}
              IsDelete={false}
              id={news.id}
            />
          ))}
        </footer>
      ) : null}
    </>
  );
}
