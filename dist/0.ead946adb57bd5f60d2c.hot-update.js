webpackHotUpdate(0,{

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.rootReducer = rootReducer;\n\nvar _immutable = __webpack_require__(903);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _feedCore = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./../core/feedCore.js\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initState = _immutable2.default.Map({\n  // info: I.Map({\n  //   // result: I.Map({}),\n  //   // imgUrls: I.List()\n  // })\n});\nfunction rootReducer() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n\n    case 'RECEIVE_INFORMATION':\n      return (0, _feedCore.handleReceiveInformation)(state, action.info);\n\n    case 'POLL_INFORMATION':\n      return (0, _feedCore.handlePollInformation)(state, action.info);\n\n    default:\n      return state;\n  }\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"rootReducer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/reducers/rootReducer.js\n ** module id = 721\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/reducers/rootReducer.js?");

/***/ }

})