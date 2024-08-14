export default function Page() {
  return (
    <main className="flex-grow flex justify-center items-center p-4">
      <section className="text-center border border-gray-300 p-4 max-w-sm w-full">
        <h2 className="text-red-500">My page</h2>
        <h3 className="text-red-500">予約状況</h3>
        <div className="border border-gray-300 p-4 mt-4">
          <p>予約日：</p>
          <p>予約時間：</p>
          <p>予約部屋：</p>
        </div>
        <button className="bg-gray-300 border-none px-4 py-2 mt-4">
          この予約をキャンセルする
        </button>
        <p className="text-red-500 mt-2">※予約は1つしかできません</p>
      </section>
    </main>
  );
}
