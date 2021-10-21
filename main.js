/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  background: white;\n  color: #212529;\n  margin: 0px;\n  min-height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\np {\n  margin: 0;\n}\n\nheader {\n  background: #db4c3f;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 45px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n@media only screen and (max-width: 660px) {\n  header {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\n.menuTitle {\n  font-weight: 500;\n}\n\n.menuButton {\n  cursor: pointer;\n  width: 40px;\n}\n\n.menuButton:hover {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.menuHide {\n  display: none;\n}\n\n.addButton {\n  color: #212529;\n  cursor: pointer;\n  border: 1px solid #212529;\n  padding: 5px;\n  border-radius: 10px;\n  font-weight: 400;\n}\n\n.addButton:hover {\n  background-color: #212529;\n  border: 1px solid #db4c3f;\n  color: #db4c3f;\n}\n\n.menuContainer {\n  background-color: #f7f7f7;\n  height: calc(100vh - 45px);\n  padding: 40px;\n}\n\n@media only screen and (max-width: 750px) {\n  .menuContainer {\n    position: absolute;\n    z-index: 6;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n}\n\n.menuHeader {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.projectTitle {\n  cursor: pointer;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.currentProject {\n  border-radius: 10px;\n  background: #ececec;\n}\n\n.addProjectButton {\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0;\n  margin-left: 5px;\n  font-weight: 400;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.addProjectButton:hover {\n  background: #db4c3fe3;\n}\n\n.newProjectContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainerEdit {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainerDelete {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formHide {\n  display: none;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.mainTitle {\n  padding-left: 10%;\n  position: relative;\n  font-weight: 400;\n}\n\n.deleteProject {\n  position: absolute;\n  left: calc(10% - 25px);\n  top: 0px;\n  z-index: 5;\n  cursor: pointer;\n  font-weight: 300;\n  color: #db4c3f;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.task {\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  padding-left: 15%;\n  padding-right: 15%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid gainsboro;\n  margin: 5px;\n  align-items: flex-start;\n  margin: 15px;\n  margin-bottom: 0;\n  padding-bottom: 15px;\n}\n\n.taskDate {\n  position: absolute;\n  right: 0px;\n}\n\n.completeMarker {\n  position: absolute;\n  left: calc(15% - 20px);\n  z-index: 5;\n}\n\n.taskDescription {\n}\n\n.descriptionHide {\n  display: none;\n}\n\n.floatingTaskAdd {\n  padding: 10px;\n  color: white;\n  position: absolute;\n  background: #db4c3f;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.floatingTaskAdd:hover {\n  transform: scale(1.05);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.description {\n  width: 100%;\n  height: 100px;\n  padding: 15px;\n  padding-left: 0;\n}\n\n.editButton {\n  position: absolute;\n  left: calc(15% - 35px);\n  top: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  background: white;\n  color: #212529;\n  margin: 0px;\n  min-height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\np {\n  margin: 0;\n}\n\nheader {\n  background: #db4c3f;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 45px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n@media only screen and (max-width: 660px) {\n  header {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\n.menuTitle {\n  font-weight: 500;\n}\n\n.menuButton {\n  cursor: pointer;\n  width: 40px;\n}\n\n.menuButton:hover {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.menuHide {\n  display: none;\n}\n\n.addButton {\n  color: #212529;\n  cursor: pointer;\n  border: 1px solid #212529;\n  padding: 5px;\n  border-radius: 10px;\n  font-weight: 400;\n}\n\n.addButton:hover {\n  background-color: #212529;\n  border: 1px solid #db4c3f;\n  color: #db4c3f;\n}\n\n.menuContainer {\n  background-color: #f7f7f7;\n  height: calc(100vh - 45px);\n  padding: 40px;\n}\n\n@media only screen and (max-width: 750px) {\n  .menuContainer {\n    position: absolute;\n    z-index: 6;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n}\n\n.menuHeader {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.projectTitle {\n  cursor: pointer;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.currentProject {\n  border-radius: 10px;\n  background: #ececec;\n}\n\n.addProjectButton {\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0;\n  margin-left: 5px;\n  font-weight: 400;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.addProjectButton:hover {\n  background: #db4c3fe3;\n}\n\n.newProjectContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainerEdit {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formContainerDelete {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: lavender;\n}\n\n.formHide {\n  display: none;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.mainTitle {\n  padding-left: 10%;\n  position: relative;\n  font-weight: 400;\n}\n\n.deleteProject {\n  position: absolute;\n  left: calc(10% - 25px);\n  top: 0px;\n  z-index: 5;\n  cursor: pointer;\n  font-weight: 300;\n  color: #db4c3f;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.task {\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  padding-left: 15%;\n  padding-right: 15%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid gainsboro;\n  margin: 5px;\n  align-items: flex-start;\n  margin: 15px;\n  margin-bottom: 0;\n  padding-bottom: 15px;\n}\n\n.taskDate {\n  position: absolute;\n  right: 0px;\n}\n\n.completeMarker {\n  position: absolute;\n  left: calc(15% - 20px);\n  z-index: 5;\n}\n\n.taskDescription {\n}\n\n.descriptionHide {\n  display: none;\n}\n\n.floatingTaskAdd {\n  padding: 10px;\n  color: white;\n  position: absolute;\n  background: #db4c3f;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.floatingTaskAdd:hover {\n  transform: scale(1.05);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.description {\n  width: 100%;\n  height: 100px;\n  padding: 15px;\n  padding-left: 0;\n}\n\n.editButton {\n  position: absolute;\n  left: calc(15% - 35px);\n  top: 20px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/application-logic.js":
/*!**********************************!*\
  !*** ./src/application-logic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applicationLogic": () => (/* binding */ applicationLogic)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const applicationLogic = (function () {
  const submit = document.querySelector("#taskSubmit");

  let myArrays = [
    [
      { name: "Home" },
      { title: "task1", description: "description1", date: "2021-10-27" },
      { title: "task2", description: "description2", date: "2021-10-27" },
    ],

    [
      { name: "New Project 1" },
      { title: "1task1", description: "description1", date: "2021-10-27" },
      { title: "2task", description: "description2", date: "2021-10-27" },
    ],
    [
      { name: "New Project 2" },
      { title: "1task2", description: "description1", date: "2021-10-27" },
      { title: "2task", description: "description2", date: "2021-10-27" },
    ],
    [
      { name: "New Project 3" },
      { title: "1task3", description: "description1", date: "2021-10-27" },
      { title: "2task", description: "description2", date: "2021-10-27" },
    ],
    [
      { name: "New Project 4" },
      { title: "1task4", description: "description1", date: "2021-10-27" },
      { title: "2task", description: "description2", date: "2021-10-27" },
    ],
  ];

  let currentProject = myArrays[0];

  const getTitle = () => {
    return document.querySelector("#title").value;
  };
  const getDescription = () => {
    return document.querySelector("#description").value;
  };
  const getDate = () => {
    return document.querySelector(".inputDueDate").value;
  };

  const getTitleEdit = () => {
    return document.querySelector("#titleEdit").value;
  };
  const getDescriptionEdit = () => {
    return document.querySelector("#descriptionEdit").value;
  };
  const getDateEdit = () => {
    return document.querySelector(".inputDueDateEdit").value;
  };

  let Task = class {
    constructor(title, description, date) {
      this.title = title;
      this.description = description;
      this.date = date;
    }
  };

  let Project = class {
    constructor(name) {
      this.name = name;
    }
  };

  const addTask = () => {
    currentProject.push(new Task(getTitle(), getDescription(), getDate()));
  };

  const deleteTask = (index) => {
    currentProject.splice(index, 1);
  };

  const editTask = (index) => {
    currentProject.splice(
      index,
      1,
      new Task(getTitleEdit(), getDescriptionEdit(), getDateEdit())
    );
  };

  const changeCurrentProject = (num) => {
    currentProject = myArrays[num];
  };

  const getCurrentProject = () => {
    return currentProject;
  };

  const getNewProjectName = () => {
    return document.querySelector("#projectName").value;
  };

  const addNewProject = () => {
    myArrays.push(new Array());
  };

  const addNewProjectName = () => {
    getCurrentProject().push(new Project(getNewProjectName()));
  };

  const deleteProject = () => {
    let location = myArrays.indexOf(currentProject);
    myArrays.splice(location, 1);
  };

  return {
    myArrays,
    getTitle,
    getDescription,
    currentProject,
    changeCurrentProject,
    addNewProject,
    getNewProjectName,
    getCurrentProject,
    addNewProjectName,
    addTask,
    deleteTask,
    editTask,
    deleteProject,
  };
})();


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _application_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-logic */ "./src/application-logic.js");




