webpackHotUpdate(0,{

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(731);\n\nvar _redux = __webpack_require__(711);\n\nvar _Actions = __webpack_require__(908);\n\nvar GraphActions = _interopRequireWildcard(_Actions);\n\nvar _GraphInterface = __webpack_require__(909);\n\nvar _GraphInterface2 = _interopRequireDefault(_GraphInterface);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction GraphsContainer(props, reactElementInstance) {\n  var instance = Object.create(_react2.default.Component.prototype);\n  instance.context = reactElementInstance;\n  instance.props = props;\n\n  instance.componentDidMount = function () {\n    return props.actions.fetchInformation();\n  };\n\n  instance.imgList = props.imgUrls.map(function (img, key) {\n    return _react2.default.createElement(\n      'div',\n      { className: 'col-sm-3' },\n      _react2.default.createElement('img', { key: key, src: img })\n    );\n  });\n\n  instance.render = function () {\n    return _react2.default.createElement(_GraphInterface2.default, { actions: props.actions, data: props.data, imgUrls: props.imgUrls, img: instance.imgList });\n  }();\n\n  return instance;\n}\nfunction mapStateToProps(state) {\n  return {\n    imgUrls: state.getIn(['info', 'imgUrls']),\n    data: state.getIn(['info', 'data '])\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    actions: (0, _redux.bindActionCreators)(GraphActions, dispatch)\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GraphsContainer);\n// export default GraphsContainer;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"GraphsContainer.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/Graphs/GraphsContainer.jsx\n ** module id = 296\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/Graphs/GraphsContainer.jsx?");

/***/ }

})