import React, { useState } from 'react';
import { Container } from '@mui/system';
import Box from '@mui/system/Box';
import { Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MyButton from './../Components/MyButton';

import { isValidMenmonic } from './../../app/lib/AccountManager';

import { useDispatch, useSelector } from 'react-redux';

function EnterRecoveryPhrase() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const value = e.target.value.trim();
    if (isValidMenmonic(value)) {
      setError(false);
    } else {
      setError(true);
    }
    setValue(value);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pt: '40px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              Enter Recovery Phrase
              <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
            </Typography>
          </Box>
          <Typography variant="tsmReg" sx={{ ml: '20px', width: '80%' }}>
            use your 12 words recovery phrase
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          mt: '10px',
        }}
      >
        <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Recovery Phrase."
            multiline
            value={value}
            fullWidth
            error={error}
            helperText={error && 'Invalid Recovery Phrase.'}
            onChange={handleOnChange}
          />
        </Box>
        <MyButton
          sx={{ mt: '50px' }}
          variant="contained"
          disabled={value.split(' ').length === 12 ? false : true}
          onClick={() => {
            navigate('/verifyRecovery', { replace: true });
          }}
        >
          Proceed
        </MyButton>
      </Box>
    </Container>
  );
}

export default EnterRecoveryPhrase;
