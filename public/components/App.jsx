import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// import configureStore from './../store/store.js';
// import DevTools from './Devtools/Devtools.jsx';

function App (props, reactElementInstance) {
  var instance = Object.create(React.Component.prototype);
    instance.context = reactElementInstance;
    instance.props = props;
    instance.render = function () {
      return (
        <div>
          {this.props.children}
        </div>
      );
    };

  return instance;
}

let history = createBrowserHistory();

render(
  (
      <Router history={history} >
        <Route path="/" component={App}>
        </Route>
      </Router>
    ),document.getElementById('app'));