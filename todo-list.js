class ToDoList {
  constructor(cardContents) {
    this.id = Date.now();
    this.title = cardContents.title;
    this.urgent = cardContents.trueOrFalse || false;
    this.tasks = [IndTasks.tasks];
  };
  saveToStorage() {

  };
  deleteFromStorage() {

  };
  updateToDo() {

  };
  updateTask() {

  };
};

// if(typeof module !== 'undefined') {
//   module.exports = ToDoList;
// }