const menuHide = (function () {
  const hide = () => {
    menuContainer.classList.toggle("menuHide");
  };

  const menuBtn = document.querySelector(".menuButton");
  const menuContainer = document.querySelector(".menuContainer");
  menuBtn.addEventListener("click", hide);

  return {};
})();

const revealProjectAdd = (function () {
  const hide = () => {
    newProjectContainer.classList.toggle("formHide");
  };

  const addProjectBtn = document.querySelector(".addProjectButton");
  const newProjectContainer = document.querySelector(".newProjectContainer");
  addProjectBtn.addEventListener("click", hide);

  return {};
})();

const revealTaskAdd = (function () {
  const hide = () => {
    formContainer.classList.toggle("formHide");
  };

  const addBtn = document.querySelector(".addButton");
  const formContainer = document.querySelector(".formContainer");
  addBtn.addEventListener("click", hide);

  const floatingAddButton = document.querySelector(".floatingTaskAdd");
  floatingAddButton.addEventListener("click", hide);

  return {};
})();

const domControl = (function () {
  const taskContainer = document.querySelector(".taskContainer");
  const menuConainer = document.querySelector(".menuContainer");
  const defualtProject = document.querySelector(".defaultProject");
  let num = 0;
  let index = 0;

  const projectTitleDisplay = () => {
    num = 0;
    for (let i = 0; i < _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.myArrays.length; i++) {
      let h3 = document.createElement("h3");
      h3.classList.add("projectTitle");
      if (i == 0) {
        h3.classList.toggle("currentProject");
      }
      h3.id = num;
      num++;
      h3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.myArrays[i][0].name;
      h3.addEventListener("click", switchProjects);
      menuConainer.appendChild(h3);
    }
  };

  const clearTitleDisplay = () => {
    let projects = document.querySelectorAll(".projectTitle");
    projects.forEach((x) => x.remove());
  };

  const openDelete = () => {
    document.querySelector(".formContainerDelete").classList.toggle("formHide");
  };

  const display = () => {
    for (let i = 1; i < _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject().length; i++) {
      let p = document.createElement("p");
      p.id = i;
      p.classList.add("task");
      p.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].title;
      taskContainer.appendChild(p);
      p.addEventListener("click", revealDescription);
      let p2 = document.createElement("p");
      p2.classList.add("descriptionHide", "description");
      p2.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].description;
      p.appendChild(p2);
      let p3 = document.createElement("p");
      p3.classList.add("taskDate");
      p3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].date;
      p.appendChild(p3);
      let p4 = document.createElement("p");
      p4.classList.add("completeMarker");
      p4.innerHTML = "&times";
      p.appendChild(p4);
      p4.addEventListener("click", deleteTask);
      let p5 = document.createElement("p");
      p5.classList.add("descriptionHide", "editButton");
      p5.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z"/></svg>';
      p.appendChild(p5);
      p5.addEventListener("click", editTaskFormReveal);
      p5.addEventListener("click", editTaskStoreIndex);
    }
  };

  const clearDisplay = () => {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach((x) => x.remove());
  };

  const addTask = () => {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addTask();
    clearDisplay();
    display();
  };

  const deleteTask = (e) => {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.deleteTask(e.target.parentNode.id);
    clearDisplay();
    display();
  };

  const editTaskFormReveal = (e) => {
    document.querySelector(".formContainerEdit").classList.toggle("formHide");
  };

  const editTaskStoreIndex = (e) => {
    index = e.target.parentNode.id;
  };

  const editTask = () => {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.editTask(index);
    clearDisplay();
    display();
  };

  const addProject = () => {
    clearDisplay();
    let h3 = document.createElement("h3");
    h3.classList.add("projectTitle");
    h3.id = num;
    h3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getNewProjectName();
    menuConainer.appendChild(h3);
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addNewProject();
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(num);
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addNewProjectName(num);
    document.querySelector(".mainTitle").innerHTML =
      _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[0].name;
    h3.addEventListener("click", switchProjects);
    let div = document.createElement("div");
    div.classList.add("deleteProject");
    div.innerHTML = "&times";
    document.querySelector(".mainTitle").appendChild(div);
    div.addEventListener("click", openDelete);
    num++;
  };

  const switchProjects = (e) => {
    clearDisplay();
    document
      .querySelector(".currentProject")
      .classList.toggle("currentProject");
    e.target.classList.toggle("currentProject");
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(e.target.id);
    document.querySelector(".mainTitle").innerHTML = e.target.innerHTML;
    if (document.querySelector(".mainTitle").innerHTML == "Home") {
    } else {
      let div = document.createElement("div");
      div.classList.add("deleteProject");
      div.innerHTML = "&times";
      document.querySelector(".mainTitle").appendChild(div);
      div.addEventListener("click", openDelete);
    }
    display();
  };

  const deleteProject = () => {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.deleteProject();
    clearDisplay();
    clearTitleDisplay();
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(0);
    document.querySelector(".mainTitle").innerHTML = "Home";
    projectTitleDisplay();
    display();
  };

  const revealDescription = (e) => {
    e.target.children[0].classList.toggle("descriptionHide");
    e.target.children[3].classList.toggle("descriptionHide");
  };

  return {
    display,
    addTask,
    editTask,
    addProject,
    switchProjects,
    defualtProject,
    projectTitleDisplay,
    revealDescription,
    editTaskStoreIndex,
    clearTitleDisplay,
    deleteProject,
  };
})();

