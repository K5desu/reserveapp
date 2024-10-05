"use server";
import prisma from "@/lib/prismaclient";

export async function getAllNews() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        date: "desc",
      },
    });

    // ニュースを指定された形式に変換
    const formattedNews = news.map((item) => ({
      id: item.id,
      contents: item.content,
      date: item.date.toISOString().split("T")[0], // YYYY-MM-DD形式に変換
    }));

    return formattedNews;
  } catch (error) {
    throw new Error("ニュースの取得に失敗しました");
  }
}
