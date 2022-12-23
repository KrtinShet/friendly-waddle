import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Radio from '@mui/material/Radio';
import LaunchIcon from '@mui/icons-material/Launch';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React from 'react';
import SignoutButton from '../Components/SignoutButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AccountItem = (props) => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '20px' }}>
      <Box>
        <Avatar {...stringAvatar(`Account ${_accountId}`)} />
      </Box>
      <Box sx={{ ml: '15px', flexGrow: 1 }}>
        <Typography variant="display_xs_medium">
          {`Account ${_accountId}`}
        </Typography>
      </Box>
      <Box>
        <Radio
          checked={parseInt(props.selectedValue) === parseInt(_accountId)}
          onChange={props.handleChange}
          value={_accountId}
          name={`Account ${_accountId}`}
        />
      </Box>
    </Box>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState(_activeAccount);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          pt: '40px',
          mb: '10px',
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
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
            My Account
            <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
          <AddIcon
            sx={{
              fontSize: '2rem',
              fontWeight: 700,
              cursor: 'pointer',
              color: 'gray',
            }}
            onClick={() => {
              navigate('/newAccount');
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              navigate('/login');
            }}
          >
            <Typography variant="tmdReg">Lock</Typography>
          </Button>
        </Box>
      </Box>

      <Container
        style={{
          maxHeight: '150px',
          overflow: 'auto',
          width: '100%',
        }}
      >
        <List>
          {/* {_accounts.map((accountId) => (
            <AccountItem
              key={accountId}
              selectedValue={selectedValue}
              handleChange={handleChange}
              accountId={accountId}
            />
          ))} */}
        </List>
      </Container>

      {/* options */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
          mt: '15px',
        }}
        onClick={() => {
          navigate('/profile/networkPage');
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Networks</Typography>
        </Box>
        <NavigateNextIcon
          sx={{ fontSize: '1.625rem', fontWeight: 700, cursor: 'pointer' }}
        />
      </Box>

      {/* 2 option */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: '15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate('/profile/security');
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Security and Privacy</Typography>
        </Box>
        <NavigateNextIcon
          sx={{ fontSize: '1.625rem', fontWeight: 700, cursor: 'pointer' }}
        />
      </Box>
      <Box sx={{ mt: '15px' }}>
        <Typography
          variant="tmdReg"
          sx={{
            fontWeight: 'fontWeightSemiBold',
          }}
        >
          About
        </Typography>
      </Box>
      {/* 
      terms section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: '15px',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Terms of Service</Typography>
        </Box>
        <LaunchIcon
          sx={{ fontSize: '1.625rem', fontWeight: 700, cursor: 'pointer' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: '15px',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Version</Typography>
        </Box>
        <Typography>0.1</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}
        onClick={() => {
          navigate('/signout');
        }}
      >
        <SignoutButton variant="contained" type="submit" color="primary">
          <Typography sx={{ color: '#FF545E' }}>SignOut</Typography>
        </SignoutButton>
      </Box>
    </Container>
  );
};

export default ProfilePage;
