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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  font-family: \"alexandria\";\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0px 0px 20px -10px black;\n  z-index: 1;\n}\n.head_logo {\n  width: 40px;\n  height: 40px;\n}\n\n.main {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.main .board-1,\n.main .board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-auto-flow: row;\n  width: 500px;\n  height: 500px;\n  margin: 50px 100px;\n}\n.main .cell-1,\n.main .cell-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.223);\n}\n.main .cell-2:hover {\n  background-color: rgb(218, 218, 218);\n  cursor: crosshair;\n}\n.main .reserved {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .ship_friend {\n  background-color: rgb(79, 149, 255);\n}\n.main .ship_enemy {\n  background-color: rgb(255, 95, 95);\n}\n.main .ship_enemy:hover {\n  background-color: rgb(255, 95, 95);\n}\n.main .ship_enemy_hit {\n  background-color: rgba(255, 95, 95, 0.5);\n  box-shadow: 0 0 10px -1px rgb(255, 95, 95) inset;\n}\n.main .ship_enemy_hit:hover {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .ship_friend_hit {\n  background-color: rgba(79, 149, 255, 0.5);\n  box-shadow: 0 0 10px -1px rgb(79, 149, 255) inset;\n}\n.main .ship_friend_hit::after,\n.main .ship_enemy_hit::after {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"✕\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 2.3rem;\n}\n.main .empty_hit:hover {\n  background-color: white;\n}\n.main .empty_hit .mark {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: black;\n}\n.main .start_cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main .selection {\n  display: grid;\n  grid-auto-flow: row;\n  width: 12vw;\n}\n.main .selection_ship {\n  display: grid;\n  grid-auto-flow: column;\n  height: auto;\n  cursor: grab;\n}\n.main .selection_ship:active {\n  cursor: grabbing;\n}\n.main .selection_cont {\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.main .selection .vertical {\n  grid-auto-flow: row;\n}\n.bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n.bg .gameOver-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-cont {\n  display: flex;\n  gap: 100px;\n}\n\n.button {\n  height: 70px;\n  width: 200px;\n  border-radius: 10px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\n  transition: 0.15s all ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n}\n.button:hover {\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style_modules/_settings-reset.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,mBAAA;ADEF;;ACCA;EACE,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;ADEF;;ACCA;;;;;EAKE,SAAA;EACA,gBAAA;ADEF;;ACCA;EACE,SAAA;EACA,UAAA;ADEF;;ACCA;;;EAGE,qBAAA;ADEF;;ACCA;;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;ADEF;;ACCA;;EAEE,YAAA;EACA,aAAA;ADEF;;AEtDA;EACE,yBAAA;EACA,+DAAA;AFyDF;AAzDA;EACE,aAAA;EACA,4BAAA;EACA,yBGLY;AHgEd;;AAxDA;EACE,eGFQ;AH6DV;;AAxDA;EACE,eGLQ;AHgEV;;AAxDA;EACE,iBGRQ;AHmEV;;AAxDA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,aGfc;EHgBd,oCGzBM;EH0BN,oCAAA;EACA,UAAA;AA0DF;AAxDE;EACE,WAAA;EACA,YAAA;AA0DJ;;AAtDA;EACE,aG3Bc;EH4Bd,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AAyDF;AAvDE;;EAEE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AAyDJ;AAtDE;;EAEE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sCAAA;AAwDJ;AArDI;EACE,oCG9DC;EH+DD,iBAAA;AAuDN;AApDE;EACE,wCGjEc;AHuHlB;AAnDE;EACE,mCGpEG;AHyHP;AAlDE;EACE,kCG1EE;AH8HN;AAnDI;EACE,kCG5EA;AHiIN;AAjDE;EACE,wCGhFc;EHiFd,gDAAA;AAmDJ;AAjDI;EACE,wCGpFY;AHuIlB;AAhDE;EACE,yCGtFe;EHuFf,iDAAA;AAkDJ;AA7CI;;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAgDN;AA5CI;EACE,uBAAA;AA8CN;AA5CI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;AA8CN;AAzCI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AA2CN;AAvCE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAyCJ;AAvCI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AAyCN;AAvCM;EACE,gBAAA;AAyCR;AArCI;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAuCN;AApCI;EACE,mBAAA;AAsCN;AA9BA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AA+BF;AA7BE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AA+BJ;;AA3BA;EACE,aAAA;EACA,UAAA;AA8BF;;AA3BA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,oCG/LM;EHgMN,2CAAA;EACA,iCAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AA6BF;AA3BE;EACE,gBAAA;AA6BJ","sourcesContent":["@use \"./style_modules/index\" as *;\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 70px 1fr;\r\n  font-family: $strong-font;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh3 {\r\n  font-size: $h3-size;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  padding: $outer-padding;\r\n  background-color: $cream;\r\n  box-shadow: 0px 0px 20px -10px black;\r\n  z-index: 1;\r\n\r\n  &_logo {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.main {\r\n  padding: $outer-padding;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .board-1,\r\n  .board-2 {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-auto-flow: row;\r\n    width: 500px;\r\n    height: 500px;\r\n    margin: 50px 100px;\r\n  }\r\n\r\n  .cell-1,\r\n  .cell-2 {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid rgba(0, 0, 0, 0.223);\r\n  }\r\n  .cell-2 {\r\n    &:hover {\r\n      background-color: $grey;\r\n      cursor: crosshair;\r\n    }\r\n  }\r\n  .reserved {\r\n    background-color: $red-transparent;\r\n  }\r\n\r\n  .ship_friend {\r\n    background-color: $blue;\r\n  }\r\n\r\n  .ship_enemy {\r\n    background-color: $red;\r\n    &:hover {\r\n      background-color: $red;\r\n    }\r\n  }\r\n\r\n  .ship_enemy_hit {\r\n    background-color: $red-transparent;\r\n    box-shadow: 0 0 10px -1px $red inset;\r\n\r\n    &:hover {\r\n      background-color: $red-transparent;\r\n    }\r\n  }\r\n  .ship_friend_hit {\r\n    background-color: $blue-transparent;\r\n    box-shadow: 0 0 10px -1px $blue inset;\r\n  }\r\n\r\n  .ship_friend_hit,\r\n  .ship_enemy_hit {\r\n    &::after {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      content: \"✕\";\r\n      position: absolute;\r\n      width: 20px;\r\n      height: 20px;\r\n      font-size: 2.3rem;\r\n    }\r\n  }\r\n  .empty_hit {\r\n    &:hover {\r\n      background-color: white;\r\n    }\r\n    .mark {\r\n      position: absolute;\r\n      width: 10px;\r\n      height: 10px;\r\n      border-radius: 50%;\r\n      background-color: black;\r\n    }\r\n  }\r\n\r\n  .start {\r\n    &_cont {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  .selection {\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n    width: 12vw;\r\n\r\n    &_ship {\r\n      display: grid;\r\n      grid-auto-flow: column;\r\n      height: auto;\r\n      cursor: grab;\r\n\r\n      &:active {\r\n        cursor: grabbing;\r\n      }\r\n    }\r\n\r\n    &_cont {\r\n      margin: 20px 0;\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 10px;\r\n    }\r\n\r\n    .vertical {\r\n      grid-auto-flow: row;\r\n    }\r\n\r\n    .dragStart {\r\n    }\r\n  }\r\n}\r\n\r\n.bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n\r\n  .gameOver-cont {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.button-cont {\r\n  display: flex;\r\n  gap: 100px;\r\n}\r\n\r\n.button {\r\n  height: 70px;\r\n  width: 200px;\r\n  border-radius: 10px;\r\n  background-color: $cream;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\r\n  transition: 0.15s all ease-in-out;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.7rem;\r\n\r\n  &:hover {\r\n    box-shadow: none;\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$strong-font: \"alexandria\";\r\n$cream: rgb(255, 248, 239);\r\n$grey: rgb(218, 218, 218);\r\n$red: rgb(255, 95, 95);\r\n$red-transparent: rgba(255, 95, 95, 0.5);\r\n$blue: rgb(79, 149, 255);\r\n$blue-transparent: rgb(79, 149, 255, 0.5);\r\n$h1-size: 3rem;\r\n$h2-size: 2rem;\r\n$h3-size: 1.5rem;\r\n$outer-padding: 30px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "hideReservedSpaces": () => (/* binding */ hideReservedSpaces),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "renderStart": () => (/* binding */ renderStart),
/* harmony export */   "showReservedSpaces": () => (/* binding */ showReservedSpaces)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag_n_drop */ "./src/script_modules/drag_n_drop.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/script_modules/game.js");



document.querySelector(".head_logo").src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

function renderBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";
  board.player = player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.setAttribute("id", `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`);
      board.append(cell);
    }
  }
  return board;
}

