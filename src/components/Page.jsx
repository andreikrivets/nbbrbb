/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";

const Page = ({ data, stat }) => {
  if (!data.Cur_OfficialRate)
    return <CircularProgress style={{ marginLeft: "50%", marginTop: "2%" }} />;
  const multipler = data.Cur_Scale;
  const date = new Date(data.Date).toDateString();
  // const str = `${date.getDate()}${date.getMonth()}`;
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2%"
      }}
    >
      <Typography variant="h4" color="primary">
        {`${multipler} ${
          data.Cur_Abbreviation
        } = ${data.Cur_OfficialRate.toFixed(2)} BYN`}
      </Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </section>
  );
};

export default Page;
