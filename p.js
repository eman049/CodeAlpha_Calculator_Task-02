const display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    display.textContent = currentInput;
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    shouldResetDisplay = true;
}

function calculate() {
    let result;
    const secondOperand = currentInput;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    display.textContent = currentInput;
    operator = null;
    firstOperand = null;
}

function clearCalculator() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.textContent = '0';
}
function delkey() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0'; // Display '0' if input is empty
    }
}


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        if (id === 'one' || id === 'two' || id === 'three' || 
            id === 'four' || id === 'five' || id === 'six' ||
            id === 'seven' || id === 'eight' || id === 'nine' ||
            id === 'zero' ||
            id === 'point') {
            appendNumber(button.textContent);
        } else if (id === 'add' || id === 'subtract' || 
                   id === 'multiply' || id === 'divide') {
            chooseOperator(button.textContent);
        } else if (id === 'equals') {
            calculate();
        } else if (id === 'clear') {
            clearCalculator();
        }
        else if (id === 'del') {
            delkey();
        }
    });
});
