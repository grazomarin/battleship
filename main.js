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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  font-family: \"alexandria\";\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0px 0px 20px -10px black;\n  z-index: 1;\n}\n.head_logo {\n  width: 40px;\n  height: 40px;\n}\n\n.main {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.main .board-1,\n.main .board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-auto-flow: column;\n  width: 500px;\n  height: 500px;\n  margin: 50px 100px;\n}\n.main .board-1 .row-1,\n.main .board-1 .row-2,\n.main .board-2 .row-1,\n.main .board-2 .row-2 {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-auto-flow: column;\n  grid-column: span 10;\n}\n.main .board-1 .row-1 .cell-1,\n.main .board-1 .row-1 .cell-2,\n.main .board-1 .row-2 .cell-1,\n.main .board-1 .row-2 .cell-2,\n.main .board-2 .row-1 .cell-1,\n.main .board-2 .row-1 .cell-2,\n.main .board-2 .row-2 .cell-1,\n.main .board-2 .row-2 .cell-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.223);\n}\n.main .board-1 .row-1 .cell-2:hover,\n.main .board-1 .row-2 .cell-2:hover,\n.main .board-2 .row-1 .cell-2:hover,\n.main .board-2 .row-2 .cell-2:hover {\n  background-color: rgb(218, 218, 218);\n  cursor: crosshair;\n}\n.main .board-1 .row-1 .ship_friend,\n.main .board-1 .row-2 .ship_friend,\n.main .board-2 .row-1 .ship_friend,\n.main .board-2 .row-2 .ship_friend {\n  background-color: rgb(79, 149, 255);\n}\n.main .board-1 .row-1 .ship_enemy,\n.main .board-1 .row-2 .ship_enemy,\n.main .board-2 .row-1 .ship_enemy,\n.main .board-2 .row-2 .ship_enemy {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy:hover,\n.main .board-1 .row-2 .ship_enemy:hover,\n.main .board-2 .row-1 .ship_enemy:hover,\n.main .board-2 .row-2 .ship_enemy:hover {\n  background-color: rgb(255, 95, 95);\n}\n.main .board-1 .row-1 .ship_enemy_hit,\n.main .board-1 .row-2 .ship_enemy_hit,\n.main .board-2 .row-1 .ship_enemy_hit,\n.main .board-2 .row-2 .ship_enemy_hit {\n  background-color: rgba(255, 95, 95, 0.5);\n  box-shadow: 0 0 10px -1px rgb(255, 95, 95) inset;\n}\n.main .board-1 .row-1 .ship_enemy_hit:hover,\n.main .board-1 .row-2 .ship_enemy_hit:hover,\n.main .board-2 .row-1 .ship_enemy_hit:hover,\n.main .board-2 .row-2 .ship_enemy_hit:hover {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .board-1 .row-1 .ship_friend_hit,\n.main .board-1 .row-2 .ship_friend_hit,\n.main .board-2 .row-1 .ship_friend_hit,\n.main .board-2 .row-2 .ship_friend_hit {\n  background-color: rgba(79, 149, 255, 0.5);\n  box-shadow: 0 0 10px -1px rgb(79, 149, 255) inset;\n}\n.main .board-1 .row-1 .ship_friend_hit::after,\n.main .board-1 .row-1 .ship_enemy_hit::after,\n.main .board-1 .row-2 .ship_friend_hit::after,\n.main .board-1 .row-2 .ship_enemy_hit::after,\n.main .board-2 .row-1 .ship_friend_hit::after,\n.main .board-2 .row-1 .ship_enemy_hit::after,\n.main .board-2 .row-2 .ship_friend_hit::after,\n.main .board-2 .row-2 .ship_enemy_hit::after {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"✕\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 2.3rem;\n}\n.main .board-1 .row-1 .empty_hit:hover,\n.main .board-1 .row-2 .empty_hit:hover,\n.main .board-2 .row-1 .empty_hit:hover,\n.main .board-2 .row-2 .empty_hit:hover {\n  background-color: white;\n}\n.main .board-1 .row-1 .empty_hit .mark,\n.main .board-1 .row-2 .empty_hit .mark,\n.main .board-2 .row-1 .empty_hit .mark,\n.main .board-2 .row-2 .empty_hit .mark {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: black;\n}\n\n.bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n.bg .gameOver-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-cont {\n  display: flex;\n  gap: 100px;\n}\n\n.button {\n  height: 70px;\n  width: 200px;\n  border-radius: 10px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\n  transition: 0.15s all ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n}\n.button:hover {\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style_modules/_settings-reset.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,mBAAA;ADEF;;ACCA;EACE,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;;;EAKE,SAAA;EACA,gBAAA;ADEF;;ACCA;EACE,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,qBAAA;ADEF;;ACCA;;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;ADEF;;ACCA;;EAEE,YAAA;EACA,aAAA;ADEF;;AEtDA;EACE,yBAAA;EACA,+DAAA;AFyDF;AAzDA;EACE,aAAA;EACA,4BAAA;EACA,yBGLY;AHgEd;;AAxDA;EACE,eGFQ;AH6DV;;AAxDA;EACE,eGLQ;AHgEV;;AAxDA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,aGZc;EHad,oCGrBM;EHsBN,oCAAA;EACA,UAAA;AA0DF;AAxDE;EACE,WAAA;EACA,YAAA;AA0DJ;;AAtDA;EACE,aGxBc;EHyBd,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AAyDF;AAvDE;;EAEE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AAyDJ;AAvDI;;;;EAEE,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,oBAAA;AA2DN;AAzDM;;;;;;;;EAEE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sCAAA;AAiER;AA9DQ;;;;EACE,oCGhEH;EHiEG,iBAAA;AAmEV;AAhEM;;;;EACE,mCGlED;AHuIP;AAnEM;;;;EACE,kCGvEF;AH+IN;AAvEQ;;;;EACE,kCGzEJ;AHqJN;AAzEM;;;;EACE,wCG5EU;EH6EV,gDAAA;AA8ER;AA5EQ;;;;EACE,wCGhFQ;AHiKlB;AA9EM;;;;EACE,yCGlFW;EHmFX,iDAAA;AAmFR;AA9EQ;;;;;;;;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAuFV;AAnFQ;;;;EACE,uBAAA;AAwFV;AAtFQ;;;;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;AA2FV;;AApFA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAsFF;AApFE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAsFJ;;AAlFA;EACE,aAAA;EACA,UAAA;AAqFF;;AAlFA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,oCGrJM;EHsJN,2CAAA;EACA,iCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAoFF;AAlFE;EACE,gBAAA;AAoFJ","sourcesContent":["@use \"./style_modules/index\" as *;\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 70px 1fr;\r\n  font-family: $strong-font;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  padding: $outer-padding;\r\n  background-color: $cream;\r\n  box-shadow: 0px 0px 20px -10px black;\r\n  z-index: 1;\r\n\r\n  &_logo {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.main {\r\n  padding: $outer-padding;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .board-1,\r\n  .board-2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-auto-flow: column;\r\n    width: 500px;\r\n    height: 500px;\r\n    margin: 50px 100px;\r\n\r\n    .row-1,\r\n    .row-2 {\r\n      display: grid;\r\n      grid-template-columns: subgrid;\r\n      grid-auto-flow: column;\r\n      grid-column: span 10;\r\n\r\n      .cell-1,\r\n      .cell-2 {\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 1px solid rgba(0, 0, 0, 0.223);\r\n      }\r\n      .cell-2 {\r\n        &:hover {\r\n          background-color: $grey;\r\n          cursor: crosshair;\r\n        }\r\n      }\r\n      .ship_friend {\r\n        background-color: $blue;\r\n      }\r\n      .ship_enemy {\r\n        background-color: $red;\r\n        &:hover {\r\n          background-color: $red;\r\n        }\r\n      }\r\n      .ship_enemy_hit {\r\n        background-color: $red-transparent;\r\n        box-shadow: 0 0 10px -1px $red inset;\r\n\r\n        &:hover {\r\n          background-color: $red-transparent;\r\n        }\r\n      }\r\n      .ship_friend_hit {\r\n        background-color: $blue-transparent;\r\n        box-shadow: 0 0 10px -1px $blue inset;\r\n      }\r\n\r\n      .ship_friend_hit,\r\n      .ship_enemy_hit {\r\n        &::after {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          content: \"✕\";\r\n          position: absolute;\r\n          width: 20px;\r\n          height: 20px;\r\n          font-size: 2.3rem;\r\n        }\r\n      }\r\n      .empty_hit {\r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        .mark {\r\n          position: absolute;\r\n          width: 10px;\r\n          height: 10px;\r\n          border-radius: 50%;\r\n          background-color: black;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n\r\n  .gameOver-cont {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.button-cont {\r\n  display: flex;\r\n  gap: 100px;\r\n}\r\n\r\n.button {\r\n  height: 70px;\r\n  width: 200px;\r\n  border-radius: 10px;\r\n  background-color: $cream;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\r\n  transition: 0.15s all ease-in-out;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.7rem;\r\n\r\n  &:hover {\r\n    box-shadow: none;\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$strong-font: \"alexandria\";\r\n$cream: rgb(255, 248, 239);\r\n$grey: rgb(218, 218, 218);\r\n$red: rgb(255, 95, 95);\r\n$red-transparent: rgba(255, 95, 95, 0.5);\r\n$blue: rgb(79, 149, 255);\r\n$blue-transparent: rgb(79, 149, 255, 0.5);\r\n$h1-size: 3rem;\r\n$h2-size: 2rem;\r\n$outer-padding: 30px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "hideBoard": () => (/* binding */ hideBoard),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver),
/* harmony export */   "renderStart": () => (/* binding */ renderStart)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/script_modules/game.js");


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
      //   if (AI.gameboard.board[z][x].ship) {
      //     document.getElementById(`2-${z}-${x}`).classList.add("ship_enemy");
      //   }
    }
  }
}

