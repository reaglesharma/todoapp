const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function (event) {
   event.preventDefault();
   addTodo();
});

input.addEventListener("keyup", function (event) {
   if (event.keyCode === 13) {
      addTodo();
   }
});

function addTodo() {
   if (input.value === "") return;
   const todo = document.createElement("li");
   todo.classList.add("todo");
   todo.innerHTML = input.value;
   todoList.appendChild(todo);
   input.value = "";
   todo.addEventListener("click", function () {
      todo.classList.toggle("completed");
   });
}

const darkModeBtn = document.getElementById("dark-mode-btn");
let darkMode = false;

darkModeBtn.addEventListener("click", function () {
   darkMode = !darkMode;
   document.body.classList.toggle("dark-mode", darkMode);
   darkModeBtn.innerHTML = darkMode ? "Light Mode" : "Dark Mode";
});
