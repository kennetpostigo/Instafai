webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(243);\n\nvar _reactRedux = __webpack_require__(731);\n\nvar _reactRouter = __webpack_require__(244);\n\nvar _createBrowserHistory = __webpack_require__(291);\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _GraphsContainer = __webpack_require__(296);\n\nvar _GraphsContainer2 = _interopRequireDefault(_GraphsContainer);\n\nvar _store = __webpack_require__(710);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Devtools = __webpack_require__(722);\n\nvar _Devtools2 = _interopRequireDefault(_Devtools);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App(props, reactElementInstance) {\n  var instance = Object.create(_react2.default.Component.prototype);\n  instance.context = reactElementInstance;\n  instance.props = props;\n  instance.render = function () {\n    return _react2.default.createElement(\n      'div',\n      null,\n      this.props.children,\n      _react2.default.createElement(_Devtools2.default, null)\n    );\n  };\n\n  return instance;\n}\n\nvar history = (0, _createBrowserHistory2.default)();\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(\n    _reactRouter.Router,\n    { history: history },\n    _react2.default.createElement(\n      _reactRouter.Route,\n      { path: '/', component: App },\n      _react2.default.createElement(_reactRouter.IndexRoute, { component: _GraphsContainer2.default })\n    )\n  )\n), document.getElementById('app'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"App.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/App.jsx\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/App.jsx?");

/***/ }

})