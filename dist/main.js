/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable max-classes-per-file */

/* eslint-disable import/no-cycle */

 // eslint-disable-next-line import/prefer-default-export

var applicationLogic = function () {
  var myArrays = _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.firstTimeUser();
  var currentProject = myArrays[0];

  var getTitle = function getTitle() {
    return document.querySelector('#title').value;
  };

  var getDescription = function getDescription() {
    return document.querySelector('#description').value;
  };

  var getDate = function getDate() {
    return document.querySelector('.inputDueDate').value;
  };

  var getTitleEdit = function getTitleEdit() {
    return document.querySelector('#titleEdit').value;
  };

  var getDescriptionEdit = function getDescriptionEdit() {
    return document.querySelector('#descriptionEdit').value;
  };

  var getDateEdit = function getDateEdit() {
    return document.querySelector('.inputDueDateEdit').value;
  };

  var Task = function Task(title, description, date) {
    _classCallCheck(this, Task);

    this.title = title;
    this.description = description;
    this.date = date;
  };

  var Project = function Project(name) {
    _classCallCheck(this, Project);

    this.name = name;
  };

  var addTask = function addTask() {
    currentProject.push(new Task(getTitle(), getDescription(), getDate()));
    _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.updateLocalStorage();
  };

  var deleteTask = function deleteTask(index) {
    currentProject.splice(index, 1);
    _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.updateLocalStorage();
  };

  var editTask = function editTask(index) {
    currentProject.splice(index, 1, new Task(getTitleEdit(), getDescriptionEdit(), getDateEdit()));
    _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.updateLocalStorage();
  };

  var changeCurrentProject = function changeCurrentProject(num) {
    currentProject = myArrays[num];
  };

  var getCurrentProject = function getCurrentProject() {
    return currentProject;
  };

  var getNewProjectName = function getNewProjectName() {
    return document.querySelector('#projectName').value;
  };

  var addNewProject = function addNewProject() {
    myArrays.push([]);
  };

  var addNewProjectName = function addNewProjectName() {
    getCurrentProject().push(new Project(getNewProjectName()));
    _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.updateLocalStorage();
  };

  var deleteProject = function deleteProject() {
    var location = myArrays.indexOf(currentProject);
    myArrays.splice(location, 1);
    _localstorage__WEBPACK_IMPORTED_MODULE_1__.storageLogic.updateLocalStorage();
  };

  return {
    myArrays: myArrays,
    getTitle: getTitle,
    getDescription: getDescription,
    currentProject: currentProject,
    changeCurrentProject: changeCurrentProject,
    addNewProject: addNewProject,
    getNewProjectName: getNewProjectName,
    getCurrentProject: getCurrentProject,
    addNewProjectName: addNewProjectName,
    addTask: addTask,
    deleteTask: deleteTask,
    editTask: editTask,
    deleteProject: deleteProject
  };
}();

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageLogic": () => (/* binding */ storageLogic)
/* harmony export */ });
/* harmony import */ var _application_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-logic */ "./src/application-logic.js");
// eslint-disable-next-line import/no-cycle
 // eslint-disable-next-line import/prefer-default-export

var storageLogic = function () {
  var defaultData = [[{
    name: 'Home'
  }, {
    title: 'First Task: Add a task!',
    description: 'Click the button in the upper or lower right!',
    date: '2021-10-22'
  }]];

  var updateLocalStorage = function updateLocalStorage() {
    localStorage.setItem('data', JSON.stringify(_application_logic__WEBPACK_IMPORTED_MODULE_0__.applicationLogic.myArrays));
  };

  var getLocalStorage = function getLocalStorage() {
    return JSON.parse(localStorage.getItem('data'));
  };

  var firstTimeUser = function firstTimeUser() {
    if (getLocalStorage() == null) {
      localStorage.setItem('data', JSON.stringify(defaultData));
      return getLocalStorage();
    }

    return getLocalStorage();
  };

  return {
    updateLocalStorage: updateLocalStorage,
    getLocalStorage: getLocalStorage,
    firstTimeUser: firstTimeUser,
    defaultData: defaultData
  };
}();

