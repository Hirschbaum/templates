import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Typography } from "@material-ui/core";

//varje gång efteråt att jag har skrivit in input field, ska totalsumman updateras och sparas om
//setTotal => e.preventDefault(), loop: total = total + e.target.value
function Main() {
  const [income, setIncome] = useState({});

  function incomeHandler(e) {
    let incomeData = { ...income, [e.target.name]: e.target.value };
    setIncome(incomeData);
  }

  console.log(income);

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
      <Typography variant="body1">
        Total:{" "}
        {Object.values(income).reduce(
          (prev, current) => parseInt(prev) + parseInt(current),
          0
        )}
        {/*useEffectben updatelni a totalt! */}
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}

export default Main;