const taskAddReset = (function () {
  const submit = document.querySelector("#taskSubmit");
  const formContainer = document.querySelector(".formContainer");
  submit.addEventListener("click", domControl.addTask);
  const hide = () => {
    formContainer.classList.toggle("formHide");
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  };
  submit.addEventListener("click", hide);

  return {};
})();

const taskEditReset = (function () {
  const submit = document.querySelector("#taskSubmitEdit");
  const formContainer = document.querySelector(".formContainerEdit");
  submit.addEventListener("click", domControl.editTask);
  const hide = () => {
    formContainer.classList.toggle("formHide");
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  };
  submit.addEventListener("click", hide);

  return {};
})();

const projectAddReset = (function () {
  const submit = document.querySelector("#projectSubmit");
  const newProjectContainer = document.querySelector(".newProjectContainer");
  submit.addEventListener("click", domControl.addProject);
  const hide = () => {
    newProjectContainer.classList.toggle("formHide");
    document.querySelector("#projectName").value = "";
  };
  submit.addEventListener("click", hide);

  return {};
})();

const projectDelete = (function () {
  const submit = document.querySelector("#deleteSubmit");
  const deleteProjectContainer = document.querySelector(".formContainerDelete");
  submit.addEventListener("click", domControl.deleteProject);
  const hide = () => {
    deleteProjectContainer.classList.toggle("formHide");
  };
  submit.addEventListener("click", hide);

  return {};
})();