/***/ }),

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z"/></svg> */ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS styles being exported to index.js for webpack */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-width: 375px;\n  background: white;\n  color: #212529;\n  margin: 0px;\n  min-height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\np {\n  margin: 0;\n}\n\ninput {\n  margin: 5px;\n  padding: 5px;\n}\n\nheader {\n  background: #ea584b;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 45px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n@media only screen and (max-width: 660px) {\n  header {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\ninput {\n  border: none;\n}\n\n.menuTitle {\n  font-weight: 500;\n}\n\n.menuButton {\n  cursor: pointer;\n  width: 40px;\n}\n\n.menuButton:hover {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.menuHide {\n  display: none;\n}\n\n.addButton {\n  color: #212529;\n  cursor: pointer;\n  border: 1px solid #212529;\n  padding: 5px;\n  border-radius: 10px;\n  font-weight: 400;\n}\n\n.addButton:hover {\n  background-color: #212529;\n  border: 1px solid #ea584b;\n  color: #ea584b;\n}\n\n.menuContainer {\n  background-color: #f7f7f7;\n  height: calc(100vh - 45px);\n  padding: 40px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n@media only screen and (max-width: 750px) {\n  .menuContainer {\n    position: absolute;\n    z-index: 6;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n}\n\n.menuHeader {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.projectTitle {\n  cursor: pointer;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n\n.projectTitle:hover {\n  background: #e2e1e1;\n}\n\n.currentProject {\n  border-radius: 10px;\n  background: #e2e1e1;\n}\n\n.addProjectButton {\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0;\n  margin-left: 5px;\n  font-weight: 400;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.addProjectButton:hover {\n  background: #ea584b;\n}\n\n.newProjectContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainerEdit {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainerDelete {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formHide {\n  display: none;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.mainTitle {\n  padding-left: 10%;\n  position: relative;\n  font-weight: 400;\n}\n\n.deleteProject {\n  position: absolute;\n  left: calc(10% - 25px);\n  top: 0px;\n  z-index: 5;\n  cursor: pointer;\n  font-weight: 300;\n  color: #ea584b;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n}\n\n.task {\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  padding-right: 85px;\n  padding-left: 20px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid gainsboro;\n  margin: 5px;\n  align-items: flex-start;\n  margin: 15px;\n  margin-bottom: 0;\n  padding-bottom: 15px;\n}\n\n.taskDate {\n  position: absolute;\n  right: 0px;\n}\n\n.completeMarker {\n  position: absolute;\n  left: -13px;\n  top: -9px;\n  z-index: 5;\n  font-size: 30px;\n  font-weight: 400;\n}\n\n.descriptionHide {\n  display: none;\n}\n\n.floatingTaskAdd {\n  padding: 10px;\n  color: white;\n  position: absolute;\n  background: #ea584b;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.floatingTaskAdd:hover {\n  transform: scale(1.05);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.description {\n  width: 100%;\n  min-height: 100px;\n  padding: 15px;\n  padding-left: 0;\n  padding-top: 25px;\n}\n\n.editButton {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 40px;\n  left: -15px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.overlay {\n  z-index: 9;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n\n.activeOverlay {\n  opacity: 1;\n  pointer-events: all;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#description {\n  width: 100%;\n  min-height: 50px;\n}\n\n#projectSubmit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#taskSubmit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#taskSubmitEdit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\nsvg {\n  pointer-events: none;\n}\n\npath {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS styles being exported to index.js for webpack */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-width: 375px;\n  background: white;\n  color: #212529;\n  margin: 0px;\n  min-height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\np {\n  margin: 0;\n}\n\ninput {\n  margin: 5px;\n  padding: 5px;\n}\n\nheader {\n  background: #ea584b;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 45px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n@media only screen and (max-width: 660px) {\n  header {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\ninput {\n  border: none;\n}\n\n.menuTitle {\n  font-weight: 500;\n}\n\n.menuButton {\n  cursor: pointer;\n  width: 40px;\n}\n\n.menuButton:hover {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.menuHide {\n  display: none;\n}\n\n.addButton {\n  color: #212529;\n  cursor: pointer;\n  border: 1px solid #212529;\n  padding: 5px;\n  border-radius: 10px;\n  font-weight: 400;\n}\n\n.addButton:hover {\n  background-color: #212529;\n  border: 1px solid #ea584b;\n  color: #ea584b;\n}\n\n.menuContainer {\n  background-color: #f7f7f7;\n  height: calc(100vh - 45px);\n  padding: 40px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n@media only screen and (max-width: 750px) {\n  .menuContainer {\n    position: absolute;\n    z-index: 6;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n}\n\n.menuHeader {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.projectTitle {\n  cursor: pointer;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n\n.projectTitle:hover {\n  background: #e2e1e1;\n}\n\n.currentProject {\n  border-radius: 10px;\n  background: #e2e1e1;\n}\n\n.addProjectButton {\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n  margin: 0;\n  margin-left: 5px;\n  font-weight: 400;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.addProjectButton:hover {\n  background: #ea584b;\n}\n\n.newProjectContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainerEdit {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formContainerDelete {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  z-index: 15;\n  width: 90%;\n  max-width: 515px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.formHide {\n  display: none;\n  animation: 0.3s ease 0s 1 normal none running fadeIn;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.mainTitle {\n  padding-left: 10%;\n  position: relative;\n  font-weight: 400;\n}\n\n.deleteProject {\n  position: absolute;\n  left: calc(10% - 25px);\n  top: 0px;\n  z-index: 5;\n  cursor: pointer;\n  font-weight: 300;\n  color: #ea584b;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n}\n\n.task {\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  padding-right: 85px;\n  padding-left: 20px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid gainsboro;\n  margin: 5px;\n  align-items: flex-start;\n  margin: 15px;\n  margin-bottom: 0;\n  padding-bottom: 15px;\n}\n\n.taskDate {\n  position: absolute;\n  right: 0px;\n}\n\n.completeMarker {\n  position: absolute;\n  left: -13px;\n  top: -9px;\n  z-index: 5;\n  font-size: 30px;\n  font-weight: 400;\n}\n\n.descriptionHide {\n  display: none;\n}\n\n.floatingTaskAdd {\n  padding: 10px;\n  color: white;\n  position: absolute;\n  background: #ea584b;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.floatingTaskAdd:hover {\n  transform: scale(1.05);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(0, 0, 0, 0.1) inset;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n\n.description {\n  width: 100%;\n  min-height: 100px;\n  padding: 15px;\n  padding-left: 0;\n  padding-top: 25px;\n}\n\n.editButton {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 40px;\n  left: -15px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z\"/></svg>');\n}\n\n.overlay {\n  z-index: 9;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n\n.activeOverlay {\n  opacity: 1;\n  pointer-events: all;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#description {\n  width: 100%;\n  min-height: 50px;\n}\n\n#projectSubmit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#taskSubmit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#taskSubmitEdit {\n  background: #ea584b;\n  color: white;\n  border-radius: 5px;\n  padding: 8px;\n  cursor: pointer;\n}\n\nsvg {\n  pointer-events: none;\n}\n\npath {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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

