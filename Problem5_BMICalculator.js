function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);
}

// Test cases
calculateBMI(70, 1.75)
calculateBMI(55, 1.60)
calculateBMI(90, 1.80)