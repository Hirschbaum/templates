import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Typography } from "@material-ui/core";

function Main() {
  const [income, setIncome] = useState({});
  const [incomeTotal, setIncomeTotal] = useState(0);

  function incomeTotalHandler(obj) {
    let objClone = { ...obj };
    let sum = Object.values(objClone)
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setIncomeTotal(sum);
  }

  useEffect(() => {
    setIncome(income);
  }, [income]);

  useEffect(() => {
    incomeTotalHandler(income);
  }, [income]);

  function incomeHandler(e) {
    let incomeData = { ...income, [e.target.name]: e.target.value };
    setIncome(incomeData);
  }

  console.log(income, incomeTotal);

  return (
    <Container>
      <TextField
        id="income1"
        name="income1"
        label="income"
        onChange={incomeHandler}
      ></TextField>
      <TextField
        id="income2"
        name="income2"
        label="parentalleave"
        onChange={incomeHandler}
      ></TextField>
      <TextField
        id="income3"
        name="income3"
        label="sickleave"
        onChange={incomeHandler}
      ></TextField>
      <Typography variant="body1">Total: {incomeTotal}</Typography>
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Container>
  );
}

export default Main;
