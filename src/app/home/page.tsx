"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <main className="flex flex-col items-center p-4 bg-white border-2 border-gray-300">
      <div className="w-full h-full relative">
        <div className="w-12 h-11 absolute left-0 top-0 bg-red-600"></div>
      </div>
      <h2 className="text-red-500 text-4xl mb-5">使用状況</h2>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </main>
  );
}
