class ToDoList {
  constructor(cardContents) {
    this.id = cardContents.id || Date.now();
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

module.exports = ToDoList;
