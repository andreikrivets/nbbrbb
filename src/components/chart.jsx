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

const ChartSection = ({ stat, abbr }) => (
  <div className="chart-wrapper">
    <HighchartsChart>
      <Chart />
      <Tooltip valueSuffix="BYN" />

      <XAxis />

      <YAxis>
        <LineSeries name={abbr} data={stat} />
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(ChartSection, Highcharts);
