import "./style.css";
import { compareAsc, format } from "date-fns";

export const applicationLogic = (function () {
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
    return document.querySelector(".input-due-date").value;
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
    console.log(getCurrentProject());
    getCurrentProject().push(new Project(getNewProjectName()));
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
  };
})();
