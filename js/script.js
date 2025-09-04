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
