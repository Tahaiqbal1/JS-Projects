
const tasks = [];

function handleAddKeyButton(event) {
  if (event.key === "Enter") {
    addToDo();
    displayToDoList();
  }
}

function addToDo() {
  let taskNameInput = document.querySelector(".js-input-task-name");
  let taskDateInput = document.querySelector(".js-input-task-date");
  const name = taskNameInput.value;
  const date = taskDateInput.value;
  let task = {
    name,
    date,
  };
  tasks.push(task); 
}

function displayToDoList() {
  let taskListHTML = "";
  tasks.forEach(function (taskItem , index) 
  {
    const html = `<p>Task: ${taskItem.name}  Date: ${taskItem.date} <button onclick="deleteToDo(${index})">Delete</button></p>`;
    taskListHTML += html;
  })
  ;
  
 
  document.querySelector(".js-todo-display").innerHTML = taskListHTML;
}

function deleteToDo(i) {
  tasks.splice(i, 1);
  displayToDoList();
}
