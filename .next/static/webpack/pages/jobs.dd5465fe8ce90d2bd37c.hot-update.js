"use strict";
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Jobs; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Job */ "./components/Job.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _components_AddedFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddedFilter */ "./components/AddedFilter.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\23481\\Desktop\\projects\\job-listings\\pages\\jobs.js",
    _s = $RefreshSig$();






function Jobs() {
  _s();

  const {
    0: navState,
    1: setNavState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //typescript typescript typescript

  const onToggleNav = () => {
    if (navState) {
      setNavState("");
    } else {
      setNavState("open");
    }
  };

  const NavIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
    }

    & span {
      display: block;
      position: absolute;
      height: 5px;
      width: 50%;
      background: #000;
      opacity: 1;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    pan:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }

    & span:nth-child(odd) {
      left: 0px;
      border-radius: 9px 0 0 9px;
    }

    & span:nth-child(1),
    & span:nth-child(2) {
      top: 0px;
    }

    & span:nth-child(3),
    & span:nth-child(4) {
      top: 10px;
    }

    & span:nth-child(5) {
      top: 20px;
    }

    &.open span:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &.open span:nth-child(2),
    &.open span:nth-child(5) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    &.open span:nth-child(1) {
      left: 0px;
      top: 7px;
    }

    &.open span:nth-child(2) {
      right: 50%;
      top: 7px;
    }

    &.open span:nth-child(3) {
      left: -50%;
      opacity: 0;
    }

    &.open span:nth-child(4) {
      left: 100%;
      opacity: 0;
    }

    &.open span:nth-child(5) {
      opacity: 0;
      left: 5px;
      top: 29px;
    }
  `; //state

  const {
    0: searchFilters,
    1: setSearchFilters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: filteredJobs,
    1: setFilteredJobs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data__WEBPACK_IMPORTED_MODULE_3__.jobs);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    search();
  }, [searchFilters]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("filteredJobs", filteredJobs);
  }, [filteredJobs]);
  let jobsAndTheirFilters = _data__WEBPACK_IMPORTED_MODULE_3__.jobs.map(({
    role,
    level,
    location,
    languages,
    tools
  }) => [role, level, location].concat(languages, tools));
  jobsAndTheirFilters = jobsAndTheirFilters.map(job => job.map(jobItem => {
    return jobItem.toLowerCase();
  }));

  const search = event => {
    if (searchFilters.length !== 0) {
      console.log("this", searchFilters.length);
      const filteredJobsAndNulls = jobsAndTheirFilters.map((job, idx) => {
        if (searchFilters.every(item => job.includes(item))) {
          return _data__WEBPACK_IMPORTED_MODULE_3__.jobs[idx];
        }

        return null;
      });
      console.log("noww", filteredJobsAndNulls);
      const filteredJobs = filteredJobsAndNulls.filter(job => job != null);
      setFilteredJobs(filteredJobs);
    } else {
      setFilteredJobs(_data__WEBPACK_IMPORTED_MODULE_3__.jobs);
    }
  }; //search end


  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const addFilter = () => {
    if (filter) {
      setSearchFilters([...searchFilters, filter]);
    }
  };

  const removeFilter = targetFilter => {
    setSearchFilters(searchFilters.filter(item => item !== targetFilter));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pt-12 bg-bgCyan w-full px-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "py-4 flex justify-end px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
        className: navState,
        onClick: onToggleNav,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-2xl lg:text-4xl font-semibold",
      children: "Search for Jobs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "shadow-md w-10/12 mx-auto my-6 py-4 px-3 mb-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "search",
        onChange: onFilterChange,
        className: "pl-2 rounded-md w-10/12 md:w-7/12 bg-white border-gray-400 border-2 lg:py-2 lg:mb-3 md:mr-3 lg:mr-6 lg:w-1/3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addFilter,
        className: "mt-4 rounded-md bg-black text-white px-2 py-1 text-sm mb-4",
        children: "Add filter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap lg:w-10/12 mx-auto mb-2",
        children: searchFilters.map(filter => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddedFilter__WEBPACK_IMPORTED_MODULE_4__.default, {
          name: filter,
          removeFilter: removeFilter
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:grid grid-cols-2 lg:grid-cols-3 gap-x-2 md:px-6 lg:px-16",
      children: filteredJobs.map(jobItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Job__WEBPACK_IMPORTED_MODULE_2__.Job, {
        data: jobItem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }, this);
}

_s(Jobs, "rOlX9Eop+utigEw82/3KyNcKjw4=");

_c = Jobs;

var _c;

$RefreshReg$(_c, "Jobs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy5kZDU0NjVmZThjZTkwZDJiZDM3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlAsK0NBQVEsQ0FBQyxFQUFELENBQXhDLENBRDZCLENBQ2lCOztBQUM5QyxRQUFNUSxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFJRixRQUFKLEVBQWM7QUFDWkMsTUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxXQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0Q7QUFDRixHQU5EOztBQU9BLFFBQU1FLE9BQU8sR0FBR0wsMERBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUFBQyw2REFBZjtBQUFBLGdCQUNHM0IsWUFBWSxDQUFDTSxHQUFiLENBQWtCUSxPQUFELGlCQUNoQiw4REFBQyxnREFBRDtBQUFLLFlBQUksRUFBRUE7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEOztHQTVNdUJ4Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEpvYiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0pvYlwiO1xyXG5pbXBvcnQgeyBqb2JzIH0gZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IEFkZGVkRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZGVkRmlsdGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2JzKCkge1xyXG4gIGNvbnN0IFtuYXZTdGF0ZSwgc2V0TmF2U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7IC8vdHlwZXNjcmlwdCB0eXBlc2NyaXB0IHR5cGVzY3JpcHRcclxuICBjb25zdCBvblRvZ2dsZU5hdiA9ICgpID0+IHtcclxuICAgIGlmIChuYXZTdGF0ZSkge1xyXG4gICAgICBzZXROYXZTdGF0ZShcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5hdlN0YXRlKFwib3BlblwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IE5hdkljb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgfVxyXG5cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICBwYW46bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDlweCA5cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmIHNwYW46bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweCAwIDAgOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgc3BhbjpudGgtY2hpbGQoMSksXHJcbiAgICAmIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFuOm50aC1jaGlsZCgzKSxcclxuICAgICYgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCgyKSxcclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogLTUwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgdG9wOiAyOXB4O1xyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIC8vc3RhdGVcclxuICBjb25zdCBbc2VhcmNoRmlsdGVycywgc2V0U2VhcmNoRmlsdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEpvYnMsIHNldEZpbHRlcmVkSm9ic10gPSB1c2VTdGF0ZShqb2JzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNlYXJjaCgpO1xyXG4gIH0sIFtzZWFyY2hGaWx0ZXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkSm9ic1wiLCBmaWx0ZXJlZEpvYnMpO1xyXG4gIH0sIFtmaWx0ZXJlZEpvYnNdKTtcclxuXHJcbiAgbGV0IGpvYnNBbmRUaGVpckZpbHRlcnMgPSBqb2JzLm1hcChcclxuICAgICh7IHJvbGUsIGxldmVsLCBsb2NhdGlvbiwgbGFuZ3VhZ2VzLCB0b29scyB9KSA9PlxyXG4gICAgICBbcm9sZSwgbGV2ZWwsIGxvY2F0aW9uXS5jb25jYXQobGFuZ3VhZ2VzLCB0b29scylcclxuICApO1xyXG5cclxuICBqb2JzQW5kVGhlaXJGaWx0ZXJzID0gam9ic0FuZFRoZWlyRmlsdGVycy5tYXAoKGpvYikgPT5cclxuICAgIGpvYi5tYXAoKGpvYkl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGpvYkl0ZW0udG9Mb3dlckNhc2UoKTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoRmlsdGVycy5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzXCIsIHNlYXJjaEZpbHRlcnMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRKb2JzQW5kTnVsbHMgPSBqb2JzQW5kVGhlaXJGaWx0ZXJzLm1hcCgoam9iLCBpZHgpID0+IHtcclxuICAgICAgICBpZiAoc2VhcmNoRmlsdGVycy5ldmVyeSgoaXRlbSkgPT4gam9iLmluY2x1ZGVzKGl0ZW0pKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGpvYnNbaWR4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJub3d3XCIsIGZpbHRlcmVkSm9ic0FuZE51bGxzKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRKb2JzID0gZmlsdGVyZWRKb2JzQW5kTnVsbHMuZmlsdGVyKChqb2IpID0+IGpvYiAhPSBudWxsKTtcclxuXHJcbiAgICAgIHNldEZpbHRlcmVkSm9icyhmaWx0ZXJlZEpvYnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RmlsdGVyZWRKb2JzKGpvYnMpO1xyXG4gICAgfVxyXG4gIH07IC8vc2VhcmNoIGVuZFxyXG5cclxuICBjb25zdCBvbkZpbHRlckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBzZXRTZWFyY2hGaWx0ZXJzKFsuLi5zZWFyY2hGaWx0ZXJzLCBmaWx0ZXJdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVGaWx0ZXIgPSAodGFyZ2V0RmlsdGVyKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hGaWx0ZXJzKHNlYXJjaEZpbHRlcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0YXJnZXRGaWx0ZXIpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMiBiZy1iZ0N5YW4gdy1mdWxsIHB4LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGZsZXgganVzdGlmeS1lbmQgcHgtNFwiPlxyXG4gICAgICAgIDxOYXZJY29uIGNsYXNzTmFtZT17bmF2U3RhdGV9IG9uQ2xpY2s9e29uVG9nZ2xlTmF2fT5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8L05hdkljb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxnOnRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5TZWFyY2ggZm9yIEpvYnM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgdy0xMC8xMiBteC1hdXRvIG15LTYgcHktNCBweC0zIG1iLTE2XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlckNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcm91bmRlZC1tZCB3LTEwLzEyIG1kOnctNy8xMiBiZy13aGl0ZSBib3JkZXItZ3JheS00MDAgYm9yZGVyLTIgbGc6cHktMiBsZzptYi0zIG1kOm1yLTMgbGc6bXItNiBsZzp3LTEvM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXthZGRGaWx0ZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHJvdW5kZWQtbWQgYmctYmxhY2sgdGV4dC13aGl0ZSBweC0yIHB5LTEgdGV4dC1zbSBtYi00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgZmlsdGVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBsZzp3LTEwLzEyIG14LWF1dG8gbWItMlwiPlxyXG4gICAgICAgICAge3NlYXJjaEZpbHRlcnMubWFwKChmaWx0ZXIpID0+IChcclxuICAgICAgICAgICAgPEFkZGVkRmlsdGVyIG5hbWU9e2ZpbHRlcn0gcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAteC0yIG1kOnB4LTYgbGc6cHgtMTZcIj5cclxuICAgICAgICB7ZmlsdGVyZWRKb2JzLm1hcCgoam9iSXRlbSkgPT4gKFxyXG4gICAgICAgICAgPEpvYiBkYXRhPXtqb2JJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSm9iIiwiam9icyIsIkFkZGVkRmlsdGVyIiwic3R5bGVkIiwiSm9icyIsIm5hdlN0YXRlIiwic2V0TmF2U3RhdGUiLCJvblRvZ2dsZU5hdiIsIk5hdkljb24iLCJkaXYiLCJzZWFyY2hGaWx0ZXJzIiwic2V0U2VhcmNoRmlsdGVycyIsImZpbHRlciIsInNldEZpbHRlciIsImZpbHRlcmVkSm9icyIsInNldEZpbHRlcmVkSm9icyIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJqb2JzQW5kVGhlaXJGaWx0ZXJzIiwibWFwIiwicm9sZSIsImxldmVsIiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJ0b29scyIsImNvbmNhdCIsImpvYiIsImpvYkl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImV2ZW50IiwibGVuZ3RoIiwiZmlsdGVyZWRKb2JzQW5kTnVsbHMiLCJpZHgiLCJldmVyeSIsIml0ZW0iLCJpbmNsdWRlcyIsIm9uRmlsdGVyQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJ0YXJnZXRGaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9