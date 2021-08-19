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
      src: "images/" + logo,
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
          children: "images/" + logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), when && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-primary flex-inline justify-center items-center text-white font-semibold mx-3 py-1 px-2 rounded-xl",
          children: "NEW!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "bg-black flex-inline justify-center items-center  text-white py-1 px-2 rounded-xl font-semibold uppercase",
          children: "featured"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap text-darkerCyan text-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: postedAt,
          noBullet: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: contract
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItemContainer, {
          filter: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-4 bg-darkCyan lg:hidden",
        style: {
          height: "1.2px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 65,
        columnNumber: 11
      }, undefined)), languages.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToolsAndLanguages, {
        toolOrSkill: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
        lineNumber: 82,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "ml-0.5  mr-3 ",
          children: [" ", filter]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
    lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy45NzM4YTYyZTViMjQyYTY3OTVmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxVQUFVLEdBQUdELDBEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBSkE7S0FBTUM7QUFNQyxNQUFNRSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBYztBQUMvQixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsSUFGSTtBQUdKQyxJQUFBQSxJQUhJO0FBSUpDLElBQUFBLFFBSkk7QUFLSkMsSUFBQUEsUUFMSTtBQU1KQyxJQUFBQSxRQU5JO0FBT0pDLElBQUFBLFFBUEk7QUFRSkMsSUFBQUEsUUFSSTtBQVNKQyxJQUFBQSxTQVRJO0FBVUpDLElBQUFBO0FBVkksTUFXRlYsSUFYSjtBQWFBLE1BQUlXLFFBQVEsR0FBRyxFQUFmOztBQUNBLE1BQUlSLElBQUksSUFBSUMsUUFBWixFQUFzQjtBQUNwQk8sSUFBQUEsUUFBUSxHQUFHLDRCQUFYO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFTLEVBQUcsR0FBRUEsUUFBUyw4RkFEekI7QUFBQSw0QkFHRTtBQUNFLFNBQUcsRUFBRSxZQUFZVCxJQURuQjtBQUVFLFNBQUcsRUFBQyxjQUZOO0FBR0UsZUFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLHlCQUFoQjtBQUFBLG9CQUEyQyxZQUFZQTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdDLElBQUksaUJBQ0g7QUFBTSxtQkFBUyxFQUFDLHVHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixFQU9HQyxRQUFRLGlCQUNQO0FBQU0sbUJBQVMsRUFBQywyR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBY0U7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0JBQTJDQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLHdDQUFmO0FBQUEsZ0NBQ0UsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQU0sRUFBRUMsUUFBN0I7QUFBdUMsa0JBQVE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLG1CQUFEO0FBQXFCLGdCQUFNLEVBQUVDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQyxtQkFBRDtBQUFxQixnQkFBTSxFQUFFQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRixlQW9CRTtBQUNFLGlCQUFTLEVBQUMsNEJBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRUksVUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFrQ0U7QUFBSyxlQUFTLEVBQUMsOENBQWY7QUFBQSxpQkFDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdDLElBQUQsaUJBQ1QsOERBQUMsaUJBQUQ7QUFBbUIsbUJBQVcsRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQURILEVBS0dMLFNBQVMsQ0FBQ0ksR0FBVixDQUFlQyxJQUFELGlCQUNiLDhEQUFDLGlCQUFEO0FBQW1CLG1CQUFXLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOENELENBakVNO01BQU1mOztBQW1FYixNQUFNZ0IsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBO0FBQVYsQ0FBRCxLQUEwQjtBQUNwRCxzQkFDRTtBQUFBLGNBQ0dELE1BQU0saUJBQ0w7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQkFDR0MsUUFBUSxnQkFDUDtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBQSx3QkFBMkJELE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETyxnQkFHUCw4REFBQyxVQUFEO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQWtDQSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBZUQsQ0FoQkQ7O01BQU1EOztBQWtCTixNQUFNRyxpQkFBaUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFxQjtBQUM3QyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxtRUFBaEI7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O01BQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSm9iLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJJdGVtID0gc3R5bGVkLmRpdmBcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBKb2IgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjb21wYW55LFxyXG4gICAgbG9nbyxcclxuICAgIHdoZW4sXHJcbiAgICBmZWF0dXJlZCxcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgcG9zdGVkQXQsXHJcbiAgICBjb250cmFjdCxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgbGFuZ3VhZ2VzLFxyXG4gICAgdG9vbHMsXHJcbiAgfSA9IGRhdGE7XHJcblxyXG4gIGxldCBib3JkZXJlZCA9IFwiXCI7XHJcbiAgaWYgKHdoZW4gJiYgZmVhdHVyZWQpIHtcclxuICAgIGJvcmRlcmVkID0gXCJib3JkZXItbC00IGJvcmRlci1wcmltYXJ5IFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtib3JkZXJlZH0gdy0xMS8xMiAgbXgtYXV0byBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbWItMTIgcHgtNiBwdC02IHBiLTUgc2hhZG93LWxnIHJlbGF0aXZlIGZvbnQtc3BhcnRhbmB9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e1wiaW1hZ2VzL1wiICsgbG9nb31cclxuICAgICAgICBhbHQ9XCJjb21wYW55IGxvZ29cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtMTIgYWJzb2x1dGUgIC10b3AtNlwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxlZnQgbXQtNlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZCBcIj57XCJpbWFnZXMvXCIgKyBsb2dvfTwvc3Bhbj5cclxuICAgICAgICAgIHt3aGVuICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBmbGV4LWlubGluZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIG14LTMgcHktMSBweC0yIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICBORVchXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmVhdHVyZWQgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibGFjayBmbGV4LWlubGluZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHRleHQtd2hpdGUgcHktMSBweC0yIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB5LTQgdGV4dC1sZWZ0XCI+e3Bvc2l0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdGV4dC1kYXJrZXJDeWFuIHRleHQtc21cIj5cclxuICAgICAgICAgIDxGaWx0ZXJJdGVtQ29udGFpbmVyIGZpbHRlcj17cG9zdGVkQXR9IG5vQnVsbGV0IC8+XHJcbiAgICAgICAgICA8RmlsdGVySXRlbUNvbnRhaW5lciBmaWx0ZXI9e2NvbnRyYWN0fSAvPlxyXG4gICAgICAgICAgPEZpbHRlckl0ZW1Db250YWluZXIgZmlsdGVyPXtsb2NhdGlvbn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS00IGJnLWRhcmtDeWFuIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMS4ycHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYmV0d2VlbiBtYXgtaC00NCBtdC00XCI+XHJcbiAgICAgICAge3Rvb2xzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFRvb2xzQW5kTGFuZ3VhZ2VzIHRvb2xPclNraWxsPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICB7bGFuZ3VhZ2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFRvb2xzQW5kTGFuZ3VhZ2VzIHRvb2xPclNraWxsPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaWx0ZXJJdGVtQ29udGFpbmVyID0gKHsgZmlsdGVyLCBub0J1bGxldCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtmaWx0ZXIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHtub0J1bGxldCA/IChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIG1yLTMgXCI+IHtmaWx0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZpbHRlckl0ZW0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMC41ICBtci0zIFwiPiB7ZmlsdGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9GaWx0ZXJJdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUb29sc0FuZExhbmd1YWdlcyA9ICh7IHRvb2xPclNraWxsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0xIHNoYWRvdyB0ZXh0LXByaW1hcnkgYmctY3lhbiB0ZXh0LXhzIGZvbnQtYm9sZCBtci00IG1iLTNcIj5cclxuICAgICAge3Rvb2xPclNraWxsfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGaWx0ZXJJdGVtIiwiZGl2IiwiSm9iIiwiZGF0YSIsImNvbXBhbnkiLCJsb2dvIiwid2hlbiIsImZlYXR1cmVkIiwicG9zaXRpb24iLCJwb3N0ZWRBdCIsImNvbnRyYWN0IiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJ0b29scyIsImJvcmRlcmVkIiwiaGVpZ2h0IiwibWFwIiwiaXRlbSIsIkZpbHRlckl0ZW1Db250YWluZXIiLCJmaWx0ZXIiLCJub0J1bGxldCIsIlRvb2xzQW5kTGFuZ3VhZ2VzIiwidG9vbE9yU2tpbGwiXSwic291cmNlUm9vdCI6IiJ9