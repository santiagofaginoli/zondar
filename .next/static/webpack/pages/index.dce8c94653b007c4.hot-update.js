"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Contador.js":
/*!********************************!*\
  !*** ./components/Contador.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Counter = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"days\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, _this),\n                \" d\\xedas / \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"hours\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n                    lineNumber: 7,\n                    columnNumber: 48\n                }, _this),\n                \" horas / \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"minutes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n                    lineNumber: 7,\n                    columnNumber: 81\n                }, _this),\n                \" minutos / \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"seconds\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n                    lineNumber: 7,\n                    columnNumber: 118\n                }, _this),\n                \" segundos\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\julia\\\\OneDrive\\\\Escritorio\\\\zondarrr\\\\estoy-arto-main\\\\components\\\\Contador.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    var updateCountdown = //===\n    // FUNCTIONS\n    //===\n    /**\r\n    * Method that updates the countdown and the sample\r\n    */ function updateCountdown() {\n        // Calcs\n        var NOW = new Date();\n        var DURATION = DATE_TARGET - NOW;\n        var REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);\n        var REMAINING_HOURS = Math.floor(DURATION % MILLISECONDS_OF_A_DAY / MILLISECONDS_OF_A_HOUR);\n        var REMAINING_MINUTES = Math.floor(DURATION % MILLISECONDS_OF_A_HOUR / MILLISECONDS_OF_A_MINUTE);\n        var REMAINING_SECONDS = Math.floor(DURATION % MILLISECONDS_OF_A_MINUTE / MILLISECONDS_OF_A_SECOND);\n        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)\n        // Render\n        SPAN_DAYS.textContent = REMAINING_DAYS;\n        SPAN_HOURS.textContent = REMAINING_HOURS;\n        SPAN_MINUTES.textContent = REMAINING_MINUTES;\n        SPAN_SECONDS.textContent = REMAINING_SECONDS;\n    };\n    //===\n    // VARIABLES\n    //===\n    var DATE_TARGET = new Date(\"11/13/2022 0:01 AM\");\n    // DOM for render\n    var SPAN_DAYS = document.querySelector(\"span#days\");\n    var SPAN_HOURS = document.querySelector(\"span#hours\");\n    var SPAN_MINUTES = document.querySelector(\"span#minutes\");\n    var SPAN_SECONDS = document.querySelector(\"span#seconds\");\n    // Milliseconds for the calculations\n    var MILLISECONDS_OF_A_SECOND = 1000;\n    var MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;\n    var MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;\n    var MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;\n    //===\n    // INIT\n    //===\n    updateCountdown();\n    // Refresh every second\n    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);\n});\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhZG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBRTFCLElBQU1DLE9BQU8sR0FBRyxXQUFNO0lBQ2xCLHFCQUNJLDhEQUFDQyxTQUFPO2tCQUNKLDRFQUFDQyxHQUFDOzs4QkFDRSw4REFBQ0MsTUFBSTtvQkFBQ0MsRUFBRSxFQUFDLE1BQU07Ozs7O3lCQUFRO2dCQUFBLGFBQVE7OEJBQUEsOERBQUNELE1BQUk7b0JBQUNDLEVBQUUsRUFBQyxPQUFPOzs7Ozt5QkFBUTtnQkFBQSxXQUFTOzhCQUFBLDhEQUFDRCxNQUFJO29CQUFDQyxFQUFFLEVBQUMsU0FBUzs7Ozs7eUJBQVE7Z0JBQUEsYUFBVzs4QkFBQSw4REFBQ0QsTUFBSTtvQkFBQ0MsRUFBRSxFQUFDLFNBQVM7Ozs7O3lCQUFRO2dCQUFBLFdBQ25JOzs7Ozs7aUJBQUk7Ozs7O2FBQ0UsQ0FDWDtBQUNQLENBQUM7QUFSS0osS0FBQUEsT0FBTztBQVViLCtEQUFlQSxPQUFPLEVBQUU7QUFFeEJLLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsV0FBTTtRQXdCdkNDLGVBQWUsR0FQeEIsS0FBSztJQUNMLFlBQVk7SUFDWixLQUFLO0lBRUw7UUFJSSxRQUFRO1FBQ1IsSUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUksRUFBRTtRQUN0QixJQUFNQztRQUNOLElBQU1FLGNBQWMsR0FBR0M7UUFDdkIsSUFBTUcsZUFBZSxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQztRQUNuQyxJQUFNSSxpQkFBaUIsR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUMsUUFBUyxHQUFHRztRQUNqRCxJQUFNRyxpQkFBaUIsR0FBR1AsSUFBSSxDQUFDQyxLQUFLLENBQUMsUUFBUyxHQUFHSyx3QkFBd0IsR0FBSUU7UUFDN0UsMEVBQTBFO1FBRTFFLFNBQVM7UUFDVEMsU0FBUyxDQUFDQyxXQUFXLEdBQUdYLGNBQWMsQ0FBQztRQUN2Q1k7UUFDQUMsWUFBWSxDQUFDRixXQUFXLEdBQUdMO1FBQzNCUSxZQUFZLENBQUNILFdBQVcsR0FBR0g7SUFDL0IsQ0FBQztJQXJDRCxLQUFLO0lBQ0w7SUFDQSxLQUFLO0lBQ0wsSUFBTVQ7SUFDTjtJQUNBLElBQU1XLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQztJQUN6QyxJQUFNSCxVQUFVLEdBQUduQjtJQUNuQixJQUFNb0IsWUFBWSxHQUFHcEIsUUFBUSxDQUFDc0IsYUFBYSxDQUFDO0lBQzVDLElBQU1ELFlBQVksR0FBR3JCLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQztJQUM1QyxvQ0FBb0M7SUFDcEMsSUFBTU4sd0JBQXdCLEdBQUcsSUFBSTtJQUNyQyxJQUFNRix3QkFBd0IsR0FBR0U7SUFDakMsSUFBTUosc0JBQXNCLEdBQUdFO0lBQy9CLElBQU1KLHFCQUFxQixHQUFHRSxzQkFBc0IsR0FBRyxFQUFFO0lBMEJ6RCxLQUFLO0lBQ0wsT0FBTztJQUNQLEtBQUs7SUFDTFY7SUFDQTtJQUNBcUIsV0FBVyxDQUFDckI7QUFDaEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWRvci5qcz9hMDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJkYXlzXCI+PC9zcGFuPiBkw61hcyAvIDxzcGFuIGlkPVwiaG91cnNcIj48L3NwYW4+IGhvcmFzIC8gPHNwYW4gaWQ9XCJtaW51dGVzXCI+PC9zcGFuPiBtaW51dG9zIC8gPHNwYW4gaWQ9XCJzZWNvbmRzXCI+PC9zcGFuPiBzZWd1bmRvc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPiBcclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlciA7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBcclxuXHJcbiAgICAvLz09PVxyXG4gICAgLy8gVkFSSUFCTEVTXHJcbiAgICAvLz09PVxyXG4gICAgY29uc3QgREFURV9UQVJHRVQgPSBuZXcgRGF0ZSgnMTEvMTMvMjAyMiAwOjAxIEFNJyk7XHJcbiAgICAvLyBET00gZm9yIHJlbmRlclxyXG4gICAgY29uc3QgU1BBTl9EQVlTID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbiNkYXlzJyk7XHJcbiAgICBjb25zdCBTUEFOX0hPVVJTID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbiNob3VycycpO1xyXG4gICAgY29uc3QgU1BBTl9NSU5VVEVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbiNtaW51dGVzJyk7XHJcbiAgICBjb25zdCBTUEFOX1NFQ09ORFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuI3NlY29uZHMnKTtcclxuICAgIC8vIE1pbGxpc2Vjb25kcyBmb3IgdGhlIGNhbGN1bGF0aW9uc1xyXG4gICAgY29uc3QgTUlMTElTRUNPTkRTX09GX0FfU0VDT05EID0gMTAwMDtcclxuICAgIGNvbnN0IE1JTExJU0VDT05EU19PRl9BX01JTlVURSA9IE1JTExJU0VDT05EU19PRl9BX1NFQ09ORCAqIDYwO1xyXG4gICAgY29uc3QgTUlMTElTRUNPTkRTX09GX0FfSE9VUiA9IE1JTExJU0VDT05EU19PRl9BX01JTlVURSAqIDYwO1xyXG4gICAgY29uc3QgTUlMTElTRUNPTkRTX09GX0FfREFZID0gTUlMTElTRUNPTkRTX09GX0FfSE9VUiAqIDI0XHJcblxyXG4gICAgLy89PT1cclxuICAgIC8vIEZVTkNUSU9OU1xyXG4gICAgLy89PT1cclxuXHJcbiAgICAvKipcclxuICAgICogTWV0aG9kIHRoYXQgdXBkYXRlcyB0aGUgY291bnRkb3duIGFuZCB0aGUgc2FtcGxlXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ291bnRkb3duKCkge1xyXG4gICAgICAgIC8vIENhbGNzXHJcbiAgICAgICAgY29uc3QgTk9XID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IERVUkFUSU9OID0gREFURV9UQVJHRVQgLSBOT1c7XHJcbiAgICAgICAgY29uc3QgUkVNQUlOSU5HX0RBWVMgPSBNYXRoLmZsb29yKERVUkFUSU9OIC8gTUlMTElTRUNPTkRTX09GX0FfREFZKTtcclxuICAgICAgICBjb25zdCBSRU1BSU5JTkdfSE9VUlMgPSBNYXRoLmZsb29yKChEVVJBVElPTiAlIE1JTExJU0VDT05EU19PRl9BX0RBWSkgLyBNSUxMSVNFQ09ORFNfT0ZfQV9IT1VSKTtcclxuICAgICAgICBjb25zdCBSRU1BSU5JTkdfTUlOVVRFUyA9IE1hdGguZmxvb3IoKERVUkFUSU9OICUgTUlMTElTRUNPTkRTX09GX0FfSE9VUikgLyBNSUxMSVNFQ09ORFNfT0ZfQV9NSU5VVEUpO1xyXG4gICAgICAgIGNvbnN0IFJFTUFJTklOR19TRUNPTkRTID0gTWF0aC5mbG9vcigoRFVSQVRJT04gJSBNSUxMSVNFQ09ORFNfT0ZfQV9NSU5VVEUpIC8gTUlMTElTRUNPTkRTX09GX0FfU0VDT05EKTtcclxuICAgICAgICAvLyBUaGFua3MgUGFibG8gTW9udGVzZXLDrW4gKGh0dHBzOi8vcGFibG9tb250ZXNlcmluLmNvbS9jdWVudGEtcmVncmVzaXZhLylcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyXHJcbiAgICAgICAgU1BBTl9EQVlTLnRleHRDb250ZW50ID0gUkVNQUlOSU5HX0RBWVM7XHJcbiAgICAgICAgU1BBTl9IT1VSUy50ZXh0Q29udGVudCA9IFJFTUFJTklOR19IT1VSUztcclxuICAgICAgICBTUEFOX01JTlVURVMudGV4dENvbnRlbnQgPSBSRU1BSU5JTkdfTUlOVVRFUztcclxuICAgICAgICBTUEFOX1NFQ09ORFMudGV4dENvbnRlbnQgPSBSRU1BSU5JTkdfU0VDT05EUztcclxuICAgIH1cclxuXHJcbiAgICAvLz09PVxyXG4gICAgLy8gSU5JVFxyXG4gICAgLy89PT1cclxuICAgIHVwZGF0ZUNvdW50ZG93bigpO1xyXG4gICAgLy8gUmVmcmVzaCBldmVyeSBzZWNvbmRcclxuICAgIHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgTUlMTElTRUNPTkRTX09GX0FfU0VDT05EKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJzZWN0aW9uIiwicCIsInNwYW4iLCJpZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZUNvdW50ZG93biIsIk5PVyIsIkRhdGUiLCJEVVJBVElPTiIsIkRBVEVfVEFSR0VUIiwiUkVNQUlOSU5HX0RBWVMiLCJNYXRoIiwiZmxvb3IiLCJNSUxMSVNFQ09ORFNfT0ZfQV9EQVkiLCJSRU1BSU5JTkdfSE9VUlMiLCJNSUxMSVNFQ09ORFNfT0ZfQV9IT1VSIiwiUkVNQUlOSU5HX01JTlVURVMiLCJNSUxMSVNFQ09ORFNfT0ZfQV9NSU5VVEUiLCJSRU1BSU5JTkdfU0VDT05EUyIsIk1JTExJU0VDT05EU19PRl9BX1NFQ09ORCIsIlNQQU5fREFZUyIsInRleHRDb250ZW50IiwiU1BBTl9IT1VSUyIsIlNQQU5fTUlOVVRFUyIsIlNQQU5fU0VDT05EUyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contador.js\n"));

/***/ })

});