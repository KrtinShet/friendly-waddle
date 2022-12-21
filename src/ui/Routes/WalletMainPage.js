import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleIcon from "@mui/icons-material/People";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import WalletHome from "./WalletHome";
import WalletActivityPage from "./WalletActivityPage";
import PeoplePage from "./PeoplePage";

function WalletMainPage() {
  const menuName = ["asset", "activity", "people"];
  const [menu, setMenu] = React.useState(menuName[0]);
  const [value, setValue] = React.useState(0);

  // if (!isLoggedIn) {
  //   navigate("/login");
  // }
  // if (!isSignedUp) {
  //   navigate("/welcomePage");
  // }

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {menu === "asset" ? (
        <WalletHome />
      ) : menu === "activity" ? (
        <WalletActivityPage />
      ) : (
        <PeoplePage />
      )}
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{
            borderTop: "1px solid #E2E8F0",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
            setMenu(menuName[newValue]);
          }}
        >
          <BottomNavigationAction
            label="Assets"
            icon={<AccountBalanceWalletIcon />}
          />
          <BottomNavigationAction label="Activity" icon={<HistoryIcon />} />
          <BottomNavigationAction label="People" icon={<PeopleIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default WalletMainPage;
