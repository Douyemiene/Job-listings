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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy4zZjYyZTE4MDE4M2RiZDU4OGM4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsVUFBVSxHQUFHRCwwREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0tBQU1DO0FBTUMsTUFBTUUsR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWM7QUFDL0IsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLElBRkk7QUFHSkMsSUFBQUEsSUFISTtBQUlKQyxJQUFBQSxRQUpJO0FBS0pDLElBQUFBLFFBTEk7QUFNSkMsSUFBQUEsUUFOSTtBQU9KQyxJQUFBQSxRQVBJO0FBUUpDLElBQUFBLFFBUkk7QUFTSkMsSUFBQUEsU0FUSTtBQVVKQyxJQUFBQTtBQVZJLE1BV0ZWLElBWEo7QUFhQSxNQUFJVyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFJUixJQUFJLElBQUlDLFFBQVosRUFBc0I7QUFDcEJPLElBQUFBLFFBQVEsR0FBRyw0QkFBWDtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFHLEdBQUVBLFFBQVMsOEZBRHpCO0FBQUEsNEJBR0U7QUFDRSxTQUFHLEVBQUUsWUFBWVQsSUFEbkI7QUFFRSxTQUFHLEVBQUMsY0FGTjtBQUdFLGVBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQyx5QkFBaEI7QUFBQSxvQkFDR1UsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVosR0FBeUJaO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJR0MsSUFBSSxpQkFDSDtBQUFNLG1CQUFTLEVBQUMsdUdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLEVBU0dDLFFBQVEsaUJBQ1A7QUFBTSxtQkFBUyxFQUFDLDJHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0JBQTJDQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRixlQWlCRTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDRSw4REFBQyxtQkFBRDtBQUFxQixnQkFBTSxFQUFFQyxRQUE3QjtBQUF1QyxrQkFBUTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQU0sRUFBRUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLG1CQUFEO0FBQXFCLGdCQUFNLEVBQUVDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQXNCRTtBQUNFLGlCQUFTLEVBQUMsNEJBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRU8sVUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFvQ0U7QUFBSyxlQUFTLEVBQUMsOENBQWY7QUFBQSxpQkFDR0wsS0FBSyxDQUFDTSxHQUFOLENBQVdDLElBQUQsaUJBQ1QsOERBQUMsaUJBQUQ7QUFBbUIsbUJBQVcsRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQURILEVBS0dSLFNBQVMsQ0FBQ08sR0FBVixDQUFlQyxJQUFELGlCQUNiLDhEQUFDLGlCQUFEO0FBQW1CLG1CQUFXLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0RELENBbkVNO01BQU1sQjs7QUFxRWIsTUFBTW1CLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVQyxFQUFBQTtBQUFWLENBQUQsS0FBMEI7QUFDcEQsc0JBQ0U7QUFBQSxjQUNHRCxNQUFNLGlCQUNMO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsZ0JBQ0dDLFFBQVEsZ0JBQ1A7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUEsd0JBQTJCRCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE8sZ0JBR1AsOERBQUMsVUFBRDtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLDBCQUFrQ0EsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFERjtBQWVELENBaEJEOztNQUFNRDs7QUFrQk4sTUFBTUcsaUJBQWlCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBcUI7QUFDN0Msc0JBQ0U7QUFBTSxhQUFTLEVBQUMsbUVBQWhCO0FBQUEsY0FDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztNQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRmlsdGVySXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCLigKJcIjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSm9iID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29tcGFueSxcclxuICAgIGxvZ28sXHJcbiAgICB3aGVuLFxyXG4gICAgZmVhdHVyZWQsXHJcbiAgICBwb3NpdGlvbixcclxuICAgIHBvc3RlZEF0LFxyXG4gICAgY29udHJhY3QsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGxhbmd1YWdlcyxcclxuICAgIHRvb2xzLFxyXG4gIH0gPSBkYXRhO1xyXG5cclxuICBsZXQgYm9yZGVyZWQgPSBcIlwiO1xyXG4gIGlmICh3aGVuICYmIGZlYXR1cmVkKSB7XHJcbiAgICBib3JkZXJlZCA9IFwiYm9yZGVyLWwtNCBib3JkZXItcHJpbWFyeSBcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Ym9yZGVyZWR9IHctMTEvMTIgIG14LWF1dG8gaXRlbXMtY2VudGVyIGJnLXdoaXRlIG1iLTEyIHB4LTYgcHQtNiBwYi01IHNoYWRvdy1sZyByZWxhdGl2ZSBmb250LXNwYXJ0YW5gfVxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtcImltYWdlcy9cIiArIGxvZ299XHJcbiAgICAgICAgYWx0PVwiY29tcGFueSBsb2dvXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTEyIGFic29sdXRlICAtdG9wLTZcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1sZWZ0IG10LTZcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LWJvbGQgXCI+XHJcbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbG9nb31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHt3aGVuICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBmbGV4LWlubGluZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIG14LTMgcHktMSBweC0yIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICBORVchXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmVhdHVyZWQgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibGFjayBmbGV4LWlubGluZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHRleHQtd2hpdGUgcHktMSBweC0yIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB5LTQgdGV4dC1sZWZ0XCI+e3Bvc2l0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdGV4dC1kYXJrZXJDeWFuIHRleHQtc21cIj5cclxuICAgICAgICAgIDxGaWx0ZXJJdGVtQ29udGFpbmVyIGZpbHRlcj17cG9zdGVkQXR9IG5vQnVsbGV0IC8+XHJcbiAgICAgICAgICA8RmlsdGVySXRlbUNvbnRhaW5lciBmaWx0ZXI9e2NvbnRyYWN0fSAvPlxyXG4gICAgICAgICAgPEZpbHRlckl0ZW1Db250YWluZXIgZmlsdGVyPXtsb2NhdGlvbn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS00IGJnLWRhcmtDeWFuIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMS4ycHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYmV0d2VlbiBtYXgtaC00NCBtdC00XCI+XHJcbiAgICAgICAge3Rvb2xzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFRvb2xzQW5kTGFuZ3VhZ2VzIHRvb2xPclNraWxsPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICB7bGFuZ3VhZ2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFRvb2xzQW5kTGFuZ3VhZ2VzIHRvb2xPclNraWxsPXtpdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaWx0ZXJJdGVtQ29udGFpbmVyID0gKHsgZmlsdGVyLCBub0J1bGxldCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtmaWx0ZXIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHtub0J1bGxldCA/IChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIG1yLTMgXCI+IHtmaWx0ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZpbHRlckl0ZW0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMC41ICBtci0zIFwiPiB7ZmlsdGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9GaWx0ZXJJdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUb29sc0FuZExhbmd1YWdlcyA9ICh7IHRvb2xPclNraWxsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0xIHNoYWRvdyB0ZXh0LXByaW1hcnkgYmctY3lhbiB0ZXh0LXhzIGZvbnQtYm9sZCBtci00IG1iLTNcIj5cclxuICAgICAge3Rvb2xPclNraWxsfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJGaWx0ZXJJdGVtIiwiZGl2IiwiSm9iIiwiZGF0YSIsImNvbXBhbnkiLCJsb2dvIiwid2hlbiIsImZlYXR1cmVkIiwicG9zaXRpb24iLCJwb3N0ZWRBdCIsImNvbnRyYWN0IiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJ0b29scyIsImJvcmRlcmVkIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiRmlsdGVySXRlbUNvbnRhaW5lciIsImZpbHRlciIsIm5vQnVsbGV0IiwiVG9vbHNBbmRMYW5ndWFnZXMiLCJ0b29sT3JTa2lsbCJdLCJzb3VyY2VSb290IjoiIn0=