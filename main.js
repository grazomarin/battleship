/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Alexandria.ttf */ "./src/fonts/Alexandria.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  font-family: \"alexandria\";\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0px 0px 20px -10px black;\n  z-index: 1;\n}\n.head_logo {\n  width: 50px;\n  height: 50px;\n}\n\n.main {\n  padding: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.main .board-1,\n.main .board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-auto-flow: column;\n  width: 500px;\n  height: 500px;\n}\n.main .board-1 .row-1,\n.main .board-1 .row-2,\n.main .board-2 .row-1,\n.main .board-2 .row-2 {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-auto-flow: column;\n  grid-column: span 10;\n}\n.main .board-1 .row-1 .cell-1,\n.main .board-1 .row-1 .cell-2,\n.main .board-1 .row-2 .cell-1,\n.main .board-1 .row-2 .cell-2,\n.main .board-2 .row-1 .cell-1,\n.main .board-2 .row-1 .cell-2,\n.main .board-2 .row-2 .cell-1,\n.main .board-2 .row-2 .cell-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.223);\n}\n.main .board-1 .row-1 .cell-2:hover,\n.main .board-1 .row-2 .cell-2:hover,\n.main .board-2 .row-1 .cell-2:hover,\n.main .board-2 .row-2 .cell-2:hover {\n  background-color: rgb(218, 218, 218);\n  cursor: crosshair;\n}\n.main .board-1 .row-1 .ship_friend,\n.main .board-1 .row-2 .ship_friend,\n.main .board-2 .row-1 .ship_friend,\n.main .board-2 .row-2 .ship_friend {\n  background-color: rgb(79, 149, 255);\n}\n.main .board-1 .row-1 .ship_enemy,\n.main .board-1 .row-2 .ship_enemy,\n.main .board-2 .row-1 .ship_enemy,\n.main .board-2 .row-2 .ship_enemy {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy:hover,\n.main .board-1 .row-2 .ship_enemy:hover,\n.main .board-2 .row-1 .ship_enemy:hover,\n.main .board-2 .row-2 .ship_enemy:hover {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy_hit,\n.main .board-1 .row-2 .ship_enemy_hit,\n.main .board-2 .row-1 .ship_enemy_hit,\n.main .board-2 .row-2 .ship_enemy_hit {\n  background-color: rgba(255, 95, 95, 0.5);\n  box-shadow: 0 0 10px -1px rgb(255, 95, 95) inset;\n}\n.main .board-1 .row-1 .ship_enemy_hit:hover,\n.main .board-1 .row-2 .ship_enemy_hit:hover,\n.main .board-2 .row-1 .ship_enemy_hit:hover,\n.main .board-2 .row-2 .ship_enemy_hit:hover {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .board-1 .row-1 .ship_friend_hit,\n.main .board-1 .row-2 .ship_friend_hit,\n.main .board-2 .row-1 .ship_friend_hit,\n.main .board-2 .row-2 .ship_friend_hit {\n  background-color: rgba(79, 149, 255, 0.5);\n  box-shadow: 0 0 10px -1px rgb(79, 149, 255) inset;\n}\n.main .board-1 .row-1 .ship_friend_hit::after,\n.main .board-1 .row-1 .ship_enemy_hit::after,\n.main .board-1 .row-2 .ship_friend_hit::after,\n.main .board-1 .row-2 .ship_enemy_hit::after,\n.main .board-2 .row-1 .ship_friend_hit::after,\n.main .board-2 .row-1 .ship_enemy_hit::after,\n.main .board-2 .row-2 .ship_friend_hit::after,\n.main .board-2 .row-2 .ship_enemy_hit::after {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"✕\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 2.3rem;\n}\n.main .board-1 .row-1 .empty_hit:hover,\n.main .board-1 .row-2 .empty_hit:hover,\n.main .board-2 .row-1 .empty_hit:hover,\n.main .board-2 .row-2 .empty_hit:hover {\n  background-color: white;\n}\n.main .board-1 .row-1 .empty_hit .mark,\n.main .board-1 .row-2 .empty_hit .mark,\n.main .board-2 .row-1 .empty_hit .mark,\n.main .board-2 .row-2 .empty_hit .mark {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: black;\n}\n\n.bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.bg_button {\n  height: 70px;\n  width: 200px;\n  border-radius: 10px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\n  transition: 0.15s all ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n}\n.bg_button:hover {\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style_modules/_settings-reset.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,mBAAA;ADEF;;ACCA;EACE,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;;;EAKE,SAAA;EACA,gBAAA;ADEF;;ACCA;EACE,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,qBAAA;ADEF;;ACCA;;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;ADEF;;ACCA;;EAEE,YAAA;EACA,aAAA;ADEF;;AEtDA;EACE,yBAAA;EACA,+DAAA;AFyDF;AAzDA;EACE,aAAA;EACA,6BAAA;EACA,yBGLY;AHgEd;;AAxDA;EACE,eGFQ;AH6DV;;AAxDA;EACE,eGLQ;AHgEV;;AAxDA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,aGZc;EHad,oCGrBM;EHsBN,oCAAA;EACA,UAAA;AA0DF;AAxDE;EACE,WAAA;EACA,YAAA;AA0DJ;;AAtDA;EACE,aGxBc;EHyBd,aAAA;EACA,6BAAA;EACA,mBAAA;AAyDF;AAvDE;;EAEE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;AAyDJ;AAvDI;;;;EAEE,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,oBAAA;AA2DN;AAzDM;;;;;;;;EAEE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sCAAA;AAiER;AA9DQ;;;;EACE,oCG9DH;EH+DG,iBAAA;AAmEV;AAhEM;;;;EACE,mCGhED;AHqIP;AAnEM;;;;EACE,kCGrEF;AH6IN;AAvEQ;;;;EACE,kCGvEJ;AHmJN;AAzEM;;;;EACE,wCG1EU;EH2EV,gDAAA;AA8ER;AA5EQ;;;;EACE,wCG9EQ;AH+JlB;AA9EM;;;;EACE,yCGhFW;EHiFX,iDAAA;AAmFR;AA9EQ;;;;;;;;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAuFV;AAnFQ;;;;EACE,uBAAA;AAwFV;AAtFQ;;;;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;AA2FV;;AApFA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAsFF;AArFE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,oCGrII;EHsIJ,2CAAA;EACA,iCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAsFJ;AApFI;EACE,gBAAA;AAsFN","sourcesContent":["@use \"./style_modules/index\" as *;\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 100px 1fr;\r\n  font-family: $strong-font;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  padding: $outer-padding;\r\n  background-color: $cream;\r\n  box-shadow: 0px 0px 20px -10px black;\r\n  z-index: 1;\r\n\r\n  &_logo {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n.main {\r\n  padding: $outer-padding;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  .board-1,\r\n  .board-2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-auto-flow: column;\r\n    width: 500px;\r\n    height: 500px;\r\n\r\n    .row-1,\r\n    .row-2 {\r\n      display: grid;\r\n      grid-template-columns: subgrid;\r\n      grid-auto-flow: column;\r\n      grid-column: span 10;\r\n\r\n      .cell-1,\r\n      .cell-2 {\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 1px solid rgba(0, 0, 0, 0.223);\r\n      }\r\n      .cell-2 {\r\n        &:hover {\r\n          background-color: $grey;\r\n          cursor: crosshair;\r\n        }\r\n      }\r\n      .ship_friend {\r\n        background-color: $blue;\r\n      }\r\n      .ship_enemy {\r\n        background-color: $red;\r\n        &:hover {\r\n          background-color: $red;\r\n        }\r\n      }\r\n      .ship_enemy_hit {\r\n        background-color: $red-transparent;\r\n        box-shadow: 0 0 10px -1px $red inset;\r\n\r\n        &:hover {\r\n          background-color: $red-transparent;\r\n        }\r\n      }\r\n      .ship_friend_hit {\r\n        background-color: $blue-transparent;\r\n        box-shadow: 0 0 10px -1px $blue inset;\r\n      }\r\n\r\n      .ship_friend_hit,\r\n      .ship_enemy_hit {\r\n        &::after {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          content: \"✕\";\r\n          position: absolute;\r\n          width: 20px;\r\n          height: 20px;\r\n          font-size: 2.3rem;\r\n        }\r\n      }\r\n      .empty_hit {\r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        .mark {\r\n          position: absolute;\r\n          width: 10px;\r\n          height: 10px;\r\n          border-radius: 50%;\r\n          background-color: black;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  &_button {\r\n    height: 70px;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    background-color: $cream;\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\r\n    transition: 0.15s all ease-in-out;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.7rem;\r\n\r\n    &:hover {\r\n      box-shadow: none;\r\n    }\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$strong-font: \"alexandria\";\r\n$cream: rgb(255, 248, 239);\r\n$grey: rgb(218, 218, 218);\r\n$red: rgb(255, 95, 95);\r\n$red-transparent: rgba(255, 95, 95, 0.5);\r\n$blue: rgb(79, 149, 255);\r\n$blue-transparent: rgb(79, 149, 255, 0.5);\r\n$h1-size: 3rem;\r\n$h2-size: 2rem;\r\n$outer-padding: 30px;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script_modules/dom.js":
/*!***********************************!*\
  !*** ./src/script_modules/dom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "renderStartScreen": () => (/* binding */ renderStartScreen),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/script_modules/player.js");

