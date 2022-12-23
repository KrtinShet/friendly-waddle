import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ButtonBase from '@mui/material/ButtonBase';
import MyButton from '../Components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Seedphrase = (props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        margin: '5px',
        width: '100px',
        height: '41.25px',
        borderRadius: '41.25px',
      }}
    >
      {props.content}
    </Button>
  );
};

const SaveRecoveryPhaseExtended = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const _mnemonic =
    'kite medal water surround spring sadness slot slam believe round random delay';
  let contents = _mnemonic.split(' ');

  const handleClick = () => {
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
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
            flexDirection: 'column',
            justifyContent: 'flex-start',
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
                dispatch(encryptMnemonic({ password: _passwd }));
                navigate(-2);
              }}
            />

            <Typography
              variant="dssReg"
              sx={{
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              Save recovery Phrase
              <span style={{ color: 'orange', fontWeight: 600 }}>.</span>
            </Typography>
          </Box>
        </Box>
        <Typography variant="tsmReg">
          Copy or save these 12 words in series to a place where you will never
          lose it , or write it down and store in a secure place .
        </Typography>

        <Box sx={{ flexGrow: 1, mt: 3 }}>
          {contents.map((content, i) => {
            return (
              <Seedphrase
                key={i}
                keyValue={i}
                content={content}
                title="Fhisttt"
              />
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '30px',
          cursor: 'pointer',
        }}
      >
        <ButtonBase
          sx={{ px: 1.2, py: 1, borderRadius: 3 }}
          onClick={() => {
            navigator.clipboard.writeText(_mnemonic);
          }}
        >
          <ContentCopyIcon
            sx={{
              fontSize: '1.625rem',
              fontWeight: 700,
            }}
            onClick={() => {
              navigator.clipboard.writeText(_mnemonic);
              handleClick();
            }}
          />
          <Typography variant="xsmedium">Copy</Typography>
        </ButtonBase>
      </Box>

      <Box sx={{ pt: '40px', display: 'flex', justifyContent: 'center' }}>
        <MyButton
          variant="contained"
          type="submit"
          onClick={() => {
            navigate('/wallet');
          }}
        >
          Done
        </MyButton>
      </Box>
      {snackbarOpen && (
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Recovery Phrase Copied!
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default SaveRecoveryPhaseExtended;
