import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import IncomeContext from "./context/IncomeContext";
import { useContext } from "react";

function Main() {
  const [income, setIncome] = useState({});
  const [incomeTotal, setIncomeTotal] = useState(0);

  const sumIncomes = useContext(IncomeContext); //how to update sumIncomes in IncomeContext?!
  const [sumIncome, setSumIncome] = useState(0);

  function incomeTotalHandler(obj) {
    let objClone = { ...obj };
    let sum = Object.values(objClone)
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setIncomeTotal(sum);
  }

  function updateSumIncome(num) {
    setSumIncome(num);
  }

  //to update the total typography in this component
  useEffect(() => {
    updateSumIncome(incomeTotal);
  }, [incomeTotal]);

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

  console.log(income, "incomeTotal: ", incomeTotal, "sumIncome: ", sumIncome);

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
      <Typography variant="body1" onChange={updateSumIncome}>
        Total: {sumIncome}
        {/*the value in incomeTotal alias sumIncomes from IncomeContext should be used later on in an other component */}
      </Typography>
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Container>
  );
}

export default Main;
