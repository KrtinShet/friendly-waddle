import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import MyButton from '../Components/MyButton';
import ButtonBase from '@mui/material/ButtonBase';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatingWalletPage = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { mnemonic } = useSelector((state) => state.account);

  const handleClick = () => {
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };
  const onAgreedHandler = () => {
    setAgreed(!agreed);
  };

  const Seedphrase = (props) => {
    return (
      <Button
        // variant="outlined"
        variant="outlined"
        sx={{
          margin: '5px',
          width: '100px',
          height: '41.25px',
          borderRadius: '41.25px',
        }}
      >
        <Typography variant="tsmReg">{props.content}</Typography>
      </Button>
    );
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pt: '5px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            mt: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
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
          {mnemonic.split(' ').map((content, i) => {
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
          mt: '10px',
          cursor: 'pointer',
        }}
      >
        <ButtonBase sx={{ px: 1.2, py: 1, borderRadius: 3 }}>
          <ContentCopyIcon
            sx={{
              fontSize: '1.625rem',
              fontWeight: 700,
            }}
            onClick={async () => {
              await navigator.clipboard.writeText(mnemonic);
              handleClick();
            }}
          />
          <Typography variant="xsmedium">Copy</Typography>
        </ButtonBase>
      </Box>

      <Box
        sx={{
          pt: '25px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={onAgreedHandler} />} />
        </FormGroup>
        <Typography variant="tsmReg">
          I understand that I stand the risk of loosing my funds by exposing or
          by loosing the seed phrase
        </Typography>
      </Box>
      <Box sx={{ pt: '15px', display: 'flex', justifyContent: 'center' }}>
        <MyButton
          variant="contained"
          type="submit"
          onClick={() => {
            if (agreed) {
              navigate('/verifyRecovery', { replace: true });
            }
          }}
          disabled={!agreed ? true : false}
        >
          Proceed
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
            seed phrase copied to clipboard!
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default CreatingWalletPage;
