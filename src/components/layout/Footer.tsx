import NewsCard from "@/components/news/newsCard";
export default function Footer({
  news,
}: {
  news: { contents: string; date: string }[];
}) {
  return (
    <footer className="flex  justify-center flex-col">
      {news.map((news, index) => (
        <NewsCard key={index} contents={news.contents} date={news.date} />
      ))}
    </footer>
  );
}
