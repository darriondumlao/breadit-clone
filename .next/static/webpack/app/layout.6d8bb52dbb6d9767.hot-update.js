"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0b4bca8b41ac\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8yZDU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMGI0YmNhOGI0MWFjXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Command */ \"(app-client)/./src/components/ui/Command.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ \"(app-client)/./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_use_on_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-on-click-outside */ \"(app-client)/./src/hooks/use-on-click-outside.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SearchBar = (param)=>{\n    let {} = param;\n    var _queryResults, _queryResults1;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data: queryResults, refetch, isFetched, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({\n        queryFn: async ()=>{\n            if (!input) return [];\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/search?q=\".concat(input));\n            return data;\n        },\n        queryKey: [\n            \"search-query\"\n        ],\n        enabled: false\n    });\n    const request = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(()=>{\n        refetch();\n    }, 300);\n    const debounceRequest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        request();\n    }, []);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const commandRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_hooks_use_on_click_outside__WEBPACK_IMPORTED_MODULE_5__.useOnClickOutside)(commandRef, ()=>{\n        setInput(\"\");\n    });\n    var _queryResults_length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.Command, {\n        ref: commandRef,\n        className: \"relative rounded-lg border max-w-lg z-50 overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandInput, {\n                value: input,\n                onValueChange: (text)=>{\n                    setInput(text);\n                    debounceRequest();\n                },\n                className: \"outline-none border-none focus:border-none focus:outline-none ring-0\",\n                placeholder: \"Search communities...\"\n            }, void 0, false, {\n                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, undefined),\n            input.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandList, {\n                className: \"absolute bg-white top-full inset-x-0 shadow rounded-b-md\",\n                children: [\n                    isFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandEmpty, {\n                        children: \"No results found.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 20\n                    }, undefined),\n                    ((_queryResults_length = (_queryResults = queryResults) === null || _queryResults === void 0 ? void 0 : _queryResults.length) !== null && _queryResults_length !== void 0 ? _queryResults_length : 0) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandGroup, {\n                        heading: \"Communities\",\n                        children: (_queryResults1 = queryResults) === null || _queryResults1 === void 0 ? void 0 : _queryResults1.map((subreddit)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandItem, {\n                                onSelect: (e)=>{\n                                    router.push(\"/r/\".concat(e));\n                                },\n                                value: subreddit.name,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 10\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/r/\".concat(subreddit.name),\n                                        children: [\n                                            \"r/\",\n                                            subreddit.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 10\n                                    }, undefined)\n                                ]\n                            }, subreddit.id, true, {\n                                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n                lineNumber: 74,\n                columnNumber: 5\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/SearchBar.tsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SearchBar, \"jM31FTCq2De8pBuYJQd10UDhvEw=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_use_on_click_outside__WEBPACK_IMPORTED_MODULE_5__.useOnClickOutside\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFRNUI7QUFDMkI7QUFDdkI7QUFFa0I7QUFDUDtBQUNOO0FBRVE7QUFDMEI7QUFJaEUsTUFBTWUsWUFBZ0M7UUFBQyxFQUFFO1FBb0RsQ0MsZUFFQ0E7O0lBckRQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQVM7SUFFM0MsTUFBTSxFQUNMa0IsTUFBTUgsWUFBWSxFQUNsQkksT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVixHQUFHZCwrREFBUUEsQ0FBQztRQUNaZSxTQUFTO1lBQ1IsSUFBSSxDQUFDTixPQUFPLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHLE1BQU1WLDZDQUFLQSxDQUFDZSxHQUFHLENBQUMsaUJBQXVCLE9BQU5QO1lBQ2xELE9BQU9FO1FBR1I7UUFDQU0sVUFBVTtZQUFDO1NBQWU7UUFDMUJDLFNBQVM7SUFDVjtJQUVBLE1BQU1DLFVBQVVkLHNEQUFRQSxDQUFDO1FBQ3hCTztJQUNELEdBQUc7SUFFSCxNQUFNUSxrQkFBa0I1QixrREFBV0EsQ0FBQztRQUNuQzJCO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTUUsU0FBU25CLDBEQUFTQTtJQUN4QixNQUFNb0IsYUFBYWxCLDZDQUFNQSxDQUFpQjtJQUUxQ0UsOEVBQWlCQSxDQUFDZ0IsWUFBWTtRQUM3QlosU0FBUztJQUNWO1FBbUJNRjtJQWpCTixxQkFDQyw4REFBQ2QsZ0RBQU9BO1FBQ1A2QixLQUFLRDtRQUNMRSxXQUFVOzswQkFDViw4REFBQzNCLHFEQUFZQTtnQkFDWjRCLE9BQU9oQjtnQkFDUGlCLGVBQWUsQ0FBQ0M7b0JBQ2ZqQixTQUFTaUI7b0JBQ1RQO2dCQUNEO2dCQUNBSSxXQUFVO2dCQUNWSSxhQUFZOzs7Ozs7WUFHWm5CLE1BQU1vQixNQUFNLEdBQUcsa0JBQ2YsOERBQUM5QixvREFBV0E7Z0JBQUN5QixXQUFVOztvQkFDckJYLDJCQUFhLDhEQUFDbEIscURBQVlBO2tDQUFDOzs7Ozs7b0JBQzFCYSxDQUFBQSxDQUFBQSx3QkFBQUEsZ0JBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBY3FCLE1BQU0sY0FBcEJyQixrQ0FBQUEsdUJBQXdCLEtBQUssa0JBQzlCLDhEQUFDWixxREFBWUE7d0JBQUNrQyxTQUFRO21DQUNwQnRCLGlCQUFBQSwwQkFBQUEscUNBQUFBLGVBQWN1QixHQUFHLENBQUMsQ0FBQ0MsMEJBQ25CLDhEQUFDbEMsb0RBQVdBO2dDQUNYbUMsVUFBVSxDQUFDQztvQ0FDVmIsT0FBT2MsSUFBSSxDQUFDLE1BQVEsT0FBRkQ7Z0NBQ25CO2dDQUVBVCxPQUFPTyxVQUFVSSxJQUFJOztrREFDckIsOERBQUNqQyxvREFBS0E7d0NBQUNxQixXQUFVOzs7Ozs7a0RBQ2pCLDhEQUFDYTt3Q0FBRUMsTUFBTSxNQUFxQixPQUFmTixVQUFVSSxJQUFJOzs0Q0FBSTs0Q0FBR0osVUFBVUksSUFBSTs7Ozs7Ozs7K0JBSDdDSixVQUFVTyxFQUFFOzs7Ozs7Ozs7b0NBT2pCOzs7Ozs7NEJBRUY7Ozs7Ozs7QUFHUDtHQXZFTWhDOztRQVFEUCwyREFBUUE7UUFvQkdFLHNEQUFTQTtRQUd4QkksMEVBQWlCQTs7O0tBL0JaQztBQXlFTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4PzIxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG5cdENvbW1hbmQsXG5cdENvbW1hbmRFbXB0eSxcblx0Q29tbWFuZEdyb3VwLFxuXHRDb21tYW5kSW5wdXQsXG5cdENvbW1hbmRJdGVtLFxuXHRDb21tYW5kTGlzdCxcbn0gZnJvbSAnLi91aS9Db21tYW5kJ1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBQcmlzbWEsIFN1YnJlZGRpdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IHVzZU9uQ2xpY2tPdXRzaWRlIH0gZnJvbSAnQC9ob29rcy91c2Utb24tY2xpY2stb3V0c2lkZSdcblxuaW50ZXJmYWNlIFNlYXJjaEJhclByb3BzIHt9XG5cbmNvbnN0IFNlYXJjaEJhcjogRkM8U2VhcmNoQmFyUHJvcHM+ID0gKHt9KSA9PiB7XG5cdGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuXHRjb25zdCB7XG5cdFx0ZGF0YTogcXVlcnlSZXN1bHRzLFxuXHRcdHJlZmV0Y2gsXG5cdFx0aXNGZXRjaGVkLFxuXHRcdGlzRmV0Y2hpbmcsXG5cdH0gPSB1c2VRdWVyeSh7XG5cdFx0cXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKCFpbnB1dCkgcmV0dXJuIFtdXG5cdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9zZWFyY2g/cT0ke2lucHV0fWApXG5cdFx0XHRyZXR1cm4gZGF0YSBhcyAoU3VicmVkZGl0ICYge1xuXHRcdFx0XHRfY291bnQ6IFByaXNtYS5TdWJyZWRkaXRDb3VudE91dHB1dFR5cGVcblx0XHRcdH0pW11cblx0XHR9LFxuXHRcdHF1ZXJ5S2V5OiBbJ3NlYXJjaC1xdWVyeSddLFxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHR9KVxuXG5cdGNvbnN0IHJlcXVlc3QgPSBkZWJvdW5jZSgoKSA9PiB7XG5cdFx0cmVmZXRjaCgpXG5cdH0sIDMwMClcblxuXHRjb25zdCBkZWJvdW5jZVJlcXVlc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0cmVxdWVzdCgpXG5cdH0sIFtdKVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IGNvbW1hbmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cblx0dXNlT25DbGlja091dHNpZGUoY29tbWFuZFJlZiwgKCkgPT4ge1xuXHRcdHNldElucHV0KCcnKVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PENvbW1hbmRcblx0XHRcdHJlZj17Y29tbWFuZFJlZn1cblx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgcm91bmRlZC1sZyBib3JkZXIgbWF4LXctbGcgei01MCBvdmVyZmxvdy12aXNpYmxlJz5cblx0XHRcdDxDb21tYW5kSW5wdXRcblx0XHRcdFx0dmFsdWU9e2lucHV0fVxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlPXsodGV4dCkgPT4ge1xuXHRcdFx0XHRcdHNldElucHV0KHRleHQpXG5cdFx0XHRcdFx0ZGVib3VuY2VSZXF1ZXN0KClcblx0XHRcdFx0fX1cblx0XHRcdFx0Y2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHJpbmctMCdcblx0XHRcdFx0cGxhY2Vob2xkZXI9J1NlYXJjaCBjb21tdW5pdGllcy4uLidcblx0XHRcdC8+XG5cblx0XHRcdHtpbnB1dC5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8Q29tbWFuZExpc3QgY2xhc3NOYW1lPSdhYnNvbHV0ZSBiZy13aGl0ZSB0b3AtZnVsbCBpbnNldC14LTAgc2hhZG93IHJvdW5kZWQtYi1tZCc+XG5cdFx0XHRcdFx0e2lzRmV0Y2hlZCAmJiA8Q29tbWFuZEVtcHR5Pk5vIHJlc3VsdHMgZm91bmQuPC9Db21tYW5kRW1wdHk+fVxuXHRcdFx0XHRcdHsocXVlcnlSZXN1bHRzPy5sZW5ndGggPz8gMCkgPiAwID8gKFxuXHRcdFx0XHRcdFx0PENvbW1hbmRHcm91cCBoZWFkaW5nPSdDb21tdW5pdGllcyc+XG5cdFx0XHRcdFx0XHRcdHtxdWVyeVJlc3VsdHM/Lm1hcCgoc3VicmVkZGl0KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PENvbW1hbmRJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goYC9yLyR7ZX1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17c3VicmVkZGl0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N1YnJlZGRpdC5uYW1lfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxVc2VycyBjbGFzc05hbWU9J21yLTIgaC00IHctNCcgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2Avci8ke3N1YnJlZGRpdC5uYW1lfWB9PnIve3N1YnJlZGRpdC5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1hbmRJdGVtPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvQ29tbWFuZEdyb3VwPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L0NvbW1hbmRMaXN0PlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0PC9Db21tYW5kPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJDb21tYW5kIiwiQ29tbWFuZEVtcHR5IiwiQ29tbWFuZEdyb3VwIiwiQ29tbWFuZElucHV0IiwiQ29tbWFuZEl0ZW0iLCJDb21tYW5kTGlzdCIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJVc2VycyIsInVzZVJlZiIsImRlYm91bmNlIiwidXNlT25DbGlja091dHNpZGUiLCJTZWFyY2hCYXIiLCJxdWVyeVJlc3VsdHMiLCJpbnB1dCIsInNldElucHV0IiwiZGF0YSIsInJlZmV0Y2giLCJpc0ZldGNoZWQiLCJpc0ZldGNoaW5nIiwicXVlcnlGbiIsImdldCIsInF1ZXJ5S2V5IiwiZW5hYmxlZCIsInJlcXVlc3QiLCJkZWJvdW5jZVJlcXVlc3QiLCJyb3V0ZXIiLCJjb21tYW5kUmVmIiwicmVmIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwidGV4dCIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwiaGVhZGluZyIsIm1hcCIsInN1YnJlZGRpdCIsIm9uU2VsZWN0IiwiZSIsInB1c2giLCJuYW1lIiwiYSIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/SearchBar.tsx\n"));

