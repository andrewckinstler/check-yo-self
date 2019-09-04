var makeTaskBtn = document.querySelector('.make-task');
var mainSection = document.querySelector('.main');
var taskTitle = document.querySelector('.title');
var taskItem = document.querySelector('.item');



makeTaskBtn.addEventListener('click', createTaskList);


// input: click
// output: create new task list card
// user will add task title to input, and task items to input
// when they click make task list button, the title and individual tasks
// will be added to a new card in the main section, spilling
// from top left, to top right, and so on.
function createTaskList() {
  console.log('does it work?');
  mainSection.innerHTML +=
  `html goes here`
};