/***/ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z\"/></svg>":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z"/></svg> ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z\"/></svg>";

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
/* eslint-disable func-names */

/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */

/* eslint-disable no-alert */



var overlayHide = function () {
  var hide = function hide() {
    overlay.classList.toggle('activeOverlay');
  };

  var hideAnyModal = function hideAnyModal() {
    document.querySelector('.formContainer').classList.add('formHide');
    document.querySelector('.formContainerEdit').classList.add('formHide');
    document.querySelector('.newProjectContainer').classList.add('formHide');
    document.querySelector('.formContainerDelete').classList.add('formHide');
    overlay.classList.toggle('activeOverlay');
  };

  var overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', hideAnyModal);
  return {
    hide: hide
  };
}();

var menuHide = function () {
  var hide = function hide() {
    menuContainer.classList.toggle('menuHide');
  };

  var menuBtn = document.querySelector('.menuButton');
  var menuContainer = document.querySelector('.menuContainer');
  menuBtn.addEventListener('click', hide);
  return {};
}();

var revealProjectAdd = function () {
  var hide = function hide() {
    newProjectContainer.classList.toggle('formHide');
    overlayHide.hide();
  };

  var addProjectBtn = document.querySelector('.addProjectButton');
  var newProjectContainer = document.querySelector('.newProjectContainer');
  addProjectBtn.addEventListener('click', hide);
  return {};
}();

var revealTaskAdd = function () {
  var hide = function hide() {
    formContainer.classList.toggle('formHide');
    overlayHide.hide();
  };

  var addBtn = document.querySelector('.addButton');
  var formContainer = document.querySelector('.formContainer');
  addBtn.addEventListener('click', hide);
  var floatingAddButton = document.querySelector('.floatingTaskAdd');
  floatingAddButton.addEventListener('click', hide);
  return {};
}();

var domControl = function () {
  var overlay = document.querySelector('.overlay');
  var taskContainer = document.querySelector('.taskContainer');
  var menuConainer = document.querySelector('.menuContainer');
  var defualtProject = document.querySelector('.defaultProject');
  var num = 0;
  var index = 0;

  var projectTitleDisplay = function projectTitleDisplay() {
    num = 0;

    for (var i = 0; i < _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.myArrays.length; i++) {
      var h3 = document.createElement('h3');
      h3.classList.add('projectTitle');

      if (i === 0) {
        h3.classList.toggle('currentProject');
      }

      h3.id = num;
      num++;
      h3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.myArrays[i][0].name;
      h3.addEventListener('click', switchProjects);
      menuConainer.appendChild(h3);
    }
  };

  var clearTitleDisplay = function clearTitleDisplay() {
    var projects = document.querySelectorAll('.projectTitle');
    projects.forEach(function (x) {
      return x.remove();
    });
  };

  var openDelete = function openDelete() {
    document.querySelector('.formContainerDelete').classList.toggle('formHide');
    overlayHide.hide();
  };

  var display = function display() {
    for (var i = 1; i < _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject().length; i++) {
      var p = document.createElement('p');
      p.id = i;
      p.classList.add('task');
      p.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].title;
      taskContainer.appendChild(p);
      p.addEventListener('click', revealDescription);
      var p2 = document.createElement('p');
      p2.classList.add('descriptionHide', 'description');
      p2.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].description;
      p.appendChild(p2);
      var p3 = document.createElement('p');
      p3.classList.add('taskDate');
      p3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[i].date;
      p.appendChild(p3);
      var p4 = document.createElement('p');
      p4.classList.add('completeMarker');
      p4.innerHTML = '&times';
      p.appendChild(p4);
      p4.addEventListener('click', deleteTask);
      var p5 = document.createElement('p');
      p5.classList.add('descriptionHide', 'editButton');
      p.appendChild(p5);
      p5.addEventListener('click', editTaskFormReveal);
      p5.addEventListener('click', editTaskStoreIndex);
    }
  };

  var clearDisplay = function clearDisplay() {
    var tasks = document.querySelectorAll('.task');
    tasks.forEach(function (x) {
      return x.remove();
    });
  };

  var addTask = function addTask() {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addTask();
    clearDisplay();
    display();
  };

  var deleteTask = function deleteTask(e) {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.deleteTask(e.target.parentNode.id);
    clearDisplay();
    display();
  };

  var editTaskFormReveal = function editTaskFormReveal() {
    document.querySelector('.formContainerEdit').classList.toggle('formHide');
    overlayHide.hide();
  };

  var editTaskStoreIndex = function editTaskStoreIndex(e) {
    index = e.target.parentNode.id;
  };

  var editTask = function editTask() {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.editTask(index);
    clearDisplay();
    display();
  };

  var addProject = function addProject() {
    clearDisplay();
    document.querySelector('.currentProject').classList.toggle('currentProject');
    var h3 = document.createElement('h3');
    h3.classList.add('projectTitle', 'currentProject');
    h3.id = num;
    h3.innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getNewProjectName();
    menuConainer.appendChild(h3);
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addNewProject();
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(num);
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.addNewProjectName(num);
    document.querySelector('.mainTitle').innerHTML = _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.getCurrentProject()[0].name;
    h3.addEventListener('click', switchProjects);
    var div = document.createElement('div');
    div.classList.add('deleteProject');
    div.innerHTML = '&times';
    document.querySelector('.mainTitle').appendChild(div);
    div.addEventListener('click', openDelete);
    num++;
  };

  var switchProjects = function switchProjects(e) {
    clearDisplay();
    document.querySelector('.currentProject').classList.toggle('currentProject');
    e.target.classList.toggle('currentProject');
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(e.target.id);
    document.querySelector('.mainTitle').innerHTML = e.target.innerHTML;

    if (document.querySelector('.mainTitle').innerHTML === 'Home') {} else {
      var div = document.createElement('div');
      div.classList.add('deleteProject');
      div.innerHTML = '&times';
      document.querySelector('.mainTitle').appendChild(div);
      div.addEventListener('click', openDelete);
    }

    display();
  };

  var deleteProject = function deleteProject() {
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.deleteProject();
    clearDisplay();
    clearTitleDisplay();
    _application_logic__WEBPACK_IMPORTED_MODULE_1__.applicationLogic.changeCurrentProject(0);
    document.querySelector('.mainTitle').innerHTML = 'Home';
    projectTitleDisplay();
    display();
  };

  var revealDescription = function revealDescription(e) {
    e.target.children[0].classList.toggle('descriptionHide');
    e.target.children[3].classList.toggle('descriptionHide');
  };

  return {
    display: display,
    addTask: addTask,
    editTask: editTask,
    addProject: addProject,
    switchProjects: switchProjects,
    defualtProject: defualtProject,
    projectTitleDisplay: projectTitleDisplay,
    revealDescription: revealDescription,
    editTaskStoreIndex: editTaskStoreIndex,
    clearTitleDisplay: clearTitleDisplay,
    deleteProject: deleteProject
  };
}();

