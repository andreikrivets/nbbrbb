import React, { useState } from "react";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="sm">
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="USD" />
          <Tab label="EUR" />
          <Tab label="RUR" />
        </Tabs>
      </Paper>
    </Container>
  );
};

export default App;
// style={{ display: "flex", justifyContent: "center" }}
