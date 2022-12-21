import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const MyTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#00234E',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    borderRadius: '15px',
    width: '63px',
    height: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default MyTooltip;
