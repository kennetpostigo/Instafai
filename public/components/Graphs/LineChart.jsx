import React from 'react';
import {VictoryChart, VictoryAxis, VictoryBar} from 'victory';

function LineChart (props) {
  return (
    <VictoryChart
      height={500}
      padding={{
        top: 75,
        bottom: 40,
        left: 40,
        right: 40
      }}
      domainPadding={{x: 20}}>
      <VictoryAxis
        label="X AXIS"
        orientation="top"/>
      <VictoryAxis dependentAxis
        tickValues={[0, 1.5, 3, 4.5]}
        style={{
          grid: {
            stroke: "grey",
            strokeWidth: 1
          },
          axis: {stroke: "transparent"},
          ticks: {stroke: "transparent"}
        }}/>
      <VictoryBar
        style={{data:
          {width: 15, fill: "orange"}
        }}
        data={[
          {x: 1, y: props.lineData[4]},
          {x: 2, y: props.lineData[3]},
          {x: 3, y: props.lineData[2]},
          {x: 4, y: props.lineData[1]},
          {x: 5, y: props.lineData[0]},
        ]}/>
    </VictoryChart>
  );
}

export default LineChart;
