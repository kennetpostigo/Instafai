webpackHotUpdate(0,{

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.handleReceiveInformation = handleReceiveInformation;\nexports.handlePollInformation = handlePollInformation;\n\nvar _immutable = __webpack_require__(903);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction handleReceiveInformation(state, info) {\n  var state = _immutable2.default.fromJS(state);\n  console.log(state);\n  var imgs = _immutable2.default.List(info.imgUrls);\n  var data = _immutable2.default.List(info.result);\n  return {\n    img: state.setIn(['info', 'imgUrl'], imgs),\n    data: state.setIn(['info', 'results'], data)\n  };\n}\n\nfunction handlePollInformation(state, info) {\n  var state = _immutable2.default.fromJS(state);\n  var imgs = _immutable2.default.List(info.imgUrls);\n  var data = _immutable2.default.List(info.result);\n  if (!state.has('imgFeed') && !state.has('dataFeed')) {\n    return {\n      img: state.setIn(['info', 'imgUrl'], imgs),\n      data: state.setIn(['info', 'results'], data)\n    };\n  } else {\n    return {\n      img: state.updateIn(['info', 'imgUrl'], function (list) {\n        return list.push(imgs);\n      }),\n      data: state.updateIn(['info', 'results'], function (list) {\n        return list.push(data);\n      })\n    };\n  }\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(292); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"feedCore.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/core/feedCore.js\n ** module id = 905\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/core/feedCore.js?");

/***/ }

})