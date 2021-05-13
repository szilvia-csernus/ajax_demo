/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chat_machine.js":
/*!*****************************!*\
  !*** ./src/chat_machine.js ***!
  \*****************************/
/***/ ((module) => {

eval("class ChatMachine  {\n    \n    constructor($el) {\n        this.$messages = $el.find(\"ul\");\n        this.$form = $el.find(\"form\");\n        this.$form.on(\"submit\", this.submitMessage.bind(this));\n    }\n\n    submitMessage(event) {\n        event.preventDefault();\n        $.ajax({\n            method: \"POST\",\n            url: \"/messages\",\n            dataType: \"json\",\n            data: this.$form.serialize(),\n            success: function (message) {\n                this.addMessage(message);\n                this.clearForm();\n            }.bind(this)\n        });\n        this.addSpinner();\n    }\n\n    addMessage(message) {\n        const $message = $(\"<li>\").text(message.author + \": \" + message.text);\n        this.$messages.append($message);\n        this.$messages.find(\".loader\").remove();\n    }\n\n    clearForm() {\n        this.$form.find(\"input[type='text']\").val(\"\");\n    }\n\n    addSpinner() {\n        this.$messages.append('<div class=\"loader\">Loading...</div>');\n    }\n    \n};\n\n\nmodule.exports = ChatMachine;\n\n\n//# sourceURL=webpack://ajax_demo/./src/chat_machine.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const ChatMachine = __webpack_require__(/*! ./chat_machine.js */ \"./src/chat_machine.js\");\n\n$(() => {\n    new ChatMachine($('.chat'));\n});\n\n//# sourceURL=webpack://ajax_demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;