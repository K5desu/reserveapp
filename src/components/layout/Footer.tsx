export default function Footer() {
  return (
    <footer className="flex  justify-center  ">
      <div className="flex flex-col items-center justify-center  space-y-4 bg-white ">
        <div className=" font-bold  text-red-600 text-xs font-normal font-['Inter'] pr-[80%]">
          お知らせ
        </div>
        <div className="flex w-[259px] h-28 flex-col items-center p-4 space-y-2 bg-gray-100 rounded-[30px]">
          <div className="   text-black text-xl font-normal font-['Inter'] pb-5 pt-3">
            本日は閉館日です
          </div>
          <div className="text-black text-xs font-normal font-['Inter'] pl-10">
            X月X日
          </div>
        </div>
      </div>
    </footer>
  );
}
