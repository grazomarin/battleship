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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  font-family: \"alexandria\";\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0px 0px 20px -10px black;\n  z-index: 1;\n}\n.head_logo {\n  width: 40px;\n  height: 40px;\n}\n\n.main {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  /* \n    cell-1, cell-2, ship-friend classes are outside boardCont class because otherwise\n    selection styling wouldn't work\n  */\n}\n.main .boardCont {\n  display: grid;\n  grid-template-rows: 50px auto auto;\n  align-items: center;\n  justify-items: center;\n  gap: 60px;\n}\n.main .boardCont .input_cont {\n  position: relative;\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  grid-template-rows: 1fr;\n  gap: 10px;\n}\n.main .boardCont .input_input {\n  width: 300px;\n  height: 45px;\n  border-radius: 10px;\n  border: 2px dashed black;\n  font-size: 2rem;\n  font-family: \"alexandria\";\n  text-align: center;\n}\n.main .boardCont .input_input:focus {\n  border: 3px solid black;\n}\n.main .boardCont .input_label {\n  font-size: 2rem;\n}\n.main .boardCont .input_error {\n  position: absolute;\n  display: none;\n  bottom: -45px;\n  width: 100%;\n  background-color: rgb(255, 95, 95);\n  color: white;\n  font-size: 1.5rem;\n  padding: 5px 10px;\n}\n.main .boardCont .name {\n  font-size: 2rem;\n  font-family: \"alexandria\";\n}\n.main .boardCont .board-1,\n.main .boardCont .board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-auto-flow: row;\n  width: 500px;\n  height: 500px;\n}\n.main .boardCont .cell-2:hover {\n  background-color: rgb(218, 218, 218);\n  cursor: crosshair;\n}\n.main .boardCont .ship_enemy_hit {\n  background-color: rgba(255, 95, 95, 0.5);\n  box-shadow: 0 0 10px -1px rgb(255, 95, 95) inset;\n}\n.main .boardCont .ship_enemy_hit:hover {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .boardCont .ship_friend_hit {\n  background-color: rgba(79, 149, 255, 0.5);\n  box-shadow: 0 0 10px -1px rgb(79, 149, 255) inset;\n}\n.main .boardCont .ship_friend_hit::after,\n.main .boardCont .ship_enemy_hit::after {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: \"✕\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 2.3rem;\n}\n.main .boardCont .empty_hit:hover {\n  background-color: white;\n}\n.main .boardCont .empty_hit .mark {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: black;\n}\n.main .reserved {\n  background-color: rgba(255, 95, 95, 0.5);\n}\n.main .cell-1,\n.main .cell-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.223);\n}\n.main .ship_friend {\n  background-color: rgb(79, 149, 255);\n}\n.main .selection {\n  display: grid;\n  grid-auto-flow: row;\n  width: 12vw;\n}\n.main .selection_ship {\n  display: grid;\n  grid-auto-flow: column;\n  height: auto;\n  cursor: grab;\n}\n.main .selection_ship:active {\n  cursor: grabbing;\n}\n.main .selection_cont {\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.main .selection .vertical {\n  grid-auto-flow: row;\n}\n.bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n.bg .gameOver-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button-cont {\n  display: flex;\n  gap: 100px;\n}\n\n.button {\n  height: 70px;\n  width: 200px;\n  border-radius: 10px;\n  background-color: rgb(255, 248, 239);\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\n  transition: 0.15s all ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.7rem;\n}\n.button:hover {\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style_modules/_settings-reset.scss","webpack://./src/style_modules/_fonts.scss","webpack://./src/style_modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"./style_modules/index\" as *;\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 70px 1fr;\r\n  font-family: $strong-font;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh3 {\r\n  font-size: $h3-size;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  padding: $outer-padding;\r\n  background-color: $cream;\r\n  box-shadow: 0px 0px 20px -10px black;\r\n  z-index: 1;\r\n\r\n  &_logo {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.main {\r\n  padding: $outer-padding;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .boardCont {\r\n    display: grid;\r\n    grid-template-rows: 50px auto auto;\r\n    align-items: center;\r\n    justify-items: center;\r\n    gap: 60px;\r\n\r\n    .input {\r\n      &_cont {\r\n        position: relative;\r\n        display: grid;\r\n        grid-template-columns: min-content 1fr;\r\n        grid-template-rows: 1fr;\r\n        gap: 10px;\r\n      }\r\n\r\n      &_input {\r\n        width: 300px;\r\n        height: 45px;\r\n        border-radius: $border-radius;\r\n        border: 2px dashed black;\r\n        font-size: $h2-size;\r\n        font-family: $strong-font;\r\n        text-align: center;\r\n\r\n        &:focus {\r\n          border: 3px solid black;\r\n        }\r\n      }\r\n\r\n      &_label {\r\n        font-size: $h2-size;\r\n      }\r\n\r\n      &_error {\r\n        position: absolute;\r\n        display: none;\r\n        bottom: -45px;\r\n        width: 100%;\r\n        background-color: $red;\r\n        color: white;\r\n        font-size: $h3-size;\r\n        padding: 5px 10px;\r\n      }\r\n    }\r\n\r\n    .name {\r\n      font-size: $h2-size;\r\n      font-family: $strong-font;\r\n    }\r\n\r\n    .board-1,\r\n    .board-2 {\r\n      display: grid;\r\n      grid-template-columns: repeat(10, 1fr);\r\n      grid-template-rows: repeat(10, 1fr);\r\n      grid-auto-flow: row;\r\n      width: 500px;\r\n      height: 500px;\r\n    }\r\n\r\n    .cell-2 {\r\n      &:hover {\r\n        background-color: $grey;\r\n        cursor: crosshair;\r\n      }\r\n    }\r\n\r\n    .ship_enemy_hit {\r\n      background-color: $red-transparent;\r\n      box-shadow: 0 0 10px -1px $red inset;\r\n\r\n      &:hover {\r\n        background-color: $red-transparent;\r\n      }\r\n    }\r\n    .ship_friend_hit {\r\n      background-color: $blue-transparent;\r\n      box-shadow: 0 0 10px -1px $blue inset;\r\n    }\r\n\r\n    .ship_friend_hit,\r\n    .ship_enemy_hit {\r\n      &::after {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        content: \"✕\";\r\n        position: absolute;\r\n        width: 20px;\r\n        height: 20px;\r\n        font-size: 2.3rem;\r\n      }\r\n    }\r\n    .empty_hit {\r\n      &:hover {\r\n        background-color: white;\r\n      }\r\n      .mark {\r\n        position: absolute;\r\n        width: 10px;\r\n        height: 10px;\r\n        border-radius: 50%;\r\n        background-color: black;\r\n      }\r\n    }\r\n  }\r\n\r\n  /* \r\n    cell-1, cell-2, ship-friend classes are outside boardCont class because otherwise\r\n    selection styling wouldn't work\r\n  */\r\n\r\n  .reserved {\r\n    background-color: $red-transparent;\r\n  }\r\n\r\n  .cell-1,\r\n  .cell-2 {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid rgba(0, 0, 0, 0.223);\r\n  }\r\n\r\n  .ship_friend {\r\n    background-color: $blue;\r\n  }\r\n\r\n  .selection {\r\n    display: grid;\r\n    grid-auto-flow: row;\r\n    width: 12vw;\r\n\r\n    &_ship {\r\n      display: grid;\r\n      grid-auto-flow: column;\r\n      height: auto;\r\n      cursor: grab;\r\n\r\n      &:active {\r\n        cursor: grabbing;\r\n      }\r\n    }\r\n\r\n    &_cont {\r\n      margin: 20px 0;\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 10px;\r\n    }\r\n\r\n    .vertical {\r\n      grid-auto-flow: row;\r\n    }\r\n\r\n    .dragStart {\r\n    }\r\n  }\r\n}\r\n\r\n.bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n\r\n  .gameOver-cont {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.button-cont {\r\n  display: flex;\r\n  gap: 100px;\r\n}\r\n\r\n.button {\r\n  height: 70px;\r\n  width: 200px;\r\n  border-radius: $border-radius;\r\n  background-color: $cream;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);\r\n  transition: 0.15s all ease-in-out;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.7rem;\r\n\r\n  &:hover {\r\n    box-shadow: none;\r\n  }\r\n}\r\n","html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$strong-font: \"alexandria\";\r\n$cream: rgb(255, 248, 239);\r\n$grey: rgb(218, 218, 218);\r\n$red: rgb(255, 95, 95);\r\n$red-transparent: rgba(255, 95, 95, 0.5);\r\n$blue: rgb(79, 149, 255);\r\n$blue-transparent: rgb(79, 149, 255, 0.5);\r\n$h1-size: 3rem;\r\n$h2-size: 2rem;\r\n$h3-size: 1.5rem;\r\n$outer-padding: 30px;\r\n$border-radius: 10px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "renderStart": () => (/* binding */ renderStart),
/* harmony export */   "returnBoard": () => (/* binding */ returnBoard),
/* harmony export */   "showReservedSpaces": () => (/* binding */ showReservedSpaces)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag_n_drop */ "./src/script_modules/drag_n_drop.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/script_modules/game.js");



