"use client";
import Table from "@/components/reserve/table";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();

  const queryDate = searchParams.get("query");

  // 日付を YYYY-MM-DD フォーマットに変換
  const reserves = [
    {
      starttime: "12:00",
      finishtime: "12:10",
      room_number: "1-A",
    },
    {
      starttime: "12:30",
      finishtime: "12:50",
      room_number: "1-A",
    },
  ];
  const formattedDate = queryDate
    ? new Date(queryDate).toISOString().split("T")[0]
    : "";
  return (
    <>
      <div className="date text-red-500 text-2xl my-5">2024 X月X日</div>
      <div className="content flex flex-col md:flex-row justify-between p-5">
        <Table reserves={reserves} />
        <div className="form-container w-full md:w-2/5 flex flex-col gap-5">
          <div className="form-group flex flex-col items-center">
            <label htmlFor="date" className="mb-1">
              日時
            </label>
            <input
              id="date"
              type="date"
              className="p-2 w-4/5"
              disabled={true}
              value={formattedDate}
            />
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="start-time" className="mb-1">
              開始時間
            </label>
            <input id="start-time" type="time" className="p-2 w-4/5" />
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="duration" className="mb-1">
              使用時間
            </label>

            <input id="start-time" type="time" className="p-2 w-4/5" />
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="room" className="mb-1">
              予約部屋
            </label>
            <select id="room" name="room" className="p-2 w-4/5">
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
            <select id="num-people" name="num-people" className="p-2 w-4/5">
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
            </select>
          </div>
          <div className="form-group flex flex-col items-center">
            <button className="mt-2 p-2 bg-red-500 text-white w-4/5">
              予約する
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
