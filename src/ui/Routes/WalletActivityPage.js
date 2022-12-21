import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { List, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: "12px",
  color: theme.palette.secondary,
  boxShadow: "none",
  display: "flex",
}));

const TransactionsSnippet = ({ transaction }) => {
  const _transaction = useSelector(
    (state) => state.transaction.transactions[transaction]
  );
  const _convertion = useSelector((state) => state.convertion.data);
  // eslint-disable-next-line
  const [network, assetName] = _transaction.assetName.split(".");
  return (
    <a href={_transaction.url} target={"_blank"} rel={"noopener noreferrer"}>
      <Item sx={{ marginBottom: "5px" }}>
        <Box>
          <img src="/assets/logos/transactionsent.svg" alt="logo" />
          {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{transaction.avatar}</Avatar> */}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: "20px" }}>
          <Typography variant="tsmMed" width="120px" noWrap>
            {_transaction.to}
          </Typography>
          <Typography variant="tsmMed">{`Sent ${assetName.toUpperCase()} `}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: "20px" }}>
          <Typography variant="tsmMed">{`$ ${(
            _convertion["matic"] * _transaction.value
          ).toFixed(5)}`}</Typography>
          <Typography variant="tsmMed">{`${Number(_transaction.value).toFixed(
            5
          )} ${assetName.toUpperCase()}`}</Typography>
        </Box>
      </Item>
    </a>
  );
};

const WalletActivityPage = () => {
  const _transactions = useSelector((state) => state.transaction.transactions);
  const _transactionIDs = Object.keys(_transactions).reverse();
  return (
    <Container
      style={{
        height: "600px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          pt: "10px",
        }}
      >
        <Box
          sx={{
            mt: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="dssReg"
            sx={{
              fontWeight: "fontWeightSemiBold",
            }}
          >
            Activity
            <span style={{ color: "orange", fontWeight: 600 }}>.</span>
          </Typography>
        </Box>
      </Box>

      {/* Transactions */}
      <Box sx={{ mt: "5px" }}>
        <Typography variant="tlgReg">Transactions</Typography>
      </Box>
      {/* <Paper style={{ maxWidth: 450, height: 430 }}> */}
      <List>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            minHeight: 200,
            p: 1,
          }}
        >
          {/* items */}
          {_transactionIDs.map((transaction) => {
            return (
              <TransactionsSnippet
                transaction={transaction}
                key={transaction}
              />
            );
          })}
        </Box>
      </List>
      {/* </Paper> */}
    </Container>
  );
};

export default WalletActivityPage;
