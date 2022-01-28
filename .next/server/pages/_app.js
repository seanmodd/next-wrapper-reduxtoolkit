"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/data/apollo.js":
/*!****************************!*\
  !*** ./src/data/apollo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApolloClient\": () => (/* binding */ getApolloClient),\n/* harmony export */   \"CARSQUERY\": () => (/* binding */ CARSQUERY)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isServer = \"undefined\" === 'undefined';\nconst windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;\nlet CLIENT;\nfunction getApolloClient(forceNew) {\n    if (!CLIENT || forceNew) {\n        CLIENT = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n            ssrMode: isServer,\n            uri: 'https://api.shopcarx.com/graphql',\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache().restore(windowApolloState || {})\n        });\n    }\n    return CLIENT;\n}\nconst CARSQUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query Variants {\n    variants(limit: 1000) {\n      year\n      vin: car_vin\n      make\n      model\n      status: vehicle_status\n      dealership: car_dealership\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hcG9sbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUVqRSxLQUFLLENBQUNHLFFBQVEsR0FBRyxDQUFhLGVBQUssQ0FBVztBQUM5QyxLQUFLLENBQUNDLGlCQUFpQixJQUFJRCxRQUFRLElBQUlFLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxXQUFXO0FBRXZFLEdBQUcsQ0FBQ0MsTUFBTTtBQUVILFNBQVNDLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDekMsRUFBRSxHQUFHRixNQUFNLElBQUlFLFFBQVEsRUFBRSxDQUFDO1FBQ3hCRixNQUFNLEdBQUcsR0FBRyxDQUFDUix3REFBWSxDQUFDLENBQUM7WUFDekJXLE9BQU8sRUFBRVIsUUFBUTtZQUNqQlMsR0FBRyxFQUFFLENBQWtDO1lBQ3ZDQyxLQUFLLEVBQUUsR0FBRyxDQUFDWix5REFBYSxHQUFHYSxPQUFPLENBQUNWLGlCQUFpQixJQUFJLENBQUMsQ0FBQztRQWlCNUQsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNJLE1BQU07QUFDZixDQUFDO0FBRU0sS0FBSyxDQUFDTyxTQUFTLEdBQUdiLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7O0FBVzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1yZWR1eC10b29sa2l0Ly4vc3JjL2RhdGEvYXBvbGxvLmpzPzA4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5jb25zdCB3aW5kb3dBcG9sbG9TdGF0ZSA9ICFpc1NlcnZlciAmJiB3aW5kb3cuX19ORVhUX0RBVEFfXy5hcG9sbG9TdGF0ZTtcblxubGV0IENMSUVOVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwb2xsb0NsaWVudChmb3JjZU5ldykge1xuICBpZiAoIUNMSUVOVCB8fCBmb3JjZU5ldykge1xuICAgIENMSUVOVCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgc3NyTW9kZTogaXNTZXJ2ZXIsXG4gICAgICB1cmk6ICdodHRwczovL2FwaS5zaG9wY2FyeC5jb20vZ3JhcGhxbCcsXG4gICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKHdpbmRvd0Fwb2xsb1N0YXRlIHx8IHt9KSxcblxuICAgICAgLyoqXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyB0byBkaXNhYmxlIFNTUiBmb3IgYWxsIHF1ZXJpZXMuXG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgLy8gU2tpcCBxdWVyaWVzIHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9kYXRhL3F1ZXJpZXMvI3NzclxuICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgIHNzcjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBzc3I6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNlbGVjdGl2ZWx5IGVuYWJsZSBzcGVjaWZpYyBxdWVyaWVzIGxpa2Ugc286XG4gICAgICAgICAgLy8gYHVzZVF1ZXJ5KFFVRVJZLCB7IHNzcjogdHJ1ZSB9KTtgXG4gICAgICAgIH1cbiAgICAgICovXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQ0xJRU5UO1xufVxuXG5leHBvcnQgY29uc3QgQ0FSU1FVRVJZID0gZ3FsYFxuICBxdWVyeSBWYXJpYW50cyB7XG4gICAgdmFyaWFudHMobGltaXQ6IDEwMDApIHtcbiAgICAgIHllYXJcbiAgICAgIHZpbjogY2FyX3ZpblxuICAgICAgbWFrZVxuICAgICAgbW9kZWxcbiAgICAgIHN0YXR1czogdmVoaWNsZV9zdGF0dXNcbiAgICAgIGRlYWxlcnNoaXA6IGNhcl9kZWFsZXJzaGlwXG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJncWwiLCJpc1NlcnZlciIsIndpbmRvd0Fwb2xsb1N0YXRlIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsImFwb2xsb1N0YXRlIiwiQ0xJRU5UIiwiZ2V0QXBvbGxvQ2xpZW50IiwiZm9yY2VOZXciLCJzc3JNb2RlIiwidXJpIiwiY2FjaGUiLCJyZXN0b3JlIiwiQ0FSU1FVRVJZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/apollo.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/store.jsx\");\n/* harmony import */ var _data_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/apollo */ \"./src/data/apollo.js\");\n\n\n\n\n\n// import { getApolloClient } from '../slices/toolkitSliceAndApollo';\n\nfunction MyApp({ Component , pageProps  }) {\n    const client = (0,_data_apollo__WEBPACK_IMPORTED_MODULE_5__.getApolloClient)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _store__WEBPACK_IMPORTED_MODULE_4__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/seanmodd/Dev/2022/GitHubYouTube/next-with-redux-toolkit/src/pages/_app.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanmodd/Dev/2022/GitHubYouTube/next-with-redux-toolkit/src/pages/_app.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanmodd/Dev/2022/GitHubYouTube/next-with-redux-toolkit/src/pages/_app.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDUztBQUNmO0FBQ2hDLEVBQXFFO0FBQ3JCO1NBRXZDSyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLENBQUNDLE1BQU0sR0FBR0osNkRBQWU7SUFDOUIsTUFBTSw2RUFDSEYsMERBQWM7UUFBQ00sTUFBTSxFQUFFQSxNQUFNOzhGQUMzQlAsaURBQVE7WUFBQ0UsS0FBSyxFQUFFQSx5Q0FBSztrR0FDbkJHLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuLy8gaW1wb3J0IHsgZ2V0QXBvbGxvQ2xpZW50IH0gZnJvbSAnLi4vc2xpY2VzL3Rvb2xraXRTbGljZUFuZEFwb2xsbyc7XG5pbXBvcnQgeyBnZXRBcG9sbG9DbGllbnQgfSBmcm9tICcuLi9kYXRhL2Fwb2xsbyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBjbGllbnQgPSBnZXRBcG9sbG9DbGllbnQoKTtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwic3RvcmUiLCJnZXRBcG9sbG9DbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/slices/toolkitSliceAndApollo.js":
