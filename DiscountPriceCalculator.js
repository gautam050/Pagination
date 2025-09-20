function calculateFinalPrice(price) {
    if (price > 20) {
        price = price - (price * 0.10); 
    }
    console.log(`The final price of the item is: ${price}`);
}


calculateFinalPrice(25)
calculateFinalPrice(20)
calculateFinalPrice(15)
calculateFinalPrice(30)
