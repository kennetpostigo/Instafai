import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import GraphsContainer from './Graphs/GraphsContainer.jsx';
import configureStore from './../store/store.js';
import DevTools from './Devtools.jsx';

function App (props, reactElementInstance) {
  var instance = Object.create(React.Component.prototype);
    instance.context = reactElementInstance;
    instance.props = props;
    instance.render = function () {
      return (
        <div>
          {this.props.children}
          <DevTools></DevTools>
        </div>
      );
    };

  return instance; 
}

let history = createBrowserHistory();
var store = configureStore();

render(
  (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={GraphsContainer}/>
      </Route>
    </Router>
  </Provider>
  ),document.getElementById('app'));
