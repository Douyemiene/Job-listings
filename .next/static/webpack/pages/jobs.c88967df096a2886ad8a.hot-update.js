"use strict";
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./components/Job.js":
/*!***************************!*\
  !*** ./components/Job.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Job": function() { return /* binding */ Job; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\23481\\Desktop\\projects\\job-listings\\components\\Job.js";

const FilterItem = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  &:before {
    content: "•";
  }
`;
_c = FilterItem;
const Job = ({
  data
}) => {
  const {
    company,
    logo,
    when,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = data;
  let bordered = "";

  if (when && featured) {
    bordered = "border-l-4 border-primary ";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${bordered} w-11/12  mx-auto items-center bg-white mb-12 px-6 pt-6 pb-5 shadow-lg relative font-spartan`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: logo,
      alt: "company logo",
      className: "h-12 absolute  -top-6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-left mt-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-primary font-bold ",
          children: company
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), when && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-primary flex-inline justify-center items-center text-white font-semibold mx-3 py-1 px-2 rounded-xl",
          children: "NEW!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined), featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-black flex-inline justify-center items-center  text-white py-1 px-2 rounded-xl font-semibold uppercase",
          children: "featured"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "font-bold py-4 text-left",
        children: position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap text-darkerCyan text-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: postedAt,
          noBullet: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: contract
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-4 bg-darkCyan lg:hidden",
        style: {
          height: "1.2px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap content-between max-h-44 mt-4",
      children: [tools.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToolsAndLanguages, {
        toolOrSkill: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined)), languages.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToolsAndLanguages, {
        toolOrSkill: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
_c2 = Job;

const FilterItemContainer = ({
  filter,
  noBullet
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: filter && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " text-gray-500",
      children: noBullet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: " mr-3 ",
        children: [" ", filter]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "ml-0.5  mr-3 ",
          children: [" ", filter]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

_c3 = FilterItemContainer;

const ToolsAndLanguages = ({
  toolOrSkill
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "px-2 py-1 shadow text-primary bg-cyan text-xs font-bold mr-4 mb-3",
    children: toolOrSkill
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

_c4 = ToolsAndLanguages;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "FilterItem");
$RefreshReg$(_c2, "Job");
$RefreshReg$(_c3, "FilterItemContainer");
$RefreshReg$(_c4, "ToolsAndLanguages");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy5jODg5NjdkZjA5NmEyODg2YWQ4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxVQUFVLEdBQUdELDBEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBSkE7S0FBTUM7QUFNQyxNQUFNRSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBYztBQUMvQixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsSUFGSTtBQUdKQyxJQUFBQSxJQUhJO0FBSUpDLElBQUFBLFFBSkk7QUFLSkMsSUFBQUEsUUFMSTtBQU1KQyxJQUFBQSxRQU5JO0FBT0pDLElBQUFBLFFBUEk7QUFRSkMsSUFBQUEsUUFSSTtBQVNKQyxJQUFBQSxTQVRJO0FBVUpDLElBQUFBO0FBVkksTUFXRlYsSUFYSjtBQWFBLE1BQUlXLFFBQVEsR0FBRyxFQUFmOztBQUNBLE1BQUlSLElBQUksSUFBSUMsUUFBWixFQUFzQjtBQUNwQk8sSUFBQUEsUUFBUSxHQUFHLDRCQUFYO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFTLEVBQUcsR0FBRUEsUUFBUyw4RkFEekI7QUFBQSw0QkFHRTtBQUFLLFNBQUcsRUFBRVQsSUFBVjtBQUFnQixTQUFHLEVBQUMsY0FBcEI7QUFBbUMsZUFBUyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFLRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQyx5QkFBaEI7QUFBQSxvQkFBMkNEO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0UsSUFBSSxpQkFDSDtBQUFNLG1CQUFTLEVBQUMsdUdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLEVBT0dDLFFBQVEsaUJBQ1A7QUFBTSxtQkFBUyxFQUFDLDJHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSxrQkFBMkNDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDRSw4REFBQyxtQkFBRDtBQUFxQixnQkFBTSxFQUFFQyxRQUE3QjtBQUF1QyxrQkFBUTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQU0sRUFBRUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLG1CQUFEO0FBQXFCLGdCQUFNLEVBQUVDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBb0JFO0FBQ0UsaUJBQVMsRUFBQyw0QkFEWjtBQUVFLGFBQUssRUFBRTtBQUFFSSxVQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQThCRTtBQUFLLGVBQVMsRUFBQyw4Q0FBZjtBQUFBLGlCQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxpQkFBRDtBQUFtQixtQkFBVyxFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBREgsRUFLR0wsU0FBUyxDQUFDSSxHQUFWLENBQWVDLElBQUQsaUJBQ2IsOERBQUMsaUJBQUQ7QUFBbUIsbUJBQVcsRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwQ0QsQ0E3RE07TUFBTWY7O0FBK0RiLE1BQU1nQixtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQUY7QUFBVUMsRUFBQUE7QUFBVixDQUFELEtBQTBCO0FBQ3BELHNCQUNFO0FBQUEsY0FDR0QsTUFBTSxpQkFDTDtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUNHQyxRQUFRLGdCQUNQO0FBQU0saUJBQVMsRUFBQyxRQUFoQjtBQUFBLHdCQUEyQkQsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPLGdCQUdQLDhEQUFDLFVBQUQ7QUFBQSwrQkFDRTtBQUFNLG1CQUFTLEVBQUMsZUFBaEI7QUFBQSwwQkFBa0NBLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUFlRCxDQWhCRDs7TUFBTUQ7O0FBa0JOLE1BQU1HLGlCQUFpQixHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQXFCO0FBQzdDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLG1FQUFoQjtBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7TUFBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEZpbHRlckl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwi4oCiXCI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvYiA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbXBhbnksXHJcbiAgICBsb2dvLFxyXG4gICAgd2hlbixcclxuICAgIGZlYXR1cmVkLFxyXG4gICAgcG9zaXRpb24sXHJcbiAgICBwb3N0ZWRBdCxcclxuICAgIGNvbnRyYWN0LFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBsYW5ndWFnZXMsXHJcbiAgICB0b29scyxcclxuICB9ID0gZGF0YTtcclxuXHJcbiAgbGV0IGJvcmRlcmVkID0gXCJcIjtcclxuICBpZiAod2hlbiAmJiBmZWF0dXJlZCkge1xyXG4gICAgYm9yZGVyZWQgPSBcImJvcmRlci1sLTQgYm9yZGVyLXByaW1hcnkgXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2JvcmRlcmVkfSB3LTExLzEyICBteC1hdXRvIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBtYi0xMiBweC02IHB0LTYgcGItNSBzaGFkb3ctbGcgcmVsYXRpdmUgZm9udC1zcGFydGFuYH1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImNvbXBhbnkgbG9nb1wiIGNsYXNzTmFtZT1cImgtMTIgYWJzb2x1dGUgIC10b3AtNlwiIC8+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxlZnQgbXQtNlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZCBcIj57Y29tcGFueX08L3NwYW4+XHJcbiAgICAgICAgICB7d2hlbiAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgZmxleC1pbmxpbmUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBteC0zIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgTkVXIVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2ZlYXR1cmVkICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmxhY2sgZmxleC1pbmxpbmUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICB0ZXh0LXdoaXRlIHB5LTEgcHgtMiByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBweS00IHRleHQtbGVmdFwiPntwb3NpdGlvbn08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHRleHQtZGFya2VyQ3lhbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8RmlsdGVySXRlbUNvbnRhaW5lciBmaWx0ZXI9e3Bvc3RlZEF0fSBub0J1bGxldCAvPlxyXG4gICAgICAgICAgPEZpbHRlckl0ZW1Db250YWluZXIgZmlsdGVyPXtjb250cmFjdH0gLz5cclxuICAgICAgICAgIDxGaWx0ZXJJdGVtQ29udGFpbmVyIGZpbHRlcj17bG9jYXRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktNCBiZy1kYXJrQ3lhbiBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEuMnB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWJldHdlZW4gbWF4LWgtNDQgbXQtNFwiPlxyXG4gICAgICAgIHt0b29scy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxUb29sc0FuZExhbmd1YWdlcyB0b29sT3JTa2lsbD17aXRlbX0gLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAge2xhbmd1YWdlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxUb29sc0FuZExhbmd1YWdlcyB0b29sT3JTa2lsbD17aXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmlsdGVySXRlbUNvbnRhaW5lciA9ICh7IGZpbHRlciwgbm9CdWxsZXQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZmlsdGVyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICB7bm9CdWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBtci0zIFwiPiB7ZmlsdGVyfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxGaWx0ZXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTAuNSAgbXItMyBcIj4ge2ZpbHRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvRmlsdGVySXRlbT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVG9vbHNBbmRMYW5ndWFnZXMgPSAoeyB0b29sT3JTa2lsbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBzaGFkb3cgdGV4dC1wcmltYXJ5IGJnLWN5YW4gdGV4dC14cyBmb250LWJvbGQgbXItNCBtYi0zXCI+XHJcbiAgICAgIHt0b29sT3JTa2lsbH1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRmlsdGVySXRlbSIsImRpdiIsIkpvYiIsImRhdGEiLCJjb21wYW55IiwibG9nbyIsIndoZW4iLCJmZWF0dXJlZCIsInBvc2l0aW9uIiwicG9zdGVkQXQiLCJjb250cmFjdCIsImxvY2F0aW9uIiwibGFuZ3VhZ2VzIiwidG9vbHMiLCJib3JkZXJlZCIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJGaWx0ZXJJdGVtQ29udGFpbmVyIiwiZmlsdGVyIiwibm9CdWxsZXQiLCJUb29sc0FuZExhbmd1YWdlcyIsInRvb2xPclNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==