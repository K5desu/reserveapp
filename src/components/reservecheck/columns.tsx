"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  name: string;
  student_id: string;
  time: string;
  status: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "部屋名",
  },
  {
    accessorKey: "student_id",
    header: "学籍番号",
  },
  {
    accessorKey: "time",
    header: "時間",
  },
  {
    accessorKey: "status",
    header: "日付",
  },
];
