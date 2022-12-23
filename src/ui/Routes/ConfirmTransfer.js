import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import MyButton from './../Components/MyButton';
import { useDispatch, useSelector } from 'react-redux';

const ConfirmTransfer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /**
   * data to be sent to initiate transfer
   */

  return (
    <Container>
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
            variant="boldss"
            sx={{ fontWeight: 'fontWeightSemiBold' }}
          >
            Transfer<span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: '20px', color: 'primary.main' }}>
        <Typography
          align="center"
          sx={{ color: 'primary' }}
          variant="display_lg_semibold"
          noWrap
        >
          {Number(_tempTransaction.value).toPrecision(5)} {assetName}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center', mt: '5px' }}>
        <Typography variant="text_xl_medium" noWrap>
          $100
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10px' }}>
          <Typography variant="text_lg_medium">Transferring from :</Typography>
          <Typography noWrap variant="text_md_regular">
            alex
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10px' }}>
          <Typography variant="text_lg_medium">Transferring to :</Typography>
          <Typography noWrap variant="text_md_regular">
            BOB
          </Typography>
        </Box>
      </Box>
      {/* Gas fee estimation */}
      <Box sx={{ display: 'flex', mt: '25px' }}>
        <Box flexGrow={1}>
          <Typography variant="text_lg_medium">Network Fee:</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="text_md_medium">10 matic</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant="t_sm_medium">$100</Typography>
      </Box>

      <Box sx={{ display: 'flex', mt: '15px' }}>
        <Box flexGrow={1}>
          <Typography variant="text_lg_medium">Total:</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="text_xl_medium">120 Matic</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant="t_sm_medium">$115</Typography>
      </Box>
      {/* button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '15px' }}>
        <MyButton
          variant="contained"
          disabled={_tempTransaction.loading}
          onClick={() => {
            navigate('/completedTransfer');
          }}
        >
          Initiate Transfer
        </MyButton>
      </Box>
    </Container>
  );
};

export default ConfirmTransfer;
