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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  font-family: \"alexandria\";\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0px 0px 20px -10px black;\n  z-index: 1;\n}\n.head_logo {\n  width: 50px;\n  height: 50px;\n}\n\n.main {\n  padding: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.main .board-1,\n.main .board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-auto-flow: column;\n  width: 500px;\n  height: 500px;\n}\n.main .board-1 .row-1,\n.main .board-1 .row-2,\n.main .board-2 .row-1,\n.main .board-2 .row-2 {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-auto-flow: column;\n  grid-column: span 10;\n}\n.main .board-1 .row-1 .cell-1,\n.main .board-1 .row-1 .cell-2,\n.main .board-1 .row-2 .cell-1,\n.main .board-1 .row-2 .cell-2,\n.main .board-2 .row-1 .cell-1,\n.main .board-2 .row-1 .cell-2,\n.main .board-2 .row-2 .cell-1,\n.main .board-2 .row-2 .cell-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.223);\n}\n.main .board-1 .row-1 .cell-2:hover,\n.main .board-1 .row-2 .cell-2:hover,\n.main .board-2 .row-1 .cell-2:hover,\n.main .board-2 .row-2 .cell-2:hover {\n  background-color: rgb(218, 218, 218);\n  cursor: crosshair;\n}\n.main .board-1 .row-1 .ship_friend,\n.main .board-1 .row-2 .ship_friend,\n.main .board-2 .row-1 .ship_friend,\n.main .board-2 .row-2 .ship_friend {\n  background-color: rgb(79, 149, 255);\n}\n.main .board-1 .row-1 .ship_enemy,\n.main .board-1 .row-2 .ship_enemy,\n.main .board-2 .row-1 .ship_enemy,\n.main .board-2 .row-2 .ship_enemy {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy:hover,\n.main .board-1 .row-2 .ship_enemy:hover,\n.main .board-2 .row-1 .ship_enemy:hover,\n.main .board-2 .row-2 .ship_enemy:hover {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy_hit,\n.main .board-1 .row-2 .ship_enemy_hit,\n.main .board-2 .row-1 .ship_enemy_hit,\n.main .board-2 .row-2 .ship_enemy_hit {\n  background-color: rgba(255, 95, 95, 0.5);\n  box-shadow: 0 0 10px -1px rgb(255, 95, 95) inset;\n}\n.main .board-1 .row-1 .ship_enemy_hit:hover,\n.main .board-1 .row-2 .ship_enemy_hit:hover,\n.main .board-2 .row-1 .ship_enemy_hit:hover,\n.main .board-2 .row-2 .ship_enemy_hit:hover {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .board-1 .row-1 .ship_friend_hit,\n.main .board-1 .row-2 .ship_friend_hit,\n.main .board-2 .row-1 .ship_friend_hit,\n.main .board-2 .row-2 .ship_friend_hit {\n  background-color: rgba(79, 149, 255, 0.5);\n  box-shadow: 0 0 10px -1px rgb(79, 149, 255) inset;\n}\n.main .board-1 .row-1 .ship_friend_hit::after,\n.main .board-1 .row-1 .ship_enemy_hit::after,\n.main .board-1 .row-2 .ship_friend_hit::after,\n.main .board-1 .row-2 .ship_enemy_hit::after,\n.main .board-2 .row-1 .ship_friend_hit::after,\n.main .board-2 .row-1 .ship_enemy_hit::after,\n.main .board-2 .row-2 .ship_friend_hit::after,\n.main .board-2 .row-2 .ship_enemy_hit::after {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"✕\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 2.3rem;\n}\n.main .board-1 .row-1 .empty_hit:hover,\n.main .board-1 .row-2 .empty_hit:hover,\n.main .board-2 .row-1 .empty_hit:hover,\n.main .board-2 .row-2 .empty_hit:hover {\n  background-color: white;\n}\n.main .board-1 .row-1 .empty_hit .mark,\n.main .board-1 .row-2 .empty_hit .mark,\n.main .board-2 .row-1 .empty_hit .mark,\n.main .board-2 .row-2 .empty_hit .mark {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: black;\n}\n\n.bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.button {\n  height: 70px;\n  width: 200px;\n  border-radius: 10px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\n  transition: 0.15s all ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n}\n.button:hover {\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style_modules/_settings-reset.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,mBAAA;ADEF;;ACCA;EACE,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;;;EAKE,SAAA;EACA,gBAAA;ADEF;;ACCA;EACE,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,qBAAA;ADEF;;ACCA;;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;ADEF;;ACCA;;EAEE,YAAA;EACA,aAAA;ADEF;;AEtDA;EACE,yBAAA;EACA,+DAAA;AFyDF;AAzDA;EACE,aAAA;EACA,6BAAA;EACA,yBGLY;AHgEd;;AAxDA;EACE,eGFQ;AH6DV;;AAxDA;EACE,eGLQ;AHgEV;;AAxDA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,aGZc;EHad,oCGrBM;EHsBN,oCAAA;EACA,UAAA;AA0DF;AAxDE;EACE,WAAA;EACA,YAAA;AA0DJ;;AAtDA;EACE,aGxBc;EHyBd,aAAA;EACA,6BAAA;EACA,mBAAA;AAyDF;AAvDE;;EAEE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;AAyDJ;AAvDI;;;;EAEE,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,oBAAA;AA2DN;AAzDM;;;;;;;;EAEE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sCAAA;AAiER;AA9DQ;;;;EACE,oCG9DH;EH+DG,iBAAA;AAmEV;AAhEM;;;;EACE,mCGhED;AHqIP;AAnEM;;;;EACE,kCGrEF;AH6IN;AAvEQ;;;;EACE,kCGvEJ;AHmJN;AAzEM;;;;EACE,wCG1EU;EH2EV,gDAAA;AA8ER;AA5EQ;;;;EACE,wCG9EQ;AH+JlB;AA9EM;;;;EACE,yCGhFW;EHiFX,iDAAA;AAmFR;AA9EQ;;;;;;;;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAuFV;AAnFQ;;;;EACE,uBAAA;AAwFV;AAtFQ;;;;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;AA2FV;;AApFA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAsFF;;AAnFA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,oCGvIM;EHwIN,2CAAA;EACA,iCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAqFF;AAnFE;EACE,gBAAA;AAqFJ","sourcesContent":["@use \"./style_modules/index\" as *;\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 100px 1fr;\r\n  font-family: $strong-font;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  padding: $outer-padding;\r\n  background-color: $cream;\r\n  box-shadow: 0px 0px 20px -10px black;\r\n  z-index: 1;\r\n\r\n  &_logo {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n.main {\r\n  padding: $outer-padding;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  .board-1,\r\n  .board-2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-auto-flow: column;\r\n    width: 500px;\r\n    height: 500px;\r\n\r\n    .row-1,\r\n    .row-2 {\r\n      display: grid;\r\n      grid-template-columns: subgrid;\r\n      grid-auto-flow: column;\r\n      grid-column: span 10;\r\n\r\n      .cell-1,\r\n      .cell-2 {\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 1px solid rgba(0, 0, 0, 0.223);\r\n      }\r\n      .cell-2 {\r\n        &:hover {\r\n          background-color: $grey;\r\n          cursor: crosshair;\r\n        }\r\n      }\r\n      .ship_friend {\r\n        background-color: $blue;\r\n      }\r\n      .ship_enemy {\r\n        background-color: $red;\r\n        &:hover {\r\n          background-color: $red;\r\n        }\r\n      }\r\n      .ship_enemy_hit {\r\n        background-color: $red-transparent;\r\n        box-shadow: 0 0 10px -1px $red inset;\r\n\r\n        &:hover {\r\n          background-color: $red-transparent;\r\n        }\r\n      }\r\n      .ship_friend_hit {\r\n        background-color: $blue-transparent;\r\n        box-shadow: 0 0 10px -1px $blue inset;\r\n      }\r\n\r\n      .ship_friend_hit,\r\n      .ship_enemy_hit {\r\n        &::after {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          content: \"✕\";\r\n          position: absolute;\r\n          width: 20px;\r\n          height: 20px;\r\n          font-size: 2.3rem;\r\n        }\r\n      }\r\n      .empty_hit {\r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        .mark {\r\n          position: absolute;\r\n          width: 10px;\r\n          height: 10px;\r\n          border-radius: 50%;\r\n          background-color: black;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button {\r\n  height: 70px;\r\n  width: 200px;\r\n  border-radius: 10px;\r\n  background-color: $cream;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\r\n  transition: 0.15s all ease-in-out;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.7rem;\r\n\r\n  &:hover {\r\n    box-shadow: none;\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$strong-font: \"alexandria\";\r\n$cream: rgb(255, 248, 239);\r\n$grey: rgb(218, 218, 218);\r\n$red: rgb(255, 95, 95);\r\n$red-transparent: rgba(255, 95, 95, 0.5);\r\n$blue: rgb(79, 149, 255);\r\n$blue-transparent: rgb(79, 149, 255, 0.5);\r\n$h1-size: 3rem;\r\n$h2-size: 2rem;\r\n$outer-padding: 30px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "addButtonListeners": () => (/* binding */ addButtonListeners),
/* harmony export */   "hideBoard": () => (/* binding */ hideBoard),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderButtons": () => (/* binding */ renderButtons),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");