/*!*********************************************!*\
  !*** ./src/slices/toolkitSliceAndApollo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"reset\": () => (/* binding */ reset),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getApolloClient\": () => (/* binding */ getApolloClient),\n/* harmony export */   \"CARSQUERY\": () => (/* binding */ CARSQUERY)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    value: 0\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'counter',\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            state.value += 1;\n            console.log('state of counter', state.value);\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        reset: (state)=>{\n            state.value = 0;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n}); // reducer\nconst { increment , decrement , reset , incrementByAmount ,  } = counterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\nconst isServer = \"undefined\" === 'undefined';\nconst windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;\nlet CLIENT;\nfunction getApolloClient(forceNew) {\n    if (!CLIENT || forceNew) {\n        CLIENT = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n            ssrMode: isServer,\n            uri: 'https://api.shopcarx.com/graphql',\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache().restore(windowApolloState || {})\n        });\n    }\n    return CLIENT;\n}\nconst CARSQUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query Variants {\n    variants(limit: 1000) {\n      year\n      vin: car_vin\n      make\n      model\n      status: vehicle_status\n      dealership: car_dealership\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL3Rvb2xraXRTbGljZUFuZEFwb2xsby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFHdkI7QUFFdkIsS0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsS0FBSyxFQUFFLENBQUM7QUFFVixDQUFDO0FBQ00sS0FBSyxDQUFDQyxZQUFZLEdBQUdQLDZEQUFXLENBQUMsQ0FBQztJQUN2Q1EsSUFBSSxFQUFFLENBQVM7SUFDZkgsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxTQUFTLEdBQUdDLEtBQUssR0FBSyxDQUFDO1lBQ3JCQSxLQUFLLENBQUNMLEtBQUssSUFBSSxDQUFDO1lBQ2hCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFrQixtQkFBRUYsS0FBSyxDQUFDTCxLQUFLO1FBQzdDLENBQUM7UUFDRFEsU0FBUyxHQUFHSCxLQUFLLEdBQUssQ0FBQztZQUNyQkEsS0FBSyxDQUFDTCxLQUFLLElBQUksQ0FBQztRQUNsQixDQUFDO1FBQ0RTLEtBQUssR0FBR0osS0FBSyxHQUFLLENBQUM7WUFDakJBLEtBQUssQ0FBQ0wsS0FBSyxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUNEVSxpQkFBaUIsR0FBR0wsS0FBSyxFQUFFTSxNQUFNLEdBQUssQ0FBQztZQUNyQ04sS0FBSyxDQUFDTCxLQUFLLElBQUlXLE1BQU0sQ0FBQ0MsT0FBTztRQUMvQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsRUFBRyxDQUFVO0FBRVAsS0FBSyxDQUFDLENBQUMsQ0FDWlIsU0FBUyxHQUFFSSxTQUFTLEdBQUVDLEtBQUssR0FBRUMsaUJBQWlCLElBQ2hELENBQUMsR0FBR1QsWUFBWSxDQUFDWSxPQUFPO0FBQ3hCLGlFQUFlWixZQUFZLENBQUNhLE9BQU8sRUFBQztBQUVwQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFhLGVBQUssQ0FBVztBQUM5QyxLQUFLLENBQUNDLGlCQUFpQixJQUFJRCxRQUFRLElBQUlFLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxXQUFXO0FBRXZFLEdBQUcsQ0FBQ0MsTUFBTTtBQUVILFNBQVNDLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDekMsRUFBRSxHQUFHRixNQUFNLElBQUlFLFFBQVEsRUFBRSxDQUFDO1FBQ3hCRixNQUFNLEdBQUcsR0FBRyxDQUFDekIsd0RBQVksQ0FBQyxDQUFDO1lBQ3pCNEIsT0FBTyxFQUFFUixRQUFRO1lBQ2pCUyxHQUFHLEVBQUUsQ0FBa0M7WUFDdkNDLEtBQUssRUFBRSxHQUFHLENBQUM3Qix5REFBYSxHQUFHOEIsT0FBTyxDQUFDVixpQkFBaUIsSUFBSSxDQUFDLENBQUM7UUFpQjVELENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDSSxNQUFNO0FBQ2YsQ0FBQztBQUVNLEtBQUssQ0FBQ08sU0FBUyxHQUFHN0IsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL3Rvb2xraXRTbGljZUFuZEFwb2xsby5qcz85NDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIHVzZVF1ZXJ5LCBncWwsXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB2YWx1ZTogMCxcblxufTtcbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb3VudGVyJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSArPSAxO1xuICAgICAgY29uc29sZS5sb2coJ3N0YXRlIG9mIGNvdW50ZXInLCBzdGF0ZS52YWx1ZSk7XG4gICAgfSxcbiAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgLT0gMTtcbiAgICB9LFxuICAgIHJlc2V0OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlID0gMDtcbiAgICB9LFxuICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pOyAvLyByZWR1Y2VyXG5cbmV4cG9ydCBjb25zdCB7XG4gIGluY3JlbWVudCwgZGVjcmVtZW50LCByZXNldCwgaW5jcmVtZW50QnlBbW91bnQsXG59ID0gY291bnRlclNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU2xpY2UucmVkdWNlcjtcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmNvbnN0IHdpbmRvd0Fwb2xsb1N0YXRlID0gIWlzU2VydmVyICYmIHdpbmRvdy5fX05FWFRfREFUQV9fLmFwb2xsb1N0YXRlO1xuXG5sZXQgQ0xJRU5UO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBvbGxvQ2xpZW50KGZvcmNlTmV3KSB7XG4gIGlmICghQ0xJRU5UIHx8IGZvcmNlTmV3KSB7XG4gICAgQ0xJRU5UID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBzc3JNb2RlOiBpc1NlcnZlcixcbiAgICAgIHVyaTogJ2h0dHBzOi8vYXBpLnNob3BjYXJ4LmNvbS9ncmFwaHFsJyxcbiAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUod2luZG93QXBvbGxvU3RhdGUgfHwge30pLFxuXG4gICAgICAvKipcbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIHRvIGRpc2FibGUgU1NSIGZvciBhbGwgcXVlcmllcy5cbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAvLyBTa2lwIHF1ZXJpZXMgd2hlbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2RhdGEvcXVlcmllcy8jc3NyXG4gICAgICAgICAgd2F0Y2hRdWVyeToge1xuICAgICAgICAgICAgc3NyOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHNzcjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2VsZWN0aXZlbHkgZW5hYmxlIHNwZWNpZmljIHF1ZXJpZXMgbGlrZSBzbzpcbiAgICAgICAgICAvLyBgdXNlUXVlcnkoUVVFUlksIHsgc3NyOiB0cnVlIH0pO2BcbiAgICAgICAgfVxuICAgICAgKi9cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBDTElFTlQ7XG59XG5cbmV4cG9ydCBjb25zdCBDQVJTUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFZhcmlhbnRzIHtcbiAgICB2YXJpYW50cyhsaW1pdDogMTAwMCkge1xuICAgICAgeWVhclxuICAgICAgdmluOiBjYXJfdmluXG4gICAgICBtYWtlXG4gICAgICBtb2RlbFxuICAgICAgc3RhdHVzOiB2ZWhpY2xlX3N0YXR1c1xuICAgICAgZGVhbGVyc2hpcDogY2FyX2RlYWxlcnNoaXBcbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwidXNlUXVlcnkiLCJncWwiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRlY3JlbWVudCIsInJlc2V0IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJpc1NlcnZlciIsIndpbmRvd0Fwb2xsb1N0YXRlIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsImFwb2xsb1N0YXRlIiwiQ0xJRU5UIiwiZ2V0QXBvbGxvQ2xpZW50IiwiZm9yY2VOZXciLCJzc3JNb2RlIiwidXJpIiwiY2FjaGUiLCJyZXN0b3JlIiwiQ0FSU1FVRVJZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/toolkitSliceAndApollo.js\n");

/***/ }),

/***/ "./src/store.jsx":
/*!***********************!*\
  !*** ./src/store.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_toolkitSliceAndApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/toolkitSliceAndApollo */ \"./src/slices/toolkitSliceAndApollo.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        counter: _slices_toolkitSliceAndApollo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDVTtBQUVwRCxLQUFLLENBQUNFLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQyxDQUFDO0lBQ25DRyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxPQUFPLEVBQUVILHFFQUFjO0lBQ3pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1yZWR1eC10b29sa2l0Ly4vc3JjL3N0b3JlLmpzeD9iNjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSAnLi9zbGljZXMvdG9vbGtpdFNsaWNlQW5kQXBvbGxvJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgY291bnRlcjogY291bnRlclJlZHVjZXIsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNvdW50ZXJSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiY291bnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.jsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();