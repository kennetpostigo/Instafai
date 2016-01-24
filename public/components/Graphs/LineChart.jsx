import React from 'react';
import {VictoryChart, VictoryLine} from 'victory';

function LineChart (props) {
  return (
  <VictoryChart>
     <VictoryLine
      data={[
        {x: 1, y: 0},
        {x: 3, y: 2},
        {x: 5, y: 4},
        {x: 7, y: 6},
        {x: 9, y: 8},
        {x: 11, y: 10}
      ]}
   />
    <VictoryLine
      data={[
        {x: 0, y: 1},
        {x: 2, y: 3},
        {x: 4, y: 5},
        {x: 6, y: 7},
        {x: 8, y: 9},
        {x: 10, y: 11}
      ]}
   />
  </VictoryChart>
  );
}

export default LineChart;
