import React, { useState } from "react";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import { Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateTempTransaction,
  clearTempTransaction,
} from "../Store/Slices/transactionSlice";

const TransferPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toAddress, setToAddress] = useState("");
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          pt: "40px",
          maxHeight: "600px",
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
              dispatch(clearTempTransaction());
              navigate(-1);
            }}
          />
          <Typography
            variant="dssReg"
            sx={{ fontWeight: "fontWeightSemiBold" }}
          >
            Transfer<span style={{ color: "orange", fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
        <Box sx={{ ml: "10px", my: "5px" }}>
          <Typography variant="tmdReg">Enter wallet address</Typography>
        </Box>

        {/* TextField 
        
        */}
        <Box
          sx={{
            minHeight: "100%",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "& > :not(style)": { mt: "1px" },
                mt: "15px",
                width: "100%",
              }}
            >
              <TextField
                sx={{ ml: "2px", width: "100%", height: "59px" }}
                fullWidth
                id="outlined-basic"
                label="Enter wallet address"
                variant="outlined"
                onChange={(e) => {
                  setToAddress(e.target.value);
                }}
                value={toAddress}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "30px",
              }}
            >
              <Button
                sx={{ width: "100%", height: "59px", borderRadius: "15px" }}
                variant="contained"
                onClick={() => {
                  dispatch(
                    updateTempTransaction({
                      key: "to",
                      value: toAddress,
                    })
                  );
                  navigate("/wallet/transfer/list");
                }}
              >
                Proceed
              </Button>
            </Box>
          </Box>
        </Box>

        {/* warning info message  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <WarningAmberIcon
              sx={{
                fontSize: "1.625rem",
                fontWeight: 700,
              }}
            />
          </Box>

          <Box sx={{ display: "flex", ml: "10px", mt: "10px" }}>
            <Typography variant="tsmReg">
              <span style={{ weight: "500" }}>Warning:</span> you are about to
              send the token to an adderss which might not possibly support the
              chain which might result in loss of funds.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TransferPage;
