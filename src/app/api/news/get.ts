"use server";
import prisma from "@/lib/prismaclient";

export async function getAllNews() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return news;
  } catch (error) {
    console.error("ニュースの取得に失敗しました:", error);
    throw new Error("ニュースの取得に失敗しました");
  }
}