document.querySelector(".head_logo").src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

function returnBoard(player) {
  const board = document.createElement("div");
  board.classList = player.AI ? "board-2" : "board-1";
  board.player = player;

  for (let i = 0; i < 10; i++) {
    for (let u = 0; u < 10; u++) {
      const cell = document.createElement("div");
      cell.classList = player.AI ? "cell-2" : "cell-1";
      cell.id = `${player.AI ? `2-${i}-${u}` : `1-${i}-${u}`}`;
      board.append(cell);
    }
  }
  return board;
}

function showBoard(board) {
  document.querySelector(`.board-${board}`).parentNode.style.display = "grid";
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
  const ship5 = returnDraggableShip(5);
  const ship3 = returnDraggableShip(3);
  const ship2 = returnDraggableShip(2);
  const ship5Quant = document.createElement("h3");
  const ship3Quant = document.createElement("h3");
  const ship2Quant = document.createElement("h3");
  ship5Quant.textContent = "x2";
  ship3Quant.textContent = "x2";
  ship2Quant.textContent = "x2";
  ship5Quant.id = "ship5";
  ship3Quant.id = "ship3";
  ship2Quant.id = "ship2";
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
  const board1 = returnBoard(player);
  const board2 = returnBoard(AI);
  const main = document.querySelector(".main");
  const board1Cont = document.createElement("div");
  const board2Cont = document.createElement("div");
  const nameAI = document.createElement("div");
  const [buttonCont, startBtn, randomBtn, resetBtn] = returnButtons();
  const [inputCont, nameInput, nameLable, nameError] = returnNameInput();

  board1Cont.classList.add("boardCont");
  board2Cont.classList.add("boardCont");
  nameAI.classList.add("name");
  nameAI.textContent = "AI";
  board1Cont.append(inputCont, board1, buttonCont);
  board2Cont.append(nameAI, board2);
  main.append(board1Cont, board2Cont);
  hideBoard(board2Cont);

  board1.player = player;
  board2.player = AI;

  board1.childNodes.forEach((cell) => {
    cell.addEventListener("dragover", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragOver);
    cell.addEventListener("drop", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.drop);
  });

  addButtonEventListeners(player, AI);
  renderSelection();
}

function displayPlayerName(name) {
  const nameElem = document.createElement("div");
  const input = document.querySelector(".input_input");
  const label = document.querySelector(".input_label");
  label.remove();
  nameElem.classList.add("name");
  nameElem.textContent = name;
  input.parentNode.replaceChild(nameElem, input);
}

function displayPlayerNameError(errorElem) {
  errorElem.style.display = "block";
  setTimeout(() => {
    errorElem.style.display = "none";
  }, 2500);
  return;
}

function returnNameInput() {
  const inputCont = document.createElement("div");
  const nameLable = document.createElement("label");
  const nameInput = document.createElement("input");
  const nameError = document.createElement("div");

  nameInput.required = true;
  nameInput.id = "name";
  nameLable.textContent = "Name: ";
  nameError.textContent = "Enter a valid name";
  nameLable.setAttribute("for", "name");
  inputCont.classList.add("input_cont");
  nameLable.classList.add("input_label");
  nameInput.classList.add("input_input");
  nameError.classList.add("input_error");

  inputCont.append(nameLable, nameInput, nameError);

  return [inputCont, nameInput, nameLable, nameError];
}

