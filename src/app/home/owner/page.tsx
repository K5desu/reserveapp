"use client";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DemoPage } from "@/components/reservecheck/table";
import { Payment } from "@/components/reservecheck/columns";
import { getRentalReservations } from "@/app/api/reservecheck/all/reserve";
import { getRentalReservationsByAuthorId } from "@/app/api/reservecheck/all/reserve";
import Link from "next/link";
export default function Page() {
  const [reserveData, setReserveData] = useState<Payment[]>([]);
  const [data, setData] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRentalReservations(false);
      setReserveData(data);
    };
    fetchData();

    const starCountRef = ref(database, "user");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.userId);
    });
  }, []);

  return (
    <div>
      <header className="flex justify-end ">
        <Link
          href="/home/owner/return"
          className="pr-5 text-red-300 underline font-bold "
        >
          貸出中一覧
        </Link>
      </header>
      <div className="justify-end gap-4 m-3 md:flex">
        <div className="flex items-center gap-4 m-3 justify-center">
          <Input
            value={data}
            placeholder="学籍番号"
            onChange={(e) => setData(e.target.value)}
          />
          <Button
            onClick={async () => {
              const datas = await getRentalReservationsByAuthorId(data, false);

              setReserveData(datas);
            }}
          >
            検索
          </Button>
        </div>
      </div>
      <DemoPage data={reserveData} IsRental={false} />
    </div>
  );
}
