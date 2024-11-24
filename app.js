const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  listItem.addEventListener('click', () => {
    listItem.remove();
  });

  taskList.appendChild(listItem);
  taskInput.value = '';
});
