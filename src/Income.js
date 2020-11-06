import React from "react";
import { Container, Typography } from "@material-ui/core";

const Income = (incomeHandler, incomeDetails) => {
  return (
    <Container>
      <Typography variant="body1">Total: {incomeDetails.income1}</Typography>
    </Container>
  );
};

export default Income;
