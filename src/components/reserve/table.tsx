import PropTypes from "prop-types";
import React from "react";

interface Reserve {
  starttime: string;
  finishtime: string;
  room_number: string;
}

interface TableProps {
  reserves: Reserve[];
}

// #fcd34d 16.666%左端のスペース指定

export default function Table({ reserves }: TableProps) {
  const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  const rooms = ["1-A", "1-B", "2-A", "2-B", "3-A", "3-B"];

  const getCellText = (room: string, time: string) => {
    if (!reserves || reserves.length === 0) {
      return "";
    }
    const matchingReserves = reserves.filter((res) => {
      const currentTime = new Date(`1970-01-01T${time}:00`);
      const startTime = new Date(`1970-01-01T${res.starttime}:00`);
      const finishTime = new Date(`1970-01-01T${res.finishtime}:00`);
      const startDuration =
        (currentTime.getTime() - startTime.getTime()) / 3600000;
      const finishDuration =
        (finishTime.getTime() - currentTime.getTime()) / 3600000;
      return (
        res.room_number === room && startDuration > -1 && finishDuration > 0
      );
    });
    if (matchingReserves.length > 0) {
      return matchingReserves
        .map((reserve) => `${reserve.starttime} ~ ${reserve.finishtime}`)
        .join(", ");
    }
    return "";
  };

  const getCellStyle = (room: string, time: string) => {
    if (!reserves || reserves.length === 0) {
      return {};
    }

    const matchingReserves = reserves.filter((res) => {
      const currentTime = new Date(`1970-01-01T${time}:00`);
      const startTime = new Date(`1970-01-01T${res.starttime}:00`);
      const finishTime = new Date(`1970-01-01T${res.finishtime}:00`);
      const startDuration =
        (currentTime.getTime() - startTime.getTime()) / 3600000;
      const finishDuration =
        (finishTime.getTime() - currentTime.getTime()) / 3600000;
      return (
        res.room_number === room && startDuration > -1 && finishDuration > 0
      );
    });

    if (matchingReserves.length > 0) {
      const currentTime = new Date(`1970-01-01T${time}:00`);
      const gradients = matchingReserves.map((reserve) => {
        const startTime = new Date(`1970-01-01T${reserve.starttime}:00`);
        const finishTime = new Date(`1970-01-01T${reserve.finishtime}:00`);
        let leftMargin = 0;
        let rightMargin = 100;

        leftMargin =
          ((startTime.getTime() - currentTime.getTime()) * 100) / 3600000;

        rightMargin =
          ((finishTime.getTime() - currentTime.getTime()) * 100) / 3600000;

        return `linear-gradient(to right, transparent ${leftMargin}%, #fcd34d ${leftMargin}%, #fcd34d ${rightMargin}%, transparent ${rightMargin}%)`;
      });

      return {
        background: gradients.join(", "),
      };
    }
    return {};
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
                  <br />~{parseInt(time.split(":")[0]) + 1}:00
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
                    className="border p-4"
                    style={getCellStyle(room, time)}
                  >
                    {getCellText(room, time)}
                  </td>
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