document.querySelector(".head_logo").src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;



function renderBoards(p1, AI) {
  const main = document.querySelector(".main");
  const board1 = document.createElement("div");
  const board2 = document.createElement("div");
  board1.classList = "board-1";
  board2.classList = "board-2";

  for (let i = 0; i < 10; i++) {
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");
    row1.classList = "row-1";
    row2.classList = "row-2";
    row1.setAttribute("id", `1-${i}`);
    row2.setAttribute("id", `2-${i}`);
    board1.appendChild(row1);
    board2.appendChild(row2);

    for (let u = 0; u < 10; u++) {
      const cell1 = document.createElement("div");
      const cell2 = document.createElement("div");
      cell1.classList = "cell-1";
      cell2.classList = "cell-2";
      cell1.setAttribute("id", `1-${i}-${u}`);
      cell2.setAttribute("id", `2-${i}-${u}`);

      row1.appendChild(cell1);
      row2.appendChild(cell2);
    }
  }
  main.append(board1, board2);
}

function renderShips(p1, AI) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell1 = document.getElementById(`1-${z}-${x}`);
      const cell2 = document.getElementById(`2-${z}-${x}`);
      cell1.attacker = AI;
      cell1.attacked = p1;
      cell2.attacker = p1;
      cell2.attacked = AI;
      cell2.addEventListener("click", playerAttack);
      if (p1.gameboard.board[z][x].ship) {
        document.getElementById(`1-${z}-${x}`).classList.add("ship_friend");
      }
      //   if (AI.gameboard.board[z][x].ship) {
      //     document.getElementById(`2-${z}-${x}`).classList.add("ship_enemy");
      //   }
    }
  }
}

