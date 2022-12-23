import React from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Secutity_privacyPage = () => {
  const navigate = useNavigate();
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
            Security and privacy
            <span style={{ color: "orange", fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>

      {/* sub menus */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "20px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/showRecovery", { replace: true })}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Show recovery phrase</Typography>
        </Box>
        <NavigateNextIcon
          sx={{ fontSize: "1.625rem", fontWeight: 700, cursor: "pointer" }}
        />
      </Box>
      {/* 2  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "20px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/changePassword")}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="tmdReg">Change password</Typography>
        </Box>
        <NavigateNextIcon
          sx={{ fontSize: "1.625rem", fontWeight: 700, cursor: "pointer" }}
        />
      </Box>
    </Container>
  );
};

export default Secutity_privacyPage;
