let product = [];

product = [
    {id: 1, name: 'Cables', price: 200, category: 'electronics'},
    {id: 2, name: 'Apple', price: 9, category: 'food'},
    {id: 3, name: 'Note book', price: 100, category: 'stationary'},
    {id: 4, name: 'Bulb', price: 80, category: 'electronics'}
]

function displayProducts(product) {
    product.forEach(item => {
        console.log(`${item.name} - $${item.priceWithTax?item.priceWithTax:item.price}`);
    });
}
// displayProducts(product);

let productWithTax = product.map(item => {
    return {
        id: item.id,
        name: item.name,
        category: item.category,
        priceWithTax: item.price + item.price * (10/100)
    }
})
// displayProducts(productWithTax);

let foodProducts = product.filter(item => {
    return item.category === 'food';
})
// displayProducts(foodProducts);

let affordableProducts = product.filter(item => {
    return item.price < 10;
})
// displayProducts(affordableProducts);


let totalPrice = 0

function totalPriceOfProducts(product) {
    product.forEach(item => {
        totalPrice += item.price;
    })
    return `Total Price : ${totalPrice}`;
} 
console.log(totalPriceOfProducts(product));