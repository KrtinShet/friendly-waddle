import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

const ImportWalletPage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "9.6vh",
        }}
      >
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
              variant="dssReg"
              sx={{ fontWeight: "fontWeightSemiBold" }}
            >
              Use an existing wallet
            </Typography>
          </Box>
          <Typography variant="tsmReg" sx={{ width: "80%", mt: 2 }}>
            Select how you would like to access your existing wallet
          </Typography>
        </Box>

        <ButtonBase
          sx={{
            border: "1px solid #2382F7",
            borderRadius: "14px",
            padding: "1rem 1.25rem",
            backgroundColor: "background.paper",
            mt: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
            onClick={() => {
              navigate("/enterRecovery", { replace: true });
            }}
          >
            <Typography variant="tmdBd" align="left" sx={{}}>
              Enter Recovery Phrase
            </Typography>
            <Typography
              variant="tsmReg"
              align="left"
              sx={{
                mt: 1,
              }}
            >
              use your 12 words recovery phrase
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Container>
  );
};

export default ImportWalletPage;
