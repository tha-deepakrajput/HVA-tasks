const taskForm = document.getElementById('task-form');
const pendingTasksDiv = document.getElementById('pending-tasks');
const completedTasksDiv = document.getElementById('completed-tasks');
const filterPriority = document.getElementById('filter-priority');

// Task Array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add Task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('task-title').value.trim();
  const desc = document.getElementById('task-desc').value.trim();
  const dueDate = document.getElementById('task-due-date').value;
  const priority = document.getElementById('task-priority').value;

  if (!title || !dueDate) {
    alert('Title and Due Date are required!');
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    desc,
    dueDate,
    priority,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

// Render Tasks
function renderTasks() {
  pendingTasksDiv.innerHTML = '';
  completedTasksDiv.innerHTML = '';

  tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = `task ${task.completed ? 'completed' : ''} priority-${task.priority}`;
    taskDiv.innerHTML = `
      <h3>${task.title} (${task.priority.toUpperCase()})</h3>
      <p>${task.desc}</p>
      <p>Due: ${task.dueDate}</p>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
      <button onclick="toggleCompletion(${task.id})">
        ${task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
    `;

    if (task.completed) {
      completedTasksDiv.appendChild(taskDiv);
    } else {
      pendingTasksDiv.appendChild(taskDiv);
    }
  });
}

// Edit Task
function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-desc').value = task.desc;
  document.getElementById('task-due-date').value = task.dueDate;
  document.getElementById('task-priority').value = task.priority;

  deleteTask(id);
}

// Delete Task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

// Toggle Completion
function toggleCompletion(id) {
  const task = tasks.find((t) => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Apply Filters
function applyFilters() {
  const priority = filterPriority.value;
  renderTasks();

  if (priority !== 'all') {
    document.querySelectorAll(`.task:not(.priority-${priority})`).forEach((task) => {
      task.style.display = 'none';
    });
  }
}

// Save Tasks to Local Storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialize App
renderTasks();
