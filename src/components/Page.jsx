import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";

import ChartSection from "./chart";

const Page = ({ data, stat }) => {
  if (!data.Cur_OfficialRate)
    return <CircularProgress style={{ marginLeft: "50%", marginTop: "2%" }} />;
  const multipler = data.Cur_Scale;
  const date = new Date(data.Date).toDateString();

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
      <Typography variant="subtitle1">{date}</Typography>
      <ChartSection stat={stat} abbr={data.Cur_Abbreviation} />
    </section>
  );
};

export default Page;
