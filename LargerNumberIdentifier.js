function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log("Both numbers are equal");
    }
}
compareNumbers(5, 10)
compareNumbers(7, 7)
compareNumbers(-1, -10)
compareNumbers(0, 0)
compareNumbers(-5, -2)
