import React from "react";
import { Container, Typography } from "@material-ui/core";
import Main from "./Main";
import IncomeContext, { initialIncomeContext } from "./context/IncomeContext";
//import { useEffect, useState } from "react";

function App() {
  /*const [sumDetails, setSumDetails] = useState({
    income: {},
  })

  useEffect(() => {
    update here sumDetails from context?
  })*/

  return (
    <IncomeContext.Provider>
      <Container>
        <Typography variant="h4" color="secondary">
          Kolla behörighet till ekonomiskt bistånd
        </Typography>
        <Typography variant="body1">
          React and Material UI playground
        </Typography>
        <Main />
      </Container>
    </IncomeContext.Provider>
  );
}

export default App;