function showBoard(board) {
  board.style.display = "grid";
}

function hideBoard(board) {
  board.style.display = "none";
}

function clearBoard(board) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.getElementById(`${board}-${z}-${x}`);
      cell.classList = `cell-${board}`;
    }
  }
}

function renderShips(p1) {
  for (let z = 0; z < 10; z++) {
    for (let x = 0; x < 10; x++) {
      const cell1 = document.getElementById(`1-${z}-${x}`);
      const cell2 = document.getElementById(`2-${z}-${x}`);
      cell2.addEventListener("click", playerAttack);
      if (p1.gameboard.board[z][x].ship) {
        cell1.classList.add("ship_friend");
      }
    }
  }
}

function renderSelection() {
  const cont = document.createElement("div");
  const ship5Cont = document.createElement("div");
  const ship3Cont = document.createElement("div");
  const ship2Cont = document.createElement("div");
  const ship5 = returnShip(5);
  const ship3 = returnShip(3);
  const ship2 = returnShip(2);
  const ship5Quant = document.createElement("h3");
  const ship3Quant = document.createElement("h3");
  const ship2Quant = document.createElement("h3");
  ship5Quant.textContent = "x2";
  ship3Quant.textContent = "x2";
  ship2Quant.textContent = "x2";
  ship5Quant.setAttribute("id", "ship5");
  ship3Quant.setAttribute("id", "ship3");
  ship2Quant.setAttribute("id", "ship2");
  cont.classList.add("selection");
  ship5Cont.classList.add("selection_cont");
  ship3Cont.classList.add("selection_cont");
  ship2Cont.classList.add("selection_cont");

  ship5Cont.append(ship5, ship5Quant);
  ship3Cont.append(ship3, ship3Quant);
  ship2Cont.append(ship2, ship2Quant);
  cont.append(ship5Cont, ship3Cont, ship2Cont);
  document.querySelector(".main").append(cont);
}

