import { applicationLogic } from "./application-logic";

export const storageLogic = (function () {
  const defaultData = [
    [
      { name: "Home" },
      { title: "task1", description: "description1", date: "2021-10-27" },
      { title: "task2", description: "description2", date: "2021-10-27" },
    ],
  ];

  const updateLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(applicationLogic.myArrays));
  };

  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("data"));
  };

  const firstTimeUser = () => {
    if (getLocalStorage() == null) {
      localStorage.setItem("data", JSON.stringify(defaultData));
      return getLocalStorage();
    } else {
      return getLocalStorage();
    }
  };

  return { updateLocalStorage, getLocalStorage, firstTimeUser, defaultData };
})();
