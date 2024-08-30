import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
function getData(): Payment[] {
  return [
    {
      name: "John Doe",
      student_id: "123456",
      time: "10:00",
      status: "未貸し出し",
    },
  ];
}

export function DemoPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
