let taskForm = document.getElementById('task-form');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('task-title').value.trim();
    const discription = document.getElementById('text-area').value.trim();
    const dueDate = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;

    if (!title || !dueDate) {
        alert('Title and Due date are required');
    }

    const newTask = {
        id: Date.now(),
        title, 
        discription,
        dueDate,
        priority,
        complete: false
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    tasksform.reset();
});


// HERE WE WILL RENDER THE TASKS : 

const pendingTasksDiv = document.querySelector('.pending-tasks');
const completedTasksDiv = document.querySelector('.completed-tasks');

function renderTasks() {
    completedTasksDiv.innerHTML = '';
    pendingTasksDiv.innerHTML = '';

    tasks.forEach(element => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${element.completed?'completed': ''} priority-${element.priority}`;
        taskDiv.innerHTML = `
        <h3>${element.title}(${element.priority.toUpperCase()})</h3>
        <p>${element.discription}</p>
        <p>${element.dueDate}</p>
        <button onclick="editTask(${element.id})">Edit</button>
        <button onclick="deleteTask(${element.id})">Delete</button>
        <button onclick="toggleCompletion(${element.id})">
            ${element.completed ? 'Mark as pending' : 'Mark as completed'}
        </button>
        `;

        if (element.completed) {
            completedTasksDiv.appendChild(taskDiv);
        }
        else {
            pendingTasksDiv.appendChild(taskDiv);
        }
    });
}

// FUNCTION TO EDIT THE TASK : 

function editTask(id) {
    const task = tasks.find((task) => task.id === id);

    document.getElementById('task-title').value = task.title;
    document.getElementById('text-area').value = task.discription;
    document.getElementById('task-date').value = task.dueDate;
    document.getElementById('task-priority').value = task.priority;

    deleteTask(id);
}


// FUNCTION TO DELETE THE TASK : 

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();
    renderTasks();
}


// TOGGLING THE TASK COMPLETION : 

function toggleCompletion(id) {
    const task = tasks.find((task) => task.id === id)

    task.completed = !task.completed;
    saveTasks();
    renderTasks();
}