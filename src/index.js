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

  const display = () => {
    for (let task in applicationLogic.myTasks) {
      let p = document.createElement("p");
      p.classList.add("task");
      p.innerHTML = applicationLogic.myTasks[task].title;
      taskContainer.appendChild(p);
    }
  };

  const addTask = () => {
    let p = document.createElement("p");
    p.classList.add("task");
    p.innerHTML = applicationLogic.getTitle();
    taskContainer.appendChild(p);
  };

  const addProject = () => {
    let h3 = document.createElement("h3");
    h3.classList.add("projectTitle");
    h3.innerHTML = "New Project";
    menuConainer.appendChild(h3);
  };

  return { display, addTask, addProject };
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

domControl.display();
console.log(applicationLogic.currentProject);
