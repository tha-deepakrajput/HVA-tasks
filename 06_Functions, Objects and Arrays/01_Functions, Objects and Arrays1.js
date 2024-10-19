// A. Define the Array of People:

let people = []

people.push(
    {
        name: "deepak",
        age: 22
    },
    {
        name: "sandeep",
        age: 21
    },
    {
        name: 'ravi',
        age: 22
    },
    {
        name: 'saurabh',
        age: 22
    }
)
console.log(people[0].name);

function calculateAverageAge(people) {
    let sum = 0;
    let averageAge = 0;
    people.forEach(person => {
        sum += person.age
    });
    return averageAge = sum / people.length;
}
console.log(calculateAverageAge(people));