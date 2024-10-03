import NewsCard from "@/components/news/newsCard";
export default function Page() {
  const news = [
    { contents: "news1", date: "2022-01-01" },
    { contents: "news2", date: "2022-01-02" },
    { contents: "news3", date: "2022-01-03" },
    { contents: "news4", date: "2022-01-04" },
    { contents: "news5", date: "2022-01-05" },
    { contents: "news6", date: "2022-01-06" },
    { contents: "news7", date: "2022-01-07" },
    { contents: "news8", date: "2022-01-08" },
    { contents: "news9", date: "2022-01-09" },
    { contents: "news10", date: "2022-01-10" },
  ];
  return (
    <footer className="flex  justify-center flex-col">
      {news.map((news, index) => (
        <NewsCard
          key={index}
          contents={news.contents}
          date={news.date}
          IsDelete={true}
        />
      ))}
    </footer>
  );
}
