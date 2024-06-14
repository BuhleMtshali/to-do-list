document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage); //This ensures that the loadTasksFromLocalStorage function is called when the HTML document has been completely loaded and parsed. It loads any previously saved tasks from local storage.

function addTask(event) {
  event.preventDefault(); // Prevent form submission
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

  const taskList = document.querySelector("#taskList");
  taskList.appendChild(li); //this creates the child li element of the parent ul element

  taskInput.value = "";
  saveTasksToLocalStorage(); //this calls the save to local storage function
}

function deleteTask(event) {
  const task = event.target.parentElement;
  const taskList = document.querySelector("#taskList");
  taskList.removeChild(task);
  saveTasksToLocalStorage(); //update the local storage
}
function completeTask(event) {
  const task = event.target;
  if (task.tagName === "LI") {
    task.classList.toggle("completed");
    saveTasksToLocalStorage();
  }
}

//this function adds to the local storage

function saveTasksToLocalStorage() {
  const tasks = []; // Empty array to load list items
  const taskItems = document.querySelectorAll("#taskList li"); // Get all li elements

  taskItems.forEach((taskItem) => {
    const taskText = taskItem.firstChild.textContent.trim(); // Get the task text
    const isCompleted = taskItem.classList.contains("completed");
    tasks.push({ text: taskText, completed: isCompleted });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteTask);
      li.appendChild(deleteBtn);

      if (task.completed) {
        li.classList.add("completed");
      }

      li.addEventListener("click", completeTask);

      const taskList = document.getElementById("taskList");
      taskList.appendChild(li);
    });
  }
}

const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", addTask);