var taskAddReset = function () {
  var validateForm = function validateForm() {
    var x = document.querySelector('#title').value;

    if (x === '') {
      alert('Please give your task a name');
    } else {
      domControl.addTask();
    }
  };

  var submit = document.querySelector('#taskSubmit');
  var formContainer = document.querySelector('.formContainer');
  submit.addEventListener('click', validateForm);

  var hide = function hide() {
    formContainer.classList.toggle('formHide');
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    overlayHide.hide();
  };

  submit.addEventListener('click', hide);
  return {};
}();

var taskEditReset = function () {
  var validateForm = function validateForm() {
    var x = document.querySelector('#titleEdit').value;

    if (x === '') {
      alert('Please give your task a name');
    } else {
      domControl.editTask();
    }
  };

  var submit = document.querySelector('#taskSubmitEdit');
  var formContainer = document.querySelector('.formContainerEdit');
  submit.addEventListener('click', validateForm);

  var hide = function hide() {
    formContainer.classList.toggle('formHide');
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    overlayHide.hide();
  };

  submit.addEventListener('click', hide);
  return {};
}();

var projectAddReset = function () {
  var validateForm = function validateForm() {
    var x = document.querySelector('#projectName').value;

    if (x === '') {
      alert('Please give your project a name');
    } else {
      domControl.addProject();
    }
  };

  var submit = document.querySelector('#projectSubmit');
  var newProjectContainer = document.querySelector('.newProjectContainer');
  submit.addEventListener('click', validateForm);

  var hide = function hide() {
    newProjectContainer.classList.toggle('formHide');
    document.querySelector('#projectName').value = '';
    overlayHide.hide();
  };

  submit.addEventListener('click', hide);
  return {};
}();

var projectDelete = function () {
  var submit = document.querySelector('#deleteSubmit');
  var deleteProjectContainer = document.querySelector('.formContainerDelete');
  submit.addEventListener('click', domControl.deleteProject);

  var hide = function hide() {
    deleteProjectContainer.classList.toggle('formHide');
    overlayHide.hide();
  };

  submit.addEventListener('click', hide);
  return {};
}();

