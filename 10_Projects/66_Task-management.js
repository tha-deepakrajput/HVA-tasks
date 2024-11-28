const form = document.querySelector('form');
const allTasks = document.querySelector('.all-tasks');
let editIndex = null    // To track the index of the edit task..

window.addEventListener('DOMContentLoaded', () => {
    allTasks.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => displayTasks(task));
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    const task = {title, description, dueDate, priority: taskPriority}

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (editIndex !== null) {
        tasks[editIndex] = task;
        editIndex = null;
    }
    else {
        tasks.push(task);
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    allTasks.innerHTML = '';
    tasks.forEach((task, index) => displayTasks(task, index));        // Re-render the task 

    form.reset();
});

function displayTasks(task, index) {
    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('newDiv');

    newTaskDiv.style.width = '200px'
    newTaskDiv.style.border = '1px solid black';
    newTaskDiv.style.borderRadius = '10px'
    newTaskDiv.style.padding = '10px';
    newTaskDiv.style.margin = '10px';

    if (task.priority === 'Low') {
        newTaskDiv.classList.add('low-priority');
    } else if (task.priority === 'Medium') {
        newTaskDiv.classList.add('medium-priority');
    } else if (task.priority === 'High') {
        newTaskDiv.classList.add('high-priority');
    }

    newTaskDiv.innerHTML = `
        <p class="para-border"><b>Task Title</b> : ${task.title}</p>
        <p class="para-border"><b>Task Description</b>  : ${task.description}</p>
        <p class="para-border"><b>Due Date</b>  : ${task.dueDate}</p>
        <p class="para-border"><b>Task Priority</b>  : ${task.priority}<p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    // To edit a task 
    const editBtn = newTaskDiv.querySelector('.editBtn');
    editBtn.addEventListener('click', () => editTask(index));

    // To delete a task 
    const deleteBtn = newTaskDiv.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => deleteTask(index))
    
    allTasks.appendChild(newTaskDiv);
}


function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1) // To remove the task from the array 
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Update the local storage
    allTasks.innerHTML = '';
    tasks.forEach((task, idx) => displayTasks(task, idx));   // This will re-render the tasks
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // popullate the form with the task details 
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
    document.getElementById('task-priority').value = task.priority;

    editIndex = index;
}