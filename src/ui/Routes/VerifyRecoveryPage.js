import React, { useEffect, useState } from 'react';
import Box from '@mui/system/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';

import MyButton from '../Components/MyButton';
import MyTooltip from '../Components/MyTooltip';

const VerifyRecoveryPage = () => {
  const [_mnemonic, _setMnemonic] = useState(
    'kite medal water surround spring sadness slot slam believe round random delay'
  );
  const mnemonic = _mnemonic.split(' ');
  const [jumbledMnemonic, setJumbledMnemonic] = useState([]);

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const tooltip = ['first', 'second', null];
  const [toolTipName1, setToolTipName1] = useState(tooltip[0]);
  const [toolTipName2, setToolTipName2] = useState(tooltip[1]);
  const navigate = useNavigate();

  useEffect(() => {
    setJumbledMnemonic(fyShuffle(mnemonic));
    // eslint-disable-next-line
  }, []);

  function fyShuffle(arr) {
    let _newArr = [...arr];
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [_newArr[randIndex], _newArr[i]] = [_newArr[i], _newArr[randIndex]];
    }
    return _newArr;
  }

  const toolTipHandler = (a) => {
    if (number1 === null && number2 === null) {
      setNumber1(a);
      setToolTipName1(tooltip[0]);
    } else if (number1 === a) {
      setNumber1(null);
    } else if (number2 === null) {
      setNumber2(a);
      setToolTipName2(tooltip[1]);
    } else if (number2 === a) {
      setNumber2(null);
    } else {
      setNumber2(null);
      setNumber1(null);
    }
  };
  const Seedphrase = (props) => {
    const tooltipnamefunc = (b) => {
      if (b === number1) {
        return toolTipName1;
      }
      if (b === number2) {
        return toolTipName2;
      }
    };
    return (
      <MyTooltip
        open={
          props.keyValue === number1 || props.keyValue === number2
            ? true
            : false
        }
        title={tooltipnamefunc(props.keyValue)}
        placement="top"
      >
        <Button
          // variant="outlined"
          variant={
            props.keyValue === number1 || props.keyValue === number2
              ? 'contained'
              : 'outlined'
          }
          sx={{
            width: '100px',
            height: '41.25px',
            borderRadius: '41.25px',
          }}
          onClick={() => {
            toolTipHandler(props.keyValue);
          }}
        >
          <Typography variant="tsmReg">{props.content}</Typography>
        </Button>
      </MyTooltip>
    );
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '9.6vh',
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
              mb: 2,
            }}
          >
            <ChevronLeftIcon
              sx={{
                fontSize: '1.625rem',
                fontWeight: 700,
                cursor: 'pointer',
                mr: 1,
              }}
              onClick={() => {
                navigate(-1);
              }}
            />
            <Typography
              variant="dssReg"
              sx={{ fontWeight: 'fontWeightSemiBold' }}
            >
              Verify to save it right
            </Typography>
          </Box>
          <Typography variant="tsmReg">
            Verify that you saved your secret recovery phrase by clicking on the
            first (1st) then last (12th) word.
          </Typography>
        </Box>

        {/* Mnemoics */}
        <Box
          sx={{
            display: 'grid',
            columnGap: 2,
            rowGap: 3,
            gridTemplateColumns: 'repeat(3, 1fr)',
            mt: '61px',
            position: 'relative',
          }}
        >
          {jumbledMnemonic.map((content, i) => {
            return <Seedphrase key={i} keyValue={i} content={content} />;
          })}
        </Box>

        {/* programatic navigation to `/signup` when the user checks the first and the last word */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '70.75px',
          }}
        >
          <MyButton
            variant="contained"
            onClick={() => {
              if (number1 != null && number2 != null) {
                navigate('/signup', { replace: true });
              }
            }}
            // disabled={number1 != null && number2 != null ? false : true}
            disabled={number1 != null && number2 != null ? false : true}
          >
            Submit
          </MyButton>
        </Box>
      </Box>
    </Container>
  );
};

export default VerifyRecoveryPage;
