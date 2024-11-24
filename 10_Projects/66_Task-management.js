const form = document.querySelector('form');
const allTasks = document.querySelector('.all-tasks');

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
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks(task);

    form.reset();
});

function displayTasks(task) {
    const newTaskDiv = document.createElement('div');

    newTaskDiv.style.width = '200px'
    newTaskDiv.style.border = '1px solid black';
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
    `;
    
    allTasks.appendChild(newTaskDiv);
}


