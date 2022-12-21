import React, { useState } from "react";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import { ButtonBase, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { deepOrange } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { ethers } from "ethers";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: "12px",
  color: theme.palette.secondary,
  boxShadow: "none",
  display: "flex",
}));

const AssetDeet = ({ asset, currentActiveAccount, currency }) => {
  const parsedAsset = {
    quantity: 0,
    valueInUSD: 0,
    valueInINR: 0,
  };
  const [network, assetName] = asset.split(".");

  const _asset = useSelector(
    (state) => state.asset.balance[currentActiveAccount][network][assetName]
  );

  const convertion = useSelector((state) => state.convertion.data);

  if (_asset) {
    if (network === "tron") {
      const value = _asset.quantity / 1000000;
      parsedAsset.quantity = value;
      parsedAsset.valueInUSD = (value * convertion[assetName]).toFixed();
      parsedAsset.valueInINR = (parsedAsset.valueInUSD * convertion.inr)
        .toFixed()
        .toString();
    } else {
      const value = Number(ethers.utils.formatEther(_asset.quantity));
      parsedAsset.quantity = value <= 0.0001 ? 0 : value;
      parsedAsset.valueInUSD = (value * convertion[assetName]).toFixed();
      parsedAsset.valueInINR = (parsedAsset.valueInUSD * convertion.inr)
        .toFixed()
        .toString();
    }
  }
  return (
    <>
      <Item
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Item>
            <img
              height={"35px"}
              src={`/assets/logos/${asset}.svg`}
              alt={asset}
            />
          </Item>
          <Item sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="tmdMed">{assetName}</Typography>
          </Item>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Typography variant="tsmSmbd">
            {currency === "USD"
              ? `$${Number(parsedAsset.valueInUSD) || 0}`
              : `₹${Number(parsedAsset.valueInINR) || 0}`}
          </Typography>

          <Typography variant="tsmSmbd">
            {`${parsedAsset.quantity.toPrecision(5)} ${assetName}`}
          </Typography>
        </Box>
      </Item>
    </>
  );
};

const PortfolioCard = ({ currency, setCurrency }) => {
  let _USDQUANTITY = 0;
  let _INRQUANTITY = 0;
  const convertion = useSelector((state) => state.convertion.data);
  const _currentActiveAccount = useSelector(
    (state) => state.account.currentActiveAccount
  );
  const _assets = useSelector(
    (state) => state.asset.balance[_currentActiveAccount].networkAssets
  );
  const _assetsBalance = useSelector(
    (state) => state.asset.balance[_currentActiveAccount]
  );

  if (_assets && convertion !== null) {
    for (let i in _assets) {
      let tempUSDValue = 0;
      let value = 0;
      let _assetIndex = _assets[i];
      const [network, assetName] = _assetIndex.split(".");
      const _asset = _assetsBalance[network][assetName];
      if (network === "tron") {
        value = _asset.quantity / 1000000;
      } else {
        value = Number(ethers.utils.formatEther(_asset.quantity));
      }
      tempUSDValue = (value * convertion[assetName]).toFixed();
      _USDQUANTITY += Number(tempUSDValue) || 0;
    }
    _INRQUANTITY = Number((_USDQUANTITY * convertion.inr).toFixed()) || 0;
  }

  return (
    <Item
      sx={{
        display: "flex",
        border: "1.5px solid #2382F7",
        mt: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="tmdMed" color="primary">
            Total wallet balance
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="dssReg" color="primary">
              {currency === "USD" ? `$ ${_USDQUANTITY}` : `₹ ${_INRQUANTITY}`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ minWidth: 30, minHeight: "15px" }}>
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                }}
                value={currency}
                onChange={(event) => {
                  setCurrency(event.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Item>
  );
};

const WalletHome = () => {
  let _assets;
  const navigate = useNavigate();
  const _currentActiveAccount = useSelector(
    (state) => state.account.currentActiveAccount
  );
  _assets = useSelector(
    (state) => state.asset.balance[_currentActiveAccount].networkAssets
  );

  const [currency, setCurrency] = useState("USD");

  return (
    <Container
      sx={{ px: "25px", pt: "25px", position: "relative", height: "600px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="dssReg"
            sx={{
              fontWeight: "fontWeightSemiBold",
            }}
          >
            Chai Wallet
            <span style={{ color: "orange", fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ButtonBase sx={{ borderRadius: "50%" }}>
            <Avatar
              sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}
              onClick={() => {
                navigate("/profilePage");
              }}
            />
          </ButtonBase>
        </Box>
      </Box>
      <PortfolioCard currency={currency} setCurrency={setCurrency} />
      {/* wallet buttons buy sell p2p */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          "& > :not(style)": { m: 0.2 },
          mt: "5px",
        }}
      >
        {/* p2p */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
            m: 1,
          }}
        >
          <Link to="/wallet/buy">
            <Fab
              color="primary"
              aria-label="add"
              sx={{ boxShadow: "none", width: "45px", height: "45px" }}
            >
              <AddIcon />
            </Fab>
          </Link>
          <Typography variant="tmdMed">Buy</Typography>
        </Box>
        {/* receive */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
            m: 1,
          }}
        >
          <Link to="/wallet/recieve">
            <Fab
              color="primary"
              aria-label="add"
              sx={{ boxShadow: "none", width: "45px", height: "45px" }}
            >
              <ArrowDownwardIcon />
            </Fab>
          </Link>
          <Typography variant="tmdMed">Receive</Typography>
        </Box>
        {/* transfer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            m: 1,
            alignItems: "center",
          }}
        >
          <Link to="/wallet/transfer">
            <Fab
              color="primary"
              aria-label="add"
              sx={{ boxShadow: "none", width: "45px", height: "45px" }}
            >
              <ArrowUpwardIcon />
            </Fab>
          </Link>
          <Typography variant="tmdMed">Transfer</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            m: 1,
            alignItems: "center",
          }}
        >
          <Fab
            color="primary"
            aria-label="add"
            sx={{ boxShadow: "none", width: "45px", height: "45px" }}
          >
            <MultipleStopIcon
              onClick={() => {
                navigate("/p2p");
              }}
            />
          </Fab>
          <Typography variant="tmdMed">P2P</Typography>
        </Box>
      </Box>
      {/* assets */}
      <List style={{ maxHeight: "280px", overflow: "auto", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {_assets.map((asset) => {
            return (
              <AssetDeet
                asset={asset}
                key={asset}
                currentActiveAccount={_currentActiveAccount}
                currency={currency}
              />
            );
          })}
        </Box>
      </List>
    </Container>
  );
};

export default WalletHome;
