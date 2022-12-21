import React from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import MyButton from "./../Components/MyButton";
import { initiateTransfer } from "../Store/Slices/transactionSlice";
import { useDispatch, useSelector } from "react-redux";

const ConfirmTransfer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _tempTransaction = useSelector(
    (state) => state.transaction.tempTransaction
  );
  const _conversion = useSelector((state) => state.convertion.data);

  const [network, assetName] = _tempTransaction.assetName.split(".");
  /**
   * data to be sent to initiate transfer
   */
  const _networkDetails = useSelector((state) => state.network[network]);
  const _currentActiveAccount = useSelector(
    (state) => state.account.currentActiveAccount
  );
  const _mnemonic = useSelector((state) => state.account.mnemonic);
  const _assetDetails = useSelector(
    (state) => state.asset.balance[_currentActiveAccount][network][assetName]
  );
  const _password = useSelector((state) => state.auth.password);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          mt: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon
            sx={{
              fontSize: "1.625rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(-1);
            }}
          />
          <Typography
            variant="boldss"
            sx={{ fontWeight: "fontWeightSemiBold" }}
          >
            Transfer<span style={{ color: "orange", fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: "20px", color: "primary.main" }}>
        <Typography
          align="center"
          sx={{ color: "primary" }}
          variant="display_lg_semibold"
          noWrap
        >
          {Number(_tempTransaction.value).toPrecision(5)} {assetName}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "5px" }}>
        <Typography variant="text_xl_medium" noWrap>
          ${" "}
          {Number(_tempTransaction.value).toPrecision(5) *
            _conversion[assetName]}
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: "10px" }}>
          <Typography variant="text_lg_medium">Transferring from :</Typography>
          <Typography noWrap variant="text_md_regular">
            {_tempTransaction.from}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: "10px" }}>
          <Typography variant="text_lg_medium">Transferring to :</Typography>
          <Typography noWrap variant="text_md_regular">
            {_tempTransaction.to}
          </Typography>
        </Box>
      </Box>
      {/* Gas fee estimation */}
      <Box sx={{ display: "flex", mt: "25px" }}>
        <Box flexGrow={1}>
          <Typography variant="text_lg_medium">Network Fee:</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {!_tempTransaction.loading && (
            <Typography variant="text_md_medium">
              {_tempTransaction.networkFee} {assetName}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {!_tempTransaction.loading && (
          <Typography variant="t_sm_medium">
            $
            {(
              _conversion[assetName] * Number(_tempTransaction.networkFee)
            ).toPrecision(5)}
          </Typography>
        )}
      </Box>
      {/* total cost */}
      <Box sx={{ display: "flex", mt: "15px" }}>
        <Box flexGrow={1}>
          <Typography variant="text_lg_medium">Total:</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {!_tempTransaction.loading && (
            <Typography variant="text_xl_medium">
              {(
                Number(_tempTransaction.networkFee) +
                Number(_tempTransaction.value)
              ).toPrecision(8)}{" "}
              {assetName}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {!_tempTransaction.loading && (
          <Typography variant="t_sm_medium">
            $
            {(
              _conversion[assetName] *
              (Number(_tempTransaction.networkFee) +
                Number(_tempTransaction.value))
            ).toPrecision(5)}
          </Typography>
        )}
      </Box>
      {/* button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
        <MyButton
          variant="contained"
          disabled={_tempTransaction.loading}
          onClick={() => {
            dispatch(
              initiateTransfer({
                networkName: network,
                network: _networkDetails,
                tempTransaction: _tempTransaction,
                mnemonic: _mnemonic,
                assetDetails: _assetDetails,
                password: _password,
              })
            );
            navigate("/completedTransfer");
          }}
        >
          Initiate Transfer
        </MyButton>
      </Box>
    </Container>
  );
};

export default ConfirmTransfer;
