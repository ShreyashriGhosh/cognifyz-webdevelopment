function calculateSum() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    
    // Convert input values to numbers and add them
    let sum = parseFloat(number1) + parseFloat(number2);
    
    // Display the result
    if (!isNaN(sum)) {
        document.getElementById("result").innerText = "Result: " + sum;
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers!";
    }
}
