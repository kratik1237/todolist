document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
          <span class="task-text">${taskText}</span>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-button")) {
        event.target.parentNode.remove();
      }
    });
  });
  