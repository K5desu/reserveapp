"use server";

import prisma from "@/lib/prismaclient";

export const checkReserve = async (formdata: FormData) => {
  const author_id = formdata.get("author_id");
  try {
    const reserve = await prisma.reserve.findUnique({
      where: {
        author_id: author_id as string,
      },
    });

    if (reserve) {
      return {
        date: reserve.date,
        starttime: reserve.starttime,
        finishtime: reserve.finishtime,
        room_number: reserve.room_number,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("予約情報の取得に失敗しました");
  }
};

export const createReserve = async (formdata: FormData) => {
  const author_id = formdata.get("author_id");
  const number = formdata.get("number");
  const date = formdata.get("date");
  const starttime = formdata.get("starttime");
  const finishtime = formdata.get("finishtime");
  const room_number = formdata.get("room_number");

  try {
    const newReserve = await prisma.reserve.create({
      data: {
        author_id: author_id as string,
        number: parseInt(number as string),
        created_at: new Date(), // Add the created_at property with the current date and time
        date: date as string,
        starttime: starttime as string,
        finishtime: finishtime as string,
        room_number: room_number as string,
      },
    });
    return newReserve;
  } catch (error) {
    console.error(error);
    throw new Error("予約の作成に失敗しました");
  }
};

export const removeReserve = async (author_id: string) => {
  console.log(author_id);
  try {
    await prisma.reserve.delete({
      where: {
        author_id: author_id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("予約の削除に失敗しました");
  }
};
