import React from 'react';
import PieChart from './PieChart.jsx';
import LineChart from './LineChart.jsx';
import I from 'immutable';

function GraphInterface (props) {

  var imgList = props.imgUrls.map(function (img, key) {
    return (
      <div className="col-sm-3">
        <img key={key} src={img}/>
      </div>
    );
  });

    return (
      <div className="GraphsContainer">
        <div className="container-fluid nopadding">
            {imgList}
        </div>
        <div className="container-fluid">
          <ul className="col-sm-4">
            <li>
              <PieChart pieData={props.data}></PieChart>
            </li>
            <li>
              <LineChart lineData={props.data}></LineChart>
            </li>
            <li>
              <LineChart lineData={props.data}></LineChart>
              </li>
          </ul>
          <div className="left"></div>
          <ul className="col-sm-4">
            <li className="li-text">
              <h2>Most Common for Current Batch</h2>
              This Graph provides a view of the most common items found in a
              picture posted on Instagram,  The pie chart items are seperated by
              thin break-points but are also distinguishable based on color.
            </li>

            <li className="li-text">
              <h2>Most Common Over Time</h2>
              This graph provides the most most frequented items based on the time
              period that we began pulling data. It provides a general perspective
              of common items over time.
             </li>
             <li className="li-text">
               <h2>Safe For Work?</h2>
               This graph provides the most most frequented items based on the time
               period that we began pulling data. It provides a general perspective
               of common items over time.
              </li>
          </ul>
          <div className="left moreRight"></div>
          <ul className="col-sm-4 ">
            <ol>
              <li className="numbered">
                <h4>Cat</h4>
              </li>
            </ol>
          </ul>
        </div>
      </div>
    );
}
export default GraphInterface;
