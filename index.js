document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage); //This ensures that the loadTasksFromLocalStorage function is called when the HTML document has been completely loaded and parsed. It loads any previously saved tasks from local storage.

function addTask() {
  const taskInput = document.querySelector("#text-input");
  const taskText = taskInput.value.trim(); //the trim removes excess whitespace
  if (taskText === "") return;

  const li = document.createElement("li"); //this is to create the li element
  li.textContent = taskText;

  const deleteBtn = document.createElement("button"); //this creates the delete button for list
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteTask); //this line is call the function that will execute the delete function
  li.appendChild(deleteBtn);

  li.addEventListener("click", completeTask);

  const taskList = document.querySelector("taskList");
  taskList.appendChild(li); //this creates the child li element of the parent ul element

  taskInput.value = "";
}

const submitTaskButton = document.querySelector("#submit-btn");
submitTaskButton.addEventListener("click", addTask);
