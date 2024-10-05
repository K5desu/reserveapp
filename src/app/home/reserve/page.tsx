"use client";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TablePage from "@/components/errorhandle/table";
export default function Page() {
  return (
    <>
      <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
        <TablePage />
      </Suspense>
    </>
  );
}
