"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/page",{

/***/ "(app-client)/./src/components/UserNameForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/UserNameForm.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_validators_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/validators/username */ \"(app-client)/./src/lib/validators/username.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-client)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-client)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Card */ \"(app-client)/./src/components/ui/Card.tsx\");\n/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Label */ \"(app-client)/./src/components/ui/Label.tsx\");\n/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Input */ \"(app-client)/./src/components/ui/Input.tsx\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Button */ \"(app-client)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/index.js\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-client)/./src/hooks/use-toast.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst UserNameForm = (param)=>{\n    let { user } = param;\n    var _user, _errors;\n    _s();\n    const { handleSubmit, register, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_lib_validators_username__WEBPACK_IMPORTED_MODULE_1__.UsernameValidator),\n        defaultValues: {\n            name: ((_user = user) === null || _user === void 0 ? void 0 : _user.username) || \"\"\n        }\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const { mutate: updateUsername, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({\n        mutationFn: async (param)=>{\n            let { name } = param;\n            const payload = {\n                name\n            };\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].patch(\"/api/username\", payload);\n            return data;\n        },\n        onError: (err)=>{\n            if (err instanceof axios__WEBPACK_IMPORTED_MODULE_12__.AxiosError) {\n                var _err_response;\n                if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 409) {\n                    return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__.toast)({\n                        title: \"Username already taken.\",\n                        description: \" Please choose a different username.\",\n                        variant: \"destructive\"\n                    });\n                }\n            }\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__.toast)({\n                title: \"There was an error.\",\n                description: \"Could not create subreddit.\",\n                variant: \"destructive\"\n            });\n        },\n        onSuccess: ()=>{\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__.toast)({\n                description: \"Youre username has been updated.\"\n            });\n            router.refresh();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit((e)=>updateUsername(e)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                            children: \"Your username\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                            children: \"Please enter a display name you are comfortable with.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative grid gap-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-0 left-0 w-8 h-10 grid place-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm text-zinc-400\",\n                                    children: \"u/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                className: \"sr-only\",\n                                htmlFor: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                id: \"name\",\n                                className: \"w-[400px] pl-6\",\n                                size: 32,\n                                ...register(\"name\")\n                            }, void 0, false, {\n                                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 7\n                            }, undefined),\n                            ((_errors = errors) === null || _errors === void 0 ? void 0 : _errors.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"px-1 text-xs text-red-600\",\n                                children: errors.name.message\n                            }, void 0, false, {\n                                fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        isLoading: isLoading,\n                        children: \"Change name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n            lineNumber: 77,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/darrion/Code/deploy-prac/breadit-clone/breadit/src/components/UserNameForm.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserNameForm, \"4jjJsjeUqrLz/fduJVf8HMiV1iU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation\n    ];\n});\n_c = UserNameForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNameForm);\nvar _c;\n$RefreshReg$(_c, \"UserNameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvVXNlck5hbWVGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4RTtBQUN6QjtBQUdaO0FBUXZCO0FBQ2dCO0FBQ0E7QUFDRTtBQUNlO0FBQ1Y7QUFDQTtBQUNFO0FBTTNDLE1BQU1pQixlQUFzQztRQUFDLEVBQUVDLElBQUksRUFBRTtRQVE1Q0EsT0FpRUZDOztJQXhFTixNQUFNLEVBQ0xDLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxXQUFXLEVBQUVILE1BQU0sRUFBRSxFQUNyQixHQUFHakIsd0RBQU9BLENBQWtCO1FBQzVCcUIsVUFBVXRCLG9FQUFXQSxDQUFDRCx1RUFBaUJBO1FBQ3ZDd0IsZUFBZTtZQUNkQyxNQUFNUCxFQUFBQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1RLFFBQVEsS0FBSTtRQUN6QjtJQUNEO0lBRUEsTUFBTUMsU0FBU1gsMERBQVNBO0lBRXhCLE1BQU0sRUFBRVksUUFBUUMsY0FBYyxFQUFFQyxTQUFTLEVBQUUsR0FBR2xCLG1FQUFXQSxDQUFDO1FBQ3pEbUIsWUFBWTtnQkFBTyxFQUFFTixJQUFJLEVBQW1CO1lBQzNDLE1BQU1PLFVBQTJCO2dCQUFFUDtZQUFLO1lBRXhDLE1BQU0sRUFBRVEsSUFBSSxFQUFFLEdBQUcsTUFBTXBCLDhDQUFLQSxDQUFDcUIsS0FBSyxDQUFFLGlCQUFnQkY7WUFDcEQsT0FBT0M7UUFDUjtRQUNBRSxTQUFTLENBQUNDO1lBQ1QsSUFBSUEsZUFBZXRCLDhDQUFVQSxFQUFFO29CQUMxQnNCO2dCQUFKLElBQUlBLEVBQUFBLGdCQUFBQSxJQUFJQyxRQUFRLGNBQVpELG9DQUFBQSxjQUFjRSxNQUFNLE1BQUssS0FBSztvQkFDakMsT0FBT3ZCLHVEQUFLQSxDQUFDO3dCQUNad0IsT0FBTzt3QkFDUEMsYUFBYTt3QkFDYkMsU0FBUztvQkFDVjtnQkFDRDtZQUNEO1lBRUExQix1REFBS0EsQ0FBQztnQkFDTHdCLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFNBQVM7WUFDVjtRQUNEO1FBQ0FDLFdBQVc7WUFDVjNCLHVEQUFLQSxDQUFDO2dCQUNMeUIsYUFBYTtZQUNkO1lBRUFiLE9BQU9nQixPQUFPO1FBQ2Y7SUFDRDtJQUVBLHFCQUNDLDhEQUFDQztRQUFLQyxVQUFVekIsYUFBYSxDQUFDMEIsSUFBTWpCLGVBQWVpQjtrQkFDbEQsNEVBQUMzQywwQ0FBSUE7OzhCQUNKLDhEQUFDSSxnREFBVUE7O3NDQUNWLDhEQUFDQywrQ0FBU0E7c0NBQUM7Ozs7OztzQ0FDWCw4REFBQ0gscURBQWVBO3NDQUFDOzs7Ozs7Ozs7Ozs7OEJBS2xCLDhEQUFDRCxpREFBV0E7OEJBQ1gsNEVBQUMyQzt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNkLDRFQUFDQztvQ0FBS0QsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7OzBDQUd6Qyw4REFBQ3ZDLDRDQUFLQTtnQ0FBQ3VDLFdBQVU7Z0NBQVVFLFNBQVE7MENBQU87Ozs7OzswQ0FHMUMsOERBQUN4Qyw0Q0FBS0E7Z0NBQ0x5QyxJQUFHO2dDQUNISCxXQUFVO2dDQUNWSSxNQUFNO2dDQUNMLEdBQUcvQixTQUFTLE9BQU87Ozs7Ozs0QkFHcEJGLEVBQUFBLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUU0sSUFBSSxtQkFDWiw4REFBQzRCO2dDQUFFTCxXQUFVOzBDQUE2QjdCLE9BQU9NLElBQUksQ0FBQzZCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtoRSw4REFBQ2hELGdEQUFVQTs4QkFDViw0RUFBQ0ssOENBQU1BO3dCQUFDbUIsV0FBV0E7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkM7R0FyRk1iOztRQUtEZixvREFBT0E7UUFPSWMsc0RBQVNBO1FBRXNCSiwrREFBV0E7OztLQWRwREs7QUF1Rk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlck5hbWVGb3JtLnRzeD8xM2FiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBVc2VybmFtZVJlcXVlc3QsIFVzZXJuYW1lVmFsaWRhdG9yIH0gZnJvbSAnQC9saWIvdmFsaWRhdG9ycy91c2VybmFtZSdcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy96b2QnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7XG5cdENhcmQsXG5cdENhcmRDb250ZW50LFxuXHRDYXJkRGVzY3JpcHRpb24sXG5cdENhcmRGb290ZXIsXG5cdENhcmRIZWFkZXIsXG5cdENhcmRUaXRsZSxcbn0gZnJvbSAnLi91aS9DYXJkJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL3VpL0xhYmVsJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuL3VpL0lucHV0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9CdXR0b24nXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcbmltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ0AvaG9va3MvdXNlLXRvYXN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuXG5pbnRlcmZhY2UgVXNlck5hbWVGb3JtUHJvcHMge1xuXHR1c2VyOiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxufVxuXG5jb25zdCBVc2VyTmFtZUZvcm06IEZDPFVzZXJOYW1lRm9ybVByb3BzPiA9ICh7IHVzZXIgfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdHJlZ2lzdGVyLFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0fSA9IHVzZUZvcm08VXNlcm5hbWVSZXF1ZXN0Pih7XG5cdFx0cmVzb2x2ZXI6IHpvZFJlc29sdmVyKFVzZXJuYW1lVmFsaWRhdG9yKSxcblx0XHRkZWZhdWx0VmFsdWVzOiB7XG5cdFx0XHRuYW1lOiB1c2VyPy51c2VybmFtZSB8fCAnJyxcblx0XHR9LFxuXHR9KVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3QgeyBtdXRhdGU6IHVwZGF0ZVVzZXJuYW1lLCBpc0xvYWRpbmcgfSA9IHVzZU11dGF0aW9uKHtcblx0XHRtdXRhdGlvbkZuOiBhc3luYyAoeyBuYW1lIH06IFVzZXJuYW1lUmVxdWVzdCkgPT4ge1xuXHRcdFx0Y29uc3QgcGF5bG9hZDogVXNlcm5hbWVSZXF1ZXN0ID0geyBuYW1lIH1cblxuXHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wYXRjaChgL2FwaS91c2VybmFtZWAsIHBheWxvYWQpXG5cdFx0XHRyZXR1cm4gZGF0YVxuXHRcdH0sXG5cdFx0b25FcnJvcjogKGVycikgPT4ge1xuXHRcdFx0aWYgKGVyciBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHtcblx0XHRcdFx0aWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdVc2VybmFtZSBhbHJlYWR5IHRha2VuLicsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJyBQbGVhc2UgY2hvb3NlIGEgZGlmZmVyZW50IHVzZXJuYW1lLicsXG5cdFx0XHRcdFx0XHR2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ1RoZXJlIHdhcyBhbiBlcnJvci4nLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ0NvdWxkIG5vdCBjcmVhdGUgc3VicmVkZGl0LicsXG5cdFx0XHRcdHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHR0b2FzdCh7XG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnWW91cmUgdXNlcm5hbWUgaGFzIGJlZW4gdXBkYXRlZC4nLFxuXHRcdFx0fSlcblxuXHRcdFx0cm91dGVyLnJlZnJlc2goKVxuXHRcdH0sXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KChlKSA9PiB1cGRhdGVVc2VybmFtZShlKSl9PlxuXHRcdFx0PENhcmQ+XG5cdFx0XHRcdDxDYXJkSGVhZGVyPlxuXHRcdFx0XHRcdDxDYXJkVGl0bGU+WW91ciB1c2VybmFtZTwvQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdDxDYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRQbGVhc2UgZW50ZXIgYSBkaXNwbGF5IG5hbWUgeW91IGFyZSBjb21mb3J0YWJsZSB3aXRoLlxuXHRcdFx0XHRcdDwvQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8L0NhcmRIZWFkZXI+XG5cblx0XHRcdFx0PENhcmRDb250ZW50PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBncmlkIGdhcC0xJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy04IGgtMTAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC16aW5jLTQwMCc+dS88L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PExhYmVsIGNsYXNzTmFtZT0nc3Itb25seScgaHRtbEZvcj0nbmFtZSc+XG5cdFx0XHRcdFx0XHRcdE5hbWVcblx0XHRcdFx0XHRcdDwvTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1bNDAwcHhdIHBsLTYnXG5cdFx0XHRcdFx0XHRcdHNpemU9ezMyfVxuXHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ25hbWUnKX1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHtlcnJvcnM/Lm5hbWUgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3B4LTEgdGV4dC14cyB0ZXh0LXJlZC02MDAnPntlcnJvcnMubmFtZS5tZXNzYWdlfTwvcD5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XG5cblx0XHRcdFx0PENhcmRGb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpc0xvYWRpbmc9e2lzTG9hZGluZ30+Q2hhbmdlIG5hbWU8L0J1dHRvbj5cblx0XHRcdFx0PC9DYXJkRm9vdGVyPlxuXHRcdFx0PC9DYXJkPlxuXHRcdDwvZm9ybT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmFtZUZvcm1cbiJdLCJuYW1lcyI6WyJVc2VybmFtZVZhbGlkYXRvciIsInpvZFJlc29sdmVyIiwidXNlRm9ybSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZU11dGF0aW9uIiwiYXhpb3MiLCJBeGlvc0Vycm9yIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJVc2VyTmFtZUZvcm0iLCJ1c2VyIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwidXNlcm5hbWUiLCJyb3V0ZXIiLCJtdXRhdGUiLCJ1cGRhdGVVc2VybmFtZSIsImlzTG9hZGluZyIsIm11dGF0aW9uRm4iLCJwYXlsb2FkIiwiZGF0YSIsInBhdGNoIiwib25FcnJvciIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJvblN1Y2Nlc3MiLCJyZWZyZXNoIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJodG1sRm9yIiwiaWQiLCJzaXplIiwicCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/UserNameForm.tsx\n"));

/***/ })

});