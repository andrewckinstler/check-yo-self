class ToDoList {
  constructor(title, tasks, urgent) {
    this.id = Date.now();
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