function playerAttack(click) {
  const c = click.target.id.split("-");
  const p1 = click.target.attacker;
  const AI = click.target.attacked;
  const y = c[1];
  const x = c[2];

  if (p1 === undefined) return;
  if (p1.turn === false) return;
  if (AI.gameboard.hasBeenHit([y, x]) === true) return;

  changeCellStlye(["2", y, x], AI, click.target);
  p1.attack([y, x], AI.gameboard);
  p1.turn = false;
  if (isGameOver(p1, AI)) return;
  setTimeout(aiAttack, 700, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (isGameOver(p1)) renderGameOver(AI);
  p1.turn = true;
}

function changeCellStlye(c, attacked) {
  const board = c[0];
  const y = c[1];
  const x = c[2];

  const cell = document.getElementById(`${board}-${y}-${x}`);
  if (attacked.gameboard.hasShip([y, x])) {
    attacked.AI
      ? cell.classList.add("ship_enemy_hit")
      : cell.classList.add("ship_friend_hit");
  } else {
    cell.classList.add("empty_hit");
    const mark = document.createElement("div");
    mark.classList.add("mark");
    cell.appendChild(mark);
  }
}

function renderStartScreen() {
  const bg = document.createElement("div");
  const startBtn = document.createElement("div");
  bg.classList.add("bg");
  startBtn.classList.add("bg_button");
  startBtn.textContent = "Start Game";
  bg.appendChild(startBtn);
  document.querySelector("body").appendChild(bg);

  startBtn.addEventListener("click", startGame);
}

function startGame() {
  removeBackground();
  const p1 = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("Kamran");
  const AI = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("AI", true);
  p1.gameboard.randomFleet();
  AI.gameboard.randomFleet();
  renderShips(p1, AI);
}

function removeBackground() {
  document.querySelector(".bg").remove();
}

function isGameOver(attacked) {
  return attacked.gameboard.noShipsLeft() ? true : false;
}
function renderGameOver(attacker) {
  const bg = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.textContent = `Game Over!`;
  h2.textContent = `${attacker.name} won`;
  bg.classList.add("bg");
  bg.append(h1, h2);
  document.querySelector("body").append(bg);
}




/***/ }),

/***/ "./src/script_modules/game.js":
/*!************************************!*\
  !*** ./src/script_modules/game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGame": () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/script_modules/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/script_modules/player.js");



function initGame() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderStartScreen)();
  //   startGame();
}




/***/ }),

