// Add task functionality
const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const daySelect = document.getElementById('daySelect');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const timeValue = taskTime.value;
  const selectedDay = daySelect.value;

  if (taskText !== '' && timeValue !== '') {
    const dayColumn = document.getElementById(selectedDay).querySelector('ul');

    // Create a new task item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${timeValue} - ${taskText}
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;

    dayColumn.appendChild(listItem);

    // Clear input fields
    taskInput.value = '';
    taskTime.value = '';
  }
});

// Edit and delete task functionality
function editTask(button) {
  const listItem = button.parentElement;
  const taskDetails = listItem.textContent.split(' - ')[1].split('Edit')[0].trim();
  const timeDetails = listItem.textContent.split(' - ')[0].trim();

  taskInput.value = taskDetails;
  taskTime.value = timeDetails;

  listItem.remove();
}

function deleteTask(button) {
  if (confirm('Are you sure you want to delete this task?')) {
    const listItem = button.parentElement;
    listItem.remove();
  }
}