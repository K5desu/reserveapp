"use client";
import { ref, onValue, set } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState();
  const starCountRef = ref(database, "user");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });
  return <main>{data}</main>;
}
