import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SignoutButton from "../Components/SignoutButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../Store/Slices/authSlice";
import { clearAccount } from "../Store/Slices/accountSlice";

const SignOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          pt: "40px",
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
            variant="dssReg"
            sx={{ fontWeight: "fontWeightSemiBold" }}
          >
            Are you Sure
            <span style={{ color: "orange", fontWeight: 600 }}> ?</span>
          </Typography>
        </Box>
      </Box>

      {/* messages */}
      <Box sx={{ mt: "25px" }}>
        <Typography variant="tsmReg">
          After you sign out , you will need to enter your 12 digit word
          recovery phrase again.
        </Typography>
      </Box>

      <Box sx={{ mt: "15px" }}>
        <Typography variant="tsmReg">
          You can also sign out and create a new wallet or import and existing
          wallet.
        </Typography>
      </Box>
      <Box sx={{ mt: "15px" }}>
        <Typography variant="tsmReg">
          Do not sign out if you dont know your recovery phrase.
        </Typography>
      </Box>
      {/* button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: "45px" }}>
        <SignoutButton
          onClick={() => {
            dispatch(signout());
            dispatch(clearAccount());
            navigate("/welcomePage");
          }}
        >
          <Typography sx={{ color: "#FF545E" }}>Sign Out</Typography>
        </SignoutButton>
      </Box>
    </Container>
  );
};

export default SignOutPage;
