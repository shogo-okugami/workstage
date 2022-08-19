import React, { useState } from "react";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const last = new Date(year, month, 0).getDate();
  const prevlast = new Date(year, month - 1, 0).getDate();
  const week = ["日", "月", "火", "水", "木", "金", "土"];

  const calendar = createCalendar(year, month, last);

  return (
    <>
      <table>
        <thead>
          <tr>
            {week.map((weekDay, i) => (
              <td key={i}>{weekDay}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j} id={day}>
                    <div>
                      {day > last ? day - last : day <= 0 ? prevlast + day : day}
                    </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const createCalendar = (year, month) => {
  const first = new Date(year, month - 1, 1).getDay();

  const last = new Date(year, month, 0).getDay();

  const dayCount = new Date(year, month, 0).getDate();

  const length = (first + dayCount + (6 - last)) / 7;

  const weekArray = [...Array(length).keys()];

  return weekArray.map((weekIndex) => {
    return [0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
      const day = dayIndex + 1 + weekIndex * 7;
      return day - first;
    });
  });
};

export default Calendar;
