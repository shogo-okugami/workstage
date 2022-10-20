import React, { useEffect, useState } from "react";
import Layout from "components/layouts/Layout";
import ShiftRow from "@/components/pages/Home/Shift/ShiftRow";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import styles from "styles/shift.module.scss";

const Shift = () => {
  const router = useRouter();
  const param = router.query.date;

  const group = [1, 2];
  const [grouped, setGrouped] = useState(false);

  const title = param.split("-").map((val) => Number(val));

  const data = [];
  for (let i = 1; i <= 40; i++) {
    data.push({
      id: i,
      name: `ユーザー${i}`,
      group: i % 2 === 0 ? 1 : 2,
    });
  }
  const [users, setUsers] = useState({ 0: [...data] });

  useEffect(() => {
    if (grouped) {
      setUsers(
        group.reduce((prev, current) => {
          if (current in prev === false) {
            prev[current] = [];
          }
          const dataArray = users[0];
          dataArray.map(
            (val) => val.group === current && prev[current].push(val)
          );
          return prev;
        }, {})
      );
    }else{
      setUsers({ 0: [...data] });
    }
  }, [grouped]);

  const handleClick = (num) => () => {
    const date = new Date(param);

    date.setDate(date.getDate() + num);

    const nextDate = date
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("-");

    router.push(`/${nextDate}`);
  };

  const start = 9;
  const end = 24;
  const time = Array(end - start + 1)
    .fill(start)
    .map((x, y) => x + y);

  return users ? (
    <div className={styles.shift}>
      <div className={styles.shift_header}>
        <div className={styles.shift_title}>
          <IconButton onClick={handleClick(-1)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <p>
            {title[0]}年{title[1]}月{title[2]}日
          </p>
          <IconButton onClick={handleClick(1)}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
      {Object.keys(users).map((val, i) => (
        <div className={styles.shift_body} key={i}>
          <table>
            <thead>
              <tr>
                <th className={styles._sticky}></th>
                {time.map((val, i) => (
                  <td className={styles._sticky} key={i}>
                    {val}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {users[val].map((user, i) => (<ShiftRow user={user} time={time} key={i} />))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  ) : (
    <p>
      有効なデータがありません。シフトを作成するにはユーザーを追加してください。
    </p>
  );
};

Shift.getLayout = (page) => {
  return (
    <Layout title={"シフト"} maxHeight={"fixed"}>
      {page}
    </Layout>
  );
};

export default Shift;
