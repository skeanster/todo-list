import "./style.css";
import { compareAsc, format } from "date-fns";
import { storageLogic } from "./localstorage";

export const applicationLogic = (function () {
  const submit = document.querySelector("#taskSubmit");

  let myArrays = storageLogic.firstTimeUser();

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
    storageLogic.updateLocalStorage();
  };

  const deleteTask = (index) => {
    currentProject.splice(index, 1);
    storageLogic.updateLocalStorage();
  };

  const editTask = (index) => {
    currentProject.splice(
      index,
      1,
      new Task(getTitleEdit(), getDescriptionEdit(), getDateEdit())
    );
    storageLogic.updateLocalStorage();
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
    storageLogic.updateLocalStorage();
  };

  const deleteProject = () => {
    let location = myArrays.indexOf(currentProject);
    myArrays.splice(location, 1);
    storageLogic.updateLocalStorage();
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
