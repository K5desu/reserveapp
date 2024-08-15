"use client";

import { useState } from "react";
import { checkReserve, createReserve, removeReserve } from "@/app/api/reservecheck/route";

export default function Page() {
  const [reserveData, setReserveData] = useState<{ date: Date; starttime: Date; finishtime: Date; room_number: string; } | null>(null);
  const [author_id, setAuthorId] = useState<string | null>(null);

  const handleCheckReserve = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const author_id = formData.get("author_id");
    try {
      const response = await checkReserve(formData);
      setReserveData(response);
      setAuthorId(author_id as string);
    } catch (error) {
      console.error("Error fetching reserve data:", error);
    }
  };

  return (
    <main className="flex-grow flex justify-center items-center p-4">
      <section className="text-center border border-gray-300 p-4 max-w-sm w-full">
        <form action={createReserve}>
          <input name="author_id" placeholder="学籍番号" />
          <input name="number" placeholder="人数" />
          <input name="date" placeholder="日付" />
          <input name="starttime" placeholder="開始時間" />
          <input name="finishtime" placeholder="終了時間" />
          <input name="room_number" placeholder="部屋番号" />
          <button type="submit">予約する</button>
        </form>
        <h2 className="text-red-500">My page</h2>
        <h3 className="text-red-500">予約状況</h3>
        <form onSubmit={handleCheckReserve}>
          <input name="author_id" placeholder="学籍番号" />
          <button type="submit">確認する</button>
        </form>
        {reserveData && (
          <div className="border border-gray-300 p-4 mt-4">
            <p>予約日：{reserveData.date.getFullYear()}年 {reserveData.date.getMonth() + 1}月 {reserveData.date.getDate()}日</p>
            <p>予約時間：{reserveData.starttime.getHours()}時{reserveData.starttime.getMinutes()}分 ~ {reserveData.finishtime.getHours()}時{reserveData.finishtime.getMinutes()}分</p>
            <p>予約部屋：{reserveData.room_number}</p>
          </div>
        )}
        <button onClick={() => removeReserve(author_id!)} className="bg-gray-300 border-none px-4 py-2 mt-4">
          この予約をキャンセルする
        </button>
        <p className="text-red-500 mt-2">※予約は1つしかできません</p>
      </section>
    </main>
  );
}
