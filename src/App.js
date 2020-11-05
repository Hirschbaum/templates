import React from "react";
import { Container, Typography } from "@material-ui/core";
import Main from "./Main";

function App() {
  return (
    <Container>
      <Typography variant="h4" color="secondary">
        Kolla behörighet till ekonomiskt bistånd
      </Typography>
      <Typography variant="body1">React and Material UI playground</Typography>
      <Main />
    </Container>
  );
}

export default App;