function renderStart(player, AI) {
  const main = document.querySelector(".main");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const buttonCont = document.createElement("div");

  startBtn.classList.add("button");
  randomBtn.classList.add("button");
  buttonCont.classList.add("button-cont");
  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random Fleet";
  startBtn.setAttribute("id", "start");
  randomBtn.setAttribute("id", "random");
  buttonCont.append(startBtn, randomBtn);
  main.append(buttonCont);

  main.style.flexDirection = "column";

  startBtn.addEventListener("click", () => {
    if (player.gameboard.ships.length !== 0) {
      main.style.flexDirection = "row";
      startGame(player, AI);
    }
  });

  randomBtn.addEventListener("click", () => {
    player.gameboard.randomFleet();
    clearBoard("1");
    renderShips(player, AI);
  });
}

function renderGameOver(attacker) {
  const bg = document.createElement("div");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const playAgain = document.createElement("div");

  h1.textContent = `Game Over!`;
  h2.textContent = `${attacker.name} won`;
  playAgain.textContent = "Play Again";
  bg.classList.add("bg");
  playAgain.classList.add("button");
  container.classList.add("gameOver-cont");

  container.append(h1, h2);
  bg.append(container, playAgain);
  document.querySelector("body").append(bg);

  playAgain.addEventListener("click", () => {
    resetGame();
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.initGame)();
  });
}

