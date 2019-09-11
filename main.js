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
mainSection.addEventListener('click', taskHandler);
mainSection.addEventListener('click', checkBox);

function taskListButtonHandler(event) {
  instObjs();
  clearSidebar();
  event.preventDefault();
};

function instObjs() {
  var taskContent = document.querySelectorAll('.appended');
  var tasks = [];
  for (var i = 0; i < taskContent.length; i++){
    var taskWords = taskContent[i].innerText;
    var task = new IndTask(taskWords);
    tasks.push(task);
  };
  var toDoCard = new ToDoList(taskTitle.value, tasks);
  toDoCards.unshift(toDoCard);
  console.log(toDoCard);
  document.querySelector('.no-card-text').style.display = 'none';
  domManipulation();
};

function domManipulation(){
  mainSection.innerHTML +=
    `<article data-id=${toDoCards[0].id} class="task-card">
    <div class="divider divider-top">
      <h4>${toDoCards[0].title}</h4>
    </div>
    <div>
      ${cardTaskHtml(toDoCards[0].tasks)}
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

function cardTaskHtml(cardTasks){
  var cardTaskInner = '';
  for (i = 0; i < cardTasks.length; i++){
    cardTaskInner +=
    `<div data-id =${cardTasks[i].id} class="appended"><button class="task-delete check-me"><img  class="check-me delete-img" src='./check-yo-self-icons/checkbox.svg'></button>${cardTasks[i].taskItem}</div>`
  };
  return cardTaskInner;
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
  taskList.innerHTML += `<div class="appended"><button class="task-delete"><img class="delete-img" src='./check-yo-self-icons/delete.svg'></button>${taskInput.value}</div>`;
};

function disableClear() {
  if (taskTitle.value === '' || taskInput.value === '') {
    disableAll();
  } else {
    clearButton.disabled = false;
    addTasks.disabled = false;
    makeTaskBtn.disabled = false;
  };
};

function deleteTaskItem(event) {
  if (event.target.className === 'delete-img') {
    event.target.closest('div').remove();
  };
};

function checkBox(event) {
  console.log(event);
  if (event.target.className === ('check-me delete-img')) {
    event.target.closest('.appended').className = 'appended checked-task';
    findCard().updateTask(findTask());
  };
};

function makeUrgent(event) {
  if (event.target.className === ('urgent-button')) {
    event.target.closest('article').className = 'urgent-task-card';
    var cardId = event.target.closest('article').dataset.id;
    for (var i = 0; i < toDoCards.length; i++) {
      console.log('firing');
      if (parseFloat(cardId) === toDoCards[i].id) {
        toDoCards[i].updateToDo();
      };
    };
    event.target.closest('.divider').className = 'urgent-divider';
  };
};

function findCard() {
  var cardId = parseFloat(event.target.closest('article').dataset.id);
  for (var i = 0; i < toDoCards.length; i++){
    if (cardId === toDoCards[i].id) {
      var currentCard = toDoCards[i];
      return currentCard;
    };
  };
};

function findTask() {
  var taskId = parseFloat(event.target.closest('.appended').dataset.id);
  var cardId = findCard();
  for (var i = 0; i < cardId.tasks.length; i++) {
    if (taskId === cardId.tasks[i].id) {
      var currentTask = cardId.tasks[i];
      return currentTask;
    };
  };
};

function removeCard(event) {
  if (event.target.className === 'delete-button') {
    event.target.closest('article').remove();
    var cardIndex = toDoCards.findIndex(findCard);
    toDoCards.shift();
  };
};

function taskHandler(event) {
  if (event.target.className === 'delete-img') {
    var getDiv = event.target.closest('div');
    var taskId = getDiv.dataset.id;
    console.log(taskId);
    console.log(tasks);
    console.log(tasks.findIndex(function(task) {
      console.log(task);
      return task.id === taskId;
    }));
  };
};
