export default function Page() {
  return (
    <main className="flex flex-col  justify-between p-5 bg-white border-2 border-gray-300">
      <div className="left-section w-full md:w-1/2 mb-5 md:mb-0">
        <div className="date mb-5">
          <h2 className="text-center mb-2">日時</h2>
          <input
            type="date"
            className="border border-gray-300 p-2 bg-gray-100 h-24"
          />
        </div>
        <div className="content">
          <h2 className="text-center mb-2">内容</h2>
          <textarea className="content-box border border-gray-300 p-2 bg-gray-100 h-36" />
        </div>
      </div>
    </main>
  );
}
