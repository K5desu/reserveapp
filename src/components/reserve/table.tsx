import PropTypes from "prop-types";

interface Reserve {
  starttime: string;
  finishtime: string;
  room_number: string;
}

interface TableProps {
  reserves: Reserve[];
}

export default function Table({ reserves = [
  {
    starttime: "10:00",
    finishtime: "11:00",
    room_number: "1-A"
  },
  {
    starttime: "11:00",
    finishtime: "12:00",
    room_number: "2-B"
  },
  {
    starttime: "13:00",
    finishtime: "14:00",
    room_number: "3-A"
  }
] }: TableProps) {
  const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  const rooms = ["1-A", "1-B", "2-A", "2-B", "3-A", "3-B"];

  const getCellClass = (room: string, time: string) => {
    if (!reserves || reserves.length === 0) {
      return "";
    }
    const reserve = reserves.find(
      (res) =>
        res.room_number === room &&
        res.starttime <= time &&
        res.finishtime > time
    );
    if (reserve) {
      return "bg-yellow-300";
    }
    return "";
  };

  return (
    <>
      <div className="table-container w-full md:w-3/5">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-4 bg-gray-100">部屋番号</th>
              {times.map((time) => (
                <th key={time} className="border p-4 bg-gray-100">
                  {time}
                  <br />
                  ~{parseInt(time.split(":")[0]) + 1}:00
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room}>
                <td className="border p-4">{room}</td>
                {times.map((time) => (
                  <td
                    key={`${room}-${time}`}
                    className={`border p-4 ${getCellClass(room, time)}`}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="note mt-2 text-xs text-gray-700">
          <span>※</span> 黄色は予約済、灰色は利用不可となります。
        </div>
      </div>
    </>
  );
}

Table.propTypes = {
  reserves: PropTypes.arrayOf(
    PropTypes.shape({
      starttime: PropTypes.string.isRequired,
      finishtime: PropTypes.string.isRequired,
      room_number: PropTypes.string.isRequired,
    })
  ).isRequired,
};