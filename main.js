/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\n\n\nfunction createContact() {\n    const content = document.querySelector(\"#content\");\n    const mainHeader = document.createElement('h1');\n    mainHeader.innerHTML = \"Contact us\"\n\n    content.appendChild(mainHeader)\n\n\n    const div1 = document.createElement(\"div\")\n    content.appendChild(div1)\n    const phone = document.createElement(\"p\")\n    const email = document.createElement(\"p\")\n    const name = document.createElement(\"h3\")\n\n    name.innerHTML = \"<strong>Owner:</strong> Beppo The Cheesey Chef\"\n    phone.innerHTML = \"<strong>Phone:</strong> 1-555-8959\"\n    email.innerHTML = \"<strong>Email:</strong> ImARealBoy@NotReal.com\"\n\n    div1.appendChild(name)\n    div1.appendChild(phone)\n    div1.appendChild(email)\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* reexport safe */ _menu_js__WEBPACK_IMPORTED_MODULE_0__.createMenu),\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\nfunction loadContent(){\n\n\n    const content = document.querySelector(\"#content\");\n    const mainHeader = document.createElement('h1');\n    const mainImg = document.createElement('img');\n    const description = document.createElement('p');\n    \n    mainHeader.innerHTML = \"Welcome to the home of the best Chopped Cheese in NYC!\"\n    mainImg.src = \"https://thetasteofmontana.com/wp-content/uploads/2023/04/SpicyChoppedCheese-Re-upped-2.jpg\"\n    description.innerHTML = 'Come on down to our shop. We are open all hours!'\n    \n    content.appendChild(mainHeader)\n    content.appendChild(description)\n    content.appendChild(mainImg)\n    \n}\n\n\n\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n// import { createMenu } from \"./menu.js\"\n\n\n\n\n\nconst homeButton = document.querySelector(\".home\")\nconst menuButton = document.querySelector(\".menu\")\nconst contactButton = document.querySelector(\".contact\")\n\n\nhomeButton.addEventListener(\"click\", (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)());\nmenuButton.addEventListener(\"click\", (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.createMenu)());\ncontactButton.addEventListener(\"click\", (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.createContact)());\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\n\n\n// appending each div to the content box aka menu item to content box.\n\nfunction createMenu(){\n    const content = document.querySelector(\"#content\");\n    const mainHeader = document.createElement('h1');\n\n    // while(content.firstChild){\n    //     content.removeChild(content.firstChild)\n    // }\n\n    mainHeader.innerHTML = \"Our Menu\"\n    content.appendChild(mainHeader)\n\n    for(let i = 0; i < 3; i++){\n\n            // Creation of Elements\n        const div = document.createElement('div')\n        const description = document.createElement('p');\n        const img = document.createElement('img');\n        const h3 = document.createElement(\"h3\")\n\n        // Giving elements class names\n        div.className = `menu${i+1}`\n        h3.className = `name${i+1}`\n        description.className = `item${i+1}`\n        img.className = `img${i+1}`\n\n\n\n        // appending to elements\n        content.appendChild(div)\n        div.appendChild(h3)\n        div.appendChild(description)\n        div.appendChild(img)\n        \n        \n\n    }\n\n    const item1Header = document.querySelector(\".name1\")\n    const item2Header = document.querySelector(\".name2\")\n    const item3Header = document.querySelector(\".name3\")\n\n    const item1Des = document.querySelector(\".item1\")\n    const item2Des = document.querySelector(\".item2\")\n    const item3Des = document.querySelector(\".item3\")\n\n    const item1Img = document.querySelector(\".img1\")\n    const item2Img = document.querySelector(\".img2\")\n    const item3Img = document.querySelector(\".img3\")\n\n    item1Header.innerHTML = \"Classic Chopped Cheese\"\n    item2Header.innerHTML = \"Spicy Chopped Cheese\"\n    item3Header.innerHTML = \"BBQ Bacon Chopped Cheese\"\n\n    item1Des.innerHTML = \"The OG sandwich that started it all—seasoned ground beef chopped and grilled with onions, melted American cheese, stuffed into a toasted hero roll with lettuce, tomato, and mayo.\"\n    item2Des.innerHTML = \"Kick it up a notch with spicy ground beef mixed with jalapeños, topped with pepper jack cheese, and served on a toasted roll with hot sauce, pickles, and a smear of chipotle mayo.\"\n    item3Des.innerHTML = \"A smoky twist featuring chopped beef glazed with tangy BBQ sauce, crispy bacon strips, cheddar cheese, and crunchy onions, all packed into a soft, toasted bun.\"\n\n    item1Img.src = \"https://images.squarespace-cdn.com/content/62227f3fe1583d580047c391/1675270594300-JD48OMWNGZ3KEZFKLDP7/DSC04309.jpg?format=1500w&content-type=image%2Fjpeg\"\n    item2Img.src = \"https://i.pinimg.com/originals/15/4a/9c/154a9c599403cc4e97fa7cedb0b34a93.jpg\"\n    item3Img.src = \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F10%2Febrahim-mohamed-bodega-chopped-cheese-bacon.jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=f2b17520159798a7a6b121c1f0fb231cdbe8b79ac88f723e48ff0a040bf690fd&ipo=images\"\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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