/***/ "./src/script_modules/gameboard.js":
/*!*****************************************!*\
  !*** ./src/script_modules/gameboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/script_modules/ship.js");


class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];

    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let i = 0; i < 10; i++) {
        row.push({
          hit: false,
          ship: false,
          reserved: false,
        });
      }
      this.board.push(row);
    }
  }

  hasShip(c) {
    return this.board[c[0]][c[1]].ship instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"] ? true : false;
  }

  isValidCoordinate(c) {
    return this.board[c[0]] !== undefined
      ? this.board[c[0]][c[1]] !== undefined
        ? true
        : false
      : false;
  }

  isFull() {
    let hits = 0;
    for (let i = 0; i < 10; i++) {
      this.board[i].forEach((cell) => {
        if (cell.hit) hits++;
      });
    }
    return hits === 100 ? true : false;
  }

  hasBeenHit(c) {
    return this.board[c[0]][c[1]].hit ? true : false;
  }

  isReserved(c) {
    return this.board[c[0]][c[1]].reserved === true ? true : false;
  }

  noShipsLeft() {
    return this.ships.every((ship) => ship.isSunk()) ? true : false;
  }

  #reserveSpace(c) {
    const y = c[0];
    const x = c[1];
    // reserves space around a coordinate
    if (this.isValidCoordinate([y + 1, x]))
      this.board[y + 1][x].reserved = true;
    if (this.isValidCoordinate([y + 1, x + 1]))
      this.board[y + 1][x + 1].reserved = true;
    if (this.isValidCoordinate([y, x + 1]))
      this.board[y][x + 1].reserved = true;
    if (this.isValidCoordinate([y - 1, x + 1]))
      this.board[y - 1][x + 1].reserved = true;
    if (this.isValidCoordinate([y - 1, x]))
      this.board[y - 1][x].reserved = true;
    if (this.isValidCoordinate([y - 1, x - 1]))
      this.board[y - 1][x - 1].reserved = true;
    if (this.isValidCoordinate([y, x - 1]))
      this.board[y][x - 1].reserved = true;
    if (this.isValidCoordinate([y + 1, x - 1]))
      this.board[y + 1][x - 1].reserved = true;
  }

  returnRandomCoordinates() {
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * 10);
    return [y, x];
  }

  placeShip(c, length, vertical = false) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    const y = c[0];
    const x = c[1];

    if (vertical) {
      if (!this.isValidCoordinate([y + (ship.length - 1), x])) return false;
      for (let i = 0; i < length; i++) {
        if (this.hasShip([y + i, x])) return false;
        if (this.isReserved([y + i, x])) return false;
      }
      for (let i = 0; i < length; i++) {
        this.board[y + i][x].ship = ship;
      }

      for (let i = 0; i < length; i++) {
        this.#reserveSpace([y + i, x]);
      }
    } else {
      if (!this.isValidCoordinate([y, x + (ship.length - 1)])) return false;
      for (let i = 0; i < length; i++) {
        if (this.hasShip([y, x + i])) return false;
        if (this.isReserved([y, x + i])) return false;
      }
      for (let i = 0; i < length; i++) {
        this.board[y][x + i].ship = ship;
      }
      for (let i = 0; i < length; i++) {
        this.#reserveSpace([y, x + i]);
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(c) {
    if (this.hasBeenHit(c)) return false;

    this.board[c[0]][c[1]].hit = true;
    if (this.hasShip(c)) this.board[c[0]][c[1]].ship.hit();
  }

  randomFleet() {
    // place 2 ships length of 3
    for (let i = 0; i <= 2; i++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 3, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      i++;
    }
    //place 2 ships length of 2
    for (let u = 0; u <= 2; u++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 2, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      u++;
    }
    //place 2 ships length of 5
    for (let z = 0; z <= 2; z++) {
      let [y, x] = this.returnRandomCoordinates();
      while (this.placeShip([y, x], 5, !!Math.round(Math.random())) === false) {
        [y, x] = this.returnRandomCoordinates();
      }
      z++;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/script_modules/player.js":
/*!**************************************!*\
  !*** ./src/script_modules/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/script_modules/gameboard.js");


class Player {
  constructor(name, AI = false) {
    this.name = name;
    this.AI = AI;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.turn = true;
  }

  attack(c, gameboard) {
    return gameboard.receiveAttack([c[0], c[1]]);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/script_modules/ship.js":
/*!************************************!*\
  !*** ./src/script_modules/ship.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.length ? true : false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/fonts/Alexandria.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Alexandria.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60cf639a03ec46819a58.ttf";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0e940d6ef9df61d28c9.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _script_modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script_modules/dom */ "./src/script_modules/dom.js");
