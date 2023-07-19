"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/post/[postId]/page",{

/***/ "(app-client)/./src/components/CommentVotes.tsx":
/*!*****************************************!*\
  !*** ./src/components/CommentVotes.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/Button */ \"(app-client)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _hooks_use_custom_toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-custom-toasts */ \"(app-client)/./src/hooks/use-custom-toasts.tsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-client)/./src/hooks/use-toast.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-client)/./src/lib/utils.ts\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/hooks */ \"(app-client)/./node_modules/@mantine/hooks/esm/use-previous/use-previous.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/index.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/arrow-big-up.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/arrow-big-down.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CommentVote = (param)=>{\n    let { commentId, initialVotesAmt, initialVote } = param;\n    var _currentVote, _currentVote1;\n    _s();\n    const { loginToast } = (0,_hooks_use_custom_toasts__WEBPACK_IMPORTED_MODULE_2__.useCustomToasts)();\n    const [votesAmt, setVotesAmt] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialVotesAmt);\n    const [currentVote, setCurrentVote] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialVote);\n    const prevVote = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_6__.usePrevious)(currentVote);\n    const { mutate: vote } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({\n        mutationFn: async (voteType)=>{\n            const payload = {\n                commentId,\n                voteType\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].patch(\"/api/subreddit/post/comment/vote\", payload);\n        },\n        onError: (err, voteType)=>{\n            if (voteType === \"UP\") setVotesAmt((prev)=>prev - 1);\n            else setVotesAmt((prev)=>prev + 1);\n            //reset current vote\n            setCurrentVote(prevVote);\n            if (err instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) {\n                var _err_response;\n                if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {\n                    return loginToast();\n                }\n            }\n            return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n                title: \"Something went wrong\",\n                description: \"Your vote was not registered, please try again.\",\n                variant: \"destructive\"\n            });\n        },\n        onMutate: (type)=>{\n            var _currentVote;\n            if (((_currentVote = currentVote) === null || _currentVote === void 0 ? void 0 : _currentVote.type) === type) {\n                setCurrentVote(undefined);\n                if (type === \"UP\") setVotesAmt((prev)=>prev - 1);\n                else if (type === \"DOWN\") setVotesAmt((prev)=>prev + 1);\n            } else {\n                setCurrentVote({\n                    type\n                });\n                if (type === \"UP\") setVotesAmt((prev)=>prev + (currentVote ? 2 : 1));\n                else if (type === \"DOWN\") setVotesAmt((prev)=>prev - (currentVote ? 2 : 1));\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: ()=>vote(\"UP\"),\n                size: \"xs\",\n                variant: \"ghost\",\n                \"aria-label\": \"upvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-emerald-500 fill-emerald-500\": ((_currentVote = currentVote) === null || _currentVote === void 0 ? void 0 : _currentVote.type) === \"UP\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n                lineNumber: 78,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center py-2 px-1 font-medium text-sm text-zinc-900\",\n                children: votesAmt\n            }, void 0, false, {\n                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: ()=>vote(\"DOWN\"),\n                size: \"sm\",\n                variant: \"ghost\",\n                \"aria-label\": \"downvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-red-500 fill-red-500\": ((_currentVote1 = currentVote) === null || _currentVote1 === void 0 ? void 0 : _currentVote1.type) === \"DOWN\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n                lineNumber: 95,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/CommentVotes.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, undefined);\n};\n_s(CommentVote, \"CVREDexxDYwuv39/xNAkblwQcGg=\", false, function() {\n    return [\n        _hooks_use_custom_toasts__WEBPACK_IMPORTED_MODULE_2__.useCustomToasts,\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_6__.usePrevious,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = CommentVote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentVote);\nvar _c;\n$RefreshReg$(_c, \"CommentVote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudFZvdGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1k7QUFDbEI7QUFDVDtBQUVZO0FBRU87QUFDVjtBQUNjO0FBQ3ZCO0FBVWhDLE1BQU1XLGNBQWM7UUFBQyxFQUNwQkMsU0FBUyxFQUNUQyxlQUFlLEVBQ2ZDLFdBQVcsRUFDTztRQTBEd0JDLGNBaUJSQTs7SUExRWxDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdmLHlFQUFlQTtJQUN0QyxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFTRztJQUNqRCxNQUFNLENBQUNFLGFBQWFJLGVBQWUsR0FBR1QsK0NBQVFBLENBQUNJO0lBQy9DLE1BQU1NLFdBQVdoQiwyREFBV0EsQ0FBQ1c7SUFFN0IsTUFBTSxFQUFFTSxRQUFRQyxJQUFJLEVBQUUsR0FBR2pCLGtFQUFXQSxDQUFDO1FBQ3BDa0IsWUFBWSxPQUFPQztZQUNsQixNQUFNQyxVQUE4QjtnQkFDbkNiO2dCQUNBWTtZQUNEO1lBRUEsTUFBTWxCLDZDQUFLQSxDQUFDb0IsS0FBSyxDQUFDLG9DQUFvQ0Q7UUFDdkQ7UUFDQUUsU0FBUyxDQUFDQyxLQUFLSjtZQUNkLElBQUlBLGFBQWEsTUFBTU4sWUFBWSxDQUFDVyxPQUFTQSxPQUFPO2lCQUMvQ1gsWUFBWSxDQUFDVyxPQUFTQSxPQUFPO1lBRWxDLG9CQUFvQjtZQUNwQlYsZUFBZUM7WUFFZixJQUFJUSxlQUFlckIsNkNBQVVBLEVBQUU7b0JBQzFCcUI7Z0JBQUosSUFBSUEsRUFBQUEsZ0JBQUFBLElBQUlFLFFBQVEsY0FBWkYsb0NBQUFBLGNBQWNHLE1BQU0sTUFBSyxLQUFLO29CQUNqQyxPQUFPZjtnQkFDUjtZQUNEO1lBRUEsT0FBT2QsdURBQUtBLENBQUM7Z0JBQ1o4QixPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxTQUFTO1lBQ1Y7UUFDRDtRQUNBQyxVQUFVLENBQUNDO2dCQUNOckI7WUFBSixJQUFJQSxFQUFBQSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFxQixJQUFJLE1BQUtBLE1BQU07Z0JBQy9CakIsZUFBZWtCO2dCQUNmLElBQUlELFNBQVMsTUFBTWxCLFlBQVksQ0FBQ1csT0FBU0EsT0FBTztxQkFDM0MsSUFBSU8sU0FBUyxRQUFRbEIsWUFBWSxDQUFDVyxPQUFTQSxPQUFPO1lBQ3hELE9BQU87Z0JBQ05WLGVBQWU7b0JBQUVpQjtnQkFBSztnQkFDdEIsSUFBSUEsU0FBUyxNQUFNbEIsWUFBWSxDQUFDVyxPQUFTQSxPQUFRZCxDQUFBQSxjQUFjLElBQUk7cUJBQzlELElBQUlxQixTQUFTLFFBQ2pCbEIsWUFBWSxDQUFDVyxPQUFTQSxPQUFRZCxDQUFBQSxjQUFjLElBQUk7WUFDbEQ7UUFDRDtJQUNEO0lBRUEscUJBQ0MsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFFZCw4REFBQ3ZDLHlEQUFNQTtnQkFDTndDLFNBQVMsSUFBTWxCLEtBQUs7Z0JBQ3BCbUIsTUFBSztnQkFDTFAsU0FBUTtnQkFDUlEsY0FBVzswQkFDWCw0RUFBQ2pDLHFEQUFVQTtvQkFDVjhCLFdBQVdwQyw4Q0FBRUEsQ0FBQyx5QkFBeUI7d0JBQ3RDLHFDQUFxQ1ksRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhcUIsSUFBSSxNQUFLO29CQUM1RDs7Ozs7Ozs7Ozs7MEJBSUYsOERBQUNPO2dCQUFFSixXQUFVOzBCQUNYdEI7Ozs7OzswQkFJRiw4REFBQ2pCLHlEQUFNQTtnQkFDTndDLFNBQVMsSUFBTWxCLEtBQUs7Z0JBQ3BCbUIsTUFBSztnQkFDTFAsU0FBUTtnQkFDUlEsY0FBVzswQkFDWCw0RUFBQ2xDLHFEQUFZQTtvQkFDWitCLFdBQVdwQyw4Q0FBRUEsQ0FBQyx5QkFBeUI7d0JBQ3RDLDZCQUE2QlksRUFBQUEsZ0JBQUFBLHlCQUFBQSxvQ0FBQUEsY0FBYXFCLElBQUksTUFBSztvQkFDcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0w7R0FyRk16Qjs7UUFLa0JWLHFFQUFlQTtRQUdyQkcsdURBQVdBO1FBRUhDLDhEQUFXQTs7O0tBVi9CTTtBQXVGTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tZW50Vm90ZXMudHN4PzU1MGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9CdXR0b24nXG5pbXBvcnQgeyB1c2VDdXN0b21Ub2FzdHMgfSBmcm9tICdAL2hvb2tzL3VzZS1jdXN0b20tdG9hc3RzJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdAL2hvb2tzL3VzZS10b2FzdCdcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnXG5pbXBvcnQgeyBDb21tZW50Vm90ZVJlcXVlc3QgfSBmcm9tICdAL2xpYi92YWxpZGF0b3JzL3ZvdGVzJ1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICdAbWFudGluZS9ob29rcydcbmltcG9ydCB7IENvbW1lbnRWb3RlLCBWb3RlVHlwZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQXJyb3dCaWdEb3duLCBBcnJvd0JpZ1VwIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQYXJ0aWFsVm90ZSA9IFBpY2s8Q29tbWVudFZvdGUsICd0eXBlJz5cblxuaW50ZXJmYWNlIENvbW1lbnRWb3RlUHJvcHMge1xuXHRjb21tZW50SWQ6IHN0cmluZ1xuXHRpbml0aWFsVm90ZXNBbXQ6IG51bWJlclxuXHRpbml0aWFsVm90ZT86IFBhcnRpYWxWb3RlXG59XG5cbmNvbnN0IENvbW1lbnRWb3RlID0gKHtcblx0Y29tbWVudElkLFxuXHRpbml0aWFsVm90ZXNBbXQsXG5cdGluaXRpYWxWb3RlLFxufTogQ29tbWVudFZvdGVQcm9wcykgPT4ge1xuXHRjb25zdCB7IGxvZ2luVG9hc3QgfSA9IHVzZUN1c3RvbVRvYXN0cygpXG5cdGNvbnN0IFt2b3Rlc0FtdCwgc2V0Vm90ZXNBbXRdID0gdXNlU3RhdGU8bnVtYmVyPihpbml0aWFsVm90ZXNBbXQpXG5cdGNvbnN0IFtjdXJyZW50Vm90ZSwgc2V0Q3VycmVudFZvdGVdID0gdXNlU3RhdGUoaW5pdGlhbFZvdGUpXG5cdGNvbnN0IHByZXZWb3RlID0gdXNlUHJldmlvdXMoY3VycmVudFZvdGUpXG5cblx0Y29uc3QgeyBtdXRhdGU6IHZvdGUgfSA9IHVzZU11dGF0aW9uKHtcblx0XHRtdXRhdGlvbkZuOiBhc3luYyAodm90ZVR5cGU6IFZvdGVUeXBlKSA9PiB7XG5cdFx0XHRjb25zdCBwYXlsb2FkOiBDb21tZW50Vm90ZVJlcXVlc3QgPSB7XG5cdFx0XHRcdGNvbW1lbnRJZCxcblx0XHRcdFx0dm90ZVR5cGUsXG5cdFx0XHR9XG5cblx0XHRcdGF3YWl0IGF4aW9zLnBhdGNoKCcvYXBpL3N1YnJlZGRpdC9wb3N0L2NvbW1lbnQvdm90ZScsIHBheWxvYWQpXG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyLCB2b3RlVHlwZSkgPT4ge1xuXHRcdFx0aWYgKHZvdGVUeXBlID09PSAnVVAnKSBzZXRWb3Rlc0FtdCgocHJldikgPT4gcHJldiAtIDEpXG5cdFx0XHRlbHNlIHNldFZvdGVzQW10KChwcmV2KSA9PiBwcmV2ICsgMSlcblxuXHRcdFx0Ly9yZXNldCBjdXJyZW50IHZvdGVcblx0XHRcdHNldEN1cnJlbnRWb3RlKHByZXZWb3RlKVxuXG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvcikge1xuXHRcdFx0XHRpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xuXHRcdFx0XHRcdHJldHVybiBsb2dpblRvYXN0KClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdZb3VyIHZvdGUgd2FzIG5vdCByZWdpc3RlcmVkLCBwbGVhc2UgdHJ5IGFnYWluLicsXG5cdFx0XHRcdHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0b25NdXRhdGU6ICh0eXBlKSA9PiB7XG5cdFx0XHRpZiAoY3VycmVudFZvdGU/LnR5cGUgPT09IHR5cGUpIHtcblx0XHRcdFx0c2V0Q3VycmVudFZvdGUodW5kZWZpbmVkKVxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ1VQJykgc2V0Vm90ZXNBbXQoKHByZXYpID0+IHByZXYgLSAxKVxuXHRcdFx0XHRlbHNlIGlmICh0eXBlID09PSAnRE9XTicpIHNldFZvdGVzQW10KChwcmV2KSA9PiBwcmV2ICsgMSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEN1cnJlbnRWb3RlKHsgdHlwZSB9KVxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ1VQJykgc2V0Vm90ZXNBbXQoKHByZXYpID0+IHByZXYgKyAoY3VycmVudFZvdGUgPyAyIDogMSkpXG5cdFx0XHRcdGVsc2UgaWYgKHR5cGUgPT09ICdET1dOJylcblx0XHRcdFx0XHRzZXRWb3Rlc0FtdCgocHJldikgPT4gcHJldiAtIChjdXJyZW50Vm90ZSA/IDIgOiAxKSlcblx0XHRcdH1cblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTEnPlxuXHRcdFx0ey8qIHVwdm90ZSAqL31cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT4gdm90ZSgnVVAnKX1cblx0XHRcdFx0c2l6ZT0neHMnXG5cdFx0XHRcdHZhcmlhbnQ9J2dob3N0J1xuXHRcdFx0XHRhcmlhLWxhYmVsPSd1cHZvdGUnPlxuXHRcdFx0XHQ8QXJyb3dCaWdVcFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oJ2gtNSB3LTUgdGV4dC16aW5jLTcwMCcsIHtcblx0XHRcdFx0XHRcdCd0ZXh0LWVtZXJhbGQtNTAwIGZpbGwtZW1lcmFsZC01MDAnOiBjdXJyZW50Vm90ZT8udHlwZSA9PT0gJ1VQJyxcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTIgcHgtMSBmb250LW1lZGl1bSB0ZXh0LXNtIHRleHQtemluYy05MDAnPlxuXHRcdFx0XHR7dm90ZXNBbXR9XG5cdFx0XHQ8L3A+XG5cblx0XHRcdHsvKiBkb3dudm90ZSAqL31cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT4gdm90ZSgnRE9XTicpfVxuXHRcdFx0XHRzaXplPSdzbSdcblx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXG5cdFx0XHRcdGFyaWEtbGFiZWw9J2Rvd252b3RlJz5cblx0XHRcdFx0PEFycm93QmlnRG93blxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oJ2gtNSB3LTUgdGV4dC16aW5jLTcwMCcsIHtcblx0XHRcdFx0XHRcdCd0ZXh0LXJlZC01MDAgZmlsbC1yZWQtNTAwJzogY3VycmVudFZvdGU/LnR5cGUgPT09ICdET1dOJyxcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRWb3RlXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlQ3VzdG9tVG9hc3RzIiwidG9hc3QiLCJjbiIsInVzZVByZXZpb3VzIiwidXNlTXV0YXRpb24iLCJheGlvcyIsIkF4aW9zRXJyb3IiLCJBcnJvd0JpZ0Rvd24iLCJBcnJvd0JpZ1VwIiwidXNlU3RhdGUiLCJDb21tZW50Vm90ZSIsImNvbW1lbnRJZCIsImluaXRpYWxWb3Rlc0FtdCIsImluaXRpYWxWb3RlIiwiY3VycmVudFZvdGUiLCJsb2dpblRvYXN0Iiwidm90ZXNBbXQiLCJzZXRWb3Rlc0FtdCIsInNldEN1cnJlbnRWb3RlIiwicHJldlZvdGUiLCJtdXRhdGUiLCJ2b3RlIiwibXV0YXRpb25GbiIsInZvdGVUeXBlIiwicGF5bG9hZCIsInBhdGNoIiwib25FcnJvciIsImVyciIsInByZXYiLCJyZXNwb25zZSIsInN0YXR1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YXJpYW50Iiwib25NdXRhdGUiLCJ0eXBlIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJhcmlhLWxhYmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/CommentVotes.tsx\n"));

/***/ })

});