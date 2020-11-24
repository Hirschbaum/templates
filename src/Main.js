import React from "react";

import { useState, useContext } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import IncomeContext from "./context/IncomeContext";
import ReducerInput from "./context/ReducerInput";
import ReducerContext from "./ReducerContext";

const Main = () => {
  const [income, setIncome] = useState({}); //to update the different income as an object
  const [incomeSum, setIncomeSum] = useContext(IncomeContext); //to update the total Income in the Context

  function incomeTotalHandler(obj) {
    let objClone = { ...obj };
    let sum = Object.values(objClone)
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setIncomeSum(sum);
  }

  function incomeHandler(e) {
    let incomeData = { ...income, [e.target.name]: e.target.value };
    setIncome(incomeData);
    incomeTotalHandler(incomeData);
  }

  console.log(income, "incomeSum: ", incomeSum);

  return (
    <Container>
      <TextField
        id="income1"
        name="income1"
        label="income"
        onChange={incomeHandler}
      />
      <TextField
        id="income2"
        name="income2"
        label="parentalleave"
        onChange={incomeHandler}
      />
      <TextField
        id="income3"
        name="income3"
        label="sickleave"
        onChange={incomeHandler}
      />
      <Typography variant="body1">Total: {incomeSum}</Typography>
      {/*the value in incomeSum from context should be used later on in an other component */}

      <Button variant="contained" color="primary">
        Next
      </Button>

      <ReducerContext />
      <ReducerInput />
    </Container>
  );
};

export default Main;
