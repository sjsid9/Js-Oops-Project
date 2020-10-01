/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/ProductItem.js":
/*!********************************!*\
  !*** ./src/App/ProductItem.js ***!
  \********************************/
/*! exports provided: ProductItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductItem\", function() { return ProductItem; });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n// import { Tooltip } from './Tooltip.js';\r\n\r\nclass ProductItem {\r\n  \r\n\r\n  constructor(id, updateProjectsListFunction, type) {\r\n    this.hasActiveTooltip = false;\r\n    this.id = id;\r\n    this.updateProjectsListHandler = updateProjectsListFunction;\r\n    this.connectSwitchButton(type);\r\n    this.connectMoreInfoButton();\r\n    this.connectDrag();\r\n  }\r\n\r\n  connectDrag() {\r\n    document.getElementById(this.id).addEventListener('dragstart', (event) => {\r\n      event.dataTransfer.setData('text/plain', this.id);\r\n      event.dataTransfer.effectAllowed = 'move';\r\n    });\r\n  }\r\n\r\n  connectSwitchButton(type) {\r\n    const projectElement = document.getElementById(this.id);\r\n    let switchButton = projectElement.querySelector('button:last-of-type');\r\n    switchButton = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchButton);\r\n    switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';\r\n    switchButton.addEventListener(\r\n      'click',\r\n      this.updateProjectsListHandler.bind(null, this.id)\r\n    );\r\n  }\r\n\r\n  showInfoHandler() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const text = projectElement.dataset.extraInfo;\r\n\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        text,\r\n        this.id\r\n      );\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectMoreInfoButton() {\r\n    const projectElement = document.getElementById(this.id);\r\n    let moreInfoButton = projectElement.querySelector('button:first-of-type');\r\n    moreInfoButton.addEventListener('click', this.showInfoHandler.bind(this));\r\n  }\r\n\r\n  update(updateProjectsListFunction, type) {\r\n    this.updateProjectsListHandler = updateProjectsListFunction;\r\n    this.connectSwitchButton(type);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/ProductItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductList\", function() { return ProductList; });\n/* harmony import */ var _ProductItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.js */ \"./src/App/ProductItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProductList {\r\n  constructor(type) {\r\n    this.projects = [];\r\n    this.type = type;\r\n    const prjItems = document.querySelectorAll(`#${this.type}-projects li`);\r\n    for (const prjItem of prjItems) {\r\n      this.projects.push(\r\n        new _ProductItem_js__WEBPACK_IMPORTED_MODULE_0__[\"ProductItem\"](prjItem.id, this.switchProject.bind(this), this.type)\r\n      );\r\n    }\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable() {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener('dragenter', (event) => {\r\n      if (event.dataTransfer.types[0] === 'text/plain') {\r\n        event.preventDefault();\r\n        list.parentElement.classList.add('droppable');\r\n      }\r\n    });\r\n\r\n    list.addEventListener('dragover', (event) => {\r\n      if (event.dataTransfer.types[0] === 'text/plain') {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener('dragleave', (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove('droppable');\r\n      }\r\n    });\r\n\r\n    list.addEventListener('drop', (event) => {\r\n      const prjId = event.dataTransfer.getData('text/plain');\r\n      if (this.projects.find((prj) => prj.id === prjId)) {\r\n        list.parentElement.classList.remove('droppable');\r\n        return;\r\n      }\r\n      document\r\n        .getElementById(prjId)\r\n        .querySelector('button:last-of-type')\r\n        .click();\r\n\r\n      list.parentElement.classList.remove('droppable');\r\n      // event.preventDefault(); optional not required\r\n    });\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    console.log('ProjectId', projectId);\r\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n  }\r\n\r\n  addProject(project) {\r\n    // console.log('Item', project);\r\n    // console.log(this);\r\n    this.projects.push(project);\r\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"DOMHelper\"].moveElement(project.id, `#${this.type}-projects ul`);\r\n    project.update(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  setSwitchHandler(switchHandlerFunction) {\r\n    this.switchHandler = switchHandlerFunction;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nclass DOMHelper {\r\n    static moveElement(elementId, newDestinationSelector) {\r\n      const element = document.getElementById(elementId);\r\n      const destinationElement = document.querySelector(newDestinationSelector);\r\n      destinationElement.append(element);\r\n      element.scrollIntoView({ behavior: 'smooth' });\r\n    }\r\n    static clearEventListeners(element) {\r\n      const clonedElement = element.cloneNode(true);\r\n      element.replaceWith(clonedElement);\r\n      return clonedElement;\r\n    }\r\n  }\n\n//# sourceURL=webpack:///./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\r\n\r\nclass App {\r\n  static init() {\r\n    const activeList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProductList\"]('active');\r\n    const finishedList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProductList\"]('finished');\r\n    activeList.setSwitchHandler(finishedList.addProject.bind(finishedList));\r\n    finishedList.setSwitchHandler(activeList.addProject.bind(activeList));\r\n\r\n    // document\r\n    //   .getElementById('start-analytics-btn')\r\n    //   .addEventListener('click', this.startAnalytics);\r\n\r\n    // this.showAlertScript();\r\n  }\r\n\r\n  // static showAlertScript() {\r\n  //   const alertScript = document.createElement('script');\r\n  //   alertScript.textContent = \"alert('Hi there')\";\r\n  //   document.querySelector('head').append(alertScript);\r\n  // }\r\n\r\n  static startAnalytics() {\r\n    const startAnalyticsScript = document.createElement('script');\r\n    startAnalyticsScript.src = 'assets/scripts/analytics.js';\r\n    startAnalyticsScript.defer = true;\r\n    document.querySelector('head').append(startAnalyticsScript);\r\n  }\r\n}\r\n\r\nApp.init();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });