import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import IncomeContext from "./context/IncomeContext";

export default function Result() {
  const incomeSum = useContext(IncomeContext);

  return (
    <>
      {/*incomeTotal should be updated from context */}
      <Typography variant="body1">Income Total: {incomeSum} </Typography>
    </>
  );
}