domControl.projectTitleDisplay();
domControl.display();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFB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QUNqQlcsSUFBQUEsbUJBQW1CLENBQUNULFNBQXBCLENBQThCQyxNQUE5QixDQUFxQyxVQUFyQztBQUNBMUMsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxLQUF2QyxHQUErQyxFQUEvQztBQUNBb0MsSUFBQUEsV0FBVyxDQUFDQyxJQUFaO0FBQ0QsR0FKRDs7QUFLQXlELEVBQUFBLE1BQU0sQ0FBQ25ELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDTixJQUFqQztBQUVBLFNBQU8sRUFBUDtBQUNELENBcEJ1QixFQUF4Qjs7QUFzQkEsSUFBTTRELGFBQWEsR0FBSSxZQUFZO0FBQ2pDLE1BQU1ILE1BQU0sR0FBR2hHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsTUFBTW1HLHNCQUFzQixHQUFHcEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUEvQjtBQUNBK0YsRUFBQUEsTUFBTSxDQUFDbkQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNXLFVBQVUsQ0FBQzdCLGFBQTVDOztBQUNBLE1BQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakI2RCxJQUFBQSxzQkFBc0IsQ0FBQzNELFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3QyxVQUF4QztBQUNBSixJQUFBQSxXQUFXLENBQUNDLElBQVo7QUFDRCxHQUhEOztBQUlBeUQsRUFBQUEsTUFBTSxDQUFDbkQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNOLElBQWpDO0FBRUEsU0FBTyxFQUFQO0FBQ0QsQ0FYcUIsRUFBdEI7O0FBYUFpQixVQUFVLENBQUNJLG1CQUFYO0FBQ0FKLFVBQVUsQ0FBQ29CLE9BQVgsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBsaWNhdGlvbi1sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uTG9naWMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBteUFycmF5cyA9IHN0b3JhZ2VMb2dpYy5maXJzdFRpbWVVc2VyKCk7XG5cbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbXlBcnJheXNbMF07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dER1ZURhdGUnKS52YWx1ZTtcblxuICBjb25zdCBnZXRUaXRsZUVkaXQgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVFZGl0JykudmFsdWU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uRWRpdCA9ICgpID0+XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uRWRpdCcpLnZhbHVlO1xuICBjb25zdCBnZXREYXRlRWRpdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dER1ZURhdGVFZGl0JykudmFsdWU7XG5cbiAgY29uc3QgVGFzayA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFByb2plY3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC5wdXNoKG5ldyBUYXNrKGdldFRpdGxlKCksIGdldERlc2NyaXB0aW9uKCksIGdldERhdGUoKSkpO1xuICAgIHN0b3JhZ2VMb2dpYy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgY3VycmVudFByb2plY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC5zcGxpY2UoXG4gICAgICBpbmRleCxcbiAgICAgIDEsXG4gICAgICBuZXcgVGFzayhnZXRUaXRsZUVkaXQoKSwgZ2V0RGVzY3JpcHRpb25FZGl0KCksIGdldERhdGVFZGl0KCkpXG4gICAgKTtcbiAgICBzdG9yYWdlTG9naWMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSAobnVtKSA9PiB7XG4gICAgY3VycmVudFByb2plY3QgPSBteUFycmF5c1tudW1dO1xuICB9O1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3Q7XG5cbiAgY29uc3QgZ2V0TmV3UHJvamVjdE5hbWUgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKS52YWx1ZTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIG15QXJyYXlzLnB1c2goW10pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3ROYW1lID0gKCkgPT4ge1xuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucHVzaChuZXcgUHJvamVjdChnZXROZXdQcm9qZWN0TmFtZSgpKSk7XG4gICAgc3RvcmFnZUxvZ2ljLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBteUFycmF5cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBteUFycmF5cy5zcGxpY2UobG9jYXRpb24sIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG15QXJyYXlzLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxuICAgIGFkZE5ld1Byb2plY3QsXG4gICAgZ2V0TmV3UHJvamVjdE5hbWUsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgYXBwbGljYXRpb25Mb2dpYyB9IGZyb20gJy4vYXBwbGljYXRpb24tbG9naWMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlZmF1bHREYXRhID0gW1xuICAgIFtcbiAgICAgIHsgbmFtZTogJ0hvbWUnIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnRmlyc3QgVGFzazogQWRkIGEgdGFzayEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NsaWNrIHRoZSBidXR0b24gaW4gdGhlIHVwcGVyIG9yIGxvd2VyIHJpZ2h0IScsXG4gICAgICAgIGRhdGU6ICcyMDIxLTEwLTIyJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgXTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShhcHBsaWNhdGlvbkxvZ2ljLm15QXJyYXlzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICBjb25zdCBmaXJzdFRpbWVVc2VyID0gKCkgPT4ge1xuICAgIGlmIChnZXRMb2NhbFN0b3JhZ2UoKSA9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHREYXRhKSk7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIHJldHVybiBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgICBnZXRMb2NhbFN0b3JhZ2UsXG4gICAgZmlyc3RUaW1lVXNlcixcbiAgICBkZWZhdWx0RGF0YSxcbiAgfTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTggMTMuNDVsMi0yLjAyM3Y0LjU3M2gtMnYtMi41NXptLTExLTUuNDVoMS43NDNsMS45NzgtMmgtMy43MjF2MnptMS4zNjEgMy4yMTZsMTEuMTAzLTExLjIxNiA0LjUzNiA0LjUzNC0xMS4xMDIgMTEuMjE4LTUuODk4IDEuMjQ4IDEuMzYxLTUuNzg0em0xLjMwNiAzLjE3NmwyLjIzLS40NzIgOS4yODEtOS4zNzgtMS43MDctMS43MDctOS4yOTMgOS4zODgtLjUxMSAyLjE2OXptMy4zMzMgNy42MDh2LTJoLTZ2Mmg2em0tOC0yaC0zdi0yaC0ydjRoNXYtMnptMTMtMnYyaC0zdjJoNXYtNGgtMnptLTE4LTJoMnYtNGgtMnY0em0yLTZ2LTJoM3YtMmgtNXY0aDJ6XFxcIi8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTIHN0eWxlcyBiZWluZyBleHBvcnRlZCB0byBpbmRleC5qcyBmb3Igd2VicGFjayAqL1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogMzc1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2VhNTg0YjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICB9XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1lbnVUaXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWVudUJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnVCdXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOTkpO1xcbn1cXG5cXG4ubWVudUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTI1Mjk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTg0YjtcXG4gIGNvbG9yOiAjZWE1ODRiO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDVweCk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLm1lbnVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDY7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG4gIH1cXG59XFxuXFxuLm1lbnVIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlMmUxZTE7XFxufVxcblxcbi5jdXJyZW50UHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2UyZTFlMTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbn1cXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAxNTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcXG4gIGFuaW1hdGlvbjogMC4zcyBlYXNlIDBzIDEgbm9ybWFsIG5vbmUgcnVubmluZyBmYWRlSW47XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE1O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJFZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE1O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJEZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMTU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA1MTVweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxuICBhbmltYXRpb246IDAuM3MgZWFzZSAwcyAxIG5vcm1hbCBub25lIHJ1bm5pbmcgZmFkZUluO1xcbn1cXG5cXG4uZm9ybUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogMC4zcyBlYXNlIDBzIDEgbm9ybWFsIG5vbmUgcnVubmluZyBmYWRlSW47XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwJSAtIDI1cHgpO1xcbiAgdG9wOiAwcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjZWE1ODRiO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDg1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEzcHg7XFxuICB0b3A6IC05cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uSGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmxvYXRpbmdUYXNrQWRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mbG9hdGluZ1Rhc2tBZGQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgei1pbmRleDogOTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZU92ZXJsYXkge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jcHJvamVjdFN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFza1N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFza1N1Ym1pdEVkaXQge1xcbiAgYmFja2dyb3VuZDogI2VhNTg0YjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5wYXRoIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNEQUFzRDs7QUFFdEQ7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQjtnRUFDOEQ7QUFDaEU7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7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ZXNDb250ZW50XCI6W1wiLyogQ1NTIHN0eWxlcyBiZWluZyBleHBvcnRlZCB0byBpbmRleC5qcyBmb3Igd2VicGFjayAqL1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogMzc1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2VhNTg0YjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICB9XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1lbnVUaXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWVudUJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnVCdXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOTkpO1xcbn1cXG5cXG4ubWVudUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTI1Mjk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNTg0YjtcXG4gIGNvbG9yOiAjZWE1ODRiO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDVweCk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLm1lbnVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDY7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcXG4gIH1cXG59XFxuXFxuLm1lbnVIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlMmUxZTE7XFxufVxcblxcbi5jdXJyZW50UHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2UyZTFlMTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbn1cXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB6LWluZGV4OiAxNTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcXG4gIGFuaW1hdGlvbjogMC4zcyBlYXNlIDBzIDEgbm9ybWFsIG5vbmUgcnVubmluZyBmYWRlSW47XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE1O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJFZGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE1O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTE1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbiAgYW5pbWF0aW9uOiAwLjNzIGVhc2UgMHMgMSBub3JtYWwgbm9uZSBydW5uaW5nIGZhZGVJbjtcXG59XFxuXFxuLmZvcm1Db250YWluZXJEZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgei1pbmRleDogMTU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA1MTVweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxuICBhbmltYXRpb246IDAuM3MgZWFzZSAwcyAxIG5vcm1hbCBub25lIHJ1bm5pbmcgZmFkZUluO1xcbn1cXG5cXG4uZm9ybUhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogMC4zcyBlYXNlIDBzIDEgbm9ybWFsIG5vbmUgcnVubmluZyBmYWRlSW47XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluVGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDEwJSAtIDI1cHgpO1xcbiAgdG9wOiAwcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjZWE1ODRiO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDg1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEzcHg7XFxuICB0b3A6IC05cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uSGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmxvYXRpbmdUYXNrQWRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mbG9hdGluZ1Rhc2tBZGQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcXG4gICAgMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcbiAgICAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xOCAxMy40NWwyLTIuMDIzdjQuNTczaC0ydi0yLjU1em0tMTEtNS40NWgxLjc0M2wxLjk3OC0yaC0zLjcyMXYyem0xLjM2MSAzLjIxNmwxMS4xMDMtMTEuMjE2IDQuNTM2IDQuNTM0LTExLjEwMiAxMS4yMTgtNS44OTggMS4yNDggMS4zNjEtNS43ODR6bTEuMzA2IDMuMTc2bDIuMjMtLjQ3MiA5LjI4MS05LjM3OC0xLjcwNy0xLjcwNy05LjI5MyA5LjM4OC0uNTExIDIuMTY5em0zLjMzMyA3LjYwOHYtMmgtNnYyaDZ6bS04LTJoLTN2LTJoLTJ2NGg1di0yem0xMy0ydjJoLTN2Mmg1di00aC0yem0tMTgtMmgydi00aC0ydjR6bTItNnYtMmgzdi0yaC01djRoMnpcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgei1pbmRleDogOTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZU92ZXJsYXkge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jcHJvamVjdFN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFza1N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiAjZWE1ODRiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFza1N1Ym1pdEVkaXQge1xcbiAgYmFja2dyb3VuZDogI2VhNTg0YjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5wYXRoIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYXBwbGljYXRpb25Mb2dpYyB9IGZyb20gJy4vYXBwbGljYXRpb24tbG9naWMnO1xuXG5jb25zdCBvdmVybGF5SGlkZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVPdmVybGF5Jyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFueU1vZGFsID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnZm9ybUhpZGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lckVkaXQnKS5jbGFzc0xpc3QuYWRkKCdmb3JtSGlkZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Q29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnZm9ybUhpZGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lckRlbGV0ZScpLmNsYXNzTGlzdC5hZGQoJ2Zvcm1IaWRlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVPdmVybGF5Jyk7XG4gIH07XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQW55TW9kYWwpO1xuICByZXR1cm4geyBoaWRlIH07XG59KSgpO1xuXG5jb25zdCBtZW51SGlkZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdtZW51SGlkZScpO1xuICB9O1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ1dHRvbicpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVDb250YWluZXInKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xuXG4gIHJldHVybiB7fTtcbn0pKCk7XG5cbmNvbnN0IHJldmVhbFByb2plY3RBZGQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybUhpZGUnKTtcbiAgICBvdmVybGF5SGlkZS5oaWRlKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuY29uc3QgcmV2ZWFsVGFza0FkZCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtSGlkZScpO1xuICAgIG92ZXJsYXlIaWRlLmhpZGUoKTtcbiAgfTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlKTtcblxuICBjb25zdCBmbG9hdGluZ0FkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZ1Rhc2tBZGQnKTtcbiAgZmxvYXRpbmdBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlKTtcblxuICByZXR1cm4ge307XG59KSgpO1xuXG5jb25zdCBkb21Db250cm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpO1xuICBjb25zdCBtZW51Q29uYWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUNvbnRhaW5lcicpO1xuICBjb25zdCBkZWZ1YWx0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0UHJvamVjdCcpO1xuICBsZXQgbnVtID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIG51bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWNhdGlvbkxvZ2ljLm15QXJyYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBoMy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGgzLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnJlbnRQcm9qZWN0Jyk7XG4gICAgICB9XG4gICAgICBoMy5pZCA9IG51bTtcbiAgICAgIG51bSsrO1xuICAgICAgaDMuaW5uZXJIVE1MID0gYXBwbGljYXRpb25Mb2dpYy5teUFycmF5c1tpXVswXS5uYW1lO1xuICAgICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQcm9qZWN0cyk7XG4gICAgICBtZW51Q29uYWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhclRpdGxlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VGl0bGUnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKCh4KSA9PiB4LnJlbW92ZSgpKTtcbiAgfTtcblxuICBjb25zdCBvcGVuRGVsZXRlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyRGVsZXRlJykuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybUhpZGUnKTtcbiAgICBvdmVybGF5SGlkZS5oaWRlKCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFwcGxpY2F0aW9uTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAuaWQgPSBpO1xuICAgICAgcC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICBwLmlubmVySFRNTCA9IGFwcGxpY2F0aW9uTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKVtpXS50aXRsZTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2ZWFsRGVzY3JpcHRpb24pO1xuICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwMi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkhpZGUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgIHAyLmlubmVySFRNTCA9IGFwcGxpY2F0aW9uTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIHAuYXBwZW5kQ2hpbGQocDIpO1xuICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwMy5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpO1xuICAgICAgcDMuaW5uZXJIVE1MID0gYXBwbGljYXRpb25Mb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpW2ldLmRhdGU7XG4gICAgICBwLmFwcGVuZENoaWxkKHAzKTtcbiAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcDQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVNYXJrZXInKTtcbiAgICAgIHA0LmlubmVySFRNTCA9ICcmdGltZXMnO1xuICAgICAgcC5hcHBlbmRDaGlsZChwNCk7XG4gICAgICBwNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuICAgICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwNS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkhpZGUnLCAnZWRpdEJ1dHRvbicpO1xuICAgICAgcC5hcHBlbmRDaGlsZChwNSk7XG4gICAgICBwNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrRm9ybVJldmVhbCk7XG4gICAgICBwNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrU3RvcmVJbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgdGFza3MuZm9yRWFjaCgoeCkgPT4geC5yZW1vdmUoKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmFkZFRhc2soKTtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBkaXNwbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5kZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGRpc3BsYXkoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFza0Zvcm1SZXZlYWwgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db250YWluZXJFZGl0JykuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybUhpZGUnKTtcbiAgICBvdmVybGF5SGlkZS5oaWRlKCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2tTdG9yZUluZGV4ID0gKGUpID0+IHtcbiAgICBpbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5lZGl0VGFzayhpbmRleCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFByb2plY3QnKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnJlbnRQcm9qZWN0Jyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScsICdjdXJyZW50UHJvamVjdCcpO1xuICAgIGgzLmlkID0gbnVtO1xuICAgIGgzLmlubmVySFRNTCA9IGFwcGxpY2F0aW9uTG9naWMuZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgICBtZW51Q29uYWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGFwcGxpY2F0aW9uTG9naWMuYWRkTmV3UHJvamVjdCgpO1xuICAgIGFwcGxpY2F0aW9uTG9naWMuY2hhbmdlQ3VycmVudFByb2plY3QobnVtKTtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmFkZE5ld1Byb2plY3ROYW1lKG51bSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5UaXRsZScpLmlubmVySFRNTCA9XG4gICAgICBhcHBsaWNhdGlvbkxvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KClbMF0ubmFtZTtcbiAgICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFByb2plY3RzKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdCcpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnJnRpbWVzJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRpdGxlJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGVsZXRlKTtcbiAgICBudW0rKztcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0cyA9IChlKSA9PiB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFByb2plY3QnKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnJlbnRQcm9qZWN0Jyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY3VycmVudFByb2plY3QnKTtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmNoYW5nZUN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LmlkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRpdGxlJykuaW5uZXJIVE1MID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRpdGxlJykuaW5uZXJIVE1MID09PSAnSG9tZScpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdCcpO1xuICAgICAgZGl2LmlubmVySFRNTCA9ICcmdGltZXMnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5UaXRsZScpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGVsZXRlKTtcbiAgICB9XG4gICAgZGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgYXBwbGljYXRpb25Mb2dpYy5kZWxldGVQcm9qZWN0KCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY2xlYXJUaXRsZURpc3BsYXkoKTtcbiAgICBhcHBsaWNhdGlvbkxvZ2ljLmNoYW5nZUN1cnJlbnRQcm9qZWN0KDApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluVGl0bGUnKS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgcHJvamVjdFRpdGxlRGlzcGxheSgpO1xuICAgIGRpc3BsYXkoKTtcbiAgfTtcblxuICBjb25zdCByZXZlYWxEZXNjcmlwdGlvbiA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY3JpcHRpb25IaWRlJyk7XG4gICAgZS50YXJnZXQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY3JpcHRpb25IaWRlJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5LFxuICAgIGFkZFRhc2ssXG4gICAgZWRpdFRhc2ssXG4gICAgYWRkUHJvamVjdCxcbiAgICBzd2l0Y2hQcm9qZWN0cyxcbiAgICBkZWZ1YWx0UHJvamVjdCxcbiAgICBwcm9qZWN0VGl0bGVEaXNwbGF5LFxuICAgIHJldmVhbERlc2NyaXB0aW9uLFxuICAgIGVkaXRUYXNrU3RvcmVJbmRleCxcbiAgICBjbGVhclRpdGxlRGlzcGxheSxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuY29uc3QgdGFza0FkZFJlc2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBpZiAoeCA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZ2l2ZSB5b3VyIHRhc2sgYSBuYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUNvbnRyb2wuYWRkVGFzaygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tTdWJtaXQnKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlRm9ybSk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtSGlkZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcbiAgICBvdmVybGF5SGlkZS5oaWRlKCk7XG4gIH07XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xuXG4gIHJldHVybiB7fTtcbn0pKCk7XG5cbmNvbnN0IHRhc2tFZGl0UmVzZXQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUVkaXQnKS52YWx1ZTtcbiAgICBpZiAoeCA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZ2l2ZSB5b3VyIHRhc2sgYSBuYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUNvbnRyb2wuZWRpdFRhc2soKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrU3VibWl0RWRpdCcpO1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db250YWluZXJFZGl0Jyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlRm9ybSk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtSGlkZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcbiAgICBvdmVybGF5SGlkZS5oaWRlKCk7XG4gIH07XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xuXG4gIHJldHVybiB7fTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RBZGRSZXNldCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykudmFsdWU7XG4gICAgaWYgKHggPT09ICcnKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGdpdmUgeW91ciBwcm9qZWN0IGEgbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21Db250cm9sLmFkZFByb2plY3QoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U3VibWl0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2YWxpZGF0ZUZvcm0pO1xuICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybUhpZGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKS52YWx1ZSA9ICcnO1xuICAgIG92ZXJsYXlIaWRlLmhpZGUoKTtcbiAgfTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdERlbGV0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVTdWJtaXQnKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyRGVsZXRlJyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbUNvbnRyb2wuZGVsZXRlUHJvamVjdCk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtSGlkZScpO1xuICAgIG92ZXJsYXlIaWRlLmhpZGUoKTtcbiAgfTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZSk7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuZG9tQ29udHJvbC5wcm9qZWN0VGl0bGVEaXNwbGF5KCk7XG5kb21Db250cm9sLmRpc3BsYXkoKTtcbiJdLCJuYW1lcyI6WyJzdG9yYWdlTG9naWMiLCJhcHBsaWNhdGlvbkxvZ2ljIiwibXlBcnJheXMiLCJmaXJzdFRpbWVVc2VyIiwiY3VycmVudFByb2plY3QiLCJnZXRUaXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREYXRlIiwiZ2V0VGl0bGVFZGl0IiwiZ2V0RGVzY3JpcHRpb25FZGl0IiwiZ2V0RGF0ZUVkaXQiLCJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJQcm9qZWN0IiwibmFtZSIsImFkZFRhc2siLCJwdXNoIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiZGVsZXRlVGFzayIsImluZGV4Iiwic3BsaWNlIiwiZWRpdFRhc2siLCJjaGFuZ2VDdXJyZW50UHJvamVjdCIsIm51bSIsImdldEN1cnJlbnRQcm9qZWN0IiwiZ2V0TmV3UHJvamVjdE5hbWUiLCJhZGROZXdQcm9qZWN0IiwiYWRkTmV3UHJvamVjdE5hbWUiLCJkZWxldGVQcm9qZWN0IiwibG9jYXRpb24iLCJpbmRleE9mIiwiZGVmYXVsdERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldExvY2FsU3RvcmFnZSIsInBhcnNlIiwiZ2V0SXRlbSIsIm92ZXJsYXlIaWRlIiwiaGlkZSIsIm92ZXJsYXkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlQW55TW9kYWwiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibWVudUhpZGUiLCJtZW51Q29udGFpbmVyIiwibWVudUJ0biIsInJldmVhbFByb2plY3RBZGQiLCJuZXdQcm9qZWN0Q29udGFpbmVyIiwiYWRkUHJvamVjdEJ0biIsInJldmVhbFRhc2tBZGQiLCJmb3JtQ29udGFpbmVyIiwiYWRkQnRuIiwiZmxvYXRpbmdBZGRCdXR0b24iLCJkb21Db250cm9sIiwidGFza0NvbnRhaW5lciIsIm1lbnVDb25haW5lciIsImRlZnVhbHRQcm9qZWN0IiwicHJvamVjdFRpdGxlRGlzcGxheSIsImkiLCJsZW5ndGgiLCJoMyIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInN3aXRjaFByb2plY3RzIiwiYXBwZW5kQ2hpbGQiLCJjbGVhclRpdGxlRGlzcGxheSIsInByb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ4IiwicmVtb3ZlIiwib3BlbkRlbGV0ZSIsImRpc3BsYXkiLCJwIiwicmV2ZWFsRGVzY3JpcHRpb24iLCJwMiIsInAzIiwicDQiLCJwNSIsImVkaXRUYXNrRm9ybVJldmVhbCIsImVkaXRUYXNrU3RvcmVJbmRleCIsImNsZWFyRGlzcGxheSIsInRhc2tzIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJhZGRQcm9qZWN0IiwiZGl2IiwiY2hpbGRyZW4iLCJ0YXNrQWRkUmVzZXQiLCJ2YWxpZGF0ZUZvcm0iLCJhbGVydCIsInN1Ym1pdCIsInRhc2tFZGl0UmVzZXQiLCJwcm9qZWN0QWRkUmVzZXQiLCJwcm9qZWN0RGVsZXRlIiwiZGVsZXRlUHJvamVjdENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=