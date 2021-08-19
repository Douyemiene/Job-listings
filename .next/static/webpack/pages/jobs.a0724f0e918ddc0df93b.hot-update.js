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
    className: "pt-12 bg-bgCyan ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "py-4 flex justify-end px-4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9icy5hMDcyNGYwZTkxOGRkYzBkZjkzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlAsK0NBQVEsQ0FBQyxFQUFELENBQXhDLENBRDZCLENBQ2lCOztBQUM5QyxRQUFNUSxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFJRixRQUFKLEVBQWM7QUFDWkMsTUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxXQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0Q7QUFDRixHQU5EOztBQU9BLFFBQU1FLE9BQU8sR0FBR0wsMERBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSm9iIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSm9iXCI7XHJcbmltcG9ydCB7IGpvYnMgfSBmcm9tIFwiLi4vZGF0YVwiO1xyXG5pbXBvcnQgQWRkZWRGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkZWRGaWx0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYnMoKSB7XHJcbiAgY29uc3QgW25hdlN0YXRlLCBzZXROYXZTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy90eXBlc2NyaXB0IHR5cGVzY3JpcHQgdHlwZXNjcmlwdFxyXG4gIGNvbnN0IG9uVG9nZ2xlTmF2ID0gKCkgPT4ge1xyXG4gICAgaWYgKG5hdlN0YXRlKSB7XHJcbiAgICAgIHNldE5hdlN0YXRlKFwiXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmF2U3RhdGUoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgTmF2SWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHBhbjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgOXB4IDlweCAwO1xyXG4gICAgfVxyXG5cclxuICAgICYgc3BhbjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOXB4IDAgMCA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFuOm50aC1jaGlsZCgxKSxcclxuICAgICYgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmIHNwYW46bnRoLWNoaWxkKDMpLFxyXG4gICAgJiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmIHNwYW46bnRoLWNoaWxkKDUpIHtcclxuICAgICAgdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpLFxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDUpIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICByaWdodDogNTAlO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4gc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAtNTAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDUpIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgICB0b3A6IDI5cHg7XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgLy9zdGF0ZVxyXG4gIGNvbnN0IFtzZWFyY2hGaWx0ZXJzLCBzZXRTZWFyY2hGaWx0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlcmVkSm9icywgc2V0RmlsdGVyZWRKb2JzXSA9IHVzZVN0YXRlKGpvYnMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2VhcmNoKCk7XHJcbiAgfSwgW3NlYXJjaEZpbHRlcnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWRKb2JzXCIsIGZpbHRlcmVkSm9icyk7XHJcbiAgfSwgW2ZpbHRlcmVkSm9ic10pO1xyXG5cclxuICBsZXQgam9ic0FuZFRoZWlyRmlsdGVycyA9IGpvYnMubWFwKFxyXG4gICAgKHsgcm9sZSwgbGV2ZWwsIGxvY2F0aW9uLCBsYW5ndWFnZXMsIHRvb2xzIH0pID0+XHJcbiAgICAgIFtyb2xlLCBsZXZlbCwgbG9jYXRpb25dLmNvbmNhdChsYW5ndWFnZXMsIHRvb2xzKVxyXG4gICk7XHJcblxyXG4gIGpvYnNBbmRUaGVpckZpbHRlcnMgPSBqb2JzQW5kVGhlaXJGaWx0ZXJzLm1hcCgoam9iKSA9PlxyXG4gICAgam9iLm1hcCgoam9iSXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gam9iSXRlbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb25zdCBzZWFyY2ggPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChzZWFyY2hGaWx0ZXJzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXNcIiwgc2VhcmNoRmlsdGVycy5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEpvYnNBbmROdWxscyA9IGpvYnNBbmRUaGVpckZpbHRlcnMubWFwKChqb2IsIGlkeCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWFyY2hGaWx0ZXJzLmV2ZXJ5KChpdGVtKSA9PiBqb2IuaW5jbHVkZXMoaXRlbSkpKSB7XHJcbiAgICAgICAgICByZXR1cm4gam9ic1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vd3dcIiwgZmlsdGVyZWRKb2JzQW5kTnVsbHMpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEpvYnMgPSBmaWx0ZXJlZEpvYnNBbmROdWxscy5maWx0ZXIoKGpvYikgPT4gam9iICE9IG51bGwpO1xyXG5cclxuICAgICAgc2V0RmlsdGVyZWRKb2JzKGZpbHRlcmVkSm9icyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGaWx0ZXJlZEpvYnMoam9icyk7XHJcbiAgICB9XHJcbiAgfTsgLy9zZWFyY2ggZW5kXHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIHNldFNlYXJjaEZpbHRlcnMoWy4uLnNlYXJjaEZpbHRlcnMsIGZpbHRlcl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZpbHRlciA9ICh0YXJnZXRGaWx0ZXIpID0+IHtcclxuICAgIHNldFNlYXJjaEZpbHRlcnMoc2VhcmNoRmlsdGVycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRhcmdldEZpbHRlcikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEyIGJnLWJnQ3lhbiBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGZsZXgganVzdGlmeS1lbmQgcHgtNFwiPlxyXG4gICAgICAgIHsvKiA8TmF2SWNvbiBjbGFzc05hbWU9e25hdlN0YXRlfSBvbkNsaWNrPXtvblRvZ2dsZU5hdn0+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9OYXZJY29uPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbGc6dGV4dC00eGwgZm9udC1zZW1pYm9sZFwiPlNlYXJjaCBmb3IgSm9iczwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1tZCB3LTEwLzEyIG14LWF1dG8gbXktNiBweS00IHB4LTMgbWItMTZcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiByb3VuZGVkLW1kIHctMTAvMTIgbWQ6dy03LzEyIGJnLXdoaXRlIGJvcmRlci1ncmF5LTQwMCBib3JkZXItMiBsZzpweS0yIGxnOm1iLTMgbWQ6bXItMyBsZzptci02IGxnOnctMS8zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FkZEZpbHRlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgcm91bmRlZC1tZCBiZy1ibGFjayB0ZXh0LXdoaXRlIHB4LTIgcHktMSB0ZXh0LXNtIG1iLTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBmaWx0ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGxnOnctMTAvMTIgbXgtYXV0byBtYi0yXCI+XHJcbiAgICAgICAgICB7c2VhcmNoRmlsdGVycy5tYXAoKGZpbHRlcikgPT4gKFxyXG4gICAgICAgICAgICA8QWRkZWRGaWx0ZXIgbmFtZT17ZmlsdGVyfSByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIGdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC14LTIgbWQ6cHgtNiBsZzpweC0xNlwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZEpvYnMubWFwKChqb2JJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Sm9iIGRhdGE9e2pvYkl0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJKb2IiLCJqb2JzIiwiQWRkZWRGaWx0ZXIiLCJzdHlsZWQiLCJKb2JzIiwibmF2U3RhdGUiLCJzZXROYXZTdGF0ZSIsIm9uVG9nZ2xlTmF2IiwiTmF2SWNvbiIsImRpdiIsInNlYXJjaEZpbHRlcnMiLCJzZXRTZWFyY2hGaWx0ZXJzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmlsdGVyZWRKb2JzIiwic2V0RmlsdGVyZWRKb2JzIiwic2VhcmNoIiwiY29uc29sZSIsImxvZyIsImpvYnNBbmRUaGVpckZpbHRlcnMiLCJtYXAiLCJyb2xlIiwibGV2ZWwiLCJsb2NhdGlvbiIsImxhbmd1YWdlcyIsInRvb2xzIiwiY29uY2F0Iiwiam9iIiwiam9iSXRlbSIsInRvTG93ZXJDYXNlIiwiZXZlbnQiLCJsZW5ndGgiLCJmaWx0ZXJlZEpvYnNBbmROdWxscyIsImlkeCIsImV2ZXJ5IiwiaXRlbSIsImluY2x1ZGVzIiwib25GaWx0ZXJDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInRhcmdldEZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=