const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos"));

todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
    todos = todos.filter((t) => t !== todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = input.value.trim();

  if (newTodo) {
    const li = document.createElement("li");
    li.textContent = newTodo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      list.removeChild(li);
      todos = todos.filter((t) => t !== newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
  }
});
