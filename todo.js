const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function removeToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", removeToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSumit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoOJ = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newToDoOJ);
    paintToDo(newToDoOJ);  
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSumit);

function sayHello(){
  console.log("hello")
}

const savedToDos = localStorage.getItem("TODOS_KEY");
console.log(savedToDos);
if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

