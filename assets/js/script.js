
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//Task creation (must be placed BEFORE the event listener to avoid an undefined error)
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}

//Button creation w/clickable event
buttonEl.addEventListener("click", createTaskHandler);


