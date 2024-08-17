"use client";
import { ref, onValue, set } from "firebase/database";
import { database } from "@/lib/firebase/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const starCountRef = ref(database, "user");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.userId);
    });
  }, []);

  return (
    <main className="flex justify-between py-4 bg-white border border-gray-300">
      <div className="left-section w-1/2">
        <div className="usage-status text-center text-red-500">
          <h2>使用状況</h2>
        </div>
        <div className="placeholder-box border-2 border-black h-96 mt-4"></div>
      </div>
      <div className="right-section w-1/2">
        <div className="announcement text-center">
          <h3>おしらせ</h3>
          <div className="announcement-item flex justify-between items-center border border-gray-300 p-4 mb-2 bg-gray-100">
            <p>MM/DD 本日は開館日です。</p>
          </div>
          <div className="announcement-item flex justify-between items-center border border-gray-300 p-4 mb-2 bg-gray-100">
            <p>MM/DD 本日は米国です。</p>
          </div>
        </div>
      </div>
    </main>
  );
}
