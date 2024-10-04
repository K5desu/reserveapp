"use server";
import prisma from "@/lib/prismaclient";

export async function createNews(news: string) {
  const newNews = await prisma.news.create({
    data: {
      date: new Date(),
      content: news,
    },
  });

  return newNews;
}
