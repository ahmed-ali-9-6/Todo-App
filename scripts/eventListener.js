import {
  darkThemeToggleElement,
  TaskListElement,
  TaskSearchBarButton,
  TaskListLink,
  getDeleteIcons,
  getCheckboxElement,
} from "./elements.js";
import {addTask, deleteTask, toggleDarkMode, toggleTask} from "./utils.js"



export const initTaskListeners = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (event) => deleteTask(event, index));
  });

  getCheckboxElement().forEach((box, index) => {
    box.addEventListener("click", (event) => toggleTask(event, index));
    box.addEventListener("keydown", (event) => event.key === "Enter" && toggleTask(event, index));
  });
};

export const initListeners = () => {
darkThemeToggleElement.addEventListener("click", toggleDarkMode);
TaskSearchBarButton.addEventListener("click", addTask);
TaskListLink.addEventListener("click", () => {
  TaskListElement.classList.toggle("TaskList__list--hideCompleted");
  TaskListLink.classList.toggle("TaskList__link--isActive");
});
};

