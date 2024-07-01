import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[1920px] h-[1080px] relative bg-white border border-black">
        <div className="w-[819px] h-[562px] left-[203px] top-[244px] absolute bg-white border border-black">
          <div className="w-[716px] h-[164px] left-[51px] top-[333px] absolute bg-gray-100 rounded-[30px] justify-center items-center inline-flex">
            <div className="w-[716px] h-[164px] text-center text-black text-[32px] font-normal font-['Inter']">
              MM/DD　本日は米国です。
            </div>
          </div>
          <div className="w-[716px] h-[141px] left-[52px] top-[140px] absolute bg-gray-100 rounded-[30px] justify-center items-center inline-flex">
            <div className="w-[716px] h-[141px] text-center text-black text-[32px] font-normal font-['Inter']">
              MM/DD　本日は閉館日です。
            </div>
          </div>
          <div className="w-[153px] h-[51px] left-[333px] top-[55px] absolute text-center text-black text-[32px] font-normal font-['Inter']">
            おしらせ
          </div>
        </div>
        <div className="h-[467px] pl-8 pr-[31px] pt-[154px] pb-[87px] left-[1210px] top-[292px] absolute bg-gray-100 flex-col justify-end items-center gap-[110px] inline-flex">
          <div className="w-[412px] h-[69px] px-[38px] py-6 bg-red-600 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[40px] font-normal font-['Inter']">
              ログイン
            </div>
          </div>
          <div className="w-[444px] h-[47px] text-center">
            <span className="teSxt-black text-2xl font-normal font-['Inter']">
              ご利用方法は
            </span>
            <span className="text-red-600 text-2xl font-normal font-['Inter']">
              こちら
            </span>
          </div>
        </div>
        <div className="w-[1920px] h-36 left-0 top-0 absolute bg-gray-100 justify-center items-center inline-flex">
          <div className="w-[1920px] h-36 text-center text-red-600 text-5xl font-extrabold font-['Inter']">
            龍谷大学　交流会館予約アプリ
          </div>
        </div>
        <div className="w-[1920px] h-[174px] left-0 top-[906px] absolute bg-gray-100 justify-center items-center inline-flex">
          <div className="w-[1920px] h-[174px] text-center text-black text-[32px] font-normal font-['Inter']">
            ほげほげ委員会
            <br />
            ふがふが
            <br />
            電話番号 077-123-4567
          </div>
        </div>
      </div>
    </main>
  );
}
