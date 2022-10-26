import React, { useRef, useState, useEffect, createRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import styles from "styles/shift.module.scss";

const ShiftRow = (props) => {

  const { user, time } = props;

  const [state, setState] = useState({
    start: null,
    clicked: false,
    last: null,
    shown: false,
  });
  
  const els = useRef([]);

  time.forEach((_, i) => (els.current[i] = createRef()));

  const handleClick = (num) => () => {
    setState({ start: num, clicked: !state.clicked, last: num });
    if (!state.clicked) {
      els.current[num].current.className = styles.active;
    }
  };

  const handleMouseOver = (overIndex) => () => {
    if (state.last > overIndex && overIndex >= state.start) {
      const start = overIndex - els.current.length + 1;
      const end = state.last + 1;
      els.current.slice(start, end).map((val) => (val.current.className = ""));
    }
    if (overIndex > state.start) {
      els.current
        .slice(state.last, overIndex + 1)
        .map((val) => (val.current.className = styles.active));
      setState({ ...state, last: overIndex });
    }
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={() =>
          setState({ start: null, clicked: false, last: null })
        }
      >
        <tr>
          <th className={styles._sticky}>{user.name}</th>
          {time.map((_, i) => (
            <td
              onClick={handleClick(i)}
              onMouseOver={state.clicked ? handleMouseOver(i) : undefined}
              ref={els.current[i]}
              key={i}
            >
              <span />
            </td>
          ))}
        </tr>
      </ClickAwayListener>
    </>
  );
};

export default ShiftRow;
