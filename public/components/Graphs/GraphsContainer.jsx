import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GraphActions from './../../ActionCreators/Actions.js';
import victory from 'victory';
import PieChart from './PieChart.jsx';
import LineChart from './LineChart.jsx';
import I from 'immutable';

function GraphsContainer (props) {

  var getData = (function () {
    return props.actions.fetchInformation();
  }());



  var imgList = props.imgUrls.map(function (img, key) {
    return (
      <div className="col-sm-3">
        <img key={key} src={img}/>
      </div>
    );
  });

  var tagsList = props.result.map(function (tag, key) {
    return <li className="numbered" key={key}>{tag}</li>;
  })

  var sorted = props.result.sort(function (a, b) {
    if(1){
      return a;
    } else if(-1) {
      return b;
    } else{
      return a;
    }
  })

  var fiveTaken = sorted.toArray();
  var topFive = fiveTaken.slice(0,5);
  console.log(topFive);
  var topTen = fiveTaken.slice(0,10);
  console.log(topTen);

    return (
      <div className="GraphsContainer">
        <div className="container-fluid nopadding">
            {imgList}
        </div>
        <div className="container-fluid">
          <ul className="col-sm-4">
            <li>
              <PieChart pieData={topFive}></PieChart>
            </li>
            <li>
              <LineChart lineData={topTen}></LineChart>
            </li>
            <li>
              <LineChart lineData={topTen}></LineChart>
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
                {tagsList}
              </li>
            </ol>
          </ul>
        </div>
      </div>
    );
}
function mapStateToProps(state) {
  return {
    imgUrls: state.getIn(['info', 'imgUrls']),
    result: state.getIn(['info', 'result'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GraphActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphsContainer);
// export default GraphsContainer;
