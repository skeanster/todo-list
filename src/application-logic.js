import "./style.css";
import { compareAsc, format } from "date-fns";

export const applicationLogic = (function () {
  const submit = document.querySelector("#taskSubmit");

  let myArrays = [
    [
      { title: "task1", description: "description1" },
      { title: "task2", description: "description2" },
    ],
  ];

  let currentProject = myArrays[0];

  const getTitle = () => {
    return document.querySelector("#title").value;
  };
  const getDescription = () => {
    return document.querySelector("#description").value;
  };

  let Task = class {
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
  };

  const addTask = () => {
    currentProject.push(new Task(getTitle(), getDescription()));
  };

  submit.addEventListener("click", addTask);

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

  return {
    myArrays,
    getTitle,
    getDescription,
    currentProject,
    changeCurrentProject,
    addNewProject,
    getNewProjectName,
    getCurrentProject,
  };
})();
