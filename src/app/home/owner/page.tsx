"use client";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DemoPage } from "@/components/reservecheck/table";
import { Payment } from "@/components/reservecheck/columns";
export default function Page() {
  function getData(): Payment[] {
    return [
      {
        name: "John Doe",
        student_id: "123456",
        time: "10:00~11:00",
        status: "未貸し出し",
      },
    ];
  }
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const starCountRef = ref(database, "user");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.userId);
    });
  }, []);

  return (
    <div>
      <form action="" className="justify-end gap-4 m-3 md:flex">
        <div className="flex items-center gap-4 m-3 justify-center">
          <Input
            value={data}
            placeholder="学籍番号"
            onChange={(e) => setData(e.target.value)}
          />
          <Button>検索</Button>
        </div>
        <div className="flex items-center gap-4 m-3 justify-center">
          <Input type="time" />
          <Button>検索</Button>
        </div>
      </form>
      <DemoPage />
    </div>
  );
}
