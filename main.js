var taskList = document.querySelector('.task-list');
var addTasks = document.querySelector('.add-task');
var taskInput = document.querySelector('.form-item');
var makeTaskBtn = document.querySelector('.make-list');
var mainSection = document.querySelector('.main');
var taskTitle = document.querySelector('.form-title');
var taskList = document.querySelector('.task-list');
var clearButton = document.querySelector('.clear');
var deleteTask = document.querySelector('.appended');
var urgentButton = document.querySelector('.urgentButton');
var tasks = [];
var toDoCards = [];


document.querySelectorAll('.form-title').forEach(function(form) {
  form.addEventListener('keyup', disableClear);
});
makeTaskBtn.addEventListener('click', taskListButtonHandler);
clearButton.addEventListener('click', clearSidebar);
taskTitle.addEventListener('keyup', disableClear);
taskInput.addEventListener('keyup', disableClear);
taskList.addEventListener('click', deleteTaskItem);
mainSection.addEventListener('click', removeCard);
addTasks.addEventListener('click', appendTask);
mainSection.addEventListener('click', makeUrgent);
// individualTask.addEventListener('click', completeTask);
mainSection.addEventListener('click', taskHandler);



function taskListButtonHandler(event) {
  createTaskList();
  clearSidebar();
  event.preventDefault();
}

// task icon switch function
// span around each list content
// to target the text specifically
// add circle icon as default
//event listener with toggle on divs we are appending
// add checked icon into javascript
// inner html switch based on click
//
//

// object card change
// update ToDolist.isCompleted in main.js
// when ToDoList.isCompleted = true {
// update the icon and styling on that particular IndTask.
// }
//
//
//
//
//
//
//

function createTaskList() {
  var toDoCard = new ToDoList({title: taskTitle.value}, tasks);
  console.log(toDoCard);
  console.log(event.target);
  document.querySelector('.no-card-text').style.display = 'none';
  mainSection.innerHTML +=
    `<article class="task-card">
    <div class="divider divider-top">
      <h4>${taskTitle.value}</h4>
    </div>
    <div>
      ${taskList.innerHTML}
    </div>
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
  </article>`;
  tasks = [];
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

// one func to handle instantiation of ToDo list class
//
// loop through node list and add instantite the task class
// next line is to push into locally scoped arraY
// instantiate new todo list obj, passing previous array through the constructor
// from there local storage or whatevs
//
// dataset.id


// new find ID function
//  once we have the id we will use it as an argument
//
//
//
//
//
//


function appendTask() {
  var task = new IndTask(taskInput.value);
  tasks.push(task);
  console.log(tasks);
  taskList.innerHTML += `<div data-id =${task.id} class="appended"><button class="task-delete"><img  class="delete-img" src='./check-yo-self-icons/delete.svg'></button>${taskInput.value}</div>`;
  // tasks.push(
  // `<article class="task-card">
  //   <div class="divider divider-top">
  //     <h4>${taskTitle.value}</h4>
  //   </div>
  //   <div>
  //     ${taskList.innerHTML}
  //   </div>
  //   <div class="divider">
  //     <div class="task-card-bundle-button">
  //       <input type="image" class="urgent-button" src="check-yo-self-icons/urgent.svg"/>
  //       <p>URGENT</p>
  //     </div>
  //     <div class="task-card-bundle-button">
  //       <input type="image" class="delete-button" src="check-yo-self-icons/delete.svg"/>
  //       <p>DELETE</p>
  //     </div>
  //   </div>
  // </article>`)
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
  if (event.target.className === 'delete-img') {
    event.target.closest('div').remove();
  }
};


// Ertmer's pseudo for urgent button change class function
// input: click
// output: add class of 'urgent' and style the exisiting card appropriately
//
// gen. idea: upon click, the card adopts a new class with styling to match urgent card comp
// and button should stay in it's active state(red icon).
//
// event listener on the parent element of the button? main?, since that is the
// closest container that *isnt* dynamically added? or the dynamic div that contains
// the button?

// this seems too ineffiecent - maybe i need to change the class name and then
// target the innerHTML of that new class?
function makeUrgent(event) {
  console.log(event);
  if (event.target.className === ('urgent-button')) {
    event.target.closest('article').className = 'urgent-task-card';
    event.target.closest('.divider').className = 'urgent-divider';
    event.target.closest('.divider-top').className = 'urgent-divider-top';
  }
};

function removeCard(event) {
  if (event.target.className === 'delete-button') {
    event.target.closest('article').remove();
  }
};

function taskHandler(event) {
  if (event.target.className === 'delete-img') {
    var getDiv = event.target.closest('div');
    var taskId = getDiv.dataset.id;
    console.log(taskId);
    console.log(tasks);
    // var closestList = tasks.findIndex(taskId);
    console.log(tasks.findIndex(function(task) {
      console.log(task);
      return task.id === taskId;
    }));
  }
};

// function getId(event) {
    // var getDiv = event.target.closest('div');
    // var taskId = getDiv.dataset.id;
    // var closestList = tasks.find(taskId);
    // console.log(closestList);
    // return taskId;
// };

// function completeTask() {
//   console.log(closestList);
// };