document.querySelector(".head_logo").src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

function renderBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList = player.AI ? "row-2" : "row-1";
    row.setAttribute("id", `${player.AI ? `2-${i}` : `1-${i}`}`);
    board.appendChild(row);

    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.setAttribute("id", `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`);
      row.append(cell);
    }
  }
  document.querySelector(".main").append(board);
}

function showBoard(player) {
  player.AI
    ? (document.querySelector(".board-2").style.display = "grid")
    : (document.querySelector(".board-1").style.display = "grid");
}

function hideBoard(player) {
  player.AI
    ? (document.querySelector(".board-2").style.display = "none")
    : (document.querySelector(".board-1").style.display = "none");
}

function clearBoard(board) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.getElementById(`${board}-${z}-${x}`);
      cell.classList = `cell-${board}`;
    }
  }
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
      if (AI.gameboard.board[z][x].ship) {
        document.getElementById(`2-${z}-${x}`).classList.add("ship_enemy");
      }
    }
  }
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

function renderButtons() {
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  startBtn.classList.add("button");
  randomBtn.classList.add("button");
  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random Fleet";
  startBtn.setAttribute("id", "start");
  randomBtn.setAttribute("id", "random");
  document.querySelector(".main").append(startBtn, randomBtn);
}

function addButtonListeners(player, AI) {
  const startBtn = document.getElementById("start");
  const randomBtn = document.getElementById("random");

  startBtn.addEventListener("click", () => {
    console.log(player.gameboard.ships.length);
    if (player.gameboard.ships.length !== 0) startGame(player, AI);
  });
  randomBtn.addEventListener("click", () => {
    player.gameboard.randomFleet();
    clearBoard("1");
    renderShips(player, AI);
  });
}

