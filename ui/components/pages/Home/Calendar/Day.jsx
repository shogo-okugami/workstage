import React from "react";
import { useRouter } from "next/router";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { styled } from "@mui/material/styles";

const CustomAddCircleIcon = styled(AddCircleSharpIcon)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const Day = (props) => {

  const { date,shiftDate } = props;
  const router = useRouter();

  const handleClick = () =>{
    router.push(`/${shiftDate}`);
  }

  return (
    <>
      <p>{date}</p>
      <CustomAddCircleIcon color="primary" fontSize="large" onClick={handleClick} />
    </>
  );
};

export default Day;
