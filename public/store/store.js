import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './../reducers/rootReducer.js';
import DevToolsx from './../components/Devtools.jsx';

// var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

var finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  DevToolsx.instrument()
)(createStore);

export default function configureStore(initialState) {
  var store = finalCreateStore(rootReducer, initialState);
  return store;
}
