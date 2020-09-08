import React, { useState, useEffect } from "react";
import { Container, Paper, Tabs, Tab, useMediaQuery } from "@material-ui/core";

import Page from "./Page";
import getCurrentRates from "./getCurrentRates";
import getCurrencyDynamics from "./getCurrencyDynamics";
import { currentDate } from "./dateCorrect";

const App = () => {
  const [value, setValue] = useState(0);
  const [stat, setStat] = useState({});
  const [data, setData] = useState({});
  const [date, setDate] = useState(currentDate());

  const [isLoading, setIsLoading] = useState(false);
  const ids = [145, 292, 298];
  const mobile = useMediaQuery("(max-width:600px)");

  const fetchData = async (id, dat) => {
    setIsLoading(true);
    await getCurrentRates(id, dat).then((req) => setData(req));
    await getCurrencyDynamics(id, dat).then((dyn) => setStat(dyn));
    setIsLoading(false);
  };

  useEffect(() => {
    const initCurrency = localStorage.getItem("id") || 145;
    setValue(+localStorage.getItem("value") || 0);
    fetchData(initCurrency, currentDate());
  }, []);

  const handleChange = (event, newValue) => {
    localStorage.setItem("id", ids[newValue]);
    localStorage.setItem("value", newValue);
    setValue(newValue);
    fetchData(ids[newValue], date);
  };

  const handleDateChange = (e) => {
    fetchData(localStorage.getItem("id"), e.target.value);
    setDate(e.target.value);
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
        <Page
          data={data}
          stat={stat}
          isLoading={isLoading}
          setDate={handleDateChange}
        />
      </Paper>
    </Container>
  );
};

export default App;
