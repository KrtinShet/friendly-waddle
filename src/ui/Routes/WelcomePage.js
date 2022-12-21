import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/system";
import MyButton from "./../Components/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createNewMnemonic } from "./../Store/Slices/accountSlice";
import { isLoggedIn, isSignedUp } from "../Store/Slices/authSlice";

const WelcomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _isLoggedIn = useSelector(isLoggedIn);
  const _isSignedUp = useSelector(isSignedUp);

  useEffect(() => {
    if (_isLoggedIn && _isSignedUp) {
      navigate("/wallet");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container sx={{ position: "relative", height: "100%" }}>
      <Box>
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          width="150"
          height="150"
          viewBox="0 0 147 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-13.6641 70.3753C-11.8217 96.723 11.0221 116.589 37.3567 114.748C63.6932 112.906 83.548 90.0541 81.7056 63.7064C79.8632 37.3589 57.0212 17.4928 30.6848 19.3344C4.35011 21.1759 -15.5065 44.0278 -13.6641 70.3753Z"
            stroke="#FF902A"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-70.5603 74.0541C-66.4514 132.813 -16.1875 177.166 41.7094 173.117C99.6056 169.069 143.209 118.152 139.1 59.3932C134.991 0.634231 84.7261 -43.718 26.8299 -39.6696"
            stroke="#2382F7"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          minHeight: "600px",
        }}
      >
        <Typography
          variant="dlgReg"
          sx={{
            fontWeight: "fontWeightSemiBold",
          }}
          align="center"
        >
          Chai Wallet
          <span style={{ color: "orange", fontWeight: 600 }}>.</span>
        </Typography>
        <Typography align="center" variant="tlgMed" sx={{ width: "18.5rem" }}>
          To get started create a new wallet or connect using existing wallet
        </Typography>
        <Stack
          align="center"
          spacing={2}
          sx={{
            mt: "50px",
          }}
        >
          <MyButton
            variant="contained"
            type="submit"
            color="primary"
            onClick={() => {
              dispatch(createNewMnemonic());
              navigate("/createWallet");
            }}
          >
            <p>Create a new wallet</p>
          </MyButton>
          <MyButton
            onClick={() => {
              navigate("/importWallet");
            }}
            type="submit"
            color="primary"
            variant="outlined"
          >
            I already have a wallet
          </MyButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default WelcomePage;
