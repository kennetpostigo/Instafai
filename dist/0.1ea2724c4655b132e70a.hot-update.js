webpackHotUpdate(0,{

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _victory = __webpack_require__(297);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction LineChart(props) {\n  return _react2.default.createElement(\n    _victory.VictoryChart,\n    null,\n    _react2.default.createElement(_victory.VictoryLine, {\n      data: [{ x: 1, y: 0 }, { x: 3, y: 2 }, { x: 5, y: 4 }, { x: 7, y: 6 }, { x: 9, y: 8 }, { x: 11, y: 10 }]\n    }),\n    _react2.default.createElement(_victory.VictoryLine, {\n      data: [{ x: 0, y: 1 }, { x: 2, y: 3 }, { x: 4, y: 5 }, { x: 6, y: 7 }, { x: 8, y: 9 }, { x: 10, y: 11 }]\n    })\n  );\n}\n\nexports.default = LineChart;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"LineChart.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/Graphs/LineChart.jsx\n ** module id = 706\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/Graphs/LineChart.jsx?");

/***/ }

})