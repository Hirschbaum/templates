import { Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import IncomeContext from "./context/IncomeContext";

const Result = () => {
  const incomeSum = useContext(IncomeContext);

  return (
    <Container>
      {/*incomeTotal should be updated from context */}
      <Typography variant="body1">Income Total: {incomeSum} </Typography>
    </Container>
  );
};

export default Result;
