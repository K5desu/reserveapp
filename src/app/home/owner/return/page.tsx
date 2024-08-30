"use client";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DemoPage } from "@/components/reservecheck/table";
export default function Page() {
  const [data, setData] = useState();
  useEffect(() => {
    const starCountRef = ref(database, "user");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data.userId);
    });
  }, []);
  return (
    <div>
      <form action="" className=" justify-end  gap-4 m-3 md:flex">
        <div className="flex  items-center gap-4 m-3 justify-center">
          <Input value={data} placeholder="学籍番号" />
          <Button>検索</Button>
        </div>
        <div className="flex  items-center gap-4 m-3 justify-center">
          <Input type="time"></Input>
          <Button>検索</Button>
        </div>
      </form>
      <DemoPage />
    </div>
  );
}
