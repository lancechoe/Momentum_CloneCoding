// todo.js
// .html 에 존재하는 form 으로 부터 받는 string 을

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

// Function no.1 : 입력 받는 todo를 localStorage 에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Function no.2 : event 발생하면 타겟을 없애줌 -> no.3 에서 사용
function deleteTodo(event) {
  const li = event.target.parentElement; // 어떤 li 인지
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

// Function no.3 :
// 1) <li></li> 를 생성
// 2) <span></span> 를 생성하고 todo를 안에 넣음
// 3) <button></button> 을 생성해 X 클릭하여 "deleteTodo()" 를 통해 지움
// 4) span과 button을 li 에 넣고 그 li를 "todoList" 에 넣음음
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("todo-button");
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.append(li);
}

// Function no.4 : form에 입력한 string을 "toDos" 에 저장 하고 그려주고 다시 빈칸 만들어줌.
function handlToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value; // saving
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoInput.value = ""; // emptying todoInput

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handlToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // local 에 있는 string을 array로 우리가 활용할 수 있게끔 만들어줌 (JSON.parse)
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo); // array에 있는 (Input으로 받은거)
}
