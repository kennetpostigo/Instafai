webpackHotUpdate(0,{

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(711);\n\nvar _reduxThunk = __webpack_require__(720);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _rootReducer = __webpack_require__(721);\n\nvar _Devtools = __webpack_require__(722);\n\nvar _Devtools2 = _interopRequireDefault(_Devtools);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);\n\nvar finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default),\n// window.devToolsExtension ? window.devToolsExtension() : f => f\n_Devtools2.default.instrument())(_redux.createStore);\n\nfunction configureStore(initialState) {\n  var store = finalCreateStore(_rootReducer.rootReducer, initialState);\n  return store;\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"store.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/store/store.js\n ** module id = 710\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/store/store.js?");

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.rootReducer = rootReducer;\n\nvar _immutable = __webpack_require__(903);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _feedCore = __webpack_require__(905);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction rootReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.Map({}) : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n\n    case 'RECEIVE_INFORMATION':\n      return (0, _feedCore.handleReceiveInformation)(state, action.info);\n\n    case 'POLL_INFORMATION':\n      return (0, _feedCore.handlePollInformation)(state, action.info);\n\n    default:\n      return state;\n  }\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"rootReducer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/reducers/rootReducer.js\n ** module id = 721\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/reducers/rootReducer.js?");

/***/ },

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.handleReceiveInformation = handleReceiveInformation;\nexports.handlePollInformation = handlePollInformation;\n\nvar _immutable = __webpack_require__(903);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction handleReceiveInformation(state, info) {\n  var state = _immutable2.default.fromJS(state);\n  console.log('from sync: ', state);\n  var imgs = _immutable2.default.List(info.imgUrls);\n  var data = _immutable2.default.List(info.result);\n  return {\n    img: state.setIn(['info', 'imgUrl'], imgs),\n    data: state.setIn(['info', 'results'], data)\n  };\n}\n\nfunction handlePollInformation(state, info) {\n  var state = _immutable2.default.fromJS(state);\n  var imgs = _immutable2.default.List(info.imgUrls);\n  var data = _immutable2.default.List(info.result);\n  if (!state.has('imgFeed') && !state.has('dataFeed')) {\n    return {\n      img: state.setIn(['info', 'imgUrl'], imgs),\n      data: state.setIn(['info', 'results'], data)\n    };\n  } else {\n    return {\n      img: state.updateIn(['info', 'imgUrl'], function (list) {\n        return list.push(imgs);\n      }),\n      data: state.updateIn(['info', 'results'], function (list) {\n        return list.push(data);\n      })\n    };\n  }\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"feedCore.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/core/feedCore.js\n ** module id = 905\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/core/feedCore.js?");

/***/ }

})