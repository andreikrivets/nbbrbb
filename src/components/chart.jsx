import React from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Tooltip,
  LineSeries,
} from "react-jsx-highcharts";
import { useMediaQuery } from "@material-ui/core";

const ChartSection = ({ stat, abbr }) => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="chart-wrapper">
      <HighchartsChart>
        <Chart width={mobile ? 350 : 600} height={mobile ? 300 : 400} />
        <Tooltip valueSuffix="BYN" />

        <XAxis />

        <YAxis>
          <LineSeries name={abbr} data={stat} />
        </YAxis>
      </HighchartsChart>
    </div>
  );
};

export default withHighcharts(ChartSection, Highcharts);
