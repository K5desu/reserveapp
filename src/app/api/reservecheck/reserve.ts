"use server";

import prisma from "@/lib/prismaclient";

export const checkReserve = async (author_id: string) => {
  try {
    const reserve = await prisma.reserve.findMany({
      where: {
        author_id: author_id as string,
      },
    });

    if (reserve) {
      return {
        reserve,
      };
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("予約情報の取得に失敗しました");
  }
};

export const createReserve = async (
  author_id: string,
  number: string,
  date: string,
  starttime: string,
  finishtime: string,
  room_number: string
) => {
  try {
    const newReserve = await prisma.reserve.create({
      data: {
        author_id: author_id as string,
        number: parseInt(number as string),
        date: date as string,
        starttime: starttime as string,
        finishtime: finishtime as string,
        room_number: room_number as string,
        isRenatal: false,
      },
    });
    return newReserve;
  } catch (error) {
    throw new Error("予約の作成に失敗しました");
  }
};

export const removeReserve = async (id: number) => {
  try {
    await prisma.reserve.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("予約の削除に失敗しました");
  }
};
