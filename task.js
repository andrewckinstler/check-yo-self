class IndTask {
  constructor(taskItem, isCompleted, id) {
    this.taskItem = taskItem;
    this.isCompleted = isCompleted || false;
    this.id = id || Date.now();
  }
};
