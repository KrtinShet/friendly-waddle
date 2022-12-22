import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyButton from './../Components/MyButton';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
      <Box>
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width="150"
          height="150"
          viewBox="0 0 147 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-13.6641 70.3753C-11.8217 96.723 11.0221 116.589 37.3567 114.748C63.6932 112.906 83.548 90.0541 81.7056 63.7064C79.8632 37.3589 57.0212 17.4928 30.6848 19.3344C4.35011 21.1759 -15.5065 44.0278 -13.6641 70.3753Z"
            stroke="#FF902A"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-70.5603 74.0541C-66.4514 132.813 -16.1875 177.166 41.7094 173.117C99.6056 169.069 143.209 118.152 139.1 59.3932C134.991 0.634231 84.7261 -43.718 26.8299 -39.6696"
            stroke="#2382F7"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          minHeight: '600px',
        }}
      >
        <Typography
          variant="dlgReg"
          sx={{
            fontWeight: 'fontWeightSemiBold',
          }}
          align="center"
        >
          Chai Wallet
          <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
        </Typography>
        <Typography align="center" variant="tlgMed" sx={{ width: '18.35rem' }}>
          Login to your existing wallet by entering the password
        </Typography>

        {/* password */}

        <Box
          sx={{
            mt: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginLeft: '15px',
            justifyContent: 'center',
          }}
        >
          <Typography variant="mdbold" sx={{ mb: 1, mt: 4 }}>
            Enter Password
          </Typography>
          <FormControl sx={{ width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Enter Password
            </InputLabel>
            <OutlinedInput
              sx={{ width: '340px', height: '56px', borderRadius: '8px' }}
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
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
              label="Enter Password"
            />
          </FormControl>
        </Box>
        <Box>
          <Box
            sx={{
              mt: '26px',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginLeft: '4px',
              justifyContent: 'center',
              minWidth: '340px',
            }}
          >
            <MyButton
              variant="contained"
              type="submit"
              color="primary"
              onClick={() => {
                navigate('/wallet');
              }}
            >
              Login
            </MyButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
