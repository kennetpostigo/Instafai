import React from 'react';
import victory from 'victory';
import GraphImages from './GraphImages.jsx';
import PieChart from './PieChart.jsx';
import LineChart from './LineChart.jsx';

function GraphsContainer (props) {

  return (
    <div className="GraphsContainer">
      <div className="container-fluid">
        <GraphImages></GraphImages>
        <ul>
          <li>
            <PieChart></PieChart>
            <h4>Items most Frequented</h4>
          </li>
          <li>
            <LineChart></LineChart>
            <h4>Items Trending Over Time</h4>
          </li>
          <li>
            <LineChart></LineChart>
            <h4>Items Not Safe For Work</h4>
            </li>
        </ul>
      </div>

    </div>
  );
}

export default GraphsContainer;
