import React from 'react';
import fetch from 'isomorphic-fetch';

function GraphImages (props, reactElementInstance) {
  var instance = Object.create(React.Component.prototype);
    instance.context = reactElementInstance;
    instance.props = props;
    instance.componentDidMount = function () {
      var imgUrls = fetch('http://localhost:3000/imgs/gopro')
        .then(function (res) {
          return res.json()
        })
        .then(function (responseBody) {
          return responseBody;
        });
    };
    instance.render = function () {
      return (
        <div className="nopadding">
          <ul></ul>
        </div>
      );
    };

  return instance;
}

export default GraphImages;
