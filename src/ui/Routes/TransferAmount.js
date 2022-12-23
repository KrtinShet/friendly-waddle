import React, { useState } from 'react';
import { Container } from '@mui/system';
import { ethers } from 'ethers';
import Box from '@mui/system/Box';
import { Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate, useParams } from 'react-router-dom';
import MyButton from './../Components/MyButton';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
const TransferAmount = () => {
  const { asset } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [max, setMax] = useState(true);
  const [initialValue, setInitialValue] = useState(maximum);
  let maximum;

  const handleMax = () => {
    setMax(!max);
    if (max) setInitialValue(maximum);
    else return;
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pt: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronLeftIcon
            sx={{
              fontSize: '1.625rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate(-1);
            }}
          />
          <Typography
            variant="dssReg"
            sx={{ fontWeight: 'fontWeightSemiBold' }}
          >
            Transfer<span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
        <Box sx={{ ml: '10px' }}>
          <Typography variant="tsmReg">
            {`${
              max
                ? maximum - initialValue > 0
                  ? maximum - initialValue
                  : setInitialValue(0)
                : 0
            } ${assetName} available`}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mt: '40px' }}>
        <Typography align="center" variant="dxsMed">
          Enter amount to transfer
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mt: '40px', color: 'primary.main' }}>
        <Typography align="center" sx={{ color: 'primary' }}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            sx={{ color: 'primary' }}
            value={initialValue}
            onChange={(e) => {
              setInitialValue(e.target.value);
              setMax(true);
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <Button
          sx={{
            width: '66px',
            height: '26px',
            border: '1px solid',
            borderRadius: '15px',
          }}
          variant={max ? 'outlined' : 'contained'}
          onClick={() => {
            handleMax();
          }}
        >
          max
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '80px' }}>
        <MyButton
          variant="contained"
          onClick={() => {
            navigate('/confirmTransfer');
          }}
        >
          Continue
        </MyButton>
      </Box>
    </Container>
  );
};

export default TransferAmount;
