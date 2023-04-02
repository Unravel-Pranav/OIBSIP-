const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const newDescriptionInput = document.getElementById('new-description');
const addTaskButton = document.getElementById('add-task');
const removeAllTasksButton = document.getElementById('remove-all-tasks');
let tasks = [];

function addTask(e) {
  e.preventDefault();
  const taskText = newTaskInput.value.trim();
  const taskDescription = newDescriptionInput.value.trim();
  if (!taskText || !taskDescription) {
    return;
  }
  const task = { text: taskText, description: taskDescription };
  tasks.push(task);
  renderTasks();
  newTaskInput.value = '';
  newDescriptionInput.value = '';
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function completeTask(e) {
  e.target.classList.toggle('completed');
}

function removeAllTasks() {
  tasks = [];
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerText = task.text;
    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.innerText = task.description;
    taskItem.appendChild(taskDescriptionElement);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => removeTask(index));
    taskItem.appendChild(removeButton);
    taskItem.addEventListener('click', completeTask);
    taskList.appendChild(taskItem);
  });
  if (tasks.length > 0) {
    removeAllTasksButton.style.display = 'block';
  } else {
    removeAllTasksButton.style.display = 'none';
  }
}

addTaskButton.addEventListener('click', addTask);
removeAllTasksButton.addEventListener('click', removeAllTasks);
