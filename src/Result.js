import { Container, Typography } from "@material-ui/core";
import React from "react";
//import IncomeContext from "./context/IncomeContext";

function Result() {
  return (
    <Container>
      <Typography variant="h3" color="secondary">
        Result
      </Typography>
      {/*sumIncomes should be updated from IncomeContext */}
      <Typography variant="body1">Income Total: {sumIncomes} </Typography>
    </Container>
  );
}

export default Result;
