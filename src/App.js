import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Main from "./Main";
import Result from "./Result";
import IncomeContext from "./context/IncomeContext";

function App() {
  const [incomeSum, setIncomeSum] = useState(0);

  return (
    <IncomeContext.Provider value={[incomeSum, setIncomeSum]}>
      <Container>
        <Typography variant="h4" color="secondary">
          Kolla behörighet till ekonomiskt bistånd
        </Typography>
        <Typography variant="body1">
          React and Material UI playground
        </Typography>
      </Container>
      <Main />
      <Result />
    </IncomeContext.Provider>
  );
}

export default App;
