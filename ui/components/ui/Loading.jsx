import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const CustomizedCircularProgress = styled(CircularProgress)`
  display:block;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
`;

const Loading = () => {
  return (
    <>
      <Box sx={{
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        position: 'absolute',
      }}>
        <CircularProgress color='primary' thickness={1.2} size={120} />
      </Box>
    </>
  )
}

export default Loading