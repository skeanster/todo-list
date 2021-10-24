/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-cycle */
import './style.css';
import { storageLogic } from './localstorage';

// eslint-disable-next-line import/prefer-default-export
export const applicationLogic = (function () {
  const myArrays = storageLogic.firstTimeUser();

  let currentProject = myArrays[0];

  const getTitle = () => document.querySelector('#title').value;
  const getDescription = () => document.querySelector('#description').value;
  const getDate = () => document.querySelector('.inputDueDate').value;

  const getTitleEdit = () => document.querySelector('#titleEdit').value;
  const getDescriptionEdit = () =>
    document.querySelector('#descriptionEdit').value;
  const getDateEdit = () => document.querySelector('.inputDueDateEdit').value;

  const Task = class {
    constructor(title, description, date) {
      this.title = title;
      this.description = description;
      this.date = date;
    }
  };

  const Project = class {
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

  const getCurrentProject = () => currentProject;

  const getNewProjectName = () => document.querySelector('#projectName').value;

  const addNewProject = () => {
    myArrays.push([]);
  };

  const addNewProjectName = () => {
    getCurrentProject().push(new Project(getNewProjectName()));
    storageLogic.updateLocalStorage();
  };

  const deleteProject = () => {
    const location = myArrays.indexOf(currentProject);
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
