import React, { useState, useEffect } from "react";
import { Container, Paper, Tabs, Tab, useMediaQuery } from "@material-ui/core";

import Page from "./Page";
import getCurrentRates from "./getCurrentRates";
import getCurrencyDynamics from "./getCurrencyDynamics";

const App = () => {
  const [value, setValue] = useState(0);
  const [stat, setStat] = useState({});
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const ids = [145, 292, 298];
  const mobile = useMediaQuery("(max-width:600px)");

  const fetchData = async (id) => {
    setIsLoading(true);
    await getCurrentRates(id).then((req) => setData(req));
    await getCurrencyDynamics(id).then((dyn) => setStat(dyn));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(145);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchData(ids[newValue]);
  };

  return (
    <Container maxWidth={mobile ? "sm" : "md"}>
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
        <Page data={data} stat={stat} isLoading={isLoading} />
      </Paper>
    </Container>
  );
};

export default App;
