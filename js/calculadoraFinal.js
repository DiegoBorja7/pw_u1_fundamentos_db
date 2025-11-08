//variable globales
let number1 = '';
let number2 = '';

function updateDisplay(value) {
    let display = document.getElementById('display');
    display.innerText += value;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.innerText = '';
    number1 = '';
    number2 = '';
}

function add() {
    const result = parseFloat(number1) + parseFloat(number2);
    updateDisplay(result);
}

function subtract() {
    const result = parseFloat(number1) - parseFloat(number2);
    updateDisplay(result);
}

function multiply() {
    const result = parseFloat(number1) * parseFloat(number2);
    updateDisplay(result);  
}

function divide() {
    const result = parseFloat(number1) / parseFloat(number2);
    updateDisplay(result);
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult(){
    const display = document.getElementById('display');
    const expression = display.innerText;
    const operators = ['+', '-', '*', '/'];
    let operatorFound = null;

    for (let i = 0; i < expression.length; i++) {
        if (operators.includes(expression[i])) {
            operatorFound = expression[i];
            break;
        }
    }

    if (operatorFound) {
        const [num1, num2] = expression.split(operatorFound).map(num => parseFloat(num));
        switch (operatorFound) {
            case '+':
                add(num1, num2);
                break;
            case '-':
                subtract(num1, num2);
                break;
            case '*':
                multiply(num1, num2);
                break;
            case '/':
                divide(num1, num2);
                break;
        }
    }
}