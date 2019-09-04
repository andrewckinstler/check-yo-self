
var taskList = document.querySelector('.task-list');
var addTasks = document.querySelector('.add-task');
var taskInput = document.querySelector('.form-item');
var makeTaskBtn = document.querySelector('.make-list');
var mainSection = document.querySelector('.main');
var taskTitle = document.querySelector('.title');
var taskList = document.querySelector('.task-list')

addTasks.addEventListener('click', appendTask);
makeTaskBtn.addEventListener('click', taskListButtonHandler);
document.querySelectorAll('.form').forEach(function(form) {
  form.addEventListener('keyup', disableClear);
});

// input: click
// output: create new task list card
// user will add task title to input, and task items to input
// when they click make task list button, the title and individual tasks
// will be added to a new card in the main section, spilling
// from top left, to top right, and so on.


function taskListButtonHandler() {
  createTaskList();
}

function createTaskList() {
  console.log('does it work?');
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
    <input type="image" class="urgent-button" src="check-yo-self-icons/urgent.svg"/>
    <input type="image" class="delete-button" src="check-yo-self-icons/delete.svg"/>
    </div>`
};

// Ertmer's pseudo code for click on make task list button
// input: click,
// output: several funcs, wrapped up in button handler function
// 1 create new card (create task list func) DUNZO
// 2 clear fields
// 3 disable button until keydown



function appendTask() {
  taskList.innerHTML += `<li><button class="delete-button">X</button>${taskInput.value}</li>`
};

function disableClear() {
  if (document.querySelector('.title') === '' || document.querySelector('.form-item') === '') {
    document.querySelector('.clear').disabled = true;
  };
};
