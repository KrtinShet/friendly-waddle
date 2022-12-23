import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CreateNewAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accountName, setAccountName] = useState(`Account 0`);
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
          <Typography
            variant="dssReg"
            sx={{ fontWeight: 'fontWeightSemiBold' }}
          >
            Create account
            <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
        <Box sx={{ mt: '15px', ml: 'px' }}>
          <Typography variant="txlMed">Account Name</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > :not(style)': { mt: '1px' },
            mt: '15px',
            width: '33ch',
          }}
        >
          <TextField
            sx={{ ml: '2px', width: '100' }}
            fullWidth
            id="outlined-basic"
            label={`Account 0`}
            variant="outlined"
            value={accountName}
            onChange={(e) => {
              setAccountName(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{ mt: '30px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            sx={{ width: '45%', borderRadius: '8px', height: '50px' }}
            variant="outlined"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{ width: '45%', borderRadius: '8px', height: '50px' }}
            variant="contained"
            onClick={() => {
              navigate(-1);
            }}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateNewAccount;
