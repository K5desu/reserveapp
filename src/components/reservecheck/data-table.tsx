"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { toggleIsRental } from "@/app/api/reservecheck/all/reserve";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Identifiable {
  id: number;
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  IsRental: boolean;
}

// ...他のインポート

export function DataTable<TData extends Identifiable, TValue>({
  columns,
  data,
  IsRental,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  const { toast } = useToast();
  return (
    <div className="container mx-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const renderedContent = flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  );
                  console.log(renderedContent); // コンソールに出力
                  return <TableCell key={cell.id}>{renderedContent}</TableCell>;
                })}
                <TableCell>
                  <Button
                    onClick={async () => {
                      await toggleIsRental(row.original.id);
                      window.location.reload();
                      IsRental
                        ? toast({ title: "返却しました" })
                        : toast({ title: "貸し出しました" });
                    }}
                  >
                    {IsRental ? "返却" : "貸出"}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>データがありません</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
