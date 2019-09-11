class ToDoList {
  constructor(title, tasks, urgent, id) {
    this.id = id || Date.now();
    this.title = title;
    this.urgent = urgent || false;
    this.tasks = tasks;
  };
  
  saveToStorage(array) {
    var stringifyObj = JSON.stringify(array)
    console.log(stringifyObj);
    localStorage.setItem("objArray", stringifyObj);
  };

  deleteFromStorage() {

  };
  updateToDo() {
    this.urgent = !this.urgent;
  };
  updateTask(task) {
    task.isCompleted = !task.isCompleted;
    };
  };
