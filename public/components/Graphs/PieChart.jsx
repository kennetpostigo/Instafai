import React from 'react';
import {VictoryPie} from 'victory';
import I from 'immutable';


function PieChart (props) {

  return (
    <VictoryPie
      style={{
        labels: {
          fill: "white",
          fontSize: 12,
          fontWeight: "bold"
        }
      }}
      data={[
        {x: "1-3", y: props.pieData[4]},
        {x: "4-7", y: props.pieData[3]},
        {x: "8-12", y: props.pieData[2]},
        {x: "12-15", y: props.pieData[1]},
        {x: "17-18", y: props.pieData[0]},
      ]}
      innerRadius={1}
      colorScale={[
        "#D85F49",
        "#F66D3B",
        "#D92E1D",
        "#D73C4C",
        "#FFAF59",
        "#E28300",
        "#F6A57F"
      ]}
    />
  );

}

export default PieChart;
