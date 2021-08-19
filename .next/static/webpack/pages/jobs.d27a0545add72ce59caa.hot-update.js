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
          children: "images/" + logo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy5kMjdhMDU0NWFkZDcyY2U1OWNhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxVQUFVLEdBQUdELDBEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBSkE7S0FBTUM7QUFNQyxNQUFNRSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBYztBQUMvQixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsSUFGSTtBQUdKQyxJQUFBQSxJQUhJO0FBSUpDLElBQUFBLFFBSkk7QUFLSkMsSUFBQUEsUUFMSTtBQU1KQyxJQUFBQSxRQU5JO0FBT0pDLElBQUFBLFFBUEk7QUFRSkMsSUFBQUEsUUFSSTtBQVNKQyxJQUFBQSxTQVRJO0FBVUpDLElBQUFBO0FBVkksTUFXRlYsSUFYSjtBQWFBLE1BQUlXLFFBQVEsR0FBRyxFQUFmOztBQUNBLE1BQUlSLElBQUksSUFBSUMsUUFBWixFQUFzQjtBQUNwQk8sSUFBQUEsUUFBUSxHQUFHLDRCQUFYO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFTLEVBQUcsR0FBRUEsUUFBUyw4RkFEekI7QUFBQSw0QkFHRTtBQUFLLFNBQUcsRUFBRVQsSUFBVjtBQUFnQixTQUFHLEVBQUMsY0FBcEI7QUFBbUMsZUFBUyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFLRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQyx5QkFBaEI7QUFBQSxvQkFBMkMsWUFBWUE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHQyxJQUFJLGlCQUNIO0FBQU0sbUJBQVMsRUFBQyx1R0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosRUFPR0MsUUFBUSxpQkFDUDtBQUFNLG1CQUFTLEVBQUMsMkdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWNFO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBLGtCQUEyQ0M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQWVFO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUFBLGdDQUNFLDhEQUFDLG1CQUFEO0FBQXFCLGdCQUFNLEVBQUVDLFFBQTdCO0FBQXVDLGtCQUFRO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxtQkFBRDtBQUFxQixnQkFBTSxFQUFFQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQU0sRUFBRUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFvQkU7QUFDRSxpQkFBUyxFQUFDLDRCQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVJLFVBQUFBLE1BQU0sRUFBRTtBQUFWO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBOEJFO0FBQUssZUFBUyxFQUFDLDhDQUFmO0FBQUEsaUJBQ0dGLEtBQUssQ0FBQ0csR0FBTixDQUFXQyxJQUFELGlCQUNULDhEQUFDLGlCQUFEO0FBQW1CLG1CQUFXLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FESCxFQUtHTCxTQUFTLENBQUNJLEdBQVYsQ0FBZUMsSUFBRCxpQkFDYiw4REFBQyxpQkFBRDtBQUFtQixtQkFBVyxFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBDRCxDQTdETTtNQUFNZjs7QUErRGIsTUFBTWdCLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVQyxFQUFBQTtBQUFWLENBQUQsS0FBMEI7QUFDcEQsc0JBQ0U7QUFBQSxjQUNHRCxNQUFNLGlCQUNMO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsZ0JBQ0dDLFFBQVEsZ0JBQ1A7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUEsd0JBQTJCRCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE8sZ0JBR1AsOERBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLDBCQUFrQ0EsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFERjtBQWVELENBaEJEOztNQUFNRDs7QUFrQk4sTUFBTUcsaUJBQWlCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBcUI7QUFDN0Msc0JBQ0U7QUFBTSxhQUFTLEVBQUMsbUVBQWhCO0FBQUEsY0FDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztNQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRmlsdGVySXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCLigKJcIjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSm9iID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29tcGFueSxcclxuICAgIGxvZ28sXHJcbiAgICB3aGVuLFxyXG4gICAgZmVhdHVyZWQsXHJcbiAgICBwb3NpdGlvbixcclxuICAgIHBvc3RlZEF0LFxyXG4gICAgY29udHJhY3QsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGxhbmd1YWdlcyxcclxuICAgIHRvb2xzLFxyXG4gIH0gPSBkYXRhO1xyXG5cclxuICBsZXQgYm9yZGVyZWQgPSBcIlwiO1xyXG4gIGlmICh3aGVuICYmIGZlYXR1cmVkKSB7XHJcbiAgICBib3JkZXJlZCA9IFwiYm9yZGVyLWwtNCBib3JkZXItcHJpbWFyeSBcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Ym9yZGVyZWR9IHctMTEvMTIgIG14LWF1dG8gaXRlbXMtY2VudGVyIGJnLXdoaXRlIG1iLTEyIHB4LTYgcHQtNiBwYi01IHNoYWRvdy1sZyByZWxhdGl2ZSBmb250LXNwYXJ0YW5gfVxyXG4gICAgPlxyXG4gICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiY29tcGFueSBsb2dvXCIgY2xhc3NOYW1lPVwiaC0xMiBhYnNvbHV0ZSAgLXRvcC02XCIgLz5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGVmdCBtdC02XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1ib2xkIFwiPntcImltYWdlcy9cIiArIGxvZ299PC9zcGFuPlxyXG4gICAgICAgICAge3doZW4gJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IGZsZXgtaW5saW5lIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbXgtMyBweS0xIHB4LTIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgIE5FVyFcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmZWF0dXJlZCAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWJsYWNrIGZsZXgtaW5saW5lIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgdGV4dC13aGl0ZSBweS0xIHB4LTIgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgcHktNCB0ZXh0LWxlZnRcIj57cG9zaXRpb259PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB0ZXh0LWRhcmtlckN5YW4gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgPEZpbHRlckl0ZW1Db250YWluZXIgZmlsdGVyPXtwb3N0ZWRBdH0gbm9CdWxsZXQgLz5cclxuICAgICAgICAgIDxGaWx0ZXJJdGVtQ29udGFpbmVyIGZpbHRlcj17Y29udHJhY3R9IC8+XHJcbiAgICAgICAgICA8RmlsdGVySXRlbUNvbnRhaW5lciBmaWx0ZXI9e2xvY2F0aW9ufSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTQgYmctZGFya0N5YW4gbGc6aGlkZGVuXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxLjJweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1iZXR3ZWVuIG1heC1oLTQ0IG10LTRcIj5cclxuICAgICAgICB7dG9vbHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8VG9vbHNBbmRMYW5ndWFnZXMgdG9vbE9yU2tpbGw9e2l0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIHtsYW5ndWFnZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8VG9vbHNBbmRMYW5ndWFnZXMgdG9vbE9yU2tpbGw9e2l0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpbHRlckl0ZW1Db250YWluZXIgPSAoeyBmaWx0ZXIsIG5vQnVsbGV0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2ZpbHRlciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAge25vQnVsbGV0ID8gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgbXItMyBcIj4ge2ZpbHRlcn08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8RmlsdGVySXRlbT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0wLjUgIG1yLTMgXCI+IHtmaWx0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ZpbHRlckl0ZW0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRvb2xzQW5kTGFuZ3VhZ2VzID0gKHsgdG9vbE9yU2tpbGwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgc2hhZG93IHRleHQtcHJpbWFyeSBiZy1jeWFuIHRleHQteHMgZm9udC1ib2xkIG1yLTQgbWItM1wiPlxyXG4gICAgICB7dG9vbE9yU2tpbGx9XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkZpbHRlckl0ZW0iLCJkaXYiLCJKb2IiLCJkYXRhIiwiY29tcGFueSIsImxvZ28iLCJ3aGVuIiwiZmVhdHVyZWQiLCJwb3NpdGlvbiIsInBvc3RlZEF0IiwiY29udHJhY3QiLCJsb2NhdGlvbiIsImxhbmd1YWdlcyIsInRvb2xzIiwiYm9yZGVyZWQiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiRmlsdGVySXRlbUNvbnRhaW5lciIsImZpbHRlciIsIm5vQnVsbGV0IiwiVG9vbHNBbmRMYW5ndWFnZXMiLCJ0b29sT3JTa2lsbCJdLCJzb3VyY2VSb290IjoiIn0=