import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Container from '@mui/system/Container';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { signup } from './../../app/Store/Slice/AuthSlice';

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [hasConfirmPasswordError, setHasConfirmPasswordError] = useState(false);
  const [canNavigate, setCanNavigate] = useState(false);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    let password = values.password;
    let confirmPassword = values.confirmPassword;

    if (
      values.confirmPassword.length > 0 &&
      values.password.length > 0 &&
      !hasPasswordError &&
      !hasConfirmPasswordError
    )
      setCanNavigate(true);
    else setCanNavigate(false);

    if (isValidPassword(password) && isValidPassword(confirmPassword)) {
      if (password.length === confirmPassword.length) {
        setHasConfirmPasswordError(false);
        setHasPasswordError(false);
        setCanNavigate(true);
      } else {
        setCanNavigate(false);
      }
    } else {
      if (values.password.length !== 0) setHasPasswordError(true);
      else setHasPasswordError(false);

      if (values.confirmPassword.length !== 0) setHasConfirmPasswordError(true);
      else setHasConfirmPasswordError(false);
      setCanNavigate(false);
    }
    // eslint-disable-next-line
  }, [values.password, values.confirmPassword]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const isValidPassword = (input) => {
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(input);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pt: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            mt: '40px',
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
              sx={{
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              Create password
              <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
            </Typography>
          </Box>
        </Box>
        <Typography variant="tsmReg" sx={{ mt: 1 }}>
          Set a password to unlock your wallet each time you this wallet in a
          new fashion. It can't be used to recover your wallet.
        </Typography>

        {/**  password  */}
        <Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="tlgBd" sx={{ mb: 1 }}>
            Password
          </Typography>
          {/* // set error here down */}
          <FormControl
            sx={{ width: '25ch' }}
            variant="outlined"
            error={hasPasswordError}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
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
              label="Password"
            />
          </FormControl>
          <Typography variant="caption" sx={{ mt: 1 }}>
            At least 8 characters, with at least - 1 number , special character
            and Uppercase letter
          </Typography>
        </Box>

        {/** Confirm password */}
        <Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="tlgBd" sx={{ mb: 1 }}>
            Confirm Password
          </Typography>
          {/* // set error here down */}
          <FormControl
            sx={{ width: '25ch' }}
            variant="outlined"
            error={hasConfirmPasswordError}
          >
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              sx={{
                width: '340px',
                height: '56px',
                borderRadius: '8px',
              }}
              id="outlined-adornment-confirm-password"
              type={values.showConfirmPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
        </Box>
      </Box>
      <Box
        my="40px"
        sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <Button
          sx={{ width: '100%', borderRadius: '15px', height: '57px' }}
          variant="contained"
          disabled={!canNavigate}
          onClick={() => {
            if (canNavigate) {
              dispatch(signup({ password: values.password }));
              navigate('/wallet', { replace: true });
            }
          }}
        >
          <Typography variant="">Confirm</Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default SignupPage;
