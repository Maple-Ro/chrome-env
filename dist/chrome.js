/*!
 * chrome.js v0.0.3
 * https://github.com/lmk123/chrome-env
 * Copyright 2015 Milk Lee <me@limingkai.cn> (http://www.limingkai.cn/)
 * Licensed under MIT
 */
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _chrome = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _chrome.default;
	  }
	});

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(10);

	__webpack_require__(4);

	__webpack_require__(11);

	__webpack_require__(13);

	__webpack_require__(15);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = window.chrome = {};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _chrome2.default.browserAction = {
	  setBadgeText: function setBadgeText() {}
	}; /**
	    * @see https://developer.chrome.com/extensions/browserAction
	    */

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @see https://developer.chrome.com/extensions/browserAction
	 */
	
	exports.default = _chrome2.default.commands = {
	  onCommand: new _Event2.default()
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _chrome2.default.Event = (function () {
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'addListener',
	    value: function addListener() {}
	  }]);
	  return _class;
	})(); /**
	       * @see https://developer.chrome.com/apps/events#type-Event
	       */

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(7);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @see https://developer.chrome.com/extensions/contextMenus
	 */
	
	exports.default = _chrome2.default.contextMenus = {
	  onClicked: new _Event2.default()
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _Port = __webpack_require__(12);
	
	var _Port2 = _interopRequireDefault(_Port);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _chrome2.default.runtime = {
	  id: 'chrome-env',
	  lastError: null, // or {message:'error message'}
	
	  getManifest: function getManifest() {},
	  connect: function connect() {
	    return new _Port2.default();
	  },
	
	  onConnect: new _Event2.default(),
	  onConnectExternal: new _Event2.default(),
	  onInstalled: new _Event2.default()
	}; /**
	    * @see https://developer.chrome.com/extensions/runtime
	    */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = (function () {
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	
	    this.name = 'xxx';
	    this.onDisconnect = new _Event2.default();
	    this.onMessage = new _Event2.default();
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'postMessage',
	    value: function postMessage() {}
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {}
	  }]);
	  return _class;
	})(); /**
	       * @see https://developer.chrome.com/extensions/runtime#type-Port
	       */
	
	exports.default = _class;
	;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _StorageArea = __webpack_require__(14);
	
	var _StorageArea2 = _interopRequireDefault(_StorageArea);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sync = new _StorageArea2.default();
	
	var local = new _StorageArea2.default();
	
	var managed = new _StorageArea2.default();
	
	exports.default = _chrome2.default.storage = {
	  sync: sync,
	  local: local,
	  managed: managed,
	
	  onChanged: new _Event2.default()
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @see https://developer.chrome.com/extensions/storage#type-StorageArea
	 */
	
	var _class = (function () {
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: "get",
	    value: function get() {}
	  }, {
	    key: "getBytesInUse",
	    value: function getBytesInUse() {}
	  }, {
	    key: "set",
	    value: function set() {}
	  }, {
	    key: "remove",
	    value: function remove() {}
	  }, {
	    key: "clear",
	    value: function clear() {}
	  }]);
	  return _class;
	})();

	exports.default = _class;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _chrome = __webpack_require__(1);
	
	var _chrome2 = _interopRequireDefault(_chrome);
	
	var _Port = __webpack_require__(12);
	
	var _Port2 = _interopRequireDefault(_Port);
	
	var _Event = __webpack_require__(4);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _chrome2.default.tabs = {
	  query: function query() {},
	  connect: function connect() {
	    return new _Port2.default();
	  },
	
	  onUpdated: new _Event2.default(),
	  onActivated: new _Event2.default()
	}; /**
	    * @see https://developer.chrome.com/extensions/tabs
	    */

/***/ }
/******/ ]);
//# sourceMappingURL=chrome.js.map