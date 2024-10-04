import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
interface DemoPageProps {
  data: Payment[];
  IsRental: boolean;
}
export function DemoPage({ data, IsRental }: DemoPageProps) {
  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={data} IsRental={IsRental} />
    </div>
  );
}
