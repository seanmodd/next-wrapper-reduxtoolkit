"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/counterSlice.js":
/*!************************************!*\
  !*** ./src/slices/counterSlice.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": function() { return /* binding */ counterSlice; },\n/* harmony export */   \"increment\": function() { return /* binding */ increment; },\n/* harmony export */   \"decrement\": function() { return /* binding */ decrement; },\n/* harmony export */   \"reset\": function() { return /* binding */ reset; },\n/* harmony export */   \"incrementByAmount\": function() { return /* binding */ incrementByAmount; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n    value: 0\n};\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'counter',\n    initialState: initialState,\n    reducers: {\n        increment: function(state) {\n            state.value += 1;\n            console.log('state of ');\n        },\n        decrement: function(state) {\n            state.value -= 1;\n        },\n        reset: function(state) {\n            state.value = 0;\n        },\n        incrementByAmount: function(state, action) {\n            state.value += action.payload;\n        }\n    }\n}); // reducer\nvar _actions = counterSlice.actions;\nvar increment = _actions.increment, decrement = _actions.decrement, reset = _actions.reset, incrementByAmount = _actions.incrementByAmount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterSlice.reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2NvdW50ZXJTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBRTlDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxDQUFDO0FBRVYsQ0FBQztBQUNNLEdBQUssQ0FBQ0MsWUFBWSxHQUFHSCw2REFBVyxDQUFDLENBQUM7SUFDdkNJLElBQUksRUFBRSxDQUFTO0lBQ2ZILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxTQUFTLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztZQUNyQkEsS0FBSyxDQUFDTCxLQUFLLElBQUksQ0FBQztZQUNoQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVztRQUN6QixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxRQUFRLENBQVBILEtBQUssRUFBSyxDQUFDO1lBQ3JCQSxLQUFLLENBQUNMLEtBQUssSUFBSSxDQUFDO1FBQ2xCLENBQUM7UUFDRFMsS0FBSyxFQUFFLFFBQVEsQ0FBUEosS0FBSyxFQUFLLENBQUM7WUFDakJBLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUNEVSxpQkFBaUIsRUFBRSxRQUFRQyxDQUFQTixLQUFLLEVBQUVNLE1BQU0sRUFBSyxDQUFDO1lBQ3JDTixLQUFLLENBQUNMLEtBQUssSUFBSVcsTUFBTSxDQUFDQyxPQUFPO1FBQy9CLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFHLENBQVU7SUFJVlgsUUFBb0IsR0FBcEJBLFlBQVksQ0FBQ1ksT0FBTztBQUZqQixHQUFLLENBQ1ZULFNBQVMsR0FDUEgsUUFBb0IsQ0FEdEJHLFNBQVMsRUFBRUksU0FBUyxHQUNsQlAsUUFBb0IsQ0FEWE8sU0FBUyxFQUFFQyxLQUFLLEdBQ3pCUixRQUFvQixDQURBUSxLQUFLLEVBQUVDLGlCQUFpQixHQUM1Q1QsUUFBb0IsQ0FET1MsaUJBQWlCO0FBRWhELCtEQUFlVCxZQUFZLENBQUNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2xpY2VzL2NvdW50ZXJTbGljZS5qcz9kMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdmFsdWU6IDAsXG5cbn07XG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgKz0gMTtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZSBvZiAnKTtcbiAgICB9LFxuICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSAtPSAxO1xuICAgIH0sXG4gICAgcmVzZXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgPSAwO1xuICAgIH0sXG4gICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7IC8vIHJlZHVjZXJcblxuZXhwb3J0IGNvbnN0IHtcbiAgaW5jcmVtZW50LCBkZWNyZW1lbnQsIHJlc2V0LCBpbmNyZW1lbnRCeUFtb3VudCxcbn0gPSBjb3VudGVyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWNyZW1lbnQiLCJyZXNldCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/counterSlice.js\n");

/***/ })

});