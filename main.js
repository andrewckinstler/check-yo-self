var taskList = document.querySelector('.task-list');
var addTasks = document.querySelector('.add-task');
var taskInput = document.querySelector('.form-item');

addTasks.addEventListener('click', appendTask);

function appendTask() {
  taskList.innerHTML += `<li><button class="delete-button">X</button>${taskInput.value}</li>`
};
