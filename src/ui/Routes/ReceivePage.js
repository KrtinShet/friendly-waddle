import React from 'react';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';

const AccountItem = (props) => {
  const _accountId = props.accountId;
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  border: '2px solid #2382F7',
  borderRadius: '12px',
  color: theme.palette.secondary,
  boxShadow: 'none',
  display: 'flex',
}));

const ReceivePage = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState(1);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
            Receive<span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: '10px' }}>
        <Typography variant="tsmReg" color="primary.main">
          Address
        </Typography>
      </Box>

      {/* profiles */}

      <Box sx={{ maxHeight: '180px', overflow: 'auto', mt: '1rem' }}>
        {/* {_accounts.map((accountId) => (
          <AccountItem
            key={accountId}
            selectedValue={selectedValue}
            handleChange={handleChange}
            accountId={accountId}
          />
        ))} */}
      </Box>

      {/* cards */}

      <Box sx={{ mt: '30px' }}>
        <Item sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              displayL: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', m: 0.5 }}>
              <Typography color="primary" variant="tsmReg">
                Your EVM Address
              </Typography>
              <InfoIcon color="primary" sx={{ paddingLeft: '2px' }} />
            </Box>
            <Box>
              <Box
                sx={{
                  mt: '10px',
                  width: '270px',
                }}
              >
                <Typography noWrap>some eth address</Typography>
              </Box>
            </Box>
          </Box>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText('some eth address');
            }}
          >
            <ContentCopyIcon color="primary" fontSize="large" />
          </IconButton>
        </Item>
      </Box>
      <Box sx={{ mt: '10px' }}>
        <Item sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              displayL: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', m: 0.5 }}>
              <Typography color="primary" variant="tsmReg">
                Your Tron Address
              </Typography>
              <InfoIcon color="primary" sx={{ paddingLeft: '2px' }} />
            </Box>
            <Box>
              <Box
                sx={{
                  mt: '10px',
                  width: '270px',
                }}
              >
                <Typography noWrap>{'some tron addresses'}</Typography>
              </Box>
            </Box>
          </Box>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText('some tron addresses');
            }}
          >
            <ContentCopyIcon color="primary" fontSize="large" />
          </IconButton>
        </Item>
      </Box>

      {/* 2 card */}
    </Container>
  );
};

export default ReceivePage;
