var taskList = document.querySelector('.task-list');
var addTasks = document.querySelector('.add-task');
var taskInput = document.querySelector('.form-item');
var makeTaskBtn = document.querySelector('.make-list');
var mainSection = document.querySelector('.main');
var taskTitle = document.querySelector('.form-title');
var taskList = document.querySelector('.task-list');
var clearButton = document.querySelector('.clear');
var deleteTask = document.querySelector('.appended')

addTasks.addEventListener('click', appendTask);

document.querySelectorAll('.form-title').forEach(function(form) {
  form.addEventListener('keyup', disableClear);
});
makeTaskBtn.addEventListener('click', taskListButtonHandler);
clearButton.addEventListener('click', clearSidebar);
taskTitle.addEventListener('keyup', disableClear);
taskInput.addEventListener('keyup', disableClear);
taskList.addEventListener('click', deleteTaskItem);

function taskListButtonHandler(event) {
  createTaskList();
  clearSidebar();
  event.preventDefault();
}

function createTaskList() {
  document.querySelector('.no-card-text').style.display = 'none';
  mainSection.innerHTML +=
    // taskList.innerHTML;
    `<article class="task-card">
    <div class="divider divider-top">
      <h4>${taskTitle.value}</h4>
    </div>
    <ul>
      ${taskList.innerHTML}
    </ul>
    <div class="divider">
      <div class="task-card-bundle-button">
        <input type="image" class="urgent-button" src="check-yo-self-icons/urgent.svg"/>
        <p>URGENT</p>
      </div>
      <div class="task-card-bundle-button">
        <input type="image" class="delete-button" src="check-yo-self-icons/delete.svg"/>
        <p>DELETE</p>
      </div>
    </div>
  </article>`
};

function disableAll() {
  clearButton.disabled = true;
  addTasks.disabled = true;
  makeTaskBtn.disabled = true;
};

function clearSidebar() {
  taskTitle.value = '';
  taskInput.value = '';
  taskList.innerHTML = '';
  disableAll();
};

function appendTask() {
  taskList.innerHTML += `<div class="appended"><button class="task-delete"><img  class="delete-img" src='./check-yo-self-icons/delete.svg'></button>${taskInput.value}</div>`
};

function disableClear() {
  if (taskTitle.value === '' || taskInput.value === '') {
    disableAll();
  } else {
    clearButton.disabled = false;
    addTasks.disabled = false;
    makeTaskBtn.disabled = false;
  }
};

function deleteTaskItem(event) {
  console.log(event)
  if (event.target.className === 'delete-img') {
    event.target.closest('div').remove();
  }
};

Ertmer's pseudo for urgent button change class function
input: click
output: add class of 'urgent' and style the exisiting card appropriately

gen. idea: upon click, the card adopts a new class with styling to match urgent card comp
and button should stay in it's active state(red icon).

event listener on the parent element of the button?
