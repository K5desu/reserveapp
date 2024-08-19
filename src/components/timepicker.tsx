import { useState } from "react";
import TimePicker from "react-time-picker";

const TimeSettingComponent = () => {
  const [time, setTime] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center p-4">
      <label htmlFor="time-picker" className="mb-2 text-lg">
        開始時間
      </label>
      <TimePicker
        id="time-picker"
        onChange={(e) => setTime(e)}
        value={time}
        className="mb-4"
      />
    </div>
  );
};

export default TimeSettingComponent;