function returnButtons() {
  const buttonCont = document.createElement("div");
  const startBtn = document.createElement("div");
  const randomBtn = document.createElement("div");
  const resetBtn = document.createElement("div");

  buttonCont.classList.add("button-cont");
  startBtn.classList.add("button", "start");
  randomBtn.classList.add("button", "random");
  resetBtn.classList.add("button", "reset");

  startBtn.textContent = "Start Game";
  randomBtn.textContent = "Random";
  resetBtn.textContent = "Reset Board";
  buttonCont.append(startBtn, resetBtn, randomBtn);

  return [buttonCont, startBtn, randomBtn, resetBtn];
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

function addButtonEventListeners(player, AI) {
  const main = document.querySelector(".main");
  const startBtn = document.querySelector(".start");
  const randomBtn = document.querySelector(".random");
  const resetBtn = document.querySelector(".reset");
  const nameInput = document.querySelector(".input_input");
  const nameError = document.querySelector(".input_error");

  startBtn.addEventListener("click", () => {
    if (nameInput.value === "") return displayPlayerNameError(nameError);

    if (player.gameboard.ships.length === 6) {
      player.name = nameInput.value;
      main.style.justifyContent = "space-around";
      displayPlayerName(nameInput.value);
      showBoard("2");
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
    removeSelection();
    renderSelection();
  });
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

function returnDraggableShip(length) {
  const ship = document.createElement("div");
  ship.classList.add("selection_ship");
  ship.addEventListener("click", () => {
    ship.classList.toggle("vertical");
  });
  ship.addEventListener("dragstart", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragStart);
  ship.addEventListener("dragend", _drag_n_drop__WEBPACK_IMPORTED_MODULE_1__.dragEnd);
  ship.draggable = true;
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.classList.add("cell-1");
    cell.classList.add("ship_friend");
    cell.id = `${i}-${length}`;
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
  if (AI.gameboard.isGameOver()) return renderGameOver(p1);
  setTimeout(aiAttack, 600, p1, AI);
}

function aiAttack(p1, AI) {
  let [y, x] = p1.gameboard.returnRandomCoordinates();
  while (p1.gameboard.receiveAttack([y, x]) === false) {
    [y, x] = p1.gameboard.returnRandomCoordinates();
  }
  changeCellStlye(["1", y, x], p1);
  if (p1.gameboard.isGameOver()) return renderGameOver(AI);
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
  main.style = "";
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
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
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

function dragEnd(e) {
  e.preventDefault();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideReservedSpaces)();
}

function drop(e) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideReservedSpaces)();

  const id = e.dataTransfer.getData("text/plain");
  if (!document.getElementById(id)) return;
  const parent = document.getElementById(id).parentNode;
  const isVertical = parent.classList.contains("vertical");
  const [cellNum, length] = id.split("-");
  const [board, y, x] = e.target.id.split("-");
  const player = document.querySelector(".board-1").player;

  if (canBePlaced(player, +length)) {
    if (isVertical) {
      if (
        player.gameboard.placeShip([+y - cellNum, +x], +length, true) !== false
      ) {
        changeNumberOfShipsLeft(+length, parent);
      }
    } else {
      if (
        player.gameboard.placeShip([+y, +x - cellNum], +length, false) !== false
      ) {
        changeNumberOfShipsLeft(+length, parent);
      }
    }
  }

  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderShips)(player);
}

function canBePlaced(player, length) {
  return player.gameboard.numberOfSpecificShips(length) < 2 ? true : false;
}

function changeNumberOfShipsLeft(length, ship) {
  const numberLeft = document.getElementById(`ship${length}`);
  const text = Array.from(numberLeft.textContent);
  numberLeft.textContent = `x${text[1] - 1}`;
  if (text[1] - 1 === 0) blockRotation(ship);
}

