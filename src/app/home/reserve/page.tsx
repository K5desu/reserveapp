export default function Page() {
  return (
    <>
      <div className="date text-red-500 text-2xl my-5">2024 X月X日</div>
      <div className="content flex flex-col md:flex-row justify-between p-5">
        <div className="table-container w-full md:w-3/5">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border p-4 bg-gray-100">部屋番号</th>
                <th className="border p-4 bg-gray-100">
                  10:00
                  <br />
                  ~11:00
                </th>
                <th className="border p-4 bg-gray-100">
                  11:00
                  <br />
                  ~12:00
                </th>
                <th className="border p-4 bg-gray-100">
                  12:00
                  <br />
                  ~13:00
                </th>
                <th className="border p-4 bg-gray-100">
                  13:00
                  <br />
                  ~14:00
                </th>
                <th className="border p-4 bg-gray-100">
                  14:00
                  <br />
                  ~15:00
                </th>
                <th className="border p-4 bg-gray-100">
                  15:00
                  <br />
                  ~16:00
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4">1-A</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
              <tr>
                <td className="border p-4">1-B</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
              <tr>
                <td className="border p-4">2-A</td>
                <td className="border p-4 bg-yellow-300">10:00~11:00</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
              <tr>
                <td className="border p-4">2-B</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
              <tr>
                <td className="border p-4">3-A</td>
                <td className="border p-4 bg-gray-400">10:00~11:30</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
              <tr>
                <td className="border p-4">3-B</td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
                <td className="border p-4"></td>
              </tr>
            </tbody>
          </table>
          <div className="note mt-2 text-xs text-gray-700">
            <span>※</span> 黄色は予約済、灰色は利用不可となります。
          </div>
        </div>
        <div className="form-container w-full md:w-2/5 flex flex-col gap-5">
          <div className="form-group flex flex-col items-center">
            <label htmlFor="date" className="mb-1">
              日時
            </label>
            <input id="date" className="p-2 w-4/5" />
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="start-time" className="mb-1">
              開始時間
            </label>
            <input id="start-time" className="p-2 w-4/5" />
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="duration" className="mb-1">
              使用時間
            </label>
            <select id="duration" name="duration" className="p-2 w-4/5">
              <option value="1">1時間</option>
              <option value="2">2時間</option>
              <option value="3">3時間</option>
            </select>
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="room" className="mb-1">
              予約部屋
            </label>
            <select id="room" name="room" className="p-2 w-4/5">
              <option value="1-A">1-A</option>
              <option value="1-B">1-B</option>
              <option value="2-A">2-A</option>
              <option value="2-B">2-B</option>
              <option value="3-A">3-A</option>
              <option value="3-B">3-B</option>
            </select>
          </div>
          <div className="form-group flex flex-col items-center">
            <label htmlFor="num-people" className="mb-1">
              使用人数
            </label>
            <select id="num-people" name="num-people" className="p-2 w-4/5">
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
            </select>
          </div>
          <div className="form-group flex flex-col items-center">
            <button className="mt-2 p-2 bg-red-500 text-white w-4/5">
              予約する
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
