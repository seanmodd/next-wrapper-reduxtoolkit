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

/***/ "./src/slices/toolkitSliceAndApollo.js":
/*!*********************************************!*\
  !*** ./src/slices/toolkitSliceAndApollo.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": function() { return /* binding */ counterSlice; },\n/* harmony export */   \"increment\": function() { return /* binding */ increment; },\n/* harmony export */   \"decrement\": function() { return /* binding */ decrement; },\n/* harmony export */   \"reset\": function() { return /* binding */ reset; },\n/* harmony export */   \"incrementByAmount\": function() { return /* binding */ incrementByAmount; },\n/* harmony export */   \"getApolloClient\": function() { return /* binding */ getApolloClient; },\n/* harmony export */   \"CARSQUERY\": function() { return /* binding */ CARSQUERY; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query Variants {\\n    variants(limit: 1000) {\\n      year\\n      vin: car_vin\\n      make\\n      model\\n      status: vehicle_status\\n      dealership: car_dealership\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar initialState = {\n    value: 0\n};\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'counter',\n    initialState: initialState,\n    reducers: {\n        increment: function(state) {\n            state.value += 1;\n            console.log('state of counter', state.value);\n        },\n        decrement: function(state) {\n            state.value -= 1;\n        },\n        reset: function(state) {\n            state.value = 0;\n        },\n        incrementByAmount: function(state, action) {\n            state.value += action.payload;\n        }\n    }\n}); // reducer\nvar _actions = counterSlice.actions;\nvar increment = _actions.increment, decrement = _actions.decrement, reset = _actions.reset, incrementByAmount = _actions.incrementByAmount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterSlice.reducer);\nvar isServer = \"object\" === 'undefined';\nvar windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;\nvar CLIENT;\nfunction getApolloClient(forceNew) {\n    if (!CLIENT || forceNew) {\n        CLIENT = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n            ssrMode: isServer,\n            // uri: 'https://api.shopcarx.com/graphql',\n            uri: 'http://localhost:1337/graphql',\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache().restore(windowApolloState || {})\n        });\n    }\n    return CLIENT;\n}\nvar CARSQUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL3Rvb2xraXRTbGljZUFuZEFwb2xsby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBR3ZCOzs7Ozs7Ozs7Ozs7O1FBaUVNLENBVzdCOzs7Ozs7O0FBMUVBLEdBQUssQ0FBQ0ssWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxDQUFDO0FBRVYsQ0FBQztBQUNNLEdBQUssQ0FBQ0MsWUFBWSxHQUFHUCw2REFBVyxDQUFDLENBQUM7SUFDdkNRLElBQUksRUFBRSxDQUFTO0lBQ2ZILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxTQUFTLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztZQUNyQkEsS0FBSyxDQUFDTCxLQUFLLElBQUksQ0FBQztZQUNoQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBa0IsbUJBQUVGLEtBQUssQ0FBQ0wsS0FBSztRQUM3QyxDQUFDO1FBQ0RRLFNBQVMsRUFBRSxRQUFRLENBQVBILEtBQUssRUFBSyxDQUFDO1lBQ3JCQSxLQUFLLENBQUNMLEtBQUssSUFBSSxDQUFDO1FBQ2xCLENBQUM7UUFDRFMsS0FBSyxFQUFFLFFBQVEsQ0FBUEosS0FBSyxFQUFLLENBQUM7WUFDakJBLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUNEVSxpQkFBaUIsRUFBRSxRQUFRQyxDQUFQTixLQUFLLEVBQUVNLE1BQU0sRUFBSyxDQUFDO1lBQ3JDTixLQUFLLENBQUNMLEtBQUssSUFBSVcsTUFBTSxDQUFDQyxPQUFPO1FBQy9CLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFHLENBQVU7SUFJVlgsUUFBb0IsR0FBcEJBLFlBQVksQ0FBQ1ksT0FBTztBQUZqQixHQUFLLENBQ1ZULFNBQVMsR0FDUEgsUUFBb0IsQ0FEdEJHLFNBQVMsRUFBRUksU0FBUyxHQUNsQlAsUUFBb0IsQ0FEWE8sU0FBUyxFQUFFQyxLQUFLLEdBQ3pCUixRQUFvQixDQURBUSxLQUFLLEVBQUVDLGlCQUFpQixHQUM1Q1QsUUFBb0IsQ0FET1MsaUJBQWlCO0FBRWhELCtEQUFlVCxZQUFZLENBQUNhLE9BQU8sRUFBQztBQUVwQyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFhLFlBQUssQ0FBVztBQUM5QyxHQUFLLENBQUNDLGlCQUFpQixJQUFJRCxRQUFRLElBQUlFLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxXQUFXO0FBRXZFLEdBQUcsQ0FBQ0MsTUFBTTtBQUVILFNBQVNDLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDekMsRUFBRSxHQUFHRixNQUFNLElBQUlFLFFBQVEsRUFBRSxDQUFDO1FBQ3hCRixNQUFNLEdBQUcsR0FBRyxDQUFDekIsd0RBQVksQ0FBQyxDQUFDO1lBQ3pCNEIsT0FBTyxFQUFFUixRQUFRO1lBQ2pCLEVBQTJDO1lBQzNDUyxHQUFHLEVBQUUsQ0FBK0I7WUFDcENDLEtBQUssRUFBRSxHQUFHLENBQUM3Qix5REFBYSxHQUFHOEIsT0FBTyxDQUFDVixpQkFBaUIsSUFBSSxDQUFDLENBQUM7UUFpQjVELENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDSSxNQUFNO0FBQ2YsQ0FBQztBQUVNLEdBQUssQ0FBQ08sU0FBUyxHQUFHN0IsbURBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy90b29sa2l0U2xpY2VBbmRBcG9sbG8uanM/OTQwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCB1c2VRdWVyeSwgZ3FsLFxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdmFsdWU6IDAsXG5cbn07XG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgKz0gMTtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZSBvZiBjb3VudGVyJywgc3RhdGUudmFsdWUpO1xuICAgIH0sXG4gICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlIC09IDE7XG4gICAgfSxcbiAgICByZXNldDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IDA7XG4gICAgfSxcbiAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTsgLy8gcmVkdWNlclxuXG5leHBvcnQgY29uc3Qge1xuICBpbmNyZW1lbnQsIGRlY3JlbWVudCwgcmVzZXQsIGluY3JlbWVudEJ5QW1vdW50LFxufSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXI7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5jb25zdCB3aW5kb3dBcG9sbG9TdGF0ZSA9ICFpc1NlcnZlciAmJiB3aW5kb3cuX19ORVhUX0RBVEFfXy5hcG9sbG9TdGF0ZTtcblxubGV0IENMSUVOVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwb2xsb0NsaWVudChmb3JjZU5ldykge1xuICBpZiAoIUNMSUVOVCB8fCBmb3JjZU5ldykge1xuICAgIENMSUVOVCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgc3NyTW9kZTogaXNTZXJ2ZXIsXG4gICAgICAvLyB1cmk6ICdodHRwczovL2FwaS5zaG9wY2FyeC5jb20vZ3JhcGhxbCcsXG4gICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvZ3JhcGhxbCcsXG4gICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKHdpbmRvd0Fwb2xsb1N0YXRlIHx8IHt9KSxcblxuICAgICAgLyoqXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyB0byBkaXNhYmxlIFNTUiBmb3IgYWxsIHF1ZXJpZXMuXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgLy8gU2tpcCBxdWVyaWVzIHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9kYXRhL3F1ZXJpZXMvI3NzclxuICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgIHNzcjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBzc3I6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNlbGVjdGl2ZWx5IGVuYWJsZSBzcGVjaWZpYyBxdWVyaWVzIGxpa2Ugc286XG4gICAgICAgICAgLy8gYHVzZVF1ZXJ5KFFVRVJZLCB7IHNzcjogdHJ1ZSB9KTtgXG4gICAgICAgIH1cbiAgICAgICovXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQ0xJRU5UO1xufVxuXG5leHBvcnQgY29uc3QgQ0FSU1FVRVJZID0gZ3FsYFxuICBxdWVyeSBWYXJpYW50cyB7XG4gICAgdmFyaWFudHMobGltaXQ6IDEwMDApIHtcbiAgICAgIHllYXJcbiAgICAgIHZpbjogY2FyX3ZpblxuICAgICAgbWFrZVxuICAgICAgbW9kZWxcbiAgICAgIHN0YXR1czogdmVoaWNsZV9zdGF0dXNcbiAgICAgIGRlYWxlcnNoaXA6IGNhcl9kZWFsZXJzaGlwXG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsInVzZVF1ZXJ5IiwiZ3FsIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWNyZW1lbnQiLCJyZXNldCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiaXNTZXJ2ZXIiLCJ3aW5kb3dBcG9sbG9TdGF0ZSIsIndpbmRvdyIsIl9fTkVYVF9EQVRBX18iLCJhcG9sbG9TdGF0ZSIsIkNMSUVOVCIsImdldEFwb2xsb0NsaWVudCIsImZvcmNlTmV3Iiwic3NyTW9kZSIsInVyaSIsImNhY2hlIiwicmVzdG9yZSIsIkNBUlNRVUVSWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/toolkitSliceAndApollo.js\n");

/***/ })

});