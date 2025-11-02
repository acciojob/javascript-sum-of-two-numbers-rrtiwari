let input1 = parseInt(prompt("Enter the first number:"));
let input2 = parseInt(prompt("Enter the second number:"));

if (isNaN(input1) || isNaN(input2)) {
    alert("Invalid input. Please enter a valid number.");
} else {
    alert(`The sum of ${input1} and ${input2} is ${input1 + input2}.`);
}