/***/ }),

/***/ "(app-client)/./src/hooks/use-on-click-outside.ts":
/*!*******************************************!*\
  !*** ./src/hooks/use-on-click-outside.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useOnClickOutside: function() { return /* binding */ useOnClickOutside; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useOnClickOutside = (ref, handler)=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const listener = (event)=>{\n            var _ref, _event;\n            const el = (_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current;\n            if (!el || el.contains(((_event = event) === null || _event === void 0 ? void 0 : _event.target) || null)) {\n                return;\n            }\n            handler(event) // Call the handler only if the click is outside of the element passed.\n            ;\n        };\n        document.addEventListener(\"mousedown\", listener);\n        document.addEventListener(\"touchstart\", listener);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", listener);\n            document.removeEventListener(\"touchstart\", listener);\n        };\n    }, [\n        ref,\n        handler\n    ]) // Reload only if ref or handler changes\n    ;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2hvb2tzL3VzZS1vbi1jbGljay1vdXRzaWRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUlyQyxNQUFNQyxvQkFBb0IsQ0FDaENDLEtBQ0FDO0lBRUFILGdEQUFTQSxDQUFDO1FBQ1QsTUFBTUksV0FBVyxDQUFDQztnQkFDTkgsTUFDYUc7WUFEeEIsTUFBTUMsTUFBS0osT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLSyxPQUFPO1lBQ3ZCLElBQUksQ0FBQ0QsTUFBTUEsR0FBR0UsUUFBUSxDQUFDLEVBQUNILFNBQUFBLEtBQXFCLGNBQXJCQSw2QkFBQUEsT0FBT0ksTUFBTSxLQUFhLE9BQU87Z0JBQ3hEO1lBQ0Q7WUFFQU4sUUFBUUUsT0FBTyx1RUFBdUU7O1FBQ3ZGO1FBRUFLLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFQO1FBQ3ZDTSxTQUFTQyxnQkFBZ0IsQ0FBQyxjQUFjUDtRQUV4QyxPQUFPO1lBQ05NLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFSO1lBQzFDTSxTQUFTRSxtQkFBbUIsQ0FBQyxjQUFjUjtRQUM1QztJQUNELEdBQUc7UUFBQ0Y7UUFBS0M7S0FBUSxFQUFFLHdDQUF3Qzs7QUFDNUQsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlLW9uLWNsaWNrLW91dHNpZGUudHM/MGJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWZPYmplY3QsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgRXZlbnQgPSBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudFxuXG5leHBvcnQgY29uc3QgdXNlT25DbGlja091dHNpZGUgPSA8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuXHRyZWY6IFJlZk9iamVjdDxUPixcblx0aGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZFxuKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCBlbCA9IHJlZj8uY3VycmVudFxuXHRcdFx0aWYgKCFlbCB8fCBlbC5jb250YWlucygoZXZlbnQ/LnRhcmdldCBhcyBOb2RlKSB8fCBudWxsKSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblxuXHRcdFx0aGFuZGxlcihldmVudCkgLy8gQ2FsbCB0aGUgaGFuZGxlciBvbmx5IGlmIHRoZSBjbGljayBpcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50IHBhc3NlZC5cblx0XHR9XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGxpc3RlbmVyKVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGxpc3RlbmVyKVxuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbGlzdGVuZXIpXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBsaXN0ZW5lcilcblx0XHR9XG5cdH0sIFtyZWYsIGhhbmRsZXJdKSAvLyBSZWxvYWQgb25seSBpZiByZWYgb3IgaGFuZGxlciBjaGFuZ2VzXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlT25DbGlja091dHNpZGUiLCJyZWYiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImVsIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/hooks/use-on-click-outside.ts\n"));

/***/ })

});