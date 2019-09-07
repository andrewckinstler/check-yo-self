class ToDoList {
  constructor(cardContents, tasks) {
    this.id = Date.now();
    this.title = cardContents.title;
    this.urgent = cardContents.trueOrFalse || false;
    this.tasks = tasks;
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
