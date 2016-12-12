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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yarivkatz on 12/12/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _typescript = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pokemon = function () {
	    function Pokemon() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pikachu';
	
	        _classCallCheck(this, Pokemon);
	
	        this.name = name;
	    }
	
	    _createClass(Pokemon, [{
	        key: 'sayHello',
	        value: function sayHello() {
	            console.log(this.name + ' said hello');
	        }
	    }]);
	
	    return Pokemon;
	}();
	
	var hello = { hello: 'world' };
	
	var pokemon = 'pikachu';
	pokemon = 'squirtle';
	
	for (var count = 0; count < 10; count++) {
	    for (var count = 0; count < 10; count++) {
	        console.log(count);
	    }
	}
	
	for (var _count = 0; _count < 10; _count++) {
	    for (var _count2 = 0; _count2 < 10; _count2++) {
	        console.log(_count2);
	    }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by yarivkatz on 12/12/2016.
	 */
	"use strict";
	var Cisco = (function () {
	    function Cisco(name) {
	        if (name === void 0) { name = 'company'; }
	        this.name = name;
	    }
	    return Cisco;
	}());
	exports.Cisco = Cisco;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map