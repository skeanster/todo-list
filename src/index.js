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

  return {};
})();

const domControl = (function () {
  const taskContainer = document.querySelector(".taskContainer");
  const menuConainer = document.querySelector(".menuContainer");
  const defualtProject = document.querySelector(".defaultProject");
  let num = 0;

  const initialDisplay = () => {
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

  const display = () => {
    for (let i = 1; i < applicationLogic.getCurrentProject().length; i++) {
      let p = document.createElement("p");
      p.classList.add("task");
      p.innerHTML = applicationLogic.getCurrentProject()[i].title;
      taskContainer.appendChild(p);
      p.addEventListener("click", revealDescription);
      let p2 = document.createElement("p");
      p2.classList.add("descriptionHide");
      p2.innerHTML = applicationLogic.getCurrentProject()[i].description;
      p.appendChild(p2);
    }
  };

  const clearDisplay = () => {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach((x) => x.remove());
  };

  const addTask = () => {
    let p = document.createElement("p");
    p.classList.add("task");
    p.innerHTML = applicationLogic.getTitle();
    taskContainer.appendChild(p);
    p.addEventListener("click", revealDescription);
    let p2 = document.createElement("p");
    p2.classList.add("descriptionHide");
    p2.innerHTML = applicationLogic.getDescription();
    p.appendChild(p2);
    console.log(applicationLogic.myArrays);
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
    num++;
  };

  const switchProjects = (e) => {
    clearDisplay();
    applicationLogic.changeCurrentProject(e.target.id);
    document.querySelector(".mainTitle").innerHTML = e.target.innerHTML;
    display();
  };

  const revealDescription = (e) => {
    e.target.children[0].classList.toggle("descriptionHide");
  };

  return {
    display,
    addTask,
    addProject,
    switchProjects,
    defualtProject,
    initialDisplay,
    revealDescription,
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

domControl.initialDisplay();
domControl.display();