function blockRotation(ship) {
  ship.classList.remove("vertical");
  ship.addEventListener("click", () => ship.classList.remove("vertical"));
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
  const p1 = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("");
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
      if (!this.isValidCoordinate([y, x])) return false;
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
      if (!this.isValidCoordinate([y, x])) return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLGFBQWEsWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcs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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzhCO0FBQ0g7QUFDakQ7QUFDQSw4REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2RyYWdfbl9kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0X21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdF9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTEwcHggYmxhY2s7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGVhZF9sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBcXG4gICAgY2VsbC0xLCBjZWxsLTIsIHNoaXAtZnJpZW5kIGNsYXNzZXMgYXJlIG91dHNpZGUgYm9hcmRDb250IGNsYXNzIGJlY2F1c2Ugb3RoZXJ3aXNlXFxuICAgIHNlbGVjdGlvbiBzdHlsaW5nIHdvdWxkbid0IHdvcmtcXG4gICovXFxufVxcbi5tYWluIC5ib2FyZENvbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2MHB4O1xcbn1cXG4ubWFpbiAuYm9hcmRDb250IC5pbnB1dF9jb250IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ubWFpbiAuYm9hcmRDb250IC5pbnB1dF9pbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4gLmJvYXJkQ29udCAuaW5wdXRfaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLmlucHV0X2xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1haW4gLmJvYXJkQ29udCAuaW5wdXRfZXJyb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvdHRvbTogLTQ1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk1LCA5NSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG4ubWFpbiAuYm9hcmRDb250IC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLmJvYXJkLTEsXFxuLm1haW4gLmJvYXJkQ29udCAuYm9hcmQtMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4ubWFpbiAuYm9hcmRDb250IC5jZWxsLTI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLnNoaXBfZW5lbXlfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5NSwgOTUsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAtMXB4IHJnYigyNTUsIDk1LCA5NSkgaW5zZXQ7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLnNoaXBfZW5lbXlfaGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5NSwgOTUsIDAuNSk7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLnNoaXBfZnJpZW5kX2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCAxNDksIDI1NSwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0xcHggcmdiKDc5LCAxNDksIDI1NSkgaW5zZXQ7XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLnNoaXBfZnJpZW5kX2hpdDo6YWZ0ZXIsXFxuLm1haW4gLmJvYXJkQ29udCAuc2hpcF9lbmVteV9oaXQ6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcbi5tYWluIC5ib2FyZENvbnQgLmVtcHR5X2hpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1haW4gLmJvYXJkQ29udCAuZW1wdHlfaGl0IC5tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5tYWluIC5yZXNlcnZlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTUsIDk1LCAwLjUpO1xcbn1cXG4ubWFpbiAuY2VsbC0xLFxcbi5tYWluIC5jZWxsLTIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMjMpO1xcbn1cXG4ubWFpbiAuc2hpcF9mcmllbmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxNDksIDI1NSk7XFxufVxcbi5tYWluIC5zZWxlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICB3aWR0aDogMTJ2dztcXG59XFxuLm1haW4gLnNlbGVjdGlvbl9zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG4ubWFpbiAuc2VsZWN0aW9uX3NoaXA6YWN0aXZlIHtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbi5tYWluIC5zZWxlY3Rpb25fY29udCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ubWFpbiAuc2VsZWN0aW9uIC52ZXJ0aWNhbCB7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbn1cXG4uYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcbi5iZyAuZ2FtZU92ZXItY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ4LCAyMzkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zaXRpb246IDAuMTVzIGFsbCBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBREVGOztBQ0NBOzs7RUFHRSxtQkFBQTtBREVGOztBQ0NBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBREVGOztBQ0NBOzs7OztFQUtFLFNBQUE7RUFDQSxnQkFBQTtBREVGOztBQ0NBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QURFRjs7QUNDQTs7O0VBR0UscUJBQUE7QURFRjs7QUNDQTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FERUY7O0FDQ0E7O0VBRUUsWUFBQTtFQUNBLGFBQUE7QURFRjs7QUV0REE7RUFDRSx5QkFBQTtFQUNBLCtEQUFBO0FGeURGO0FBekRBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJHTFk7QUhnRWQ7O0FBeERBO0VBQ0UsZUdGUTtBSDZEVjs7QUF4REE7RUFDRSxlR0xRO0FIZ0VWOztBQXhEQTtFQUNFLGlCR1JRO0FIbUVWOztBQXhEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUdmYztFSGdCZCxvQ0d6Qk07RUgwQk4sb0NBQUE7RUFDQSxVQUFBO0FBMERGO0FBeERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEwREo7O0FBdERBO0VBQ0UsYUczQmM7RUg0QmQsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQThHQTs7O0dBQUE7QUFqREY7QUEzREU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQTZESjtBQTFETTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBNERSO0FBekRNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkduRFE7RUhvRFIsd0JBQUE7RUFDQSxlR3hERTtFSHlERix5QkdqRU07RUhrRU4sa0JBQUE7QUEyRFI7QUF6RFE7RUFDRSx1QkFBQTtBQTJEVjtBQXZETTtFQUNFLGVHbEVFO0FIMkhWO0FBdERNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0cvRUY7RUhnRkUsWUFBQTtFQUNBLGlCRzNFRTtFSDRFRixpQkFBQTtBQXdEUjtBQXBESTtFQUNFLGVHbEZJO0VIbUZKLHlCRzNGUTtBSGlKZDtBQW5ESTs7RUFFRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFxRE47QUFqRE07RUFDRSxvQ0d4R0Q7RUh5R0MsaUJBQUE7QUFtRFI7QUEvQ0k7RUFDRSx3Q0c1R1k7RUg2R1osZ0RBQUE7QUFpRE47QUEvQ007RUFDRSx3Q0doSFU7QUhpS2xCO0FBOUNJO0VBQ0UseUNHbEhhO0VIbUhiLGlEQUFBO0FBZ0ROO0FBM0NNOztFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQThDUjtBQTFDTTtFQUNFLHVCQUFBO0FBNENSO0FBMUNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUE0Q1I7QUFsQ0U7RUFDRSx3Q0d6SmM7QUg2TGxCO0FBakNFOztFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQW1DSjtBQWhDRTtFQUNFLG1DR3JLRztBSHVNUDtBQS9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFpQ0o7QUEvQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWlDTjtBQS9CTTtFQUNFLGdCQUFBO0FBaUNSO0FBN0JJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUErQk47QUE1Qkk7RUFDRSxtQkFBQTtBQThCTjtBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXVCRjtBQXJCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBdUJKOztBQW5CQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBc0JGOztBQW5CQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJHOU5jO0VIK05kLG9DR3pPTTtFSDBPTiwyQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQXFCRjtBQW5CRTtFQUNFLGdCQUFBO0FBcUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vc3R5bGVfbW9kdWxlcy9pbmRleFxcXCIgYXMgKjtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6ICRzdHJvbmctZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAkaDEtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAkaDItc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAkaDMtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtMTBweCBibGFjaztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAmX2xvZ28ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAkb3V0ZXItcGFkZGluZztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgLmJvYXJkQ29udCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA2MHB4O1xcclxcblxcclxcbiAgICAuaW5wdXQge1xcclxcbiAgICAgICZfY29udCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJl9pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJHN0cm9uZy1mb250O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmX2xhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICZfZXJyb3Ige1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTQ1cHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRoMy1zaXplO1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6ICRoMi1zaXplO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAkc3Ryb25nLWZvbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvYXJkLTEsXFxyXFxuICAgIC5ib2FyZC0yIHtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlbGwtMiB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXHJcXG4gICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hpcF9lbmVteV9oaXQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCAkcmVkIGluc2V0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC10cmFuc3BhcmVudDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLnNoaXBfZnJpZW5kX2hpdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTFweCAkYmx1ZSBpbnNldDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hpcF9mcmllbmRfaGl0LFxcclxcbiAgICAuc2hpcF9lbmVteV9oaXQge1xcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5lbXB0eV9oaXQge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5tYXJrIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBcXHJcXG4gICAgY2VsbC0xLCBjZWxsLTIsIHNoaXAtZnJpZW5kIGNsYXNzZXMgYXJlIG91dHNpZGUgYm9hcmRDb250IGNsYXNzIGJlY2F1c2Ugb3RoZXJ3aXNlXFxyXFxuICAgIHNlbGVjdGlvbiBzdHlsaW5nIHdvdWxkbid0IHdvcmtcXHJcXG4gICovXFxyXFxuXFxyXFxuICAucmVzZXJ2ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLXRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNlbGwtMSxcXHJcXG4gIC5jZWxsLTIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjIzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaGlwX2ZyaWVuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgIHdpZHRoOiAxMnZ3O1xcclxcblxcclxcbiAgICAmX3NoaXAge1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgY3Vyc29yOiBncmFiO1xcclxcblxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfY29udCB7XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudmVydGljYWwge1xcclxcbiAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRyYWdTdGFydCB7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcblxcclxcbiAgLmdhbWVPdmVyLWNvbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0FsZXhhbmRyaWEudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblwiLFwiJHN0cm9uZy1mb250OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuJGNyZWFtOiByZ2IoMjU1LCAyNDgsIDIzOSk7XFxyXFxuJGdyZXk6IHJnYigyMTgsIDIxOCwgMjE4KTtcXHJcXG4kcmVkOiByZ2IoMjU1LCA5NSwgOTUpO1xcclxcbiRyZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCA5NSwgOTUsIDAuNSk7XFxyXFxuJGJsdWU6IHJnYig3OSwgMTQ5LCAyNTUpO1xcclxcbiRibHVlLXRyYW5zcGFyZW50OiByZ2IoNzksIDE0OSwgMjU1LCAwLjUpO1xcclxcbiRoMS1zaXplOiAzcmVtO1xcclxcbiRoMi1zaXplOiAycmVtO1xcclxcbiRoMy1zaXplOiAxLjVyZW07XFxyXFxuJG91dGVyLXBhZGRpbmc6IDMwcHg7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCB7XHJcbiAgYXNzaWduQ2VsbFRvRHJhZyxcclxuICBkcmFnRW5kLFxyXG4gIGRyYWdPdmVyLFxyXG4gIGRyYWdTdGFydCxcclxuICBkcm9wLFxyXG59IGZyb20gXCIuL2RyYWdfbl9kcm9wXCI7XHJcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRfbG9nb1wiKS5zcmMgPSBsb2dvO1xyXG5cclxuZnVuY3Rpb24gcmV0dXJuQm9hcmQocGxheWVyKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkLmNsYXNzTGlzdCA9IHBsYXllci5BSSA/IFwiYm9hcmQtMlwiIDogXCJib2FyZC0xXCI7XHJcbiAgYm9hcmQucGxheWVyID0gcGxheWVyO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IHUgPSAwOyB1IDwgMTA7IHUrKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBwbGF5ZXIuQUkgPyBcImNlbGwtMlwiIDogXCJjZWxsLTFcIjtcclxuICAgICAgY2VsbC5pZCA9IGAke3BsYXllci5BSSA/IGAyLSR7aX0tJHt1fWAgOiBgMS0ke2l9LSR7dX1gfWA7XHJcbiAgICAgIGJvYXJkLmFwcGVuZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9hcmQoYm9hcmQpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQtJHtib2FyZH1gKS5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUJvYXJkKGJvYXJkKSB7XHJcbiAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJvYXJkKGJvYXJkKSB7XHJcbiAgZm9yIChsZXQgeiA9IDA7IHogPCAxMDsgeisrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2JvYXJkfS0ke3p9LSR7eH1gKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBgY2VsbC0ke2JvYXJkfWA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTaGlwcyhwMSkge1xyXG4gIGZvciAobGV0IHogPSAwOyB6IDwgMTA7IHorKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDEtJHt6fS0ke3h9YCk7XHJcbiAgICAgIGNvbnN0IGNlbGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDItJHt6fS0ke3h9YCk7XHJcbiAgICAgIGNlbGwyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJBdHRhY2spO1xyXG4gICAgICBpZiAocDEuZ2FtZWJvYXJkLmJvYXJkW3pdW3hdLnNoaXApIHtcclxuICAgICAgICBjZWxsMS5jbGFzc0xpc3QuYWRkKFwic2hpcF9mcmllbmRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbigpIHtcclxuICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzaGlwNUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNoaXAzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2hpcDJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzaGlwNSA9IHJldHVybkRyYWdnYWJsZVNoaXAoNSk7XHJcbiAgY29uc3Qgc2hpcDMgPSByZXR1cm5EcmFnZ2FibGVTaGlwKDMpO1xyXG4gIGNvbnN0IHNoaXAyID0gcmV0dXJuRHJhZ2dhYmxlU2hpcCgyKTtcclxuICBjb25zdCBzaGlwNVF1YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IHNoaXAzUXVhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3Qgc2hpcDJRdWFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBzaGlwNVF1YW50LnRleHRDb250ZW50ID0gXCJ4MlwiO1xyXG4gIHNoaXAzUXVhbnQudGV4dENvbnRlbnQgPSBcIngyXCI7XHJcbiAgc2hpcDJRdWFudC50ZXh0Q29udGVudCA9IFwieDJcIjtcclxuICBzaGlwNVF1YW50LmlkID0gXCJzaGlwNVwiO1xyXG4gIHNoaXAzUXVhbnQuaWQgPSBcInNoaXAzXCI7XHJcbiAgc2hpcDJRdWFudC5pZCA9IFwic2hpcDJcIjtcclxuICBjb250LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25cIik7XHJcbiAgc2hpcDVDb250LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25fY29udFwiKTtcclxuICBzaGlwM0NvbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbl9jb250XCIpO1xyXG4gIHNoaXAyQ29udC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uX2NvbnRcIik7XHJcblxyXG4gIHNoaXA1Q29udC5hcHBlbmQoc2hpcDUsIHNoaXA1UXVhbnQpO1xyXG4gIHNoaXAzQ29udC5hcHBlbmQoc2hpcDMsIHNoaXAzUXVhbnQpO1xyXG4gIHNoaXAyQ29udC5hcHBlbmQoc2hpcDIsIHNoaXAyUXVhbnQpO1xyXG4gIGNvbnQuYXBwZW5kKHNoaXA1Q29udCwgc2hpcDNDb250LCBzaGlwMkNvbnQpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmQoY29udCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGlvblwiKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU3RhcnQocGxheWVyLCBBSSkge1xyXG4gIGNvbnN0IGJvYXJkMSA9IHJldHVybkJvYXJkKHBsYXllcik7XHJcbiAgY29uc3QgYm9hcmQyID0gcmV0dXJuQm9hcmQoQUkpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgY29uc3QgYm9hcmQxQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYm9hcmQyQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbmFtZUFJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBbYnV0dG9uQ29udCwgc3RhcnRCdG4sIHJhbmRvbUJ0biwgcmVzZXRCdG5dID0gcmV0dXJuQnV0dG9ucygpO1xyXG4gIGNvbnN0IFtpbnB1dENvbnQsIG5hbWVJbnB1dCwgbmFtZUxhYmxlLCBuYW1lRXJyb3JdID0gcmV0dXJuTmFtZUlucHV0KCk7XHJcblxyXG4gIGJvYXJkMUNvbnQuY2xhc3NMaXN0LmFkZChcImJvYXJkQ29udFwiKTtcclxuICBib2FyZDJDb250LmNsYXNzTGlzdC5hZGQoXCJib2FyZENvbnRcIik7XHJcbiAgbmFtZUFJLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG5hbWVBSS50ZXh0Q29udGVudCA9IFwiQUlcIjtcclxuICBib2FyZDFDb250LmFwcGVuZChpbnB1dENvbnQsIGJvYXJkMSwgYnV0dG9uQ29udCk7XHJcbiAgYm9hcmQyQ29udC5hcHBlbmQobmFtZUFJLCBib2FyZDIpO1xyXG4gIG1haW4uYXBwZW5kKGJvYXJkMUNvbnQsIGJvYXJkMkNvbnQpO1xyXG4gIGhpZGVCb2FyZChib2FyZDJDb250KTtcclxuXHJcbiAgYm9hcmQxLnBsYXllciA9IHBsYXllcjtcclxuICBib2FyZDIucGxheWVyID0gQUk7XHJcblxyXG4gIGJvYXJkMS5jaGlsZE5vZGVzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZEJ1dHRvbkV2ZW50TGlzdGVuZXJzKHBsYXllciwgQUkpO1xyXG4gIHJlbmRlclNlbGVjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyTmFtZShuYW1lKSB7XHJcbiAgY29uc3QgbmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9pbnB1dFwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfbGFiZWxcIik7XHJcbiAgbGFiZWwucmVtb3ZlKCk7XHJcbiAgbmFtZUVsZW0uY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIGlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5hbWVFbGVtLCBpbnB1dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJOYW1lRXJyb3IoZXJyb3JFbGVtKSB7XHJcbiAgZXJyb3JFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlcnJvckVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0sIDI1MDApO1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuTmFtZUlucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbmFtZUxhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBuYW1lRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gIG5hbWVJbnB1dC5pZCA9IFwibmFtZVwiO1xyXG4gIG5hbWVMYWJsZS50ZXh0Q29udGVudCA9IFwiTmFtZTogXCI7XHJcbiAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJFbnRlciBhIHZhbGlkIG5hbWVcIjtcclxuICBuYW1lTGFibGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcclxuICBpbnB1dENvbnQuY2xhc3NMaXN0LmFkZChcImlucHV0X2NvbnRcIik7XHJcbiAgbmFtZUxhYmxlLmNsYXNzTGlzdC5hZGQoXCJpbnB1dF9sYWJlbFwiKTtcclxuICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0X2lucHV0XCIpO1xyXG4gIG5hbWVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaW5wdXRfZXJyb3JcIik7XHJcblxyXG4gIGlucHV0Q29udC5hcHBlbmQobmFtZUxhYmxlLCBuYW1lSW5wdXQsIG5hbWVFcnJvcik7XHJcblxyXG4gIHJldHVybiBbaW5wdXRDb250LCBuYW1lSW5wdXQsIG5hbWVMYWJsZSwgbmFtZUVycm9yXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuQnV0dG9ucygpIHtcclxuICBjb25zdCBidXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGJ1dHRvbkNvbnQuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250XCIpO1xyXG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIiwgXCJzdGFydFwiKTtcclxuICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiLCBcInJhbmRvbVwiKTtcclxuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwicmVzZXRcIik7XHJcblxyXG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XHJcbiAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcclxuICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXQgQm9hcmRcIjtcclxuICBidXR0b25Db250LmFwcGVuZChzdGFydEJ0biwgcmVzZXRCdG4sIHJhbmRvbUJ0bik7XHJcblxyXG4gIHJldHVybiBbYnV0dG9uQ29udCwgc3RhcnRCdG4sIHJhbmRvbUJ0biwgcmVzZXRCdG5dO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJHYW1lT3ZlcihhdHRhY2tlcikge1xyXG4gIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGgxLnRleHRDb250ZW50ID0gYEdhbWUgT3ZlciFgO1xyXG4gIGgyLnRleHRDb250ZW50ID0gYCR7YXR0YWNrZXIubmFtZX0gd29uYDtcclxuICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcclxuICBiZy5jbGFzc0xpc3QuYWRkKFwiYmdcIik7XHJcbiAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lT3Zlci1jb250XCIpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGgxLCBoMik7XHJcbiAgYmcuYXBwZW5kKGNvbnRhaW5lciwgcGxheUFnYWluKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmQoYmcpO1xyXG5cclxuICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgaW5pdEdhbWUoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQmFja2dyb3VuZCgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25FdmVudExpc3RlbmVycyhwbGF5ZXIsIEFJKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XHJcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XHJcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0XCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfaW5wdXRcIik7XHJcbiAgY29uc3QgbmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9lcnJvclwiKTtcclxuXHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybiBkaXNwbGF5UGxheWVyTmFtZUVycm9yKG5hbWVFcnJvcik7XHJcblxyXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgIHBsYXllci5uYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBtYWluLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcclxuICAgICAgZGlzcGxheVBsYXllck5hbWUobmFtZUlucHV0LnZhbHVlKTtcclxuICAgICAgc2hvd0JvYXJkKFwiMlwiKTtcclxuICAgICAgc3RhcnRHYW1lKHBsYXllciwgQUkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllci5nYW1lYm9hcmQucmFuZG9tRmxlZXQoKTtcclxuICAgIGNsZWFyQm9hcmQoXCIxXCIpO1xyXG4gICAgcmVuZGVyU2hpcHMocGxheWVyKTtcclxuICB9KTtcclxuXHJcbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBsYXllci5nYW1lYm9hcmQuY2xlYXJCb2FyZCgpO1xyXG4gICAgY2xlYXJCb2FyZChcIjFcIik7XHJcbiAgICByZW1vdmVTZWxlY3Rpb24oKTtcclxuICAgIHJlbmRlclNlbGVjdGlvbigpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVCdXR0b25zKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uXCIpLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLnJlbW92ZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc2VydmVkU3BhY2VzKCkge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0xXCIpO1xyXG4gIGNvbnN0IHBsYXllciA9IGJvYXJkLnBsYXllcjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IDEwOyB1KyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAxLSR7aX0tJHt1fWApO1xyXG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXVt1XS5yZXNlcnZlZCkgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUmVzZXJ2ZWRTcGFjZXMoKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIik7XHJcbiAgY29uc3QgcGxheWVyID0gYm9hcmQucGxheWVyO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IHUgPSAwOyB1IDwgMTA7IHUrKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDEtJHtpfS0ke3V9YCk7XHJcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW3VdLnJlc2VydmVkKVxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInJlc2VydmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuRHJhZ2dhYmxlU2hpcChsZW5ndGgpIHtcclxuICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25fc2hpcFwiKTtcclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuICB9KTtcclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmQpO1xyXG4gIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNlbGwuc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLTFcIik7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2ZyaWVuZFwiKTtcclxuICAgIGNlbGwuaWQgPSBgJHtpfS0ke2xlbmd0aH1gO1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzc2lnbkNlbGxUb0RyYWcpO1xyXG5cclxuICAgIHNoaXAuYXBwZW5kKGNlbGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoaXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllckF0dGFjayhjbGljaykge1xyXG4gIGNvbnN0IGMgPSBjbGljay50YXJnZXQuaWQuc3BsaXQoXCItXCIpO1xyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0xXCIpLnBsYXllcjtcclxuICBjb25zdCBBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMlwiKS5wbGF5ZXI7XHJcbiAgY29uc3QgeSA9IGNbMV07XHJcbiAgY29uc3QgeCA9IGNbMl07XHJcblxyXG4gIGlmIChwMSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgaWYgKHAxLnR1cm4gPT09IGZhbHNlKSByZXR1cm47XHJcbiAgaWYgKEFJLmdhbWVib2FyZC5oYXNCZWVuSGl0KFt5LCB4XSkgPT09IHRydWUpIHJldHVybjtcclxuXHJcbiAgY2hhbmdlQ2VsbFN0bHllKFtcIjJcIiwgeSwgeF0sIEFJLCBjbGljay50YXJnZXQpO1xyXG4gIHAxLmF0dGFjayhbeSwgeF0sIEFJLmdhbWVib2FyZCk7XHJcbiAgcDEudHVybiA9IGZhbHNlO1xyXG4gIGlmIChBSS5nYW1lYm9hcmQuaXNHYW1lT3ZlcigpKSByZXR1cm4gcmVuZGVyR2FtZU92ZXIocDEpO1xyXG4gIHNldFRpbWVvdXQoYWlBdHRhY2ssIDYwMCwgcDEsIEFJKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWlBdHRhY2socDEsIEFJKSB7XHJcbiAgbGV0IFt5LCB4XSA9IHAxLmdhbWVib2FyZC5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gIHdoaWxlIChwMS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeSwgeF0pID09PSBmYWxzZSkge1xyXG4gICAgW3ksIHhdID0gcDEuZ2FtZWJvYXJkLnJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG4gIGNoYW5nZUNlbGxTdGx5ZShbXCIxXCIsIHksIHhdLCBwMSk7XHJcbiAgaWYgKHAxLmdhbWVib2FyZC5pc0dhbWVPdmVyKCkpIHJldHVybiByZW5kZXJHYW1lT3ZlcihBSSk7XHJcbiAgcDEudHVybiA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNlbGxTdGx5ZShjLCBhdHRhY2tlZCkge1xyXG4gIGNvbnN0IGJvYXJkID0gY1swXTtcclxuICBjb25zdCB5ID0gY1sxXTtcclxuICBjb25zdCB4ID0gY1syXTtcclxuXHJcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2JvYXJkfS0ke3l9LSR7eH1gKTtcclxuICBpZiAoYXR0YWNrZWQuZ2FtZWJvYXJkLmhhc1NoaXAoW3ksIHhdKSkge1xyXG4gICAgYXR0YWNrZWQuQUlcclxuICAgICAgPyBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2VuZW15X2hpdFwiKVxyXG4gICAgICA6IGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBfZnJpZW5kX2hpdFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlfaGl0XCIpO1xyXG4gICAgY29uc3QgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYXJrLmNsYXNzTGlzdC5hZGQoXCJtYXJrXCIpO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIsIEFJKSB7XHJcbiAgQUkuZ2FtZWJvYXJkLnJhbmRvbUZsZWV0KCk7XHJcbiAgcmVuZGVyU2hpcHMocGxheWVyKTtcclxuICByZW1vdmVCdXR0b25zKCk7XHJcbiAgcmVtb3ZlU2VsZWN0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIHJlbW92ZUJhY2tncm91bmQoKTtcclxuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWFpbi5zdHlsZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgcmV0dXJuQm9hcmQsXHJcbiAgcmVuZGVyU3RhcnQsXHJcbiAgaGlkZUJvYXJkLFxyXG4gIHJlbmRlckdhbWVPdmVyLFxyXG4gIHJlbmRlclNoaXBzLFxyXG4gIHNob3dSZXNlcnZlZFNwYWNlcyxcclxuICBoaWRlUmVzZXJ2ZWRTcGFjZXMsXHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlclNoaXBzLCBzaG93UmVzZXJ2ZWRTcGFjZXMsIGhpZGVSZXNlcnZlZFNwYWNlcyB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcclxuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5jZWxsKTtcclxuICBzaG93UmVzZXJ2ZWRTcGFjZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduQ2VsbFRvRHJhZyhlKSB7XHJcbiAgZS5wYXRoWzFdLmNlbGwgPSBlLnRhcmdldC5pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VuZChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGhpZGVSZXNlcnZlZFNwYWNlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm9wKGUpIHtcclxuICBoaWRlUmVzZXJ2ZWRTcGFjZXMoKTtcclxuXHJcbiAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IGlzVmVydGljYWwgPSBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcbiAgY29uc3QgW2NlbGxOdW0sIGxlbmd0aF0gPSBpZC5zcGxpdChcIi1cIik7XHJcbiAgY29uc3QgW2JvYXJkLCB5LCB4XSA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcclxuICBjb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIikucGxheWVyO1xyXG5cclxuICBpZiAoY2FuQmVQbGFjZWQocGxheWVyLCArbGVuZ3RoKSkge1xyXG4gICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFsreSAtIGNlbGxOdW0sICt4XSwgK2xlbmd0aCwgdHJ1ZSkgIT09IGZhbHNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNoYW5nZU51bWJlck9mU2hpcHNMZWZ0KCtsZW5ndGgsIHBhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbK3ksICt4IC0gY2VsbE51bV0sICtsZW5ndGgsIGZhbHNlKSAhPT0gZmFsc2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2hhbmdlTnVtYmVyT2ZTaGlwc0xlZnQoK2xlbmd0aCwgcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2hpcHMocGxheWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuQmVQbGFjZWQocGxheWVyLCBsZW5ndGgpIHtcclxuICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5udW1iZXJPZlNwZWNpZmljU2hpcHMobGVuZ3RoKSA8IDIgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU51bWJlck9mU2hpcHNMZWZ0KGxlbmd0aCwgc2hpcCkge1xyXG4gIGNvbnN0IG51bWJlckxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2hpcCR7bGVuZ3RofWApO1xyXG4gIGNvbnN0IHRleHQgPSBBcnJheS5mcm9tKG51bWJlckxlZnQudGV4dENvbnRlbnQpO1xyXG4gIG51bWJlckxlZnQudGV4dENvbnRlbnQgPSBgeCR7dGV4dFsxXSAtIDF9YDtcclxuICBpZiAodGV4dFsxXSAtIDEgPT09IDApIGJsb2NrUm90YXRpb24oc2hpcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJsb2NrUm90YXRpb24oc2hpcCkge1xyXG4gIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsXCIpO1xyXG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZHJhZ1N0YXJ0LCBhc3NpZ25DZWxsVG9EcmFnLCBkcmFnT3ZlciwgZHJvcCwgZHJhZ0VuZCB9O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyU3RhcnQsIGhpZGVCb2FyZCwgcmVuZGVyR2FtZU92ZXIgfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIlwiKTtcclxuICBjb25zdCBBSSA9IG5ldyBQbGF5ZXIoXCJBSVwiLCB0cnVlKTtcclxuICByZW5kZXJTdGFydChwMSwgQUkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0R2FtZSB9O1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgcm93LnB1c2goe1xyXG4gICAgICAgICAgaGl0OiBmYWxzZSxcclxuICAgICAgICAgIHNoaXA6IGZhbHNlLFxyXG4gICAgICAgICAgcmVzZXJ2ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzU2hpcChjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5zaGlwIGluc3RhbmNlb2YgU2hpcCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG51bWJlck9mU3BlY2lmaWNTaGlwcyhsZW5ndGgpIHtcclxuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAubGVuZ3RoID09PSBsZW5ndGg7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnJheS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkQ29vcmRpbmF0ZShjKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtjWzBdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gdGhpcy5ib2FyZFtjWzBdXVtjWzFdXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZVxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbaV0uZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGlmIChjZWxsLmhpdCkgaGl0cysrO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBoaXRzID09PSAxMDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYXNCZWVuSGl0KGMpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkW2NbMF1dW2NbMV1dLmhpdCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzUmVzZXJ2ZWQoYykge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbY1swXV1bY1sxXV0ucmVzZXJ2ZWQgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0dhbWVPdmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgI3Jlc2VydmVTcGFjZShjKSB7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG4gICAgLy8gcmVzZXJ2ZXMgc3BhY2UgYXJvdW5kIGEgY29vcmRpbmF0ZVxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAxLCB4XSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSArIDFdW3hdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCArIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCArIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3ldW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHggKyAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeSAtIDFdW3ggKyAxXS5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSAtIDEsIHhdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5IC0gMV1beF0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgLSAxLCB4IC0gMV0pKVxyXG4gICAgICB0aGlzLmJvYXJkW3kgLSAxXVt4IC0gMV0ucmVzZXJ2ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHggLSAxXSkpXHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5ICsgMSwgeCAtIDFdKSlcclxuICAgICAgdGhpcy5ib2FyZFt5ICsgMV1beCAtIDFdLnJlc2VydmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsZWFyQm9hcmQoKSB7XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgIHJlc2VydmVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVyblJhbmRvbUNvb3JkaW5hdGVzKCkge1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICByZXR1cm4gW3ksIHhdO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKGMsIGxlbmd0aCwgdmVydGljYWwgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICBjb25zdCB5ID0gY1swXTtcclxuICAgIGNvbnN0IHggPSBjWzFdO1xyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3kgKyAoc2hpcC5sZW5ndGggLSAxKSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShbeSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNTaGlwKFt5ICsgaSwgeF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZChbeSArIGksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XS5zaGlwID0gc2hpcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuI3Jlc2VydmVTcGFjZShbeSArIGksIHhdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKFt5LCB4ICsgKHNoaXAubGVuZ3RoIC0gMSldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGUoW3ksIHhdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2hpcChbeSwgeCArIGldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWQoW3ksIHggKyBpXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuI3Jlc2VydmVTcGFjZShbeSwgeCArIGldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayhjKSB7XHJcbiAgICBpZiAodGhpcy5oYXNCZWVuSGl0KGMpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5oaXQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuaGFzU2hpcChjKSkgdGhpcy5ib2FyZFtjWzBdXVtjWzFdXS5zaGlwLmhpdCgpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tRmxlZXQoKSB7XHJcbiAgICB0aGlzLmNsZWFyQm9hcmQoKTtcclxuICAgIC8vIHBsYWNlIDIgc2hpcHMgbGVuZ3RoIG9mIDNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xyXG4gICAgICBsZXQgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB3aGlsZSAodGhpcy5wbGFjZVNoaXAoW3ksIHhdLCAzLCAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpID09PSBmYWxzZSkge1xyXG4gICAgICAgIFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICAvL3BsYWNlIDIgc2hpcHMgbGVuZ3RoIG9mIDJcclxuICAgIGZvciAobGV0IHUgPSAwOyB1IDw9IDI7IHUrKykge1xyXG4gICAgICBsZXQgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB3aGlsZSAodGhpcy5wbGFjZVNoaXAoW3ksIHhdLCAyLCAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpID09PSBmYWxzZSkge1xyXG4gICAgICAgIFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICB1Kys7XHJcbiAgICB9XHJcbiAgICAvL3BsYWNlIDIgc2hpcHMgbGVuZ3RoIG9mIDVcclxuICAgIGZvciAobGV0IHogPSAwOyB6IDw9IDI7IHorKykge1xyXG4gICAgICBsZXQgW3ksIHhdID0gdGhpcy5yZXR1cm5SYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICB3aGlsZSAodGhpcy5wbGFjZVNoaXAoW3ksIHhdLCA1LCAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpID09PSBmYWxzZSkge1xyXG4gICAgICAgIFt5LCB4XSA9IHRoaXMucmV0dXJuUmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgfVxyXG4gICAgICB6Kys7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIEFJID0gZmFsc2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLkFJID0gQUk7XHJcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIHRoaXMudHVybiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhdHRhY2soYywgZ2FtZWJvYXJkKSB7XHJcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NbMF0sIGNbMV1dKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJvYXJkcyB9IGZyb20gXCIuL3NjcmlwdF9tb2R1bGVzL2RvbVwiO1xyXG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL3NjcmlwdF9tb2R1bGVzL2dhbWVcIjtcclxuXHJcbmluaXRHYW1lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==