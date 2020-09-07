import React, { useState, useEffect } from "react";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";

import Page from "./Page";
import getCurrentRates from "./getCurrentRates";
import getCurrencyDynamics from "./getCurrencyDynamics";

const App = () => {
  const [value, setValue] = useState(0);
  const [stat, setStat] = useState({});
  const [data, setData] = useState({});
  const ids = [145, 292, 298];

  const fetchData = async (val) => {
    const id = ids[val];
    const req = await getCurrentRates(id);
    const dyn = await getCurrencyDynamics(id);
    setData(req);
    setStat(dyn);
  };

  useEffect(() => {
    const fetchInitial = async () => {
      const req = await getCurrentRates(145);
      const dyn = await getCurrencyDynamics(145);
      setData(req);
      setStat(dyn);
    };
    fetchInitial();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchData(newValue);
  };

  return (
    <Container maxWidth="md">
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
          <Tab label="RUB" />
        </Tabs>
        <Page data={data} stat={stat} />
      </Paper>
    </Container>
  );
};

export default App;