/* harmony import */ var _script_modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script_modules/game */ "./src/script_modules/game.js");




(0,_script_modules_game__WEBPACK_IMPORTED_MODULE_2__.initGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDOEI7QUFDSDtBQUNqRDtBQUNBLDhEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0X21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0X21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTEwcHggYmxhY2s7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGVhZF9sb2dvIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4gLmJvYXJkLTEsXFxuLm1haW4gLmJvYXJkLTIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHN1YmdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTA7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuY2VsbC0xLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuY2VsbC0yLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuY2VsbC0xLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuY2VsbC0yLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuY2VsbC0xLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuY2VsbC0yLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuY2VsbC0xLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuY2VsbC0yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjIzKTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5jZWxsLTI6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5jZWxsLTI6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5jZWxsLTI6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5jZWxsLTI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9mcmllbmQsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2ZyaWVuZCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZnJpZW5kLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9mcmllbmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxNDksIDI1NSk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9lbmVteSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZW5lbXksXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2VuZW15LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9lbmVteSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NSwgOTUpO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXk6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteTpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTUsIDk1KTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2VuZW15X2hpdCxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZW5lbXlfaGl0LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2VuZW15X2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCByZ2IoMjU1LCA5NSwgOTUpIGluc2V0O1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9lbmVteV9oaXQ6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2VuZW15X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXlfaGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5NSwgOTUsIDAuNSk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9mcmllbmRfaGl0LFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9mcmllbmRfaGl0LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9mcmllbmRfaGl0LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9mcmllbmRfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDE0OSwgMjU1LCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCByZ2IoNzksIDE0OSwgMjU1KSBpbnNldDtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2ZyaWVuZF9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9mcmllbmRfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZW5lbXlfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZnJpZW5kX2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2VuZW15X2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2ZyaWVuZF9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9lbmVteV9oaXQ6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuZW1wdHlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuZW1wdHlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuZW1wdHlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuZW1wdHlfaGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmVtcHR5X2hpdCAubWFyayxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmVtcHR5X2hpdCAubWFyayxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmVtcHR5X2hpdCAubWFyayxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmVtcHR5X2hpdCAubWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5iZ19idXR0b24ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OCwgMjM5KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5iZ19idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19zZXR0aW5ncy1yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURFRjs7QUNDQTs7O0VBR0UsbUJBQUE7QURFRjs7QUNDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURFRjs7QUNDQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUNDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7OztFQUdFLHFCQUFBO0FERUY7O0FDQ0E7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREVGOztBQ0NBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FERUY7O0FFdERBO0VBQ0UseUJBQUE7RUFDQSwrREFBQTtBRnlERjtBQXpEQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCR0xZO0FIZ0VkOztBQXhEQTtFQUNFLGVHRlE7QUg2RFY7O0FBeERBO0VBQ0UsZUdMUTtBSGdFVjs7QUF4REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGFHWmM7RUhhZCxvQ0dyQk07RUhzQk4sb0NBQUE7RUFDQSxVQUFBO0FBMERGO0FBeERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEwREo7O0FBdERBO0VBQ0UsYUd4QmM7RUh5QmQsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUF5REY7QUF2REU7O0VBRUUsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBeURKO0FBdkRJOzs7O0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQTJETjtBQXpETTs7Ozs7Ozs7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFpRVI7QUE5RFE7Ozs7RUFDRSxvQ0c5REg7RUgrREcsaUJBQUE7QUFtRVY7QUFoRU07Ozs7RUFDRSxtQ0doRUQ7QUhxSVA7QUFuRU07Ozs7RUFDRSxrQ0dyRUY7QUg2SU47QUF2RVE7Ozs7RUFDRSxrQ0d2RUo7QUhtSk47QUF6RU07Ozs7RUFDRSx3Q0cxRVU7RUgyRVYsZ0RBQUE7QUE4RVI7QUE1RVE7Ozs7RUFDRSx3Q0c5RVE7QUgrSmxCO0FBOUVNOzs7O0VBQ0UseUNHaEZXO0VIaUZYLGlEQUFBO0FBbUZSO0FBOUVROzs7Ozs7OztFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXVGVjtBQW5GUTs7OztFQUNFLHVCQUFBO0FBd0ZWO0FBdEZROzs7O0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUEyRlY7O0FBcEZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFzRkY7QUFyRkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NHcklJO0VIc0lKLDJDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBc0ZKO0FBcEZJO0VBQ0UsZ0JBQUE7QUFzRk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL2luZGV4XFxcIiBhcyAqO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6ICRzdHJvbmctZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAkaDEtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAkaDItc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtMTBweCBibGFjaztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAmX2xvZ28ge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuYm9hcmQtMSxcXHJcXG4gIC5ib2FyZC0yIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuXFxyXFxuICAgIC5yb3ctMSxcXHJcXG4gICAgLnJvdy0yIHtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogc3ViZ3JpZDtcXHJcXG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xcclxcblxcclxcbiAgICAgIC5jZWxsLTEsXFxyXFxuICAgICAgLmNlbGwtMiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyMyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5jZWxsLTIge1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcclxcbiAgICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnNoaXBfZnJpZW5kIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuc2hpcF9lbmVteSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5zaGlwX2VuZW15X2hpdCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLXRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCAkcmVkIGluc2V0O1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5zaGlwX2ZyaWVuZF9oaXQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtMXB4ICRibHVlIGluc2V0O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuc2hpcF9mcmllbmRfaGl0LFxcclxcbiAgICAgIC5zaGlwX2VuZW15X2hpdCB7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmVtcHR5X2hpdCB7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubWFyayB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgJl9idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyZWFtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9mb250cy9BbGV4YW5kcmlhLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cIixcIiRzdHJvbmctZm9udDogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiRjcmVhbTogcmdiKDI1NSwgMjQ4LCAyMzkpO1xcclxcbiRncmV5OiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxyXFxuJHJlZDogcmdiKDI1NSwgOTUsIDk1KTtcXHJcXG4kcmVkLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcclxcbiRibHVlOiByZ2IoNzksIDE0OSwgMjU1KTtcXHJcXG4kYmx1ZS10cmFuc3BhcmVudDogcmdiKDc5LCAxNDksIDI1NSwgMC41KTtcXHJcXG4kaDEtc2l6ZTogM3JlbTtcXHJcXG4kaDItc2l6ZTogMnJlbTtcXHJcXG4kb3V0ZXItcGFkZGluZzogMzBweDtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nby5zdmdcIjtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkX2xvZ29cIikuc3JjID0gbG9nbztcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCb2FyZHMocDEsIEFJKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmQxLmNsYXNzTGlzdCA9IFwiYm9hcmQtMVwiO1xyXG4gIGJvYXJkMi5jbGFzc0xpc3QgPSBcImJvYXJkLTJcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93MS5jbGFzc0xpc3QgPSBcInJvdy0xXCI7XHJcbiAgICByb3cyLmNsYXNzTGlzdCA9IFwicm93LTJcIjtcclxuICAgIHJvdzEuc2V0QXR0cmlidXRlKFwiaWRcIiwgYDEtJHtpfWApO1xyXG4gICAgcm93Mi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgMi0ke2l9YCk7XHJcbiAgICBib2FyZDEuYXBwZW5kQ2hpbGQocm93MSk7XHJcbiAgICBib2FyZDIuYXBwZW5kQ2hpbGQocm93Mik7XHJcblxyXG4gICAgZm9yIChsZXQgdSA9IDA7IHUgPCAxMDsgdSsrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjZWxsMS5jbGFzc0xpc3QgPSBcImNlbGwtMVwiO1xyXG4gICAgICBjZWxsMi5jbGFzc0xpc3QgPSBcImNlbGwtMlwiO1xyXG4gICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgMS0ke2l9LSR7dX1gKTtcclxuICAgICAgY2VsbDIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYDItJHtpfS0ke3V9YCk7XHJcblxyXG4gICAgICByb3cxLmFwcGVuZENoaWxkKGNlbGwxKTtcclxuICAgICAgcm93Mi5hcHBlbmRDaGlsZChjZWxsMik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1haW4uYXBwZW5kKGJvYXJkMSwgYm9hcmQyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2hpcHMocDEsIEFJKSB7XHJcbiAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgY29uc3QgY2VsbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMS0ke3p9LSR7eH1gKTtcclxuICAgICAgY29uc3QgY2VsbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMi0ke3p9LSR7eH1gKTtcclxuICAgICAgY2VsbDEuYXR0YWNrZXIgPSBBSTtcclxuICAgICAgY2VsbDEuYXR0YWNrZWQgPSBwMTtcclxuICAgICAgY2VsbDIuYXR0YWNrZXIgPSBwMTtcclxuICAgICAgY2VsbDIuYXR0YWNrZWQgPSBBSTtcclxuICAgICAgY2VsbDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllckF0dGFjayk7XHJcbiAgICAgIGlmIChwMS5nYW1lYm9hcmQuYm9hcmRbel1beF0uc2hpcCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7en0tJHt4fWApLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvLyAgIGlmIChBSS5nYW1lYm9hcmQuYm9hcmRbel1beF0uc2hpcCkge1xyXG4gICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDItJHt6fS0ke3h9YCkuY2xhc3NMaXN0LmFkZChcInNoaXBfZW5lbXlcIik7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNsaWNrKSB7XHJcbiAgY29uc3QgYyA9IGNsaWNrLnRhcmdldC5pZC5zcGxpdChcIi1cIik7XHJcbiAgY29uc3QgcDEgPSBjbGljay50YXJnZXQuYXR0YWNrZXI7XHJcbiAgY29uc3QgQUkgPSBjbGljay50YXJnZXQuYXR0YWNrZWQ7XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGlmIChwMSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgaWYgKHAxLnR1cm4gPT09IGZhbHNlKSByZXR1cm47XHJcbiAgaWYgKEFJLmdhbWVib2FyZC5oYXNCZWVuSGl0KFt5LCB4XSkgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjJcIiwgeSwgeF0sIEFJLCBjbGljay50YXJnZXQpO1xyXG4gIHAxLmF0dGFjayhbeSwgeF0sIEFJLmdhbWVib2FyZCk7XHJcbiAgcDEudHVybiA9IGZhbHNlO1xyXG4gIGlmIChpc0dhbWVPdmVyKHAxLCBBSSkpIHJldHVybjtcclxuICBzZXRUaW1lb3V0KGFpQXR0YWNrLCA3MDAsIHAxLCBBSSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFpQXR0YWNrKHAxLCBBSSkge1xyXG4gIGxldCBbeSwgeF0gPSBwMS5nYW1lYm9hcmQucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICB3aGlsZSAocDEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3ksIHhdKSA9PT0gZmFsc2UpIHtcclxuICAgIFt5LCB4XSA9IHAxLmdhbWVib2FyZC5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gIH1cclxuICBjaGFuZ2VDZWxsU3RseWUoW1wiMVwiLCB5LCB4XSwgcDEpO1xyXG4gIGlmIChpc0dhbWVPdmVyKHAxKSkgcmVuZGVyR2FtZU92ZXIoQUkpO1xyXG4gIHAxLnR1cm4gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDZWxsU3RseWUoYywgYXR0YWNrZWQpIHtcclxuICBjb25zdCBib2FyZCA9IGNbMF07XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtib2FyZH0tJHt5fS0ke3h9YCk7XHJcbiAgaWYgKGF0dGFja2VkLmdhbWVib2FyZC5oYXNTaGlwKFt5LCB4XSkpIHtcclxuICAgIGF0dGFja2VkLkFJXHJcbiAgICAgID8gY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9lbmVteV9oaXRcIilcclxuICAgICAgOiBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZF9oaXRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImVtcHR5X2hpdFwiKTtcclxuICAgIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFyay5jbGFzc0xpc3QuYWRkKFwibWFya1wiKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFyayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGFydFNjcmVlbigpIHtcclxuICBjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJnLmNsYXNzTGlzdC5hZGQoXCJiZ1wiKTtcclxuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiYmdfYnV0dG9uXCIpO1xyXG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XHJcbiAgYmcuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGJnKTtcclxuXHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICByZW1vdmVCYWNrZ3JvdW5kKCk7XHJcbiAgY29uc3QgcDEgPSBuZXcgUGxheWVyKFwiS2FtcmFuXCIpO1xyXG4gIGNvbnN0IEFJID0gbmV3IFBsYXllcihcIkFJXCIsIHRydWUpO1xyXG4gIHAxLmdhbWVib2FyZC5yYW5kb21GbGVldCgpO1xyXG4gIEFJLmdhbWVib2FyZC5yYW5kb21GbGVldCgpO1xyXG4gIHJlbmRlclNoaXBzKHAxLCBBSSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJhY2tncm91bmQoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZ1wiKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNHYW1lT3ZlcihhdHRhY2tlZCkge1xyXG4gIHJldHVybiBhdHRhY2tlZC5nYW1lYm9hcmQubm9TaGlwc0xlZnQoKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJHYW1lT3ZlcihhdHRhY2tlcikge1xyXG4gIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoMS50ZXh0Q29udGVudCA9IGBHYW1lIE92ZXIhYDtcclxuICBoMi50ZXh0Q29udGVudCA9IGAke2F0dGFja2VyLm5hbWV9IHdvbmA7XHJcbiAgYmcuY2xhc3NMaXN0LmFkZChcImJnXCIpO1xyXG4gIGJnLmFwcGVuZChoMSwgaDIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZChiZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckJvYXJkcywgcmVuZGVyU2hpcHMsIHJlbmRlclN0YXJ0U2NyZWVuLCBzdGFydEdhbWUgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyQm9hcmRzLCByZW5kZXJTaGlwcywgcmVuZGVyU3RhcnRTY3JlZW4sIHN0YXJ0R2FtZSB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XHJcbiAgcmVuZGVyQm9hcmRzKCk7XHJcbiAgcmVuZGVyU3RhcnRTY3JlZW4oKTtcclxuICAvLyAgIHN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0R2FtZSB9O1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgcm93LnB1c2goe1xyXG4gICAgICAgICAgaGl0OiBmYWxzZSxcclxuICAgICAgICAgIHNoaXA6IGZhbHNlLFxyXG4gICAgICAgICAgcmVzZXJ2ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzU2hpcChjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5zaGlwIGluc3RhbmNlb2YgU2hpcCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRDb29yZGluYXRlKGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dICE9PSB1bmRlZmluZWRcclxuICAgICAgPyB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0Z1bGwoKSB7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5ib2FyZFtpXS5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgaWYgKGNlbGwuaGl0KSBoaXRzKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpdHMgPT09IDEwMCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhc0JlZW5IaXQoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uaGl0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNSZXNlcnZlZChjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5yZXNlcnZlZCA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5vU2hpcHNMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgI3Jlc2VydmVTcGFjZShjKSB7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG4gICAgLy8gcmVzZXJ2ZXMgc3BhY2UgYXJvdW5kIGEgY29vcmRpbmF0ZVxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4XSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSArIDFdW3hdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCArIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3ldW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHggKyAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSAtIDFdW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHhdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5IC0gMV1beF0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgLSAxLCB4IC0gMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgLSAxXVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggLSAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCAtIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCkge1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICByZXR1cm4gW3ksIHhdO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKGMsIGxlbmd0aCwgdmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAoc2hpcC5sZW5ndGggLSAxKSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNTaGlwKFt5ICsgaSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZChbeSArIGksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuI3Jlc2VydmVTcGFjZShbeSArIGksIHhdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgKHNoaXAubGVuZ3RoIC0gMSldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2hpcChbeSwgeCArIGldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWQoW3ksIHggKyBpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuI3Jlc2VydmVTcGFjZShbeSwgeCArIGldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayhjKSB7XHJcbiAgICBpZiAodGhpcy5oYXNCZWVuSGl0KGMpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5oaXQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaGFzU2hpcChjKSkgdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5zaGlwLmhpdCgpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tRmxlZXQoKSB7XHJcbiAgICAvLyBwbGFjZSAyIHNoaXBzIGxlbmd0aCBvZiAzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcclxuICAgICAgbGV0IFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgd2hpbGUgKHRoaXMucGxhY2VTaGlwKFt5LCB4XSwgMywgISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgLy9wbGFjZSAyIHNoaXBzIGxlbmd0aCBvZiAyXHJcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8PSAyOyB1KyspIHtcclxuICAgICAgbGV0IFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgd2hpbGUgKHRoaXMucGxhY2VTaGlwKFt5LCB4XSwgMiwgISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdSsrO1xyXG4gICAgfVxyXG4gICAgLy9wbGFjZSAyIHNoaXBzIGxlbmd0aCBvZiA1XHJcbiAgICBmb3IgKGxldCB6ID0gMDsgeiA8PSAyOyB6KyspIHtcclxuICAgICAgbGV0IFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgd2hpbGUgKHRoaXMucGxhY2VTaGlwKFt5LCB4XSwgNSwgISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgeisrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBBSSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5BSSA9IEFJO1xyXG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB0aGlzLnR1cm4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNrKGMsIGdhbWVib2FyZCkge1xyXG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtjWzBdLCBjWzFdXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzKys7XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZHMgfSBmcm9tIFwiLi9zY3JpcHRfbW9kdWxlcy9kb21cIjtcclxuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9zY3JpcHRfbW9kdWxlcy9nYW1lXCI7XHJcblxyXG5pbml0R2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=