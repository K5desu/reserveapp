"use client";

import { useState, useEffect } from "react";
import {
  checkReserve,
  createReserve,
  removeReserve,
} from "@/app/api/reservecheck/route";
import { RyuAuthenticator } from "@/lib/ryu-authentcator";
import { StudentId } from "@/lib/studentId";
import Logout from "@/components/google/Logout";
export default function Page() {
  const IsRyu = RyuAuthenticator();
  const studentId = StudentId();
  const [reserveData, setReserveData] = useState<
    | {
        id: number;
        author_id: string;
        date: Date;
        starttime: Date;
        finishtime: Date;
        room_number: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      if (studentId) {
        const data = await checkReserve(studentId);

        if (data) {
          setReserveData(data.reserve);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-grow flex justify-center items-center p-4">
      <section className="text-center border border-gray-300 p-4 max-w-sm w-full">
        <h2 className="text-red-500">My page</h2>
        <h3 className="text-red-500">予約状況</h3>

        {reserveData && reserveData.length > 0 && (
          <div className="border border-gray-300 p-4 mt-4">
            {reserveData.map((reserve, index) => (
              <>
                <div key={index} className="mb-4">
                  <p>
                    予約日：{reserve.date.getFullYear()}年{" "}
                    {reserve.date.getMonth() + 1}月 {reserve.date.getDate()}日
                  </p>
                  <p>
                    予約時間：{reserve.starttime.getHours()}時
                    {reserve.starttime.getMinutes()}分 ~{" "}
                    {reserve.finishtime.getHours()}時
                    {reserve.finishtime.getMinutes()}分
                  </p>
                  <p>部屋番号：{reserve.room_number}</p>
                </div>
                <button
                  onClick={async () => await removeReserve(reserve.id)}
                  className="bg-gray-300 border-none px-4 py-2 mt-4"
                >
                  この予約をキャンセルする
                </button>
              </>
            ))}
          </div>
        )}

        <p className="text-red-500 mt-2">※予約は1つしかできません</p>
      </section>
      <Logout />
    </main>
  );
}
