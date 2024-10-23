let expenses = [];


expenses = [
    {id: 1, name: 'food-expenses', amount: 100, date: '20th october', bill: 'food-bill'},
    {id: 2, name: 'electricity-expenses', amount: 9000, date: '21st october', bill: 'electricity-bill'},
    {id: 3, name: 'water-expenses', amount: 2000, date: '22nd october', bill: 'water-bill'}
]

class Expenses {
    constructor(id, name, amount, date, bill){
        this.id = id,
        this.name = name, 
        this.amount = amount,
        this.date = date,
        this.bill = bill
    }
}

function displayExpenses(name, amount, date) {
    expenses.forEach( exp => {
        console.log(`${exp.name} - ${exp.amount}(${exp.date})`)
    });
}
// displayExpenses();

function addExpense(id, name, amount, date, bill) {
    let newExpenses = new Expenses(id, name, amount, date, bill);
    expenses.push(newExpenses);
}
addExpense(4, 'travel-expense', 10000, '23rd october', 'travel-bill');
// console.log(expenses);
// displayExpenses()


function updateExpenses(id, amount) {
    let updateExp = expenses.find(exp => exp.id === id)
    if(updateExp) {
        updateExp.amount = amount;
    }
    else {
        return `Match not found`;
    }
}
updateExpenses(2, 3000);
// displayExpenses()


function removeExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id)
}
removeExpense(2);
displayExpenses()