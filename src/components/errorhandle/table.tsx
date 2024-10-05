"use client";
import Table from "@/components/reserve/table";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Suspense } from "react";
import { useToast } from "@/hooks/use-toast";
import { createReserve } from "@/app/api/reservecheck/reserve";
import { getReservationsByDate } from "@/app/api/reservecheck/all/reserve";

export default function TablePage() {
  const searchParams = useSearchParams();
  interface ReservationAll {
    starttime: string;
    finishtime: string;
    room_number: string;
  }

  const [loading, setLoading] = useState(false);
  const [reserves, setReserves] = useState<ReservationAll[]>([]);

  const { toast } = useToast();

  const [numPeople, setNumPeople] = useState("1");
  const handleNumPeopleChange = (e: any) => {
    setNumPeople(e.target.value);
  };

  const formattedDateRef = useRef("");
  useEffect(() => {
    const queryDate = searchParams.get("query");
    formattedDateRef.current = queryDate
      ? new Date(queryDate).toISOString().split("T")[0]
      : "";

    const fetchData = async () => {
      try {
        const data = await getReservationsByDate(formattedDateRef.current);
        setReserves(data);
        setLoading(true);
      } catch (error) {
        toast({
          title: "エラー",
          description: "予約データなし",
        });
      }
    };
    fetchData();
  }, [searchParams]);

  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [room, setRoom] = useState("1-A");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const start = new Date(`1970-01-01T${startTime}:00`);
    const finish = new Date(`1970-01-01T${finishTime}:00`);
    const diff = (finish.getTime() - start.getTime()) / (1000 * 60 * 60); // 時間差を計算

    // 予約時間が10:00から17:00の間にあるかチェック
    const startHour = start.getHours();
    const finishHour = finish.getHours();
    if (
      startHour < 10 ||
      finishHour > 17 ||
      (finishHour === 17 && finish.getMinutes() > 0)
    ) {
      toast({
        title: "エラー",
        description: "予約時間は10:00から17:00の間でなければなりません。",
      });
      return;
    }

    // 2時間以上のチェック
    if (diff > 2) {
      toast({
        title: "エラー",
        description: "開始時間と終了時間の間は二時間以内にしてください。",
      });
      return;
    }

    // 予約の重なりチェック
    const isOverlap = reserves.some((reserve) => {
      if (reserve.room_number !== room) return false;
      const reserveStart = new Date(`1970-01-01T${reserve.starttime}:00`);
      const reserveFinish = new Date(`1970-01-01T${reserve.finishtime}:00`);
      return (
        (start >= reserveStart && start < reserveFinish) ||
        (finish > reserveStart && finish <= reserveFinish) ||
        (start <= reserveStart && finish >= reserveFinish)
      );
    });

    if (isOverlap) {
      toast({
        title: "エラー",
        description: "指定された時間帯には既に同じ部屋の予約があります。",
      });
      return;
    }

    // 予約処理をここに追加
    toast({
      title: "正常に予約がされました",
      description: "Mypageを確認してください",
    });

    await createReserve(
      "y220018",
      numPeople,
      formattedDateRef.current,
      startTime,
      finishTime,
      room
    );
  };

  return (
    <>
      {loading ? (
        <Suspense>
          <div className="date text-red-500 text-2xl my-5">
            {formattedDateRef.current}
          </div>

          <div className="content flex flex-col md:flex-row justify-between p-5">
            <Table reserves={reserves} />
            <form
              className="form-container w-full md:w-2/5 flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="form-group flex flex-col items-center">
                <label htmlFor="date" className="mb-1">
                  日時
                </label>
                <input
                  id="date"
                  type="date"
                  className="p-2 w-4/5"
                  disabled={true}
                  value={formattedDateRef.current}
                />
              </div>
              <div className="form-group flex flex-col items-center">
                <label htmlFor="start-time" className="mb-1">
                  開始時間
                </label>
                <input
                  id="start-time"
                  type="time"
                  className="p-2 w-4/5"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="form-group flex flex-col items-center">
                <label htmlFor="finish-time" className="mb-1">
                  終了時間
                </label>
                <input
                  id="finish-time"
                  type="time"
                  className="p-2 w-4/5"
                  value={finishTime}
                  onChange={(e) => setFinishTime(e.target.value)}
                />
              </div>
              <div className="form-group flex flex-col items-center">
                <label htmlFor="room" className="mb-1">
                  予約部屋
                </label>
                <select
                  id="room"
                  name="room"
                  className="p-2 w-4/5"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="1-A">1-A</option>
                  <option value="1-B">1-B</option>
                  <option value="2-A">2-A</option>
                  <option value="2-B">2-B</option>
                  <option value="3-A">3-A</option>
                  <option value="3-B">3-B</option>
                </select>
              </div>
              <div className="form-group flex flex-col items-center">
                <label htmlFor="num-people" className="mb-1">
                  使用人数
                </label>
                <select
                  id="num-people"
                  name="num-people"
                  className="p-2 w-4/5"
                  value={numPeople}
                  onChange={handleNumPeopleChange}
                >
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                </select>
              </div>
              <div className="form-group flex flex-col items-center">
                <button className="mt-2 p-2 bg-red-500 text-white w-4/5">
                  予約する
                </button>
              </div>
            </form>
          </div>
        </Suspense>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
