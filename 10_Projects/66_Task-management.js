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
});