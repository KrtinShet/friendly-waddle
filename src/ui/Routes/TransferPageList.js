import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AssetDetails from './../Components/AssetsDetails';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TransferPageList = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pt: '40px',
          maxHeight: '600px',
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
        <Box sx={{ ml: '10px', my: '5px' }}>
          <Typography variant="tsmReg">Choose coin to transfer</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 450,
            maxWidth: 360,
            bgcolor: 'background.paper',
            overflow: 'auto',
          }}
        >
          {/* {_networkAssets.map((networkasset) => (
            <AssetDetails key={networkasset} asset={networkasset} />
          ))} */}
        </Box>
      </Box>
    </Container>
  );
};

export default TransferPageList;
