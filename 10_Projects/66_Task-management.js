const form = document.querySelector('form');
const pendingTasks = document.querySelector('.pending_tasks');
const completedTasks = document.querySelector('.completed_tasks');

let editIndex = null; // To track the index of the edit task..

// Load tasks on page load
window.addEventListener('DOMContentLoaded', () => {
    refresh();
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    const task = { title, description, dueDate, priority: taskPriority, completed: false };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (editIndex !== null) {
        tasks[editIndex] = task; // Update task at edit index
        editIndex = null;
    } else {
        tasks.push(task); // Add new task
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    refresh(); // Re-render tasks
    form.reset();
});

// Display tasks in respective sections
function displayTasks(task, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.style.border = '1px solid black';
    taskDiv.style.borderRadius = '10px';
    taskDiv.style.padding = '10px';
    taskDiv.style.margin = '10px';

    taskDiv.innerHTML = `
        <p><b>Title:</b> ${task.title}</p>
        <p><b>Description:</b> ${task.description}</p>
        <p><b>Due Date:</b> ${task.dueDate}</p>
        <p><b>Priority:</b> ${task.priority}</p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? 'Mark as Pending' : 'Mark as Completed';
    toggleBtn.addEventListener('click', () => toggleCompletion(index));

    taskDiv.appendChild(toggleBtn);

    // Add edit and delete functionality
    taskDiv.querySelector('.editBtn').addEventListener('click', () => editTask(index));
    taskDiv.querySelector('.deleteBtn').addEventListener('click', () => deleteTask(index));

    // Append to respective section
    if (task.completed) {
        taskDiv.style.textDecoration = 'line-through';
        taskDiv.style.backgroundColor = 'lightgreen';
        completedTasks.appendChild(taskDiv);
    } else {
        taskDiv.style.textDecoration = 'none';
        taskDiv.style.backgroundColor = 'lightcoral';
        pendingTasks.appendChild(taskDiv);
    }
}

// Toggle task completion
function toggleCompletion(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed; // Toggle completion status
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refresh(); // Re-render tasks
}

// Delete a task
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove task
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refresh(); // Re-render tasks
}

// Edit a task
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // Populate form with task details
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
    document.getElementById('task-priority').value = task.priority;

    editIndex = index; // Set index for editing
}


// JavaScript for filtering tasks
const filterPriority = document.getElementById('filter-priority');
const filterDueDate = document.getElementById('filter-due-date');
const filterStatus = document.getElementById('filter-status');
const applyFiltersBtn = document.getElementById('apply-filters');

// Apply filters when the button is clicked
applyFiltersBtn.addEventListener('click', () => {
    applyFilters();
});

function applyFilters() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter((task) => {
        // Filter by priority
        if (filterPriority.value && task.priority !== filterPriority.value) {
            return false;
        }

        // Filter by due date
        if (filterDueDate.value) {
            const today = new Date();
            const dueDate = new Date(task.dueDate);

            if (
                filterDueDate.value === '7-days' &&
                (dueDate < today || (dueDate - today) / (1000 * 60 * 60 * 24) > 7)
            ) {
                return false;
            }

            if (filterDueDate.value === 'overdue' && dueDate >= today) {
                return false;
            }
        }

        // Filter by status
        if (filterStatus.value) {
            const isCompleted = filterStatus.value === 'completed';
            if (task.completed !== isCompleted) {
                return false;
            }
        }

        return true;
    });

    // Clear current tasks display
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    // Display only filtered tasks
    filteredTasks.forEach((task, index) => displayTasks(task, index));
}



// Refresh tasks display
function refresh() {
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task, index) => displayTasks(task, index));
}
