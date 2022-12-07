import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const DatapointsValues= props.chartDataPoints.map(datapoint=>(datapoint.value))
  const maxValue= Math.max(...DatapointsValues)
  return (
    <div className="chart">
      {/* <div>helo</div> */}
      {props.chartDataPoints.map((chartDataPoint) => (
        <ChartBar
          value={chartDataPoint.value}
          key={chartDataPoint.label}
          max={maxValue}
          label={chartDataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
