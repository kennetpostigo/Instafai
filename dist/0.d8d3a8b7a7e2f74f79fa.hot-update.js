webpackHotUpdate(0,{

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _isomorphicFetch = __webpack_require__(708);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction GraphImages(props, reactElementInstance) {\n  var instance = Object.create(_react2.default.Component.prototype);\n  instance.context = reactElementInstance;\n  instance.props = props;\n  instance.componentDidMount = function () {\n    var imgUrls = (0, _isomorphicFetch2.default)('http://localhost:3000/imgs/gopro').then(function (res) {\n      return res.json();\n    }).then(function (responseBody) {\n      return responseBody;\n    });\n    console.log(imgUrls);\n  }, instance.render = function () {\n    return _react2.default.createElement(\n      'div',\n      { className: 'nopadding' },\n      _react2.default.createElement('ul', null)\n    );\n  };\n\n  return instance;\n}\n\nexports.default = GraphImages;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"GraphImages.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/Graphs/GraphImages.jsx\n ** module id = 707\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/Graphs/GraphImages.jsx?");

/***/ }

})