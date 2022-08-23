import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "@/components/pages/Home/Calendar/Header";
import styles from "styles/calendar.module.scss";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const last = new Date(year, month, 0).getDate();
  const prevlast = new Date(year, month - 1, 0).getDate();
  const week = ["日", "月", "火", "水", "木", "金", "土"];

  const calendar = createCalendar(year, month);

  const showDate = (day) => {
    if (day > last) {
      return day - last === 1 ? `${month === 12 ? 1 : month + 1}月${1}日` : day - last;
    } else {
      return day <= 0 ? prevlast + day : day === 1 ? `${month}月${1}日` : day;
    }
  };

  return (
    <>
      <Box className={styles.calendar}>
        <Header year={year} month={month} setYear={setYear} setMonth={setMonth} />
        <div className={styles.calendar_body}>
          <table className={styles.calendar_table}>
            <thead>
              <tr>
                {week.map((weekDay, i) => (
                  <td
                    className={`${styles.calendar_td} ${styles.calendar_weekDay}`}
                    key={i}
                  >
                    {weekDay}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendar.map((week, i) => (
                <tr className={styles.calendar_days} key={i}>
                  {week.map((day, j) => (
                    <td
                      className={`${styles.calendar_td} ${styles.calendar_day}`}
                      key={j}
                      id={day}
                      valign="top"
                    >
                      <p>{showDate(day)}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
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
