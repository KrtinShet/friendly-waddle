import React, { useState } from "react";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import { Typography, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MyButton from "./../Components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { importMnemonic } from "./../Store/Slices/accountSlice";
import { refreshAllAssetData } from "./../Store/Slices/assetsSlice";

function EnterRecoveryPhrase() {
  const [value, setValue] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: "40px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
              variant="dssReg"
              sx={{ fontWeight: "fontWeightSemiBold" }}
            >
              Enter Recovery Phrase
              <span style={{ color: "orange", fontWeight: 600 }}>.</span>
            </Typography>
          </Box>
          <Typography variant="tsmReg" sx={{ ml: "20px", width: "80%" }}>
            use your 12 words recovery phrase
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          mt: "10px",
        }}
      >
        <Box sx={{ mt: "30px", display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Recovery Phrase."
            multiline
            value={value}
            fullWidth
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Box>
        <MyButton
          sx={{ mt: "50px" }}
          variant="contained"
          disabled={value.split(" ").length === 12 ? false : true}
          onClick={() => {
            dispatch(importMnemonic({ mnemonic: value.trim() }));
            dispatch(refreshAllAssetData(state));
            navigate("/verifyRecovery", { replace: true });
          }}
        >
          Proceed
        </MyButton>
      </Box>
    </Container>
  );
}

export default EnterRecoveryPhrase;
