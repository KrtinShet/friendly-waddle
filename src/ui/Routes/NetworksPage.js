import React from 'react';
import Box from '@mui/system/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NetworkItem = (props) => {
  const navigate = useNavigate();
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
      children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
    };
  }

  return (
    <Box
      sx={{
        pt: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Box>
        <Avatar {...stringAvatar(network.name)} />
      </Box>
      <Box flexGrow={1} sx={{ ml: '20px' }}>
        <Typography variant="tmdReg">Ethereum</Typography>
      </Box>
      <Box
        onClick={() => {
          // navigate(`/editNetwork/${network.chainId}`);
        }}
      >
        <MoreVertIcon
          sx={{
            fontSize: '1.625rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
};

const NetworksPage = () => {
  const navigate = useNavigate();
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
            Networks<span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>

      {/* single network detail cards */}

      <Box sx={{ maxHeight: '500px', overflow: 'auto', mt: '1rem' }}>
        {/* {_networks.map((network) => {
          return <NetworkItem key={network} network={network} />;
        })} */}
      </Box>
    </Container>
  );
};

export default NetworksPage;
