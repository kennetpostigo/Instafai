webpackHotUpdate(0,{

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.receiveInformation = receiveInformation;\nexports.pollInformation = pollInformation;\nexports.fetchInformation = fetchInformation;\nexports.fetchPollInformation = fetchPollInformation;\n\nvar _immutable = __webpack_require__(903);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction receiveInformation(results, img) {\n  return {\n    type: 'RECEIVE_INFORMATION',\n    results: results,\n    img: img\n  };\n}\n\nfunction pollInformation(results, img) {\n  return {\n    type: 'POLL_INFORMATION',\n    results: results,\n    img: img\n  };\n}\n\n//Async Action Creators\n\nfunction fetchInformation() {\n  return function (dispatch) {\n    fetch('http://localhost:3000/imgs/gopro').then(function (res) {\n      return res.json();\n    }).then(function (responseBody) {\n      var result = _immutable2.default.fromJS(responseBody.result);\n      console.log('results async: ', result.toJS());\n      var imgUrls = _immutable2.default.fromJS(responseBody.imgUrls);\n      console.log('imgUrls async: ', imgUrls.toJS());\n      return dispatch(receiveInformation(result, imgUrls));\n    });\n  };\n}\n\nfunction fetchPollInformation() {\n  return function (dispatch) {\n    fetch('http://localhost:3000/imgs/gopro').then(function (res) {\n      return res.json();\n    }).then(function (responseBody) {\n      var responseBody = _immutable2.default.fromJS(responseBody);\n      console.log('async: ', responseBody);\n      return dispatch(pollInformation(responseBody));\n    });\n  };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Actions.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/ActionCreators/Actions.js\n ** module id = 908\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/ActionCreators/Actions.js?");

/***/ }

})