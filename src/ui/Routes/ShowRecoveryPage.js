import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MyButton from '../Components/MyButton';
import { useNavigate } from 'react-router-dom';
import bcryptjs from 'bcryptjs';
import { decryptMnemonic } from '../Store/Slices/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ShowRecoveryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onClickHandler = () => {
    if (true) {
      navigate('/saveRecovery', { replace: true });
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            onClick={() => navigate(-1)}
          />
          <Typography
            variant="dssReg"
            sx={{ fontWeight: 'fontWeightSemiBold' }}
          >
            Show Recovery Phrase
            <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
        <Box sx={{ mt: '15px' }}>
          <Typography variant="tsmReg">
            Enter your password to show your recovery phrase. Turn off screen
            sharing. Don't share it with anyone.
          </Typography>
        </Box>
      </Box>
      {/* password textBox */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '45px' }}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            fullWidth
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>

      {/* check box and information message */}

      <Box
        sx={{
          pt: '20px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                onChange={() => {
                  setAgreed(!agreed);
                }}
              />
            }
          />
        </FormGroup>
        <Typography variant="tsmReg">
          I understand that I stand the risk of loosing my funds by exposing or
          by loosing the seed phrase
        </Typography>
      </Box>
      <Box sx={{ mt: '45px', display: 'flex', justifyContent: 'center' }}>
        <MyButton
          variant="contained"
          disabled={!agreed ? true : false}
          onClick={onClickHandler}
        >
          Unlock
        </MyButton>
      </Box>
    </Container>
  );
};

export default ShowRecoveryPage;
