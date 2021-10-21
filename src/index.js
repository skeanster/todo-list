import "./style.css";
import { compareAsc, format } from "date-fns";
import { applicationLogic } from "./application-logic";

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
    for (let i = 0; i < applicationLogic.myArrays.length; i++) {
      let h3 = document.createElement("h3");
      h3.classList.add("projectTitle");
      h3.id = num;
      num++;
      h3.innerHTML = applicationLogic.myArrays[i][0].name;
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
    for (let i = 1; i < applicationLogic.getCurrentProject().length; i++) {
      let p = document.createElement("p");
      p.id = i;
      p.classList.add("task");
      p.innerHTML = applicationLogic.getCurrentProject()[i].title;
      taskContainer.appendChild(p);
      p.addEventListener("click", revealDescription);
      let p2 = document.createElement("p");
      p2.classList.add("descriptionHide");
      p2.innerHTML = applicationLogic.getCurrentProject()[i].description;
      p.appendChild(p2);
      let p3 = document.createElement("p");
      p3.classList.add("taskDate");
      p3.innerHTML = applicationLogic.getCurrentProject()[i].date;
      p.appendChild(p3);
      let p4 = document.createElement("p");
      p4.classList.add("completeMarker");
      p4.innerHTML = "&times";
      p.appendChild(p4);
      p4.addEventListener("click", deleteTask);
      let p5 = document.createElement("p");
      p5.classList.add("descriptionHide");
      p5.innerHTML = "EDIT";
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
    applicationLogic.addTask();
    clearDisplay();
    display();
  };

  const deleteTask = (e) => {
    applicationLogic.deleteTask(e.target.parentNode.id);
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
    applicationLogic.editTask(index);
    clearDisplay();
    display();
  };

  const addProject = () => {
    clearDisplay();
    let h3 = document.createElement("h3");
    h3.classList.add("projectTitle");
    h3.id = num;
    h3.innerHTML = applicationLogic.getNewProjectName();
    menuConainer.appendChild(h3);
    applicationLogic.addNewProject();
    applicationLogic.changeCurrentProject(num);
    applicationLogic.addNewProjectName(num);
    document.querySelector(".mainTitle").innerHTML =
      applicationLogic.getCurrentProject()[0].name;
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
    applicationLogic.changeCurrentProject(e.target.id);
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
    applicationLogic.deleteProject();
    clearDisplay();
    clearTitleDisplay();
    applicationLogic.changeCurrentProject(0);
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
