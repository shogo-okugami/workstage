import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "styles/calendar.module.scss";

const Header = (props) => {
  const { year, month, setYear, setMonth } = props;

  const handleClick = (num) => () => {
    const nextMonth = month + num;
    if (nextMonth > 12) {
      setMonth(1);
      setYear(year + 1);
    } else if (nextMonth < 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(nextMonth);
    }
  };

  return (
    <>
      <div className={styles.calendar_header}>
        <div className={styles.calendar_title}>
          <IconButton onClick={handleClick(-1)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={handleClick(1)} >
            <KeyboardArrowRightIcon />
          </IconButton>
          <div>{year}年</div>
          <div className={styles.calendar_title_month}>{month}月</div>
        </div>
      </div>
    </>
  );
};

export default Header;
