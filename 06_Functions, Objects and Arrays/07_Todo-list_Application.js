let tasks = []

tasks = [
    {id: 1, description: 'Homework', duedate: '1st november', status: 'pending'},
    {id: 2, description: 'Officework', duedate: '26th october', status: 'completed'},
    {id: 3, description: 'projects work', duedate: '31st october', status: 'incomplete'}
]

class Task {
    constructor(id, description, duedate, status){
        this.id = id,
        this.description = description,
        this.duedate = duedate,
        this.status = status
    }
}

function displayTasks() {
    tasks.forEach(task => {
        console.log(`${task.description} - ${task.duedate}(${task.status})`);
    })
}
// displayTasks();


function addTask(id, description, duedate, status) {
    let newTask = new Task(id, description, duedate, status);
    tasks.push(newTask);
}
// addTask(4, 'medical shop work', '24th november', 'pending');
// displayTasks();


function updateTask(id, status) {
    let newUpdateTask = tasks.find(task => task.id === id);
    if(newUpdateTask) {
        newUpdateTask.status = status;
    }
    else {
        console.log(`Match not found`);
    }
}
// updateTask(2, 'incomplete');
// displayTasks();


// by using map function 

function updateTaskWithMap(id, status) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.status = status;
        }
        return task;
    })
}
updateTaskWithMap(3, 'complete');
displayTasks();