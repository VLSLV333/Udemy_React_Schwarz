import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {

  // let max = props.dataPoints.sort( (a,b) => b.value - a.value)
  // console.log(max[0].value)

  let justValues = props.dataPoints.map( expense => expense.value)
  let maxNumber = Math.max(...justValues)

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxNumber}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
