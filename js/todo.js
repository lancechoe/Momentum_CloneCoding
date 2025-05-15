const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  // localStorage 에 저장
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; // 어떤 li 인지
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("todo-button");
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.append(li); // <li> <span></span> </li>
}

function handlToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // saving
  toDoInput.value = ""; // emptying todoInput
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handlToDoSubmit);
