// Function to append numbers or operators to the display
function appendNumber(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

// Function to set operation (e.g., +, -, *, /)
function setOperation(operation: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    // Append the operation to the display
    display.value += operation;
}

function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}
function clearEntry(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    // Remove the last character from the display value
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression
function calculate(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        // Evaluate the expression and update the display with the result
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Expose functions to global scope so they can be called from HTML
(window as any).appendNumber = appendNumber;
(window as any).setOperation = setOperation;
(window as any).clearDisplay = clearEntry;
(window as any).calculate = calculate;

