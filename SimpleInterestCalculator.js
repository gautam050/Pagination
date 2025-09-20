function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    console.log(`The simple interest is: ${interest.toFixed(1)}`);
}
calculateSimpleInterest(1000, 5, 3)
calculateSimpleInterest(1500, 7, 5)
calculateSimpleInterest(0, 6, 2)
