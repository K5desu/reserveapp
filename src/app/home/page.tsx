export default function Page() {
  return (
    <main className="flex justify-between p-4 bg-white border-2 border-gray-300">
      <div className="w-1/2">
        <div className="text-center text-red-500">
          <h2>使用状況</h2>
        </div>
        <div className="border-2 border-black h-64 mt-4"></div>
      </div>
      <div className="w-1/2">
        <div className="text-center">
          <h3>おしらせ</h3>
        </div>
        <div className="border border-gray-300 p-2 bg-gray-100 mb-2 flex justify-between items-center">
          <p>MM/DD 本日は開館日です。</p>
          <button className="bg-black text-white px-2 py-1">削除</button>
        </div>
        <div className="border border-gray-300 p-2 bg-gray-100 flex justify-between items-center">
          <p>MM/DD 本日は米国です。</p>
          <button className="bg-black text-white px-2 py-1">削除</button>
        </div>
      </div>
    </main>
  );
}
