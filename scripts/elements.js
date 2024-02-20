const darkThemeToggleElement = document.querySelector(".DarkThemeToggle");
const AppElement = document.querySelector(".App");
const inputElement = document.querySelector(".TaskSearchBar__input");
const TaskListElement = document.querySelector(".TaskList__list");
const TaskListLink = document.querySelector(".TaskList__link");
const TaskSearchBarButton = document.querySelector(".TaskSearchBar__button");
const getDeleteIcons = () => document.querySelectorAll(".TaskList__deleteIcon");
const getCheckboxElement = () => document.querySelectorAll(".TaskList__checkbox");



export {
  darkThemeToggleElement,
  AppElement,
  TaskListElement,
  inputElement,
  TaskListLink,
  TaskSearchBarButton,
  getDeleteIcons,
  getCheckboxElement,
};

