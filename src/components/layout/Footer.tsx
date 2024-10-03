"use client";
import NewsCard from "@/components/news/newsCard";
import { usePathname } from "next/navigation";
export default function Footer({
  news,
}: {
  news: { contents: string; date: string }[];
}) {
  const pathname = usePathname();
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
            />
          ))}
        </footer>
      ) : null}
    </>
  );
}
