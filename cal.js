// Function to append numbers or operators to the display
function appendNumber(value) {
    var display = document.getElementById('display');
    display.value += value;
}
// Function to set operation (e.g., +, -, *, /)
function setOperation(operation) {
    var display = document.getElementById('display');
    // Append the operation to the display
    display.value += operation;
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
function clearEntry() {
    var display = document.getElementById('display');
    // Remove the last character from the display value
    display.value = display.value.slice(0, -1);
}
// Function to calculate the result of the expression
function calculate() {
    var display = document.getElementById('display');
    try {
        // Evaluate the expression and update the display with the result
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}
// Expose functions to global scope so they can be called from HTML
window.appendNumber = appendNumber;
window.setOperation = setOperation;
window.clearDisplay = clearEntry;
window.calculate = calculate;
