let inventory = [];

inventory = [
    {id: 1, name: 'apple', price: 50, quantity: 5, category: 'food'},
    {id: 2, name: 'books', price: 100, quantity: 2, category: 'stationery'},
    {id: 3, name: 'phone charger', price: 800, quantity: 10, category: 'electronics'},
    {id: 4, name: 'laptop', price: 50000, quantity: 1, category: 'electronics'}
]

class Product {
    constructor(id, name, price, quantity, category){
        this.id = id,
        this.name = name, 
        this.price = price,
        this.quantity = quantity,
        this.category = category
    }
}

function displayProduct() {
    inventory.forEach(product => {
        console.log(`${product.name} - ${product.price}(${product.quantity})`);
    })
}
// displayProduct();

function addProduct(id, name, price, quantity, category) {
    let newProduct = new Product(id, name, price, quantity, category)
    inventory.push(newProduct);
}
// addProduct(5, 'earphone', 300, 2, 'electronics');
// console.log(inventory);

function updateProduct(id, quantity) {
    let updateElement = inventory.find(product => product.id === id);
    if (updateElement) {
        updateElement.quantity = quantity;
    }
    else {
        return `Match not found`;
    }
}
// console.log(updateProduct(2, 500));
// console.log(inventory);

function removeProduct(id) {
   inventory =  inventory.filter(product => product.id !== id);
}
removeProduct(1);
console.log(inventory);