function removeButtons() {
  document.querySelectorAll(".button").forEach((button) => button.remove());
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
  if (AI.gameboard.isGameOver()) renderGameOver(p1);
  setTimeout(aiAttack, 600, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (p1.gameboard.isGameOver()) renderGameOver(AI);
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

function startGame(player, AI) {
  showBoard(AI);
  AI.gameboard.randomFleet();
  renderShips(player, AI);
  removeButtons();
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
  const p1 = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("Kamran");
  const AI = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("AI", true);
  p1.opponent = AI;
  AI.opponent = p1;
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p1);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(AI);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideBoard)(AI);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderButtons)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addButtonListeners)(p1, AI);
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

  isGameOver() {
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

  #clearBoard() {
    this.board = [];
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
    this.#clearBoard();
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
    this.opponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2REFBNkQsUUFBUSwyQkFBMkIsb0JBQW9CLGtCQUFrQixpQkFBaUIsY0FBYyxlQUFlLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLGlCQUFpQixjQUFjLGVBQWUsR0FBRyw0QkFBNEIsY0FBYyxxQkFBcUIsR0FBRyxPQUFPLGNBQWMsZUFBZSxHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxhQUFhLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixHQUFHLGdCQUFnQixnQ0FBZ0MsOEVBQThFLEdBQUcsUUFBUSxrQkFBa0Isa0NBQWtDLGdDQUFnQyxHQUFHLFFBQVEsb0JBQW9CLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0IsbUNBQW1DLGtCQUFrQix5Q0FBeUMseUNBQXlDLGVBQWUsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQixrQkFBa0Isa0NBQWtDLHdCQUF3QixHQUFHLG1DQUFtQyxrQkFBa0IsMkNBQTJDLHdDQUF3QywyQkFBMkIsaUJBQWlCLGtCQUFrQixHQUFHLGlHQUFpRyxrQkFBa0IsbUNBQW1DLDJCQUEyQix5QkFBeUIsR0FBRyxpUUFBaVEsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDJDQUEyQyxHQUFHLHlKQUF5Six5Q0FBeUMsc0JBQXNCLEdBQUcscUpBQXFKLHdDQUF3QyxHQUFHLGlKQUFpSix1Q0FBdUMsR0FBRyx5S0FBeUssdUNBQXVDLEdBQUcsaUtBQWlLLDZDQUE2QyxxREFBcUQsR0FBRyx5TEFBeUwsNkNBQTZDLEdBQUcscUtBQXFLLDhDQUE4QyxzREFBc0QsR0FBRyw2WEFBNlgsa0JBQWtCLDRCQUE0Qix3QkFBd0IsbUJBQW1CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHFLQUFxSyw0QkFBNEIsR0FBRyxxS0FBcUssdUJBQXVCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDRCQUE0QixHQUFHLFNBQVMsdUJBQXVCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHlDQUF5QyxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxhQUFhLGlCQUFpQixpQkFBaUIsd0JBQXdCLHlDQUF5QyxnREFBZ0Qsc0NBQXNDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxPQUFPLHlPQUF5TyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sU0FBUyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sU0FBUyxZQUFZLFlBQVksTUFBTSxTQUFTLFlBQVksTUFBTSxTQUFTLFlBQVksTUFBTSxTQUFTLFlBQVksTUFBTSxTQUFTLFlBQVksWUFBWSxNQUFNLFNBQVMsWUFBWSxPQUFPLFNBQVMsWUFBWSxZQUFZLE1BQU0sYUFBYSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsOERBQThELGNBQWMsb0JBQW9CLG9DQUFvQyxnQ0FBZ0MsS0FBSyxZQUFZLDBCQUEwQixLQUFLLFlBQVksMEJBQTBCLEtBQUssZUFBZSxvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQ0FBa0MsK0JBQStCLDJDQUEyQyxpQkFBaUIsa0JBQWtCLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLGVBQWUsOEJBQThCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLG1DQUFtQyxzQkFBc0IsK0NBQStDLDRDQUE0QywrQkFBK0IscUJBQXFCLHNCQUFzQixtQ0FBbUMsd0JBQXdCLHlDQUF5QyxpQ0FBaUMsK0JBQStCLHlDQUF5QywrQkFBK0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0MsbURBQW1ELFdBQVcsbUJBQW1CLHFCQUFxQixzQ0FBc0MsZ0NBQWdDLGFBQWEsV0FBVyx3QkFBd0Isb0NBQW9DLFdBQVcsdUJBQXVCLG1DQUFtQyxxQkFBcUIscUNBQXFDLGFBQWEsV0FBVywyQkFBMkIsK0NBQStDLGlEQUFpRCx5QkFBeUIsaURBQWlELGFBQWEsV0FBVyw0QkFBNEIsZ0RBQWdELGtEQUFrRCxXQUFXLDBEQUEwRCxzQkFBc0IsNEJBQTRCLHNDQUFzQyxrQ0FBa0MsNkJBQTZCLGlDQUFpQywwQkFBMEIsMkJBQTJCLGdDQUFnQyxhQUFhLFdBQVcsc0JBQXNCLHFCQUFxQixzQ0FBc0MsYUFBYSxtQkFBbUIsaUNBQWlDLDBCQUEwQiwyQkFBMkIsaUNBQWlDLHNDQUFzQyxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssYUFBYSx5QkFBeUIsbUJBQW1CLG9CQUFvQixrQkFBa0IsMkNBQTJDLHdCQUF3Qiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLGlCQUFpQixtQkFBbUIsbUJBQW1CLDBCQUEwQiwrQkFBK0Isa0RBQWtELHdDQUF3Qyx3QkFBd0IsMEJBQTBCLDhCQUE4Qix3QkFBd0IsbUJBQW1CLHlCQUF5QixPQUFPLEtBQUssYUFBYSw2QkFBNkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixLQUFLLHNDQUFzQywwQkFBMEIsS0FBSyxjQUFjLG9CQUFvQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixLQUFLLHdDQUF3QyxnQkFBZ0IsdUJBQXVCLEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLEtBQUssc0NBQXNDLDRCQUE0QixLQUFLLG1CQUFtQix1QkFBdUIsaUJBQWlCLGdCQUFnQixLQUFLLDRCQUE0QixtQkFBbUIsb0JBQW9CLEtBQUssbUJBQW1CLGtDQUFrQyw0REFBNEQsS0FBSyxvQ0FBb0MsK0JBQStCLDhCQUE4QiwyQkFBMkIsNkNBQTZDLDZCQUE2Qiw4Q0FBOEMsbUJBQW1CLG1CQUFtQix5QkFBeUIsdUJBQXVCO0FBQzFqVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUN0QywyQ0FBMkMsNkNBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDOUQ7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLDhDQUE4QyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDOUQsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLGlEQUFpRCxFQUFFLEdBQUcsRUFBRTtBQUN4RCxpREFBaUQsRUFBRSxHQUFHLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEVBQUUsR0FBRyxFQUFFO0FBQzVDO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFKakU7QUFDZTtBQUM5QjtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFNO0FBQ3ZCLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBO0FBQ0EsRUFBRSxpREFBVztBQUNiLEVBQUUsaURBQVc7QUFDYixFQUFFLCtDQUFTO0FBQ1gsRUFBRSxtREFBYTtBQUNmLEVBQUUsd0RBQWtCO0FBQ3BCO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQk07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkNBQUk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzhCO0FBQ0g7QUFDakQ7QUFDQSw4REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BbGV4YW5kcmlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ4LCAyMzkpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0xMHB4IGJsYWNrO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmhlYWRfbG9nbyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluIC5ib2FyZC0xLFxcbi5tYWluIC5ib2FyZC0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBzdWJncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmNlbGwtMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyMyk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuY2VsbC0yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZnJpZW5kLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9mcmllbmQsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2ZyaWVuZCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZnJpZW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTQ5LCAyNTUpO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXksXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTUsIDk1KTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2VuZW15OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9lbmVteTpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZW5lbXk6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2VuZW15OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk1LCA5NSk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15X2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZW5lbXlfaGl0LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9lbmVteV9oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDk1LCA5NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDI1NSwgOTUsIDk1KSBpbnNldDtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2VuZW15X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZW5lbXlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQ6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2VuZW15X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZnJpZW5kX2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxNDksIDI1NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDc5LCAxNDksIDI1NSkgaW5zZXQ7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9mcmllbmRfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXlfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZnJpZW5kX2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15X2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2ZyaWVuZF9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9mcmllbmRfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXlfaGl0OjphZnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29udGVudDogXFxcIuKclVxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmVtcHR5X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5lbXB0eV9oaXQgLm1hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fc2V0dGluZ3MtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7OztFQUdFLG1CQUFBO0FERUY7O0FDQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7Ozs7O0VBS0UsU0FBQTtFQUNBLGdCQUFBO0FERUY7O0FDQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBREVGOztBQ0NBOzs7RUFHRSxxQkFBQTtBREVGOztBQ0NBOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QURFRjs7QUNDQTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBREVGOztBRXREQTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QUZ5REY7QUF6REE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkdMWTtBSGdFZDs7QUF4REE7RUFDRSxlR0ZRO0FINkRWOztBQXhEQTtFQUNFLGVHTFE7QUhnRVY7O0FBeERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxhR1pjO0VIYWQsb0NHckJNO0VIc0JOLG9DQUFBO0VBQ0EsVUFBQTtBQTBERjtBQXhERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBMERKOztBQXREQTtFQUNFLGFHeEJjO0VIeUJkLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBeURGO0FBdkRFOztFQUVFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXlESjtBQXZESTs7OztFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUEyRE47QUF6RE07Ozs7Ozs7O0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBaUVSO0FBOURROzs7O0VBQ0Usb0NHOURIO0VIK0RHLGlCQUFBO0FBbUVWO0FBaEVNOzs7O0VBQ0UsbUNHaEVEO0FIcUlQO0FBbkVNOzs7O0VBQ0Usa0NHckVGO0FINklOO0FBdkVROzs7O0VBQ0Usa0NHdkVKO0FIbUpOO0FBekVNOzs7O0VBQ0Usd0NHMUVVO0VIMkVWLGdEQUFBO0FBOEVSO0FBNUVROzs7O0VBQ0Usd0NHOUVRO0FIK0psQjtBQTlFTTs7OztFQUNFLHlDR2hGVztFSGlGWCxpREFBQTtBQW1GUjtBQTlFUTs7Ozs7Ozs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF1RlY7QUFuRlE7Ozs7RUFDRSx1QkFBQTtBQXdGVjtBQXRGUTs7OztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBMkZWOztBQXBGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBc0ZGOztBQW5GQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0d2SU07RUh3SU4sMkNBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFxRkY7QUFuRkU7RUFDRSxnQkFBQTtBQXFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3N0eWxlX21vZHVsZXMvaW5kZXhcXFwiIGFzICo7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxyXFxuICBmb250LWZhbWlseTogJHN0cm9uZy1mb250O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6ICRoMS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6ICRoMi1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6ICRvdXRlci1wYWRkaW5nO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNyZWFtO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0xMHB4IGJsYWNrO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICZfbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHBhZGRpbmc6ICRvdXRlci1wYWRkaW5nO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC5ib2FyZC0xLFxcclxcbiAgLmJvYXJkLTIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG5cXHJcXG4gICAgLnJvdy0xLFxcclxcbiAgICAucm93LTIge1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBzdWJncmlkO1xcclxcbiAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMTA7XFxyXFxuXFxyXFxuICAgICAgLmNlbGwtMSxcXHJcXG4gICAgICAuY2VsbC0yIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjIzKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmNlbGwtMiB7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxyXFxuICAgICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAuc2hpcF9mcmllbmQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5zaGlwX2VuZW15IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnNoaXBfZW5lbXlfaGl0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtMXB4ICRyZWQgaW5zZXQ7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC10cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnNoaXBfZnJpZW5kX2hpdCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS10cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggJGJsdWUgaW5zZXQ7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5zaGlwX2ZyaWVuZF9oaXQsXFxyXFxuICAgICAgLnNoaXBfZW5lbXlfaGl0IHtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCLinJVcXFwiO1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAuZW1wdHlfaGl0IHtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5tYXJrIHtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQWxleGFuZHJpYS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXCIsXCIkc3Ryb25nLWZvbnQ6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4kY3JlYW06IHJnYigyNTUsIDI0OCwgMjM5KTtcXHJcXG4kZ3JleTogcmdiKDIxOCwgMjE4LCAyMTgpO1xcclxcbiRyZWQ6IHJnYigyNTUsIDk1LCA5NSk7XFxyXFxuJHJlZC10cmFuc3BhcmVudDogcmdiYSgyNTUsIDk1LCA5NSwgMC41KTtcXHJcXG4kYmx1ZTogcmdiKDc5LCAxNDksIDI1NSk7XFxyXFxuJGJsdWUtdHJhbnNwYXJlbnQ6IHJnYig3OSwgMTQ5LCAyNTUsIDAuNSk7XFxyXFxuJGgxLXNpemU6IDNyZW07XFxyXFxuJGgyLXNpemU6IDJyZW07XFxyXFxuJG91dGVyLXBhZGRpbmc6IDMwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZF9sb2dvXCIpLnNyYyA9IGxvZ287XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCb2FyZChwbGF5ZXIpIHtcclxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmQuY2xhc3NMaXN0ID0gcGxheWVyLkFJID8gXCJib2FyZC0yXCIgOiBcImJvYXJkLTFcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93LmNsYXNzTGlzdCA9IHBsYXllci5BSSA/IFwicm93LTJcIiA6IFwicm93LTFcIjtcclxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwbGF5ZXIuQUkgPyBgMi0ke2l9YCA6IGAxLSR7aX1gfWApO1xyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuXHJcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IDEwOyB1KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0ID0gcGxheWVyLkFJID8gXCJjZWxsLTJcIiA6IFwiY2VsbC0xXCI7XHJcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGxheWVyLkFJID8gYDItJHtpfS0ke3V9YCA6IGAxLSR7aX0tJHt1fWB9YCk7XHJcbiAgICAgIHJvdy5hcHBlbmQoY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmQoYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9hcmQocGxheWVyKSB7XHJcbiAgcGxheWVyLkFJXHJcbiAgICA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTJcIikuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiKVxyXG4gICAgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0xXCIpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVCb2FyZChwbGF5ZXIpIHtcclxuICBwbGF5ZXIuQUlcclxuICAgID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXHJcbiAgICA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb2FyZChib2FyZCkge1xyXG4gIGZvciAobGV0IHogPSAwOyB6IDwgMTA7IHorKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtib2FyZH0tJHt6fS0ke3h9YCk7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0ID0gYGNlbGwtJHtib2FyZH1gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2hpcHMocDEsIEFJKSB7XHJcbiAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgY29uc3QgY2VsbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMS0ke3p9LSR7eH1gKTtcclxuICAgICAgY29uc3QgY2VsbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMi0ke3p9LSR7eH1gKTtcclxuICAgICAgY2VsbDEuYXR0YWNrZXIgPSBBSTtcclxuICAgICAgY2VsbDEuYXR0YWNrZWQgPSBwMTtcclxuICAgICAgY2VsbDIuYXR0YWNrZXIgPSBwMTtcclxuICAgICAgY2VsbDIuYXR0YWNrZWQgPSBBSTtcclxuICAgICAgY2VsbDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllckF0dGFjayk7XHJcbiAgICAgIGlmIChwMS5nYW1lYm9hcmQuYm9hcmRbel1beF0uc2hpcCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7en0tJHt4fWApLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZFwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoQUkuZ2FtZWJvYXJkLmJvYXJkW3pdW3hdLnNoaXApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMi0ke3p9LSR7eH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcF9lbmVteVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2FtZU92ZXIoYXR0YWNrZXIpIHtcclxuICBjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaDEudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyIWA7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBgJHthdHRhY2tlci5uYW1lfSB3b25gO1xyXG4gIGJnLmNsYXNzTGlzdC5hZGQoXCJiZ1wiKTtcclxuICBiZy5hcHBlbmQoaDEsIGgyKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmQoYmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCdXR0b25zKCkge1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XHJcbiAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XHJcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcclxuICByYW5kb21CdG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbSBGbGVldFwiO1xyXG4gIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRcIik7XHJcbiAgcmFuZG9tQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmFuZG9tXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmQoc3RhcnRCdG4sIHJhbmRvbUJ0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycyhwbGF5ZXIsIEFJKSB7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xyXG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9tXCIpO1xyXG5cclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGgpO1xyXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoICE9PSAwKSBzdGFydEdhbWUocGxheWVyLCBBSSk7XHJcbiAgfSk7XHJcbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbUZsZWV0KCk7XHJcbiAgICBjbGVhckJvYXJkKFwiMVwiKTtcclxuICAgIHJlbmRlclNoaXBzKHBsYXllciwgQUkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVCdXR0b25zKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uXCIpLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLnJlbW92ZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNsaWNrKSB7XHJcbiAgY29uc3QgYyA9IGNsaWNrLnRhcmdldC5pZC5zcGxpdChcIi1cIik7XHJcbiAgY29uc3QgcDEgPSBjbGljay50YXJnZXQuYXR0YWNrZXI7XHJcbiAgY29uc3QgQUkgPSBjbGljay50YXJnZXQuYXR0YWNrZWQ7XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGlmIChwMSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgaWYgKHAxLnR1cm4gPT09IGZhbHNlKSByZXR1cm47XHJcbiAgaWYgKEFJLmdhbWVib2FyZC5oYXNCZWVuSGl0KFt5LCB4XSkgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjJcIiwgeSwgeF0sIEFJLCBjbGljay50YXJnZXQpO1xyXG4gIHAxLmF0dGFjayhbeSwgeF0sIEFJLmdhbWVib2FyZCk7XHJcbiAgcDEudHVybiA9IGZhbHNlO1xyXG4gIGlmIChBSS5nYW1lYm9hcmQuaXNHYW1lT3ZlcigpKSByZW5kZXJHYW1lT3ZlcihwMSk7XHJcbiAgc2V0VGltZW91dChhaUF0dGFjaywgNjAwLCBwMSwgQUkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhaUF0dGFjayhwMSwgQUkpIHtcclxuICBsZXQgW3ksIHhdID0gcDEuZ2FtZWJvYXJkLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgd2hpbGUgKHAxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt5LCB4XSkgPT09IGZhbHNlKSB7XHJcbiAgICBbeSwgeF0gPSBwMS5nYW1lYm9hcmQucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjFcIiwgeSwgeF0sIHAxKTtcclxuICBpZiAocDEuZ2FtZWJvYXJkLmlzR2FtZU92ZXIoKSkgcmVuZGVyR2FtZU92ZXIoQUkpO1xyXG4gIHAxLnR1cm4gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDZWxsU3RseWUoYywgYXR0YWNrZWQpIHtcclxuICBjb25zdCBib2FyZCA9IGNbMF07XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtib2FyZH0tJHt5fS0ke3h9YCk7XHJcbiAgaWYgKGF0dGFja2VkLmdhbWVib2FyZC5oYXNTaGlwKFt5LCB4XSkpIHtcclxuICAgIGF0dGFja2VkLkFJXHJcbiAgICAgID8gY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9lbmVteV9oaXRcIilcclxuICAgICAgOiBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZF9oaXRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImVtcHR5X2hpdFwiKTtcclxuICAgIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFyay5jbGFzc0xpc3QuYWRkKFwibWFya1wiKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFyayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyLCBBSSkge1xyXG4gIHNob3dCb2FyZChBSSk7XHJcbiAgQUkuZ2FtZWJvYXJkLnJhbmRvbUZsZWV0KCk7XHJcbiAgcmVuZGVyU2hpcHMocGxheWVyLCBBSSk7XHJcbiAgcmVtb3ZlQnV0dG9ucygpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyQnV0dG9ucywgc3RhcnRHYW1lLCBhZGRCdXR0b25MaXN0ZW5lcnMsIGhpZGVCb2FyZCB9O1xyXG4iLCJpbXBvcnQge1xyXG4gIHJlbmRlckJvYXJkLFxyXG4gIHJlbmRlckJ1dHRvbnMsXHJcbiAgYWRkQnV0dG9uTGlzdGVuZXJzLFxyXG4gIGhpZGVCb2FyZCxcclxufSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkthbXJhblwiKTtcclxuICBjb25zdCBBSSA9IG5ldyBQbGF5ZXIoXCJBSVwiLCB0cnVlKTtcclxuICBwMS5vcHBvbmVudCA9IEFJO1xyXG4gIEFJLm9wcG9uZW50ID0gcDE7XHJcbiAgcmVuZGVyQm9hcmQocDEpO1xyXG4gIHJlbmRlckJvYXJkKEFJKTtcclxuICBoaWRlQm9hcmQoQUkpO1xyXG4gIHJlbmRlckJ1dHRvbnMoKTtcclxuICBhZGRCdXR0b25MaXN0ZW5lcnMocDEsIEFJKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaW5pdEdhbWUgfTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgIHJlc2VydmVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc1NoaXAoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uc2hpcCBpbnN0YW5jZW9mIFNoaXAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkQ29vcmRpbmF0ZShjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZVxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbaV0uZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGlmIChjZWxsLmhpdCkgaGl0cysrO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBoaXRzID09PSAxMDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYXNCZWVuSGl0KGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLmhpdCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzUmVzZXJ2ZWQoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0ucmVzZXJ2ZWQgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0dhbWVPdmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgI3Jlc2VydmVTcGFjZShjKSB7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG4gICAgLy8gcmVzZXJ2ZXMgc3BhY2UgYXJvdW5kIGEgY29vcmRpbmF0ZVxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4XSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSArIDFdW3hdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCArIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3ldW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHggKyAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSAtIDFdW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHhdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5IC0gMV1beF0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgLSAxLCB4IC0gMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgLSAxXVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggLSAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCAtIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gICNjbGVhckJvYXJkKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgICByZXNlcnZlZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm5SYW5kb21Db29yZGluYXRlcygpIHtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgcmV0dXJuIFt5LCB4XTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChjLCBsZW5ndGgsIHZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgeSA9IGNbMF07XHJcbiAgICBjb25zdCB4ID0gY1sxXTtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgKHNoaXAubGVuZ3RoIC0gMSksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2hpcChbeSArIGksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWQoW3kgKyBpLCB4XSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLiNyZXNlcnZlU3BhY2UoW3kgKyBpLCB4XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSwgeCArIChzaGlwLmxlbmd0aCAtIDEpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NoaXAoW3ksIHggKyBpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkKFt5LCB4ICsgaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLiNyZXNlcnZlU3BhY2UoW3ksIHggKyBpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soYykge1xyXG4gICAgaWYgKHRoaXMuaGFzQmVlbkhpdChjKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uaGl0ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmhhc1NoaXAoYykpIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uc2hpcC5oaXQoKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUZsZWV0KCkge1xyXG4gICAgdGhpcy4jY2xlYXJCb2FyZCgpO1xyXG4gICAgLy8gcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgM1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDMsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgMlxyXG4gICAgZm9yIChsZXQgdSA9IDA7IHUgPD0gMjsgdSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDIsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHUrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgNVxyXG4gICAgZm9yIChsZXQgeiA9IDA7IHogPD0gMjsgeisrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDUsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHorKztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgQUkgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuQUkgPSBBSTtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcclxuICAgIHRoaXMub3Bwb25lbnQ7XHJcbiAgfVxyXG5cclxuICBhdHRhY2soYywgZ2FtZWJvYXJkKSB7XHJcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NbMF0sIGNbMV1dKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJvYXJkcyB9IGZyb20gXCIuL3NjcmlwdF9tb2R1bGVzL2RvbVwiO1xyXG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL3NjcmlwdF9tb2R1bGVzL2dhbWVcIjtcclxuXHJcbmluaXRHYW1lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==