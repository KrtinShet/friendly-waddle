import React from 'react';
import { ethers } from 'ethers';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AssetDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const asset = props.asset;
  let valueInUSD = 0;
  let value;

  const _activeAccount = useSelector(
    (state) => state.account.currentActiveAccount
  );
  const conversion = useSelector((state) => state.convertion.data);
  const [network, assetName] = asset.split('.');
  const _currentActiveAccount = useSelector(
    (state) => state.account.currentActiveAccount
  );
  const _currentActiveAccountAddresses = useSelector(
    (state) => state.account.accountIDs[_currentActiveAccount]
  );

  const _asset = useSelector(
    (state) => state.asset.balance[_activeAccount][network][assetName]
  );

  if (network === 'tron') {
    value = _asset.quantity / 1000000;
  } else {
    value = Number(ethers.utils.formatEther(_asset.quantity));
    value = value <= 0.0001 ? 0 : value;
  }
  valueInUSD = (value * conversion[assetName]).toFixed();

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => {
        let fromAddress;

        if (network === 'tron') {
          fromAddress = _currentActiveAccountAddresses.tron;
        } else {
          fromAddress = _currentActiveAccountAddresses.eth;
        }
        // dispatch(
        //   updateTempTransaction({
        //     key: 'assetName',
        //     value: asset,
        //   })
        // );
        // dispatch(
        //   updateTempTransaction({
        //     key: 'from',
        //     value: fromAddress,
        //   })
        // );
        // dispatch(
        //   updateTempTransaction({
        //     key: 'accountIndex',
        //     value: _currentActiveAccount - 1,
        //   })
        // );
        navigate(`/transferAmount/${asset}`);
      }}
    >
      <Box sx={{ width: '100%', mt: '10px' }}>
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <img
                height={'35px'}
                src={`/assets/logos/${asset}.svg`}
                alt={asset}
              />
            </Box>
            <Box sx={{ pl: '10px' }}>
              <Typography variant="tmdReg">{assetName}</Typography>
            </Box>
          </Box>
          {/* right part */}

          <Box sx={{ mr: '15px' }}>
            <Box>
              <Typography variant="tsmReg">$ {valueInUSD}</Typography>
            </Box>
            <Box>
              <Typography variant="tsmReg">
                {value.toPrecision(5)} {assetName}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default AssetDetails;
