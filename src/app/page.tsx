"use client";
import { ref, onValue, set } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { use, useState } from "react";
import { useEffect } from "react";
export default function Home() {
  const [data, setData] = useState();
  const starCountRef = ref(database, "user");
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  });
  return <main>{data}</main>;
}