domControl.projectTitleDisplay();
domControl.display();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE1BQU0sT0FBTyxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLDRCQUE0QiwyQkFBMkIsR0FBRyxpQkFB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LENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgfVxcbn1cXG5cXG4ubWVudVRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51QnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudUJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OSk7XFxufVxcblxcbi5tZW51SGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGI0YzNmO1xcbiAgY29sb3I6ICNkYjRjM2Y7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXB4KTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5tZW51Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA2O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICB9XFxufVxcblxcbi5tZW51SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY3VycmVudFByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RiNGMzZmUzO1xcbn1cXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZDogbGF2ZW5kZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJFZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJEZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xcbn1cXG5cXG4uZm9ybUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMjVweCk7XFxuICB0b3A6IDBweDtcXG4gIHotaW5kZXg6IDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNkYjRjM2Y7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxNSUgLSAyMHB4KTtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uZGVzY3JpcHRpb25IaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mbG9hdGluZ1Rhc2tBZGQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZsb2F0aW5nVGFza0FkZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTUlIC0gMzVweCk7XFxuICB0b3A6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCO2dFQUM4RDtBQUNoRTs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7dUNBQ21DO0lBQ25DO3VDQUNtQztJQUNuQywyRUFBMkU7RUFDN0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCO3FDQUNtQztFQUNuQztxQ0FDbUM7RUFDbkMsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgfVxcbn1cXG5cXG4ubWVudVRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51QnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudUJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OSk7XFxufVxcblxcbi5tZW51SGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGI0YzNmO1xcbiAgY29sb3I6ICNkYjRjM2Y7XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXB4KTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5tZW51Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA2O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICB9XFxufVxcblxcbi5tZW51SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY3VycmVudFByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RiNGMzZmUzO1xcbn1cXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZDogbGF2ZW5kZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJFZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJEZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xcbn1cXG5cXG4uZm9ybUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW5UaXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMjVweCk7XFxuICB0b3A6IDBweDtcXG4gIHotaW5kZXg6IDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNkYjRjM2Y7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYygxNSUgLSAyMHB4KTtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uZGVzY3JpcHRpb25IaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mbG9hdGluZ1Rhc2tBZGQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZsb2F0aW5nVGFza0FkZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuICAgIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoMTUlIC0gMzVweCk7XFxuICB0b3A6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjb25zdCBhcHBsaWNhdGlvbkxvZ2ljID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrU3VibWl0XCIpO1xuXG4gIGxldCBteUFycmF5cyA9IFtcbiAgICBbXG4gICAgICB7IG5hbWU6IFwiSG9tZVwiIH0sXG4gICAgICB7IHRpdGxlOiBcInRhc2sxXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uMVwiLCBkYXRlOiBcIjIwMjEtMTAtMjdcIiB9LFxuICAgICAgeyB0aXRsZTogXCJ0YXNrMlwiLCBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbjJcIiwgZGF0ZTogXCIyMDIxLTEwLTI3XCIgfSxcbiAgICBdLFxuXG4gICAgW1xuICAgICAgeyBuYW1lOiBcIk5ldyBQcm9qZWN0IDFcIiB9LFxuICAgICAgeyB0aXRsZTogXCIxdGFzazFcIiwgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24xXCIsIGRhdGU6IFwiMjAyMS0xMC0yN1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIjJ0YXNrXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uMlwiLCBkYXRlOiBcIjIwMjEtMTAtMjdcIiB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgeyBuYW1lOiBcIk5ldyBQcm9qZWN0IDJcIiB9LFxuICAgICAgeyB0aXRsZTogXCIxdGFzazJcIiwgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24xXCIsIGRhdGU6IFwiMjAyMS0xMC0yN1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIjJ0YXNrXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uMlwiLCBkYXRlOiBcIjIwMjEtMTAtMjdcIiB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgeyBuYW1lOiBcIk5ldyBQcm9qZWN0IDNcIiB9LFxuICAgICAgeyB0aXRsZTogXCIxdGFzazNcIiwgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24xXCIsIGRhdGU6IFwiMjAyMS0xMC0yN1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIjJ0YXNrXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uMlwiLCBkYXRlOiBcIjIwMjEtMTAtMjdcIiB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgeyBuYW1lOiBcIk5ldyBQcm9qZWN0IDRcIiB9LFxuICAgICAgeyB0aXRsZTogXCIxdGFzazRcIiwgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24xXCIsIGRhdGU6IFwiMjAyMS0xMC0yN1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIjJ0YXNrXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uMlwiLCBkYXRlOiBcIjIwMjEtMTAtMjdcIiB9LFxuICAgIF0sXG4gIF07XG5cbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbXlBcnJheXNbMF07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICB9O1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0RHVlRGF0ZVwiKS52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZUVkaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVFZGl0XCIpLnZhbHVlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbkVkaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25FZGl0XCIpLnZhbHVlO1xuICB9O1xuICBjb25zdCBnZXREYXRlRWRpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dER1ZURhdGVFZGl0XCIpLnZhbHVlO1xuICB9O1xuXG4gIGxldCBUYXNrID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IFByb2plY3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC5wdXNoKG5ldyBUYXNrKGdldFRpdGxlKCksIGdldERlc2NyaXB0aW9uKCksIGdldERhdGUoKSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgY3VycmVudFByb2plY3Quc3BsaWNlKFxuICAgICAgaW5kZXgsXG4gICAgICAxLFxuICAgICAgbmV3IFRhc2soZ2V0VGl0bGVFZGl0KCksIGdldERlc2NyaXB0aW9uRWRpdCgpLCBnZXREYXRlRWRpdCgpKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSAobnVtKSA9PiB7XG4gICAgY3VycmVudFByb2plY3QgPSBteUFycmF5c1tudW1dO1xuICB9O1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBnZXROZXdQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIG15QXJyYXlzLnB1c2gobmV3IEFycmF5KCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3ROYW1lID0gKCkgPT4ge1xuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucHVzaChuZXcgUHJvamVjdChnZXROZXdQcm9qZWN0TmFtZSgpKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgbG9jYXRpb24gPSBteUFycmF5cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBteUFycmF5cy5zcGxpY2UobG9jYXRpb24sIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbXlBcnJheXMsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgY3VycmVudFByb2plY3QsXG4gICAgY2hhbmdlQ3VycmVudFByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdCxcbiAgICBnZXROZXdQcm9qZWN0TmFtZSxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICBhZGROZXdQcm9qZWN0TmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZWRpdFRhc2ssXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYXBwbGljYXRpb25Mb2dpYyB9IGZyb20gXCIuL2FwcGxpY2F0aW9uLWxvZ2ljXCI7XG5cbmNvbnN0IG1lbnVIaWRlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51SGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnV0dG9uXCIpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51Q29udGFpbmVyXCIpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlKTtcblxuICByZXR1cm4ge307XG59KSgpO1xuXG5jb25zdCByZXZlYWxQcm9qZWN0QWRkID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtSGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0Q29udGFpbmVyXCIpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlKTtcblxuICByZXR1cm4ge307XG59KSgpO1xuXG5jb25zdCByZXZlYWxUYXNrQWRkID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtSGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJ1dHRvblwiKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNvbnRhaW5lclwiKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlKTtcblxuICBjb25zdCBmbG9hdGluZ0FkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxvYXRpbmdUYXNrQWRkXCIpO1xuICBmbG9hdGluZ0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuY29uc3QgZG9tQ29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb25haW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUNvbnRhaW5lclwiKTtcbiAgY29uc3QgZGVmdWFsdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHRQcm9qZWN0XCIpO1xuICBsZXQgbnVtID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIG51bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWNhdGlvbkxvZ2ljLm15QXJyYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBoMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBoMy5jbGFzc0xpc3QudG9nZ2xlKFwiY3VycmVudFByb2plY3RcIik7XG4gICAgICB9XG4gICAgICBoMy5pZCA9IG51bTtcbiAgICAgIG51bSsrO1xuICAgICAgaDMuaW5uZXJIVE1MID0gYXBwbGljYXRpb25Mb2dpYy5teUFycmF5c1tpXVswXS5uYW1lO1xuICAgICAgaDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByb2plY3RzKTtcbiAgICAgIG1lbnVDb25haW5lci5hcHBlbmRDaGlsZChoMyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyVGl0bGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHgpID0+IHgucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5EZWxldGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ29udGFpbmVyRGVsZXRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtSGlkZVwiKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXBwbGljYXRpb25Mb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcC5pZCA9IGk7XG4gICAgICBwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgcC5pbm5lckhUTUwgPSBhcHBsaWNhdGlvbkxvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KClbaV0udGl0bGU7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsRGVzY3JpcHRpb24pO1xuICAgICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwMi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25IaWRlXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICBwMi5pbm5lckhUTUwgPSBhcHBsaWNhdGlvbkxvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KClbaV0uZGVzY3JpcHRpb247XG4gICAgICBwLmFwcGVuZENoaWxkKHAyKTtcbiAgICAgIGxldCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcDMuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlXCIpO1xuICAgICAgcDMuaW5uZXJIVE1MID0gYXBwbGljYXRpb25Mb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpW2ldLmRhdGU7XG4gICAgICBwLmFwcGVuZENoaWxkKHAzKTtcbiAgICAgIGxldCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcDQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlTWFya2VyXCIpO1xuICAgICAgcDQuaW5uZXJIVE1MID0gXCImdGltZXNcIjtcbiAgICAgIHAuYXBwZW5kQ2hpbGQocDQpO1xuICAgICAgcDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuICAgICAgbGV0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwNS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25IaWRlXCIsIFwiZWRpdEJ1dHRvblwiKTtcbiAgICAgIHA1LmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOCAxMy40NWwyLTIuMDIzdjQuNTczaC0ydi0yLjU1em0tMTEtNS40NWgxLjc0M2wxLjk3OC0yaC0zLjcyMXYyem0xLjM2MSAzLjIxNmwxMS4xMDMtMTEuMjE2IDQuNTM2IDQuNTM0LTExLjEwMiAxMS4yMTgtNS44OTggMS4yNDggMS4zNjEtNS43ODR6bTEuMzA2IDMuMTc2bDIuMjMtLjQ3MiA5LjI4MS05LjM3OC0xLjcwNy0xLjcwNy05LjI5MyA5LjM4OC0uNTExIDIuMTY5em0zLjMzMyA3LjYwOHYtMmgtNnYyaDZ6bS04LTJoLTN2LTJoLTJ2NGg1di0yem0xMy0ydjJoLTN2Mmg1di00aC0yem0tMTgtMmgydi00aC0ydjR6bTItNnYtMmgzdi0yaC01djRoMnpcIi8+PC9zdmc+JztcbiAgICAgIHAuYXBwZW5kQ2hpbGQocDUpO1xuICAgICAgcDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrRm9ybVJldmVhbCk7XG4gICAgICBwNS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tTdG9yZUluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICB0YXNrcy5mb3JFYWNoKCh4KSA9PiB4LnJlbW92ZSgpKTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGFwcGxpY2F0aW9uTG9naWMuYWRkVGFzaygpO1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGRpc3BsYXkoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrRm9ybVJldmVhbCA9IChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ29udGFpbmVyRWRpdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUhpZGVcIik7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2tTdG9yZUluZGV4ID0gKGUpID0+IHtcbiAgICBpbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5lZGl0VGFzayhpbmRleCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgaDMuaWQgPSBudW07XG4gICAgaDMuaW5uZXJIVE1MID0gYXBwbGljYXRpb25Mb2dpYy5nZXROZXdQcm9qZWN0TmFtZSgpO1xuICAgIG1lbnVDb25haW5lci5hcHBlbmRDaGlsZChoMyk7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5hZGROZXdQcm9qZWN0KCk7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5jaGFuZ2VDdXJyZW50UHJvamVjdChudW0pO1xuICAgIGFwcGxpY2F0aW9uTG9naWMuYWRkTmV3UHJvamVjdE5hbWUobnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5UaXRsZVwiKS5pbm5lckhUTUwgPVxuICAgICAgYXBwbGljYXRpb25Mb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpWzBdLm5hbWU7XG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByb2plY3RzKTtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRlbGV0ZVByb2plY3RcIik7XG4gICAgZGl2LmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluVGl0bGVcIikuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5EZWxldGUpO1xuICAgIG51bSsrO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFByb2plY3RzID0gKGUpID0+IHtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFByb2plY3RcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY3VycmVudFByb2plY3RcIik7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImN1cnJlbnRQcm9qZWN0XCIpO1xuICAgIGFwcGxpY2F0aW9uTG9naWMuY2hhbmdlQ3VycmVudFByb2plY3QoZS50YXJnZXQuaWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblRpdGxlXCIpLmlubmVySFRNTCA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluVGl0bGVcIikuaW5uZXJIVE1MID09IFwiSG9tZVwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGVQcm9qZWN0XCIpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5UaXRsZVwiKS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRGVsZXRlKTtcbiAgICB9XG4gICAgZGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5kZWxldGVQcm9qZWN0KCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY2xlYXJUaXRsZURpc3BsYXkoKTtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmNoYW5nZUN1cnJlbnRQcm9qZWN0KDApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblRpdGxlXCIpLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIHByb2plY3RUaXRsZURpc3BsYXkoKTtcbiAgICBkaXNwbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgcmV2ZWFsRGVzY3JpcHRpb24gPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoXCJkZXNjcmlwdGlvbkhpZGVcIik7XG4gICAgZS50YXJnZXQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnRvZ2dsZShcImRlc2NyaXB0aW9uSGlkZVwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXksXG4gICAgYWRkVGFzayxcbiAgICBlZGl0VGFzayxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHN3aXRjaFByb2plY3RzLFxuICAgIGRlZnVhbHRQcm9qZWN0LFxuICAgIHByb2plY3RUaXRsZURpc3BsYXksXG4gICAgcmV2ZWFsRGVzY3JpcHRpb24sXG4gICAgZWRpdFRhc2tTdG9yZUluZGV4LFxuICAgIGNsZWFyVGl0bGVEaXNwbGF5LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5jb25zdCB0YXNrQWRkUmVzZXQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tTdWJtaXRcIik7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Db250YWluZXJcIik7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tQ29udHJvbC5hZGRUYXNrKTtcbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtSGlkZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIjtcbiAgfTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlKTtcblxuICByZXR1cm4ge307XG59KSgpO1xuXG5jb25zdCB0YXNrRWRpdFJlc2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrU3VibWl0RWRpdFwiKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNvbnRhaW5lckVkaXRcIik7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tQ29udHJvbC5lZGl0VGFzayk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUhpZGVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIH07XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdEFkZFJlc2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U3VibWl0XCIpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0Q29udGFpbmVyXCIpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbUNvbnRyb2wuYWRkUHJvamVjdCk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUhpZGVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIH07XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdERlbGV0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlU3VibWl0XCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ29udGFpbmVyRGVsZXRlXCIpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbUNvbnRyb2wuZGVsZXRlUHJvamVjdCk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUhpZGVcIik7XG4gIH07XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuZG9tQ29udHJvbC5wcm9qZWN0VGl0bGVEaXNwbGF5KCk7XG5kb21Db250cm9sLmRpc3BsYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==