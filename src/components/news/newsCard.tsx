import { Button } from "../ui/button";
import { deleteNewsById } from "@/app/api/news/delete";
export default function NewsCard({
  contents,
  date,
  IsDelete,
  id,
}: {
  contents: string;
  date: string;
  IsDelete: boolean;
  id: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center  space-y-4 bg-white mb-5 ">
      <div className="  text-red-600 text-xs font-normal font-['Inter']  ">
        お知らせ
      </div>
      {IsDelete && (
        <Button
          variant="destructive"
          onClick={async () => {
            await deleteNewsById(id);
            window.location.reload();
          }}
        >
          削除
        </Button>
      )}
      <div className="flex w-[259px] h-28 flex-col items-center p-4 space-y-2 bg-gray-100 rounded-[30px]">
        <div className="   text-black text-sm font-normal font-['Inter'] pb-5 pt-3">
          {contents}
        </div>

        <div className="text-black text-xs font-normal font-['Inter'] pl-10">
          {date}
        </div>
      </div>
    </div>
  );
}
