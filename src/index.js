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
  const display = () => {
    for (let task in applicationLogic.myTasks) {
      let p = document.createElement("p");
      p.classList.add("task");
      p.innerHTML = applicationLogic.myTasks[task].title;
      taskContainer.appendChild(p);
    }
  };

  const add = () => {
    let p = document.createElement("p");
    p.classList.add("task");
    p.innerHTML = applicationLogic.getTitle();
    taskContainer.appendChild(p);
  };

  return { display, add };
})();

const taskAddReset = (function () {
  const submit = document.querySelector("#submit");
  const formContainer = document.querySelector(".formContainer");
  submit.addEventListener("click", domControl.add);
  const hide = () => {
    formContainer.classList.toggle("formHide");
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  };
  submit.addEventListener("click", hide);

  return {};
})();

domControl.display();
