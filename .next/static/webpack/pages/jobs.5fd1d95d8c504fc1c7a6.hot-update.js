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
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


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
      src: process.env.PUBLIC_URL + logo,
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
          children: process.env.PUBLIC_URL + logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), when && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-primary flex-inline justify-center items-center text-white font-semibold mx-3 py-1 px-2 rounded-xl",
          children: "NEW!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined), featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-black flex-inline justify-center items-center  text-white py-1 px-2 rounded-xl font-semibold uppercase",
          children: "featured"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "font-bold py-4 text-left",
        children: position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap text-darkerCyan text-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: postedAt,
          noBullet: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: contract
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-4 bg-darkCyan lg:hidden",
        style: {
          height: "1.2px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap content-between max-h-44 mt-4",
      children: [tools.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToolsAndLanguages, {
        toolOrSkill: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined)), languages.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToolsAndLanguages, {
        toolOrSkill: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 84,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "ml-0.5  mr-3 ",
          children: [" ", filter]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy41ZmQxZDk1ZDhjNTA0ZmMxYzdhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsVUFBVSxHQUFHRCwwREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0tBQU1DO0FBTUMsTUFBTUUsR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWM7QUFDL0IsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLElBRkk7QUFHSkMsSUFBQUEsSUFISTtBQUlKQyxJQUFBQSxRQUpJO0FBS0pDLElBQUFBLFFBTEk7QUFNSkMsSUFBQUEsUUFOSTtBQU9KQyxJQUFBQSxRQVBJO0FBUUpDLElBQUFBLFFBUkk7QUFTSkMsSUFBQUEsU0FUSTtBQVVKQyxJQUFBQTtBQVZJLE1BV0ZWLElBWEo7QUFhQSxNQUFJVyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFJUixJQUFJLElBQUlDLFFBQVosRUFBc0I7QUFDcEJPLElBQUFBLFFBQVEsR0FBRyw0QkFBWDtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFHLEdBQUVBLFFBQVMsOEZBRHpCO0FBQUEsNEJBR0U7QUFDRSxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLEdBQXlCWixJQURoQztBQUVFLFNBQUcsRUFBQyxjQUZOO0FBR0UsZUFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLHlCQUFoQjtBQUFBLG9CQUNHVSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWixHQUF5Qlo7QUFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUlHQyxJQUFJLGlCQUNIO0FBQU0sbUJBQVMsRUFBQyx1R0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosRUFTR0MsUUFBUSxpQkFDUDtBQUFNLG1CQUFTLEVBQUMsMkdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWdCRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSxrQkFBMkNDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLGVBaUJFO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUFBLGdDQUNFLDhEQUFDLG1CQUFEO0FBQXFCLGdCQUFNLEVBQUVDLFFBQTdCO0FBQXVDLGtCQUFRO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxtQkFBRDtBQUFxQixnQkFBTSxFQUFFQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQU0sRUFBRUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBc0JFO0FBQ0UsaUJBQVMsRUFBQyw0QkFEWjtBQUVFLGFBQUssRUFBRTtBQUFFTyxVQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQW9DRTtBQUFLLGVBQVMsRUFBQyw4Q0FBZjtBQUFBLGlCQUNHTCxLQUFLLENBQUNNLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVCw4REFBQyxpQkFBRDtBQUFtQixtQkFBVyxFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBREgsRUFLR1IsU0FBUyxDQUFDTyxHQUFWLENBQWVDLElBQUQsaUJBQ2IsOERBQUMsaUJBQUQ7QUFBbUIsbUJBQVcsRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnREQsQ0FuRU07TUFBTWxCOztBQXFFYixNQUFNbUIsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBO0FBQVYsQ0FBRCxLQUEwQjtBQUNwRCxzQkFDRTtBQUFBLGNBQ0dELE1BQU0saUJBQ0w7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQkFDR0MsUUFBUSxnQkFDUDtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBQSx3QkFBMkJELE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETyxnQkFHUCw4REFBQyxVQUFEO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQWtDQSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBZUQsQ0FoQkQ7O01BQU1EOztBQWtCTixNQUFNRyxpQkFBaUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFxQjtBQUM3QyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxtRUFBaEI7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O01BQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSm9iLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJJdGVtID0gc3R5bGVkLmRpdmBcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBKb2IgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjb21wYW55LFxyXG4gICAgbG9nbyxcclxuICAgIHdoZW4sXHJcbiAgICBmZWF0dXJlZCxcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgcG9zdGVkQXQsXHJcbiAgICBjb250cmFjdCxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgbGFuZ3VhZ2VzLFxyXG4gICAgdG9vbHMsXHJcbiAgfSA9IGRhdGE7XHJcblxyXG4gIGxldCBib3JkZXJlZCA9IFwiXCI7XHJcbiAgaWYgKHdoZW4gJiYgZmVhdHVyZWQpIHtcclxuICAgIGJvcmRlcmVkID0gXCJib3JkZXItbC00IGJvcmRlci1wcmltYXJ5IFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtib3JkZXJlZH0gdy0xMS8xMiAgbXgtYXV0byBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbWItMTIgcHgtNiBwdC02IHBiLTUgc2hhZG93LWxnIHJlbGF0aXZlIGZvbnQtc3BhcnRhbmB9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBsb2dvfVxyXG4gICAgICAgIGFsdD1cImNvbXBhbnkgbG9nb1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiBhYnNvbHV0ZSAgLXRvcC02XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGVmdCBtdC02XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGxvZ299XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7d2hlbiAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgZmxleC1pbmxpbmUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBteC0zIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgTkVXIVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2ZlYXR1cmVkICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmxhY2sgZmxleC1pbmxpbmUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICB0ZXh0LXdoaXRlIHB5LTEgcHgtMiByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBweS00IHRleHQtbGVmdFwiPntwb3NpdGlvbn08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHRleHQtZGFya2VyQ3lhbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICA8RmlsdGVySXRlbUNvbnRhaW5lciBmaWx0ZXI9e3Bvc3RlZEF0fSBub0J1bGxldCAvPlxyXG4gICAgICAgICAgPEZpbHRlckl0ZW1Db250YWluZXIgZmlsdGVyPXtjb250cmFjdH0gLz5cclxuICAgICAgICAgIDxGaWx0ZXJJdGVtQ29udGFpbmVyIGZpbHRlcj17bG9jYXRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktNCBiZy1kYXJrQ3lhbiBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEuMnB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWJldHdlZW4gbWF4LWgtNDQgbXQtNFwiPlxyXG4gICAgICAgIHt0b29scy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxUb29sc0FuZExhbmd1YWdlcyB0b29sT3JTa2lsbD17aXRlbX0gLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAge2xhbmd1YWdlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxUb29sc0FuZExhbmd1YWdlcyB0b29sT3JTa2lsbD17aXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmlsdGVySXRlbUNvbnRhaW5lciA9ICh7IGZpbHRlciwgbm9CdWxsZXQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZmlsdGVyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICB7bm9CdWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBtci0zIFwiPiB7ZmlsdGVyfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxGaWx0ZXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTAuNSAgbXItMyBcIj4ge2ZpbHRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvRmlsdGVySXRlbT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVG9vbHNBbmRMYW5ndWFnZXMgPSAoeyB0b29sT3JTa2lsbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBzaGFkb3cgdGV4dC1wcmltYXJ5IGJnLWN5YW4gdGV4dC14cyBmb250LWJvbGQgbXItNCBtYi0zXCI+XHJcbiAgICAgIHt0b29sT3JTa2lsbH1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRmlsdGVySXRlbSIsImRpdiIsIkpvYiIsImRhdGEiLCJjb21wYW55IiwibG9nbyIsIndoZW4iLCJmZWF0dXJlZCIsInBvc2l0aW9uIiwicG9zdGVkQXQiLCJjb250cmFjdCIsImxvY2F0aW9uIiwibGFuZ3VhZ2VzIiwidG9vbHMiLCJib3JkZXJlZCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwiaGVpZ2h0IiwibWFwIiwiaXRlbSIsIkZpbHRlckl0ZW1Db250YWluZXIiLCJmaWx0ZXIiLCJub0J1bGxldCIsIlRvb2xzQW5kTGFuZ3VhZ2VzIiwidG9vbE9yU2tpbGwiXSwic291cmNlUm9vdCI6IiJ9