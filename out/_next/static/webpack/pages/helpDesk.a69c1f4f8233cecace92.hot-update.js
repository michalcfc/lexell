/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/helpDesk",{

/***/ "./utilis/prismicQueries.js":
/*!**********************************!*\
  !*** ./utilis/prismicQueries.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryHomeContent\": function() { return /* binding */ queryHomeContent; }\n/* harmony export */ });\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prismicHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prismicHelpers */ \"./utilis/prismicHelpers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _templateObject() {\n  var data = (0,_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\nquery blogHomeQuery() {\\nallPagess(tags: \\\"help\\\") {\\n   edges {\\n      node {\\n        _meta {\\n           id   \\n          uid\\n          tags\\n        }\\n        page_title\\n        description\\n      }\\n    }\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n/*\n * Blog homepage query\n */\n\nvar blogHomeQuery = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nvar queryHomeContent = /*#__PURE__*/function () {\n  var _ref = (0,_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var previewCookie, queryOptions;\n    return _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            previewCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get('io.prismic.preview');\n            queryOptions = {\n              query: blogHomeQuery // variables: { currentPage },\n\n            };\n\n            if (previewCookie) {\n              queryOptions.context = {\n                headers: {\n                  'Prismic-ref': previewCookie\n                }\n              };\n            }\n\n            return _context.abrupt(\"return\", _prismicHelpers__WEBPACK_IMPORTED_MODULE_4__.client.query(queryOptions));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function queryHomeContent() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGlzL3ByaXNtaWNRdWVyaWVzLmpzPzFlNjAiXSwibmFtZXMiOlsiYmxvZ0hvbWVRdWVyeSIsImdxbCIsInF1ZXJ5SG9tZUNvbnRlbnQiLCJwcmV2aWV3Q29va2llIiwiQ29va2llcyIsInF1ZXJ5T3B0aW9ucyIsInF1ZXJ5IiwiY29udGV4dCIsImhlYWRlcnMiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLG9EQUFILG1CQUFuQjtBQWtCTyxJQUFNQyxnQkFBZ0I7QUFBQSxtU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJDLHlCQURzQixHQUNOQyxvREFBQSxDQUFZLG9CQUFaLENBRE07QUFHdEJDLHdCQUhzQixHQUdQO0FBQ2pCQyxtQkFBSyxFQUFFTixhQURVLENBRWpCOztBQUZpQixhQUhPOztBQVE1QixnQkFBSUcsYUFBSixFQUFtQjtBQUNmRSwwQkFBWSxDQUFDRSxPQUFiLEdBQXVCO0FBQ25CQyx1QkFBTyxFQUFFO0FBQ0wsaUNBQWVMO0FBRFY7QUFEVSxlQUF2QjtBQUtIOztBQWQyQiw2Q0FnQnJCTSx5REFBQSxDQUFhSixZQUFiLENBaEJxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkgsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCIiwiZmlsZSI6Ii4vdXRpbGlzL3ByaXNtaWNRdWVyaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi9wcmlzbWljSGVscGVycyc7XG5cbi8qXG4gKiBCbG9nIGhvbWVwYWdlIHF1ZXJ5XG4gKi9cbmNvbnN0IGJsb2dIb21lUXVlcnkgPSBncWxgXG5xdWVyeSBibG9nSG9tZVF1ZXJ5KCkge1xuYWxsUGFnZXNzKHRhZ3M6IFwiaGVscFwiKSB7XG4gICBlZGdlcyB7XG4gICAgICBub2RlIHtcbiAgICAgICAgX21ldGEge1xuICAgICAgICAgICBpZCAgIFxuICAgICAgICAgIHVpZFxuICAgICAgICAgIHRhZ3NcbiAgICAgICAgfVxuICAgICAgICBwYWdlX3RpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gO1xuXG5leHBvcnQgY29uc3QgcXVlcnlIb21lQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmV2aWV3Q29va2llID0gQ29va2llcy5nZXQoJ2lvLnByaXNtaWMucHJldmlldycpO1xuXG4gICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICBxdWVyeTogYmxvZ0hvbWVRdWVyeSxcbiAgICAgICAgLy8gdmFyaWFibGVzOiB7IGN1cnJlbnRQYWdlIH0sXG4gICAgfTtcblxuICAgIGlmIChwcmV2aWV3Q29va2llKSB7XG4gICAgICAgIHF1ZXJ5T3B0aW9ucy5jb250ZXh0ID0ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdQcmlzbWljLXJlZic6IHByZXZpZXdDb29raWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnQucXVlcnkocXVlcnlPcHRpb25zKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utilis/prismicQueries.js\n");

/***/ })

});