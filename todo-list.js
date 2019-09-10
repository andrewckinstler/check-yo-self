class ToDoList {
  constructor(title, tasks, urgent, id) {
    this.id = id || Date.now();
    this.title = title;
    this.urgent = urgent || false;
    this.tasks = tasks;
  };
  saveToStorage() {

  };
  deleteFromStorage() {

  };
  updateToDo() {
    this.urgent = !this.urgent;
  };
  updateTask() {

  };
};
