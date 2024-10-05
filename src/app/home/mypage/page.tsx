"use client";
import { useState, useEffect } from "react";
import { checkReserve, removeReserve } from "@/app/api/reservecheck/reserve";
import { RyuAuthenticator } from "@/lib/ryu-authentcator";
import { Button } from "@/components/ui/button";
import Logout from "@/components/google/Logout";
export default function Page() {
  const IsRyu = RyuAuthenticator();
  const studentId = "y220018";
  const [reserveData, setReserveData] = useState<
    | {
        id: number;
        author_id: string;
        date: string;
        starttime: string;
        finishtime: string;
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
    <main className="flex-col flex justify-center items-center p-4">
      <section className="text-center border  border-gray-300 p-4 max-w-sm w-full">
        <h2 className="text-red-500">My page</h2>
        <h3 className="text-red-500">予約状況</h3>

        {reserveData && reserveData.length > 0 && (
          <div className="border border-gray-300 p-4 mt-4">
            {reserveData.map((reserve, index) => {
              const reserveDate = new Date(reserve.date as string);
              const startTimeParts = reserve.starttime.split(":");
              const finishTimeParts = reserve.finishtime.split(":");

              return (
                <div key={index} className="mb-4 border border-gray-300">
                  <p>部屋番号：{reserve.room_number}</p>
                  <p>
                    予約日：{reserveDate.getFullYear()}年{" "}
                    {reserveDate.getMonth() + 1}月 {reserveDate.getDate()}日
                  </p>
                  <p>
                    予約時間：{startTimeParts[0]}時{startTimeParts[1]}分 ~{" "}
                    {finishTimeParts[0]}時{finishTimeParts[1]}分
                  </p>
                  <Button
                    variant="destructive"
                    onClick={async () => {
                      await removeReserve(reserve.id);
                      window.location.reload();
                    }}
                  >
                    削除
                  </Button>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-red-500 mt-2">※本当は予約は1つしかできません</p>
      </section>
      <Logout />
    </main>
  );
}