function removeSelection() {
  document.querySelector(".selection").remove();
}

function renderStart(player, AI) {
  const board1 = renderBoard(player);
  const board2 = renderBoard(AI);
  const main = document.querySelector(".main");
  const startCont = document.createElement("div");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const resetBtn = document.createElement("div");
  const buttonCont = document.createElement("div");

  startCont.classList.add("start_cont");
  buttonCont.classList.add("button-cont");
  startBtn.classList.add("button");
  randomBtn.classList.add("button");
  resetBtn.classList.add("button");
  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random";
  resetBtn.textContent = "Reset Board";
  buttonCont.append(startBtn, resetBtn, randomBtn);
  startCont.append(board1, buttonCont);
  main.append(startCont, board2);
  hideBoard(board2);

  board1.player = player;
  board2.player = AI;

  board1.childNodes.forEach((cell) => {
    cell.addEventListener("dragover", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragOver);
    cell.addEventListener("drop", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.drop);
  });

  renderSelection();

  startBtn.addEventListener("click", () => {
    if (player.gameboard.ships.length === 6) {
      main.prepend(board1);
      startCont.remove();
      showBoard(board2);
      startGame(player, AI);
    }
  });

  randomBtn.addEventListener("click", () => {
    player.gameboard.randomFleet();
    clearBoard("1");
    renderShips(player);
  });

  resetBtn.addEventListener("click", () => {
    player.gameboard.clearBoard();
    clearBoard("1");
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
    (0,_game__WEBPACK_IMPORTED_MODULE_2__.initGame)();
  });
}

function removeBackground() {
  document.querySelector(".bg").remove();
}

function removeButtons() {
  document.querySelectorAll(".button").forEach((button) => button.remove());
}

function showReservedSpaces() {
  const board = document.querySelector(".board-1");
  const player = board.player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.getElementById(`1-${i}-${u}`);
      if (player.gameboard.board[i][u].reserved) cell.classList.add("reserved");
    }
  }
}

function hideReservedSpaces() {
  const board = document.querySelector(".board-1");
  const player = board.player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.getElementById(`1-${i}-${u}`);
      if (player.gameboard.board[i][u].reserved)
        cell.classList.remove("reserved");
    }
  }
}

function returnShip(length) {
  const ship = document.createElement("div");
  ship.classList.add("selection_ship");
  ship.addEventListener("click", () => ship.classList.toggle("vertical"));
  ship.addEventListener("dragstart", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragStart, "text");
  ship.draggable = true;
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.classList.add("cell-1");
    cell.classList.add("ship_friend");
    cell.setAttribute("id", `${i}-${length}`);
    cell.addEventListener("mousedown", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.assignCellToDrag);

    ship.append(cell);
  }

  return ship;
}

function playerAttack(click) {
  const c = click.target.id.split("-");
  const p1 = document.querySelector(".board-1").player;
  const AI = document.querySelector(".board-2").player;
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
  AI.gameboard.randomFleet();
  renderShips(player);
  removeButtons();
  removeSelection();
}

function resetGame() {
  const main = document.querySelector(".main");
  removeBackground();
  main.innerHTML = "";
}




/***/ }),

/***/ "./src/script_modules/drag_n_drop.js":
/*!*******************************************!*\
  !*** ./src/script_modules/drag_n_drop.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignCellToDrag": () => (/* binding */ assignCellToDrag),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "drop": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/script_modules/dom.js");


function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.cell);
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showReservedSpaces)();
}

function assignCellToDrag(e) {
  e.path[1].cell = e.target.id;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const [cellNum, length] = id.split("-");
  const [board, y, x] = e.target.id.split("-");
  const player = document.querySelector(".board-1").player;

  if (canBePlaced(player, +length)) {
    if (player.gameboard.placeShip([+y, x - cellNum], +length) !== false) {
      changeNumberOfShipsLeft(+length);
    }
  }

  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideReservedSpaces)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderShips)(player);
}

function canBePlaced(player, length) {
  return player.gameboard.numberOfSpecificShips(length) < 2 ? true : false;
}

