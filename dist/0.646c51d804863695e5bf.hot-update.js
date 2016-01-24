webpackHotUpdate(0,{

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(731);\n\nvar _redux = __webpack_require__(711);\n\nvar _Actions = __webpack_require__(908);\n\nvar GraphActions = _interopRequireWildcard(_Actions);\n\nvar _victory = __webpack_require__(297);\n\nvar _victory2 = _interopRequireDefault(_victory);\n\nvar _PieChart = __webpack_require__(705);\n\nvar _PieChart2 = _interopRequireDefault(_PieChart);\n\nvar _LineChart = __webpack_require__(706);\n\nvar _LineChart2 = _interopRequireDefault(_LineChart);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction GraphsContainer(props, reactElementInstance) {\n  var instance = Object.create(_react2.default.Component.prototype);\n  instance.context = reactElementInstance;\n  instance.props = props;\n\n  instance.componentDidMount = function () {\n    return props.actions.fetchPollInformation();\n  };\n\n  instance.totalList = props.imgUrls.get('imgUrls').map(function (imgLink, key) {\n    console.log(props.imgUrls);\n    return _react2.default.createElement('img', { src: imgLink });\n  });\n\n  instance.render = function () {\n    return _react2.default.createElement(\n      'div',\n      { className: 'GraphsContainer' },\n      _react2.default.createElement(\n        'div',\n        { className: 'container-fluid nopadding' },\n        _react2.default.createElement(\n          'div',\n          { className: 'nopadding' },\n          this.totalList\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'container-fluid' },\n        _react2.default.createElement(\n          'ul',\n          null,\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(_PieChart2.default, null),\n            _react2.default.createElement(\n              'h4',\n              null,\n              'Items most Frequented'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(_LineChart2.default, null),\n            _react2.default.createElement(\n              'h4',\n              null,\n              'Items Trending Over Time'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(_LineChart2.default, null),\n            _react2.default.createElement(\n              'h4',\n              null,\n              'Items Not Safe For Work'\n            )\n          )\n        )\n      )\n    );\n  };\n\n  return instance;\n}\nfunction mapStateToProps(state) {\n  return {\n    imgUrls: state.getIn(['info', 'imgUrls']),\n    data: state.getIn(['info', 'result', 'result'])\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    actions: (0, _redux.bindActionCreators)(GraphActions, dispatch)\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GraphsContainer);\n// export default GraphsContainer;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"GraphsContainer.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/Graphs/GraphsContainer.jsx\n ** module id = 296\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/Graphs/GraphsContainer.jsx?");

/***/ }

})