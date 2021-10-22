import { applicationLogic } from "./application-logic";

export const storageLogic = (function () {
  const defaultData = [
    [
      { name: "Home" },
      {
        title: "First Task: Add a task!",
        description: "Click the button in the upper or lower right!",
      },
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
