import React from "react";
import { Typography, CircularProgress, TextField } from "@material-ui/core";

import ChartSection from "./chart";

const Page = ({ data, stat, isLoading, setDate }) => {
  if (!data.Cur_OfficialRate || isLoading)
    return <CircularProgress style={{ marginLeft: "50%", marginTop: "5%" }} />;
  const multipler = data.Cur_Scale;
  const defaultValue = data.Date.slice(0, 10);
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <Typography variant="h4" color="primary">
        {`${multipler} ${
          data.Cur_Abbreviation
        } = ${data.Cur_OfficialRate.toFixed(2)} BYN`}
      </Typography>
      <form noValidate>
        <TextField type="date" defaultValue={defaultValue} onChange={setDate} />
      </form>
      <ChartSection stat={stat} abbr={data.Cur_Abbreviation} />
    </section>
  );
};

export default Page;