function changeNumberOfShipsLeft(length) {
  const numberLeft = document.getElementById(`ship${length}`);
  const text = Array.from(numberLeft.textContent);
  numberLeft.textContent = `x${text[1] - 1}`;
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

  numberOfSpecificShips(length) {
    const array = this.ships.filter((ship) => {
      return ship.length === length;
    });
    return array.length;
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

  clearBoard() {
    this.ships = [];
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
    this.clearBoard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2Z0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzhCO0FBQ0g7QUFDakQ7QUFDQSw4REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RyYWdfbl9kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0X21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTEwcHggYmxhY2s7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGVhZF9sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tYWluIC5ib2FyZC0xLFxcbi5tYWluIC5ib2FyZC0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDUwcHggMTAwcHg7XFxufVxcbi5tYWluIC5jZWxsLTEsXFxuLm1haW4gLmNlbGwtMiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyMyk7XFxufVxcbi5tYWluIC5jZWxsLTI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5tYWluIC5yZXNlcnZlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbn1cXG4ubWFpbiAuc2hpcF9mcmllbmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxNDksIDI1NSk7XFxufVxcbi5tYWluIC5zaGlwX2VuZW15IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk1LCA5NSk7XFxufVxcbi5tYWluIC5zaGlwX2VuZW15OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk1LCA5NSk7XFxufVxcbi5tYWluIC5zaGlwX2VuZW15X2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCByZ2IoMjU1LCA5NSwgOTUpIGluc2V0O1xcbn1cXG4ubWFpbiAuc2hpcF9lbmVteV9oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDk1LCA5NSwgMC41KTtcXG59XFxuLm1haW4gLnNoaXBfZnJpZW5kX2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxNDksIDI1NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDc5LCAxNDksIDI1NSkgaW5zZXQ7XFxufVxcbi5tYWluIC5zaGlwX2ZyaWVuZF9oaXQ6OmFmdGVyLFxcbi5tYWluIC5zaGlwX2VuZW15X2hpdDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbnRlbnQ6IFxcXCLinJVcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG59XFxuLm1haW4gLmVtcHR5X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1haW4gLmVtcHR5X2hpdCAubWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ubWFpbiAuc3RhcnRfY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1haW4gLnNlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIHdpZHRoOiAxMnZ3O1xcbn1cXG4ubWFpbiAuc2VsZWN0aW9uX3NoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcbi5tYWluIC5zZWxlY3Rpb25fc2hpcDphY3RpdmUge1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuLm1haW4gLnNlbGVjdGlvbl9jb250IHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5tYWluIC5zZWxlY3Rpb24gLnZlcnRpY2FsIHtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcbi5iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG59XFxuLmJnIC5nYW1lT3Zlci1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fc2V0dGluZ3MtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7OztFQUdFLG1CQUFBO0FERUY7O0FDQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7O0FDQ0E7Ozs7O0VBS0UsU0FBQTtFQUNBLGdCQUFBO0FERUY7O0FDQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBREVGOztBQ0NBOzs7RUFHRSxxQkFBQTtBREVGOztBQ0NBOztFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QURFRjs7QUNDQTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBREVGOztBRXREQTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QUZ5REY7QUF6REE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkdMWTtBSGdFZDs7QUF4REE7RUFDRSxlR0ZRO0FINkRWOztBQXhEQTtFQUNFLGVHTFE7QUhnRVY7O0FBeERBO0VBQ0UsaUJHUlE7QUhtRVY7O0FBeERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxhR2ZjO0VIZ0JkLG9DR3pCTTtFSDBCTixvQ0FBQTtFQUNBLFVBQUE7QUEwREY7QUF4REU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTBESjs7QUF0REE7RUFDRSxhRzNCYztFSDRCZCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeURGO0FBdkRFOztFQUVFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBeURKO0FBdERFOztFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQXdESjtBQXJESTtFQUNFLG9DRzlEQztFSCtERCxpQkFBQTtBQXVETjtBQXBERTtFQUNFLHdDR2pFYztBSHVIbEI7QUFuREU7RUFDRSxtQ0dwRUc7QUh5SFA7QUFsREU7RUFDRSxrQ0cxRUU7QUg4SE47QUFuREk7RUFDRSxrQ0c1RUE7QUhpSU47QUFqREU7RUFDRSx3Q0doRmM7RUhpRmQsZ0RBQUE7QUFtREo7QUFqREk7RUFDRSx3Q0dwRlk7QUh1SWxCO0FBaERFO0VBQ0UseUNHdEZlO0VIdUZmLGlEQUFBO0FBa0RKO0FBN0NJOztFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWdETjtBQTVDSTtFQUNFLHVCQUFBO0FBOENOO0FBNUNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUE4Q047QUF6Q0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMkNOO0FBdkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXlDSjtBQXZDSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeUNOO0FBdkNNO0VBQ0UsZ0JBQUE7QUF5Q1I7QUFyQ0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXVDTjtBQXBDSTtFQUNFLG1CQUFBO0FBc0NOO0FBOUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBK0JGO0FBN0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUErQko7O0FBM0JBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUE4QkY7O0FBM0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DRy9MTTtFSGdNTiwyQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTZCRjtBQTNCRTtFQUNFLGdCQUFBO0FBNkJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vc3R5bGVfbW9kdWxlcy9pbmRleFxcXCIgYXMgKjtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6ICRzdHJvbmctZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAkaDEtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAkaDItc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAkaDMtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtMTBweCBibGFjaztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAmX2xvZ28ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgLmJvYXJkLTEsXFxyXFxuICAuYm9hcmQtMiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDUwcHggMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbC0xLFxcclxcbiAgLmNlbGwtMiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMjMpO1xcclxcbiAgfVxcclxcbiAgLmNlbGwtMiB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcclxcbiAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAucmVzZXJ2ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLXRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNoaXBfZnJpZW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hpcF9lbmVteSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaGlwX2VuZW15X2hpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggJHJlZCBpbnNldDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC10cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLnNoaXBfZnJpZW5kX2hpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLXRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtMXB4ICRibHVlIGluc2V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNoaXBfZnJpZW5kX2hpdCxcXHJcXG4gIC5zaGlwX2VuZW15X2hpdCB7XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgY29udGVudDogXFxcIuKclVxcXCI7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmVtcHR5X2hpdCB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIC5tYXJrIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnN0YXJ0IHtcXHJcXG4gICAgJl9jb250IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgIHdpZHRoOiAxMnZ3O1xcclxcblxcclxcbiAgICAmX3NoaXAge1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgY3Vyc29yOiBncmFiO1xcclxcblxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfY29udCB7XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudmVydGljYWwge1xcclxcbiAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRyYWdTdGFydCB7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcblxcclxcbiAgLmdhbWVPdmVyLWNvbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQWxleGFuZHJpYS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXCIsXCIkc3Ryb25nLWZvbnQ6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4kY3JlYW06IHJnYigyNTUsIDI0OCwgMjM5KTtcXHJcXG4kZ3JleTogcmdiKDIxOCwgMjE4LCAyMTgpO1xcclxcbiRyZWQ6IHJnYigyNTUsIDk1LCA5NSk7XFxyXFxuJHJlZC10cmFuc3BhcmVudDogcmdiYSgyNTUsIDk1LCA5NSwgMC41KTtcXHJcXG4kYmx1ZTogcmdiKDc5LCAxNDksIDI1NSk7XFxyXFxuJGJsdWUtdHJhbnNwYXJlbnQ6IHJnYig3OSwgMTQ5LCAyNTUsIDAuNSk7XFxyXFxuJGgxLXNpemU6IDNyZW07XFxyXFxuJGgyLXNpemU6IDJyZW07XFxyXFxuJGgzLXNpemU6IDEuNXJlbTtcXHJcXG4kb3V0ZXItcGFkZGluZzogMzBweDtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nby5zdmdcIjtcclxuaW1wb3J0IHtcclxuICBhc3NpZ25DZWxsVG9EcmFnLFxyXG4gIGRyYWdFbnRlcixcclxuICBkcmFnT3ZlcixcclxuICBkcmFnU3RhcnQsXHJcbiAgZHJvcCxcclxuICBoaWRlRWxlbSxcclxuICBzaGlwRHJhZyxcclxufSBmcm9tIFwiLi9kcmFnX25fZHJvcFwiO1xyXG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkX2xvZ29cIikuc3JjID0gbG9nbztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkKHBsYXllcikge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2FyZC5jbGFzc0xpc3QgPSBwbGF5ZXIuQUkgPyBcImJvYXJkLTJcIiA6IFwiYm9hcmQtMVwiO1xyXG4gIGJvYXJkLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IDEwOyB1KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0ID0gcGxheWVyLkFJID8gXCJjZWxsLTJcIiA6IFwiY2VsbC0xXCI7XHJcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGxheWVyLkFJID8gYDItJHtpfS0ke3V9YCA6IGAxLSR7aX0tJHt1fWB9YCk7XHJcbiAgICAgIGJvYXJkLmFwcGVuZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9hcmQoYm9hcmQpIHtcclxuICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVCb2FyZChib2FyZCkge1xyXG4gIGJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb2FyZChib2FyZCkge1xyXG4gIGZvciAobGV0IHogPSAwOyB6IDwgMTA7IHorKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtib2FyZH0tJHt6fS0ke3h9YCk7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0ID0gYGNlbGwtJHtib2FyZH1gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2hpcHMocDEpIHtcclxuICBmb3IgKGxldCB6ID0gMDsgeiA8IDEwOyB6KyspIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7en0tJHt4fWApO1xyXG4gICAgICBjb25zdCBjZWxsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAyLSR7en0tJHt4fWApO1xyXG4gICAgICBjZWxsMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyQXR0YWNrKTtcclxuICAgICAgaWYgKHAxLmdhbWVib2FyZC5ib2FyZFt6XVt4XS5zaGlwKSB7XHJcbiAgICAgICAgY2VsbDEuY2xhc3NMaXN0LmFkZChcInNoaXBfZnJpZW5kXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oKSB7XHJcbiAgY29uc3QgY29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2hpcDVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzaGlwM0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNoaXAyQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2hpcDUgPSByZXR1cm5TaGlwKDUpO1xyXG4gIGNvbnN0IHNoaXAzID0gcmV0dXJuU2hpcCgzKTtcclxuICBjb25zdCBzaGlwMiA9IHJldHVyblNoaXAoMik7XHJcbiAgY29uc3Qgc2hpcDVRdWFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBzaGlwM1F1YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IHNoaXAyUXVhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgc2hpcDVRdWFudC50ZXh0Q29udGVudCA9IFwieDJcIjtcclxuICBzaGlwM1F1YW50LnRleHRDb250ZW50ID0gXCJ4MlwiO1xyXG4gIHNoaXAyUXVhbnQudGV4dENvbnRlbnQgPSBcIngyXCI7XHJcbiAgc2hpcDVRdWFudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNoaXA1XCIpO1xyXG4gIHNoaXAzUXVhbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaGlwM1wiKTtcclxuICBzaGlwMlF1YW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2hpcDJcIik7XHJcbiAgY29udC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uXCIpO1xyXG4gIHNoaXA1Q29udC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uX2NvbnRcIik7XHJcbiAgc2hpcDNDb250LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25fY29udFwiKTtcclxuICBzaGlwMkNvbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbl9jb250XCIpO1xyXG5cclxuICBzaGlwNUNvbnQuYXBwZW5kKHNoaXA1LCBzaGlwNVF1YW50KTtcclxuICBzaGlwM0NvbnQuYXBwZW5kKHNoaXAzLCBzaGlwM1F1YW50KTtcclxuICBzaGlwMkNvbnQuYXBwZW5kKHNoaXAyLCBzaGlwMlF1YW50KTtcclxuICBjb250LmFwcGVuZChzaGlwNUNvbnQsIHNoaXAzQ29udCwgc2hpcDJDb250KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kKGNvbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTZWxlY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Rpb25cIikucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclN0YXJ0KHBsYXllciwgQUkpIHtcclxuICBjb25zdCBib2FyZDEgPSByZW5kZXJCb2FyZChwbGF5ZXIpO1xyXG4gIGNvbnN0IGJvYXJkMiA9IHJlbmRlckJvYXJkKEFJKTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIGNvbnN0IHN0YXJ0Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGJ1dHRvbkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBzdGFydENvbnQuY2xhc3NMaXN0LmFkZChcInN0YXJ0X2NvbnRcIik7XHJcbiAgYnV0dG9uQ29udC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRcIik7XHJcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xyXG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XHJcbiAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcclxuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXQgQm9hcmRcIjtcclxuICBidXR0b25Db250LmFwcGVuZChzdGFydEJ0biwgcmVzZXRCdG4sIHJhbmRvbUJ0bik7XHJcbiAgc3RhcnRDb250LmFwcGVuZChib2FyZDEsIGJ1dHRvbkNvbnQpO1xyXG4gIG1haW4uYXBwZW5kKHN0YXJ0Q29udCwgYm9hcmQyKTtcclxuICBoaWRlQm9hcmQoYm9hcmQyKTtcclxuXHJcbiAgYm9hcmQxLnBsYXllciA9IHBsYXllcjtcclxuICBib2FyZDIucGxheWVyID0gQUk7XHJcblxyXG4gIGJvYXJkMS5jaGlsZE5vZGVzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XHJcbiAgfSk7XHJcblxyXG4gIHJlbmRlclNlbGVjdGlvbigpO1xyXG5cclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgIG1haW4ucHJlcGVuZChib2FyZDEpO1xyXG4gICAgICBzdGFydENvbnQucmVtb3ZlKCk7XHJcbiAgICAgIHNob3dCb2FyZChib2FyZDIpO1xyXG4gICAgICBzdGFydEdhbWUocGxheWVyLCBBSSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyLmdhbWVib2FyZC5yYW5kb21GbGVldCgpO1xyXG4gICAgY2xlYXJCb2FyZChcIjFcIik7XHJcbiAgICByZW5kZXJTaGlwcyhwbGF5ZXIpO1xyXG4gIH0pO1xyXG5cclxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGxheWVyLmdhbWVib2FyZC5jbGVhckJvYXJkKCk7XHJcbiAgICBjbGVhckJvYXJkKFwiMVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2FtZU92ZXIoYXR0YWNrZXIpIHtcclxuICBjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBoMS50ZXh0Q29udGVudCA9IGBHYW1lIE92ZXIhYDtcclxuICBoMi50ZXh0Q29udGVudCA9IGAke2F0dGFja2VyLm5hbWV9IHdvbmA7XHJcbiAgcGxheUFnYWluLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XHJcbiAgYmcuY2xhc3NMaXN0LmFkZChcImJnXCIpO1xyXG4gIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXItY29udFwiKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChoMSwgaDIpO1xyXG4gIGJnLmFwcGVuZChjb250YWluZXIsIHBsYXlBZ2Fpbik7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKGJnKTtcclxuXHJcbiAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICByZXNldEdhbWUoKTtcclxuICAgIGluaXRHYW1lKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJhY2tncm91bmQoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZ1wiKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQnV0dG9ucygpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5yZW1vdmUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXNlcnZlZFNwYWNlcygpIHtcclxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMVwiKTtcclxuICBjb25zdCBwbGF5ZXIgPSBib2FyZC5wbGF5ZXI7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgdSA9IDA7IHUgPCAxMDsgdSsrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMS0ke2l9LSR7dX1gKTtcclxuICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bdV0ucmVzZXJ2ZWQpIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlc2VydmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVJlc2VydmVkU3BhY2VzKCkge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0xXCIpO1xyXG4gIGNvbnN0IHBsYXllciA9IGJvYXJkLnBsYXllcjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IDEwOyB1KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7aX0tJHt1fWApO1xyXG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXVt1XS5yZXNlcnZlZClcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJyZXNlcnZlZFwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVyblNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uX3NoaXBcIik7XHJcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIikpO1xyXG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnQsIFwidGV4dFwiKTtcclxuICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjZWxsLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICBjZWxsLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC0xXCIpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9mcmllbmRcIik7XHJcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9LSR7bGVuZ3RofWApO1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzc2lnbkNlbGxUb0RyYWcpO1xyXG5cclxuICAgIHNoaXAuYXBwZW5kKGNlbGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoaXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllckF0dGFjayhjbGljaykge1xyXG4gIGNvbnN0IGMgPSBjbGljay50YXJnZXQuaWQuc3BsaXQoXCItXCIpO1xyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0xXCIpLnBsYXllcjtcclxuICBjb25zdCBBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMlwiKS5wbGF5ZXI7XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGlmIChwMSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgaWYgKHAxLnR1cm4gPT09IGZhbHNlKSByZXR1cm47XHJcbiAgaWYgKEFJLmdhbWVib2FyZC5oYXNCZWVuSGl0KFt5LCB4XSkgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjJcIiwgeSwgeF0sIEFJLCBjbGljay50YXJnZXQpO1xyXG4gIHAxLmF0dGFjayhbeSwgeF0sIEFJLmdhbWVib2FyZCk7XHJcbiAgcDEudHVybiA9IGZhbHNlO1xyXG4gIGlmIChBSS5nYW1lYm9hcmQuaXNHYW1lT3ZlcigpKSByZW5kZXJHYW1lT3ZlcihwMSk7XHJcbiAgc2V0VGltZW91dChhaUF0dGFjaywgNjAwLCBwMSwgQUkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhaUF0dGFjayhwMSwgQUkpIHtcclxuICBsZXQgW3ksIHhdID0gcDEuZ2FtZWJvYXJkLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgd2hpbGUgKHAxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt5LCB4XSkgPT09IGZhbHNlKSB7XHJcbiAgICBbeSwgeF0gPSBwMS5nYW1lYm9hcmQucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjFcIiwgeSwgeF0sIHAxKTtcclxuICBpZiAocDEuZ2FtZWJvYXJkLmlzR2FtZU92ZXIoKSkgcmVuZGVyR2FtZU92ZXIoQUkpO1xyXG4gIHAxLnR1cm4gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDZWxsU3RseWUoYywgYXR0YWNrZWQpIHtcclxuICBjb25zdCBib2FyZCA9IGNbMF07XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtib2FyZH0tJHt5fS0ke3h9YCk7XHJcbiAgaWYgKGF0dGFja2VkLmdhbWVib2FyZC5oYXNTaGlwKFt5LCB4XSkpIHtcclxuICAgIGF0dGFja2VkLkFJXHJcbiAgICAgID8gY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9lbmVteV9oaXRcIilcclxuICAgICAgOiBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZF9oaXRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImVtcHR5X2hpdFwiKTtcclxuICAgIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFyay5jbGFzc0xpc3QuYWRkKFwibWFya1wiKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFyayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyLCBBSSkge1xyXG4gIEFJLmdhbWVib2FyZC5yYW5kb21GbGVldCgpO1xyXG4gIHJlbmRlclNoaXBzKHBsYXllcik7XHJcbiAgcmVtb3ZlQnV0dG9ucygpO1xyXG4gIHJlbW92ZVNlbGVjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICByZW1vdmVCYWNrZ3JvdW5kKCk7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHJlbmRlckJvYXJkLFxyXG4gIHJlbmRlclN0YXJ0LFxyXG4gIGhpZGVCb2FyZCxcclxuICByZW5kZXJHYW1lT3ZlcixcclxuICByZW5kZXJTaGlwcyxcclxuICBzaG93UmVzZXJ2ZWRTcGFjZXMsXHJcbiAgaGlkZVJlc2VydmVkU3BhY2VzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJTaGlwcywgc2hvd1Jlc2VydmVkU3BhY2VzLCBoaWRlUmVzZXJ2ZWRTcGFjZXMgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XHJcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuY2VsbCk7XHJcbiAgc2hvd1Jlc2VydmVkU3BhY2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkNlbGxUb0RyYWcoZSkge1xyXG4gIGUucGF0aFsxXS5jZWxsID0gZS50YXJnZXQuaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyb3AoZSkge1xyXG4gIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgY29uc3QgW2NlbGxOdW0sIGxlbmd0aF0gPSBpZC5zcGxpdChcIi1cIik7XHJcbiAgY29uc3QgW2JvYXJkLCB5LCB4XSA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcclxuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIikucGxheWVyO1xyXG5cclxuICBpZiAoY2FuQmVQbGFjZWQocGxheWVyLCArbGVuZ3RoKSkge1xyXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFsreSwgeCAtIGNlbGxOdW1dLCArbGVuZ3RoKSAhPT0gZmFsc2UpIHtcclxuICAgICAgY2hhbmdlTnVtYmVyT2ZTaGlwc0xlZnQoK2xlbmd0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlUmVzZXJ2ZWRTcGFjZXMoKTtcclxuICByZW5kZXJTaGlwcyhwbGF5ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5CZVBsYWNlZChwbGF5ZXIsIGxlbmd0aCkge1xyXG4gIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLm51bWJlck9mU3BlY2lmaWNTaGlwcyhsZW5ndGgpIDwgMiA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTnVtYmVyT2ZTaGlwc0xlZnQobGVuZ3RoKSB7XHJcbiAgY29uc3QgbnVtYmVyTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaGlwJHtsZW5ndGh9YCk7XHJcbiAgY29uc3QgdGV4dCA9IEFycmF5LmZyb20obnVtYmVyTGVmdC50ZXh0Q29udGVudCk7XHJcbiAgbnVtYmVyTGVmdC50ZXh0Q29udGVudCA9IGB4JHt0ZXh0WzFdIC0gMX1gO1xyXG59XHJcblxyXG5leHBvcnQgeyBkcmFnU3RhcnQsIGFzc2lnbkNlbGxUb0RyYWcsIGRyYWdPdmVyLCBkcm9wIH07XHJcbiIsImltcG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTdGFydCwgaGlkZUJvYXJkLCByZW5kZXJHYW1lT3ZlciB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XHJcbiAgY29uc3QgcDEgPSBuZXcgUGxheWVyKFwiS2FtcmFuXCIpO1xyXG4gIGNvbnN0IEFJID0gbmV3IFBsYXllcihcIkFJXCIsIHRydWUpO1xyXG4gIHJlbmRlclN0YXJ0KHAxLCBBSSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRHYW1lIH07XHJcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgICByZXNlcnZlZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNTaGlwKGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLnNoaXAgaW5zdGFuY2VvZiBTaGlwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyT2ZTcGVjaWZpY1NoaXBzKGxlbmd0aCkge1xyXG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2hpcC5sZW5ndGggPT09IGxlbmd0aDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRDb29yZGluYXRlKGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dICE9PSB1bmRlZmluZWRcclxuICAgICAgPyB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0Z1bGwoKSB7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5ib2FyZFtpXS5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgaWYgKGNlbGwuaGl0KSBoaXRzKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpdHMgPT09IDEwMCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhc0JlZW5IaXQoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0uaGl0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNSZXNlcnZlZChjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5yZXNlcnZlZCA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzR2FtZU92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICAjcmVzZXJ2ZVNwYWNlKGMpIHtcclxuICAgIGNvbnN0IHkgPSBjWzBdO1xyXG4gICAgY29uc3QgeCA9IGNbMV07XHJcbiAgICAvLyByZXNlcnZlcyBzcGFjZSBhcm91bmQgYSBjb29yZGluYXRlXHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSArIDEsIHhdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beF0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4ICsgMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgKyAxXVt4ICsgMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggKyAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5IC0gMSwgeCArIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5IC0gMV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5IC0gMSwgeF0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgLSAxXVt4XS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHggLSAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSAtIDFdW3ggLSAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSwgeCAtIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5XVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4IC0gMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgKyAxXVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJCb2FyZCgpIHtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgcm93LnB1c2goe1xyXG4gICAgICAgICAgaGl0OiBmYWxzZSxcclxuICAgICAgICAgIHNoaXA6IGZhbHNlLFxyXG4gICAgICAgICAgcmVzZXJ2ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHJldHVybiBbeSwgeF07XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoYywgbGVuZ3RoLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGNvbnN0IHkgPSBjWzBdO1xyXG4gICAgY29uc3QgeCA9IGNbMV07XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSArIChzaGlwLmxlbmd0aCAtIDEpLCB4XSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NoaXAoW3kgKyBpLCB4XSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkKFt5ICsgaSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdLnNoaXAgPSBzaGlwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZVNwYWNlKFt5ICsgaSwgeF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggKyAoc2hpcC5sZW5ndGggLSAxKV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNTaGlwKFt5LCB4ICsgaV0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZChbeSwgeCArIGldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZVNwYWNlKFt5LCB4ICsgaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKGMpIHtcclxuICAgIGlmICh0aGlzLmhhc0JlZW5IaXQoYykpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLmhpdCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5oYXNTaGlwKGMpKSB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLnNoaXAuaGl0KCk7XHJcbiAgfVxyXG5cclxuICByYW5kb21GbGVldCgpIHtcclxuICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xyXG4gICAgLy8gcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgM1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDMsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgMlxyXG4gICAgZm9yIChsZXQgdSA9IDA7IHUgPD0gMjsgdSsrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDIsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHUrKztcclxuICAgIH1cclxuICAgIC8vcGxhY2UgMiBzaGlwcyBsZW5ndGggb2YgNVxyXG4gICAgZm9yIChsZXQgeiA9IDA7IHogPD0gMjsgeisrKSB7XHJcbiAgICAgIGxldCBbeSwgeF0gPSB0aGlzLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgIHdoaWxlICh0aGlzLnBsYWNlU2hpcChbeSwgeF0sIDUsICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHorKztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgQUkgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuQUkgPSBBSTtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGF0dGFjayhjLCBnYW1lYm9hcmQpIHtcclxuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbY1swXSwgY1sxXV0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlQm9hcmRzIH0gZnJvbSBcIi4vc2NyaXB0X21vZHVsZXMvZG9tXCI7XHJcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vc2NyaXB0X21vZHVsZXMvZ2FtZVwiO1xyXG5cclxuaW5pdEdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9