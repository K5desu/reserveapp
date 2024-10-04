"use server";
import prisma from "@/lib/prismaclient";

export async function deleteNewsById(id: number) {
  const deletedNews = await prisma.news.delete({
    where: {
      id: id,
    },
  });

  return deletedNews;
}
