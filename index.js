document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage); //This ensures that the loadTasksFromLocalStorage function is called when the HTML document has been completely loaded and parsed. It loads any previously saved tasks from local storage.

function addTask() {
  const taskInput = document.querySelector("#text-input");
  const taskText = taskInput.value.trim(); //the trim removes excess whitespace
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
}

const submitTaskButton = document.querySelector("#submit-btn");
submitTaskButton.addEventListener("click", addTask);
