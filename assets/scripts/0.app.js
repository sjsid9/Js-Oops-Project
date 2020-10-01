(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\r\n  constructor(hostElementId, insertBefore = false) {\r\n    this.insertBefore = insertBefore;\r\n    if (hostElementId) {\r\n      this.hostElement = document.getElementById(hostElementId);\r\n    } else {\r\n      this.hostElement = document.body;\r\n    }\r\n  }\r\n\r\n  detach() {\r\n    if (this.element) {\r\n      this.element.remove();\r\n    }\r\n  }\r\n\r\n  attach() {\r\n    this.hostElement.insertAdjacentElement(\r\n      this.insertBefore ? 'afterbegin' : 'beforeend',\r\n      this.element\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(closeNoteNotifierFunction, text, hostElementId) {\r\n    super(hostElementId);\r\n    // super('active-projects', false);\r\n    this.closeNotifier = closeNoteNotifierFunction;\r\n    this.text = text;\r\n    this.create();\r\n    this.closeTooltip = () => {\r\n      this.detach();\r\n      this.closeNotifier();\r\n    };\r\n  }\r\n\r\n  // closeTooltip = () => {\r\n  //   this.detach();\r\n  //   this.closeNotifier();\r\n  // };\r\n\r\n  create() {\r\n    const tooltipElement = document.createElement('div');\r\n    tooltipElement.className = 'card';\r\n    const tooltipTemplate = document.getElementById('tooltip');\r\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n    tooltipBody.querySelector('p').textContent = this.text;\r\n    tooltipElement.append(tooltipBody);\r\n    // tooltipElement.textContent = this.text;\r\n    // console.log(this.hostElement.getBoundingClientRect());\r\n\r\n    const hostPosLeft = this.hostElement.offsetLeft;\r\n    const hostPosTop = this.hostElement.offsetTop;\r\n    const hostHeight = this.hostElement.clientHeight;\r\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = hostPosLeft + 20;\r\n    const y = hostPosTop + hostHeight - parentElementScrolling - 10;\r\n\r\n    tooltipElement.style.position = 'absolute';\r\n    tooltipElement.style.left = x + 'px';\r\n    tooltipElement.style.top = y + 'px';\r\n\r\n    this.element = tooltipElement;\r\n    tooltipElement.addEventListener('click', this.closeTooltip);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ })

}]);