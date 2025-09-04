/// variabel to store todo items
let todoList = [];

function validateInput() {
  const todoInput = document.getElementById("todo-input").value.trim();
  const todoDateInput = document.getElementById("todo-date-input").value;

  if (todoInput === "" || todoDateInput === "") {
    alert("Please fill in both the task and due date.");
    return false; // hentikan proses kalau ada yang kosong
  }

  // kalau lolos validasi, panggil addTodo()
  addTodo(todoInput, todoDateInput);
  return true;
}

function addTodo(todo, dueDate) {
  const todoItem = {
    task: todo,
    dueDate: dueDate,
    completed: false,
  };
  todoList.push(todoItem);
  renderTodoList();
}
