import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GraphActions from './../../ActionCreators/Actions.js';
import victory from 'victory';
import PieChart from './PieChart.jsx';
import LineChart from './LineChart.jsx';

function GraphsContainer (props) {


  function getData() {
    return props.actions.fetchInformation();
  };

  getData();

  var imgList = props.imgUrls.map(function (img, key) {
    return (
      <div className="col-sm-3">
        <img key={key} src={img}/>
      </div>
    );
  })
    return (
      <div className="GraphsContainer">
        <div className="container-fluid nopadding">
            {imgList}
        </div>
        <div className="container-fluid">
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
function mapStateToProps(state) {
  return {
    imgUrls: state.getIn(['info', 'imgUrls']),
    data: state.getIn(['info', 'result', 'result'])
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
