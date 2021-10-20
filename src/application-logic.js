import "./style.css";
import { compareAsc, format } from "date-fns";

export const applicationLogic = (function () {
  const submit = document.querySelector("#submit");
  let id = -1;

  let myTasks = [
    { title: "task1", description: "description1" },
    { title: "task2", description: "description2" },
  ];

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
    myTasks.push(new Task(getTitle(), getDescription()));

    console.log(myTasks);
  };

  submit.addEventListener("click", addTask);

  return { myTasks, getTitle, getDescription };
})();
