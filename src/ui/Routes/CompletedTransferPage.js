import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import MyButton from "./../Components/MyButton";
import { useNavigate } from "react-router-dom";

const CompletedTransferPage = () => {
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
        <Typography variant="dssReg" sx={{ fontWeight: "fontWeightSemiBold" }}>
          Confirm Transfer
          <span style={{ color: "orange", fontWeight: 600 }}>.</span>
        </Typography>
      </Box>

      {/* svg */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
        <svg
          width="230"
          height="229"
          viewBox="0 0 230 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="115"
            cy="114.5"
            r="114.5"
            fill="url(#paint0_radial_398_5934)"
          />
          <circle cx="115" cy="113.782" r="57.7884" fill="#2382F7" />
          <rect
            x="81.6157"
            y="114.217"
            width="14.0653"
            height="36.1434"
            transform="rotate(-45 81.6157 114.217)"
            fill="#1749C6"
          />
          <rect
            x="137.63"
            y="89.0156"
            width="14.3574"
            height="57.4295"
            transform="rotate(45 137.63 89.0156)"
            fill="#EDF7FF"
          />
          <rect
            x="106.975"
            y="119.681"
            width="14.3458"
            height="14.0709"
            transform="rotate(45 106.975 119.681)"
            fill="#FF8812"
          />
          <circle
            cx="115"
            cy="114.5"
            r="86.221"
            stroke="#2382F7"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <defs>
            <radialGradient
              id="paint0_radial_398_5934"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(115 114.5) rotate(90) scale(114.5)"
            >
              <stop stopColor="#CFD5DE" />
              <stop offset="0.104167" stopColor="#C1C9D9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </Box>

      {/* buttons */}
      {/* <Box sx={{ display: "flex", justifyContent: "center", mt: "25px" }}>
        <MyButton
          variant="outlined"
          onClick={() => {
            navigate("/wallet");
          }}
        >
          View Transactions
        </MyButton>
      </Box> */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
        <MyButton
          variant="contained"
          onClick={() => {
            navigate("/wallet");
          }}
        >
          Done
        </MyButton>
      </Box>
    </Container>
  );
};

export default CompletedTransferPage;
