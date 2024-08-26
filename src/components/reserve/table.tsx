export default function Table() {
  return (
    <>
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
    </>
  );
}
