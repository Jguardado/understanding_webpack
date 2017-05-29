/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bdb0f06c5c3bb0d6763403f48de6ca10.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ })
/******/ ]);