function removeBackground() {
  document.querySelector(".bg").remove();
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

function resetGame() {
  const main = document.querySelector(".main");
  removeBackground();
  main.innerHTML = "";
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
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p1);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(AI);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideBoard)(AI);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderStart)(p1, AI);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzhCO0FBQ0g7QUFDakQ7QUFDQSw4REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRfbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BbGV4YW5kcmlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTEwcHggYmxhY2s7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGVhZF9sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluIC5ib2FyZC0xLFxcbi5tYWluIC5ib2FyZC0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDUwcHggMTAwcHg7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBzdWJncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmNlbGwtMixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmNlbGwtMSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmNlbGwtMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyMyk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuY2VsbC0yOmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuY2VsbC0yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZnJpZW5kLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9mcmllbmQsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2ZyaWVuZCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZnJpZW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTQ5LCAyNTUpO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXksXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteSxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTUsIDk1KTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2VuZW15OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMiAuc2hpcF9lbmVteTpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZW5lbXk6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2VuZW15OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk1LCA5NSk7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15X2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZW5lbXlfaGl0LFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9lbmVteV9oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDk1LCA5NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDI1NSwgOTUsIDk1KSBpbnNldDtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5zaGlwX2VuZW15X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZW5lbXlfaGl0OmhvdmVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQ6aG92ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5zaGlwX2VuZW15X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLnNoaXBfZnJpZW5kX2hpdCxcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZnJpZW5kX2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxNDksIDI1NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDc5LCAxNDksIDI1NSkgaW5zZXQ7XFxufVxcbi5tYWluIC5ib2FyZC0xIC5yb3ctMSAuc2hpcF9mcmllbmRfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLnNoaXBfZW5lbXlfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLnNoaXBfZnJpZW5kX2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5zaGlwX2VuZW15X2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5zaGlwX2ZyaWVuZF9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMSAuc2hpcF9lbmVteV9oaXQ6OmFmdGVyLFxcbi5tYWluIC5ib2FyZC0yIC5yb3ctMiAuc2hpcF9mcmllbmRfaGl0OjphZnRlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLnNoaXBfZW5lbXlfaGl0OjphZnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29udGVudDogXFxcIuKclVxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbn1cXG4ubWFpbiAuYm9hcmQtMSAucm93LTEgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMSAucm93LTIgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTEgLmVtcHR5X2hpdDpob3ZlcixcXG4ubWFpbiAuYm9hcmQtMiAucm93LTIgLmVtcHR5X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1haW4gLmJvYXJkLTEgLnJvdy0xIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTEgLnJvdy0yIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0xIC5lbXB0eV9oaXQgLm1hcmssXFxuLm1haW4gLmJvYXJkLTIgLnJvdy0yIC5lbXB0eV9oaXQgLm1hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG4uYmcgLmdhbWVPdmVyLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OCwgMjM5KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19zZXR0aW5ncy1yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURFRjs7QUNDQTs7O0VBR0UsbUJBQUE7QURFRjs7QUNDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURFRjs7QUNDQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUNDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7OztFQUdFLHFCQUFBO0FERUY7O0FDQ0E7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREVGOztBQ0NBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FERUY7O0FFdERBO0VBQ0UseUJBQUE7RUFDQSwrREFBQTtBRnlERjtBQXpEQTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCR0xZO0FIZ0VkOztBQXhEQTtFQUNFLGVHRlE7QUg2RFY7O0FBeERBO0VBQ0UsZUdMUTtBSGdFVjs7QUF4REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGFHWmM7RUhhZCxvQ0dyQk07RUhzQk4sb0NBQUE7RUFDQSxVQUFBO0FBMERGO0FBeERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEwREo7O0FBdERBO0VBQ0UsYUd4QmM7RUh5QmQsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXlERjtBQXZERTs7RUFFRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXlESjtBQXZESTs7OztFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUEyRE47QUF6RE07Ozs7Ozs7O0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBaUVSO0FBOURROzs7O0VBQ0Usb0NHaEVIO0VIaUVHLGlCQUFBO0FBbUVWO0FBaEVNOzs7O0VBQ0UsbUNHbEVEO0FIdUlQO0FBbkVNOzs7O0VBQ0Usa0NHdkVGO0FIK0lOO0FBdkVROzs7O0VBQ0Usa0NHekVKO0FIcUpOO0FBekVNOzs7O0VBQ0Usd0NHNUVVO0VINkVWLGdEQUFBO0FBOEVSO0FBNUVROzs7O0VBQ0Usd0NHaEZRO0FIaUtsQjtBQTlFTTs7OztFQUNFLHlDR2xGVztFSG1GWCxpREFBQTtBQW1GUjtBQTlFUTs7Ozs7Ozs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF1RlY7QUFuRlE7Ozs7RUFDRSx1QkFBQTtBQXdGVjtBQXRGUTs7OztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBMkZWOztBQXBGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXNGRjtBQXBGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBc0ZKOztBQWxGQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBcUZGOztBQWxGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0dySk07RUhzSk4sMkNBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFvRkY7QUFsRkU7RUFDRSxnQkFBQTtBQW9GSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3N0eWxlX21vZHVsZXMvaW5kZXhcXFwiIGFzICo7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkc3Ryb25nLWZvbnQ7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgxLXNpemU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgcGFkZGluZzogJG91dGVyLXBhZGRpbmc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTEwcHggYmxhY2s7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgJl9sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgcGFkZGluZzogJG91dGVyLXBhZGRpbmc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC5ib2FyZC0xLFxcclxcbiAgLmJvYXJkLTIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDEwMHB4O1xcclxcblxcclxcbiAgICAucm93LTEsXFxyXFxuICAgIC5yb3ctMiB7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHN1YmdyaWQ7XFxyXFxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogc3BhbiAxMDtcXHJcXG5cXHJcXG4gICAgICAuY2VsbC0xLFxcclxcbiAgICAgIC5jZWxsLTIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMjMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuY2VsbC0yIHtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5zaGlwX2ZyaWVuZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnNoaXBfZW5lbXkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAuc2hpcF9lbmVteV9oaXQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC10cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggJHJlZCBpbnNldDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLXRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAuc2hpcF9mcmllbmRfaGl0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLXRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCAkYmx1ZSBpbnNldDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnNoaXBfZnJpZW5kX2hpdCxcXHJcXG4gICAgICAuc2hpcF9lbmVteV9oaXQge1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgY29udGVudDogXFxcIuKclVxcXCI7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5lbXB0eV9oaXQge1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLm1hcmsge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG5cXHJcXG4gIC5nYW1lT3Zlci1jb250IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0FsZXhhbmRyaWEudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblwiLFwiJHN0cm9uZy1mb250OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuJGNyZWFtOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxyXFxuJGdyZXk6IHJnYigyMTgsIDIxOCwgMjE4KTtcXHJcXG4kcmVkOiByZ2IoMjU1LCA5NSwgOTUpO1xcclxcbiRyZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCA5NSwgOTUsIDAuNSk7XFxyXFxuJGJsdWU6IHJnYig3OSwgMTQ5LCAyNTUpO1xcclxcbiRibHVlLXRyYW5zcGFyZW50OiByZ2IoNzksIDE0OSwgMjU1LCAwLjUpO1xcclxcbiRoMS1zaXplOiAzcmVtO1xcclxcbiRoMi1zaXplOiAycmVtO1xcclxcbiRvdXRlci1wYWRkaW5nOiAzMHB4O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkX2xvZ29cIikuc3JjID0gbG9nbztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkKHBsYXllcikge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2FyZC5jbGFzc0xpc3QgPSBwbGF5ZXIuQUkgPyBcImJvYXJkLTJcIiA6IFwiYm9hcmQtMVwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3cuY2xhc3NMaXN0ID0gcGxheWVyLkFJID8gXCJyb3ctMlwiIDogXCJyb3ctMVwiO1xyXG4gICAgcm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci5BSSA/IGAyLSR7aX1gIDogYDEtJHtpfWB9YCk7XHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAgIGZvciAobGV0IHUgPSAwOyB1IDwgMTA7IHUrKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBwbGF5ZXIuQUkgPyBcImNlbGwtMlwiIDogXCJjZWxsLTFcIjtcclxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwbGF5ZXIuQUkgPyBgMi0ke2l9LSR7dX1gIDogYDEtJHtpfS0ke3V9YH1gKTtcclxuICAgICAgcm93LmFwcGVuZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmFwcGVuZChib2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCb2FyZChwbGF5ZXIpIHtcclxuICBwbGF5ZXIuQUlcclxuICAgID8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCIpXHJcbiAgICA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIikuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUJvYXJkKHBsYXllcikge1xyXG4gIHBsYXllci5BSVxyXG4gICAgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0yXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcclxuICAgIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJvYXJkKGJvYXJkKSB7XHJcbiAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2JvYXJkfS0ke3p9LSR7eH1gKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBgY2VsbC0ke2JvYXJkfWA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTaGlwcyhwMSwgQUkpIHtcclxuICBmb3IgKGxldCB6ID0gMDsgeiA8IDEwOyB6KyspIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7en0tJHt4fWApO1xyXG4gICAgICBjb25zdCBjZWxsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAyLSR7en0tJHt4fWApO1xyXG4gICAgICBjZWxsMS5hdHRhY2tlciA9IEFJO1xyXG4gICAgICBjZWxsMS5hdHRhY2tlZCA9IHAxO1xyXG4gICAgICBjZWxsMi5hdHRhY2tlciA9IHAxO1xyXG4gICAgICBjZWxsMi5hdHRhY2tlZCA9IEFJO1xyXG4gICAgICBjZWxsMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyQXR0YWNrKTtcclxuICAgICAgaWYgKHAxLmdhbWVib2FyZC5ib2FyZFt6XVt4XS5zaGlwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDEtJHt6fS0ke3h9YCkuY2xhc3NMaXN0LmFkZChcInNoaXBfZnJpZW5kXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vICAgaWYgKEFJLmdhbWVib2FyZC5ib2FyZFt6XVt4XS5zaGlwKSB7XHJcbiAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMi0ke3p9LSR7eH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcF9lbmVteVwiKTtcclxuICAgICAgLy8gICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGFydChwbGF5ZXIsIEFJKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBidXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICBidXR0b25Db250LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udFwiKTtcclxuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xyXG4gIHJhbmRvbUJ0bi50ZXh0Q29udGVudCA9IFwiUmFuZG9tIEZsZWV0XCI7XHJcbiAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydFwiKTtcclxuICByYW5kb21CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyYW5kb21cIik7XHJcbiAgYnV0dG9uQ29udC5hcHBlbmQoc3RhcnRCdG4sIHJhbmRvbUJ0bik7XHJcbiAgbWFpbi5hcHBlbmQoYnV0dG9uQ29udCk7XHJcblxyXG4gIG1haW4uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcblxyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgc3RhcnRHYW1lKHBsYXllciwgQUkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllci5nYW1lYm9hcmQucmFuZG9tRmxlZXQoKTtcclxuICAgIGNsZWFyQm9hcmQoXCIxXCIpO1xyXG4gICAgcmVuZGVyU2hpcHMocGxheWVyLCBBSSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdhbWVPdmVyKGF0dGFja2VyKSB7XHJcbiAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgaDEudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyIWA7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBgJHthdHRhY2tlci5uYW1lfSB3b25gO1xyXG4gIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xyXG4gIGJnLmNsYXNzTGlzdC5hZGQoXCJiZ1wiKTtcclxuICBwbGF5QWdhaW4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyLWNvbnRcIik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaDEsIGgyKTtcclxuICBiZy5hcHBlbmQoY29udGFpbmVyLCBwbGF5QWdhaW4pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZChiZyk7XHJcblxyXG4gIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVzZXRHYW1lKCk7XHJcbiAgICBpbml0R2FtZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVCYWNrZ3JvdW5kKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmdcIikucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJ1dHRvbnMoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24ucmVtb3ZlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJBdHRhY2soY2xpY2spIHtcclxuICBjb25zdCBjID0gY2xpY2sudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcclxuICBjb25zdCBwMSA9IGNsaWNrLnRhcmdldC5hdHRhY2tlcjtcclxuICBjb25zdCBBSSA9IGNsaWNrLnRhcmdldC5hdHRhY2tlZDtcclxuICBjb25zdCB5ID0gY1sxXTtcclxuICBjb25zdCB4ID0gY1syXTtcclxuXHJcbiAgaWYgKHAxID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICBpZiAocDEudHVybiA9PT0gZmFsc2UpIHJldHVybjtcclxuICBpZiAoQUkuZ2FtZWJvYXJkLmhhc0JlZW5IaXQoW3ksIHhdKSA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICBjaGFuZ2VDZWxsU3RseWUoW1wiMlwiLCB5LCB4XSwgQUksIGNsaWNrLnRhcmdldCk7XHJcbiAgcDEuYXR0YWNrKFt5LCB4XSwgQUkuZ2FtZWJvYXJkKTtcclxuICBwMS50dXJuID0gZmFsc2U7XHJcbiAgaWYgKEFJLmdhbWVib2FyZC5pc0dhbWVPdmVyKCkpIHJlbmRlckdhbWVPdmVyKHAxKTtcclxuICBzZXRUaW1lb3V0KGFpQXR0YWNrLCA2MDAsIHAxLCBBSSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFpQXR0YWNrKHAxLCBBSSkge1xyXG4gIGxldCBbeSwgeF0gPSBwMS5nYW1lYm9hcmQucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICB3aGlsZSAocDEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3ksIHhdKSA9PT0gZmFsc2UpIHtcclxuICAgIFt5LCB4XSA9IHAxLmdhbWVib2FyZC5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gIH1cclxuICBjaGFuZ2VDZWxsU3RseWUoW1wiMVwiLCB5LCB4XSwgcDEpO1xyXG4gIGlmIChwMS5nYW1lYm9hcmQuaXNHYW1lT3ZlcigpKSByZW5kZXJHYW1lT3ZlcihBSSk7XHJcbiAgcDEudHVybiA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNlbGxTdGx5ZShjLCBhdHRhY2tlZCkge1xyXG4gIGNvbnN0IGJvYXJkID0gY1swXTtcclxuICBjb25zdCB5ID0gY1sxXTtcclxuICBjb25zdCB4ID0gY1syXTtcclxuXHJcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2JvYXJkfS0ke3l9LSR7eH1gKTtcclxuICBpZiAoYXR0YWNrZWQuZ2FtZWJvYXJkLmhhc1NoaXAoW3ksIHhdKSkge1xyXG4gICAgYXR0YWNrZWQuQUlcclxuICAgICAgPyBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2VuZW15X2hpdFwiKVxyXG4gICAgICA6IGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBfZnJpZW5kX2hpdFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlfaGl0XCIpO1xyXG4gICAgY29uc3QgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXJrLmNsYXNzTGlzdC5hZGQoXCJtYXJrXCIpO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIsIEFJKSB7XHJcbiAgc2hvd0JvYXJkKEFJKTtcclxuICBBSS5nYW1lYm9hcmQucmFuZG9tRmxlZXQoKTtcclxuICByZW5kZXJTaGlwcyhwbGF5ZXIsIEFJKTtcclxuICByZW1vdmVCdXR0b25zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIHJlbW92ZUJhY2tncm91bmQoKTtcclxuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTdGFydCwgaGlkZUJvYXJkLCByZW5kZXJHYW1lT3ZlciB9O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyU3RhcnQsIGhpZGVCb2FyZCwgcmVuZGVyR2FtZU92ZXIgfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkthbXJhblwiKTtcclxuICBjb25zdCBBSSA9IG5ldyBQbGF5ZXIoXCJBSVwiLCB0cnVlKTtcclxuICByZW5kZXJCb2FyZChwMSk7XHJcbiAgcmVuZGVyQm9hcmQoQUkpO1xyXG4gIGhpZGVCb2FyZChBSSk7XHJcbiAgcmVuZGVyU3RhcnQocDEsIEFJKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaW5pdEdhbWUgfTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgIHJlc2VydmVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc1NoaXAoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uc2hpcCBpbnN0YW5jZW9mIFNoaXAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkQ29vcmRpbmF0ZShjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZVxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbaV0uZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGlmIChjZWxsLmhpdCkgaGl0cysrO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBoaXRzID09PSAxMDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYXNCZWVuSGl0KGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLmhpdCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzUmVzZXJ2ZWQoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0ucmVzZXJ2ZWQgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0dhbWVPdmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgI3Jlc2VydmVTcGFjZShjKSB7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG4gICAgLy8gcmVzZXJ2ZXMgc3BhY2UgYXJvdW5kIGEgY29vcmRpbmF0ZVxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4XSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSArIDFdW3hdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCArIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3ldW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHggKyAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSAtIDFdW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHhdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5IC0gMV1beF0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgLSAxLCB4IC0gMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgLSAxXVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggLSAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCAtIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gICNjbGVhckJvYXJkKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgICByZXNlcnZlZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm5SYW5kb21Db29yZGluYXRlcygpIHtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgcmV0dXJuIFt5LCB4XTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChjLCBsZW5ndGgsIHZlcnRpY2FsID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgeSA9IGNbMF07XHJcbiAgICBjb25zdCB4ID0gY1sxXTtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgKHNoaXAubGVuZ3RoIC0gMSksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2hpcChbeSArIGksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWQoW3kgKyBpLCB4XSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLiNyZXNlcnZlU3BhY2UoW3kgKyBpLCB4XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSwgeCArIChzaGlwLmxlbmd0aCAtIDEpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NoaXAoW3ksIHggKyBpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkKFt5LCB4ICsgaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLiNyZXNlcnZlU3BhY2UoW3ksIHggKyBpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soYykge1xyXG4gICAgaWYgKHRoaXMuaGFzQmVlbkhpdChjKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uaGl0ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmhhc1NoaXAoYykpIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uc2hpcC5oaXQoKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbUZsZWV0KCkge1xyXG4gICAgdGhpcy4jY2xlYXJCb2FyZCgpO1xyXG4gICAgLy8gcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgM1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDMsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgMlxyXG4gICAgZm9yIChsZXQgdSA9IDA7IHUgPD0gMjsgdSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDIsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHUrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgNVxyXG4gICAgZm9yIChsZXQgeiA9IDA7IHogPD0gMjsgeisrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDUsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHorKztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgQUkgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuQUkgPSBBSTtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGF0dGFjayhjLCBnYW1lYm9hcmQpIHtcclxuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY1swXSwgY1sxXV0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlQm9hcmRzIH0gZnJvbSBcIi4vc2NyaXB0X21vZHVsZXMvZG9tXCI7XHJcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vc2NyaXB0X21vZHVsZXMvZ2FtZVwiO1xyXG5cclxuaW5pdEdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9