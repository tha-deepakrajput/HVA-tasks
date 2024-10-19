const cart = [];

cart.push(
    {name: 'Colgate', price: 50, qty: 5},
    {name: 'Tooth-Brush', price: 30, qty: 10},
    {name: 'Toungue-cleaner', price: 20, qty: 10},
    {name: 'Bottle', price: 40, qty: 20},
)

function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.qty;
    });
    return totalPrice;
}
console.log(calculateTotalPrice(cart));