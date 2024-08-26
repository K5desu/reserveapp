"use client";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { use, useEffect, useState } from "react";
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
  return <div>{data}</div>;
}
