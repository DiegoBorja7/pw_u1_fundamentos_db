//variable globales
let shouldResetDisplay = false;

// Constantes para operadores
const OPERATORS = ['+', '-', '*', '/', '%', 'x'];
const INVALID_END_CHARS = /[\+\-\*\/x]$/;

// Precedencia de operadores
const PRECEDENCE = {
    '+': 1, '-': 1,
    '*': 2, '/': 2, 'x': 2
};

// Operaciones matemáticas
const OPERATIONS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    'x': (a, b) => a * b,
    '/': (a, b) => b === 0 ? NaN : a / b
};

function updateDisplay(value) {
    const display = document.getElementById('display');

    // Limpiar error automáticamente
    if (display.innerText === 'Error') {
        display.innerText = '';
    }

    // Si es operador
    if (OPERATORS.includes(value)) {
        const currentText = display.innerText;
        if (currentText === '' || currentText.endsWith(value)) {
            return; // Evita duplicados o al inicio
        }
        display.innerText += value;
        shouldResetDisplay = false;
        return;
    }

    // Si es número o punto
    if (shouldResetDisplay) {
        display.innerText = value;
        shouldResetDisplay = false;
    } else if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    shouldResetDisplay = false;
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

// Función auxiliar para determinar precedencia
function precedence(op) {
    return PRECEDENCE[op] || 0;
}

// Función auxiliar para aplicar operación
function applyOp(a, b, op) {
    return OPERATIONS[op] ? OPERATIONS[op](a, b) : 0;
}

// Función para evaluar expresión matemática de manera segura
function evaluateExpression(expression) {
    const tokens = expression.replace(/\s+/g, '').match(/(\d+\.?\d*|\+|\-|\*|\/|%|x)/g);
    if (!tokens) return NaN;

    const values = [];
    const ops = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else if (token === '%') {
            if (values.length > 0) {
                values[values.length - 1] *= 0.01;
            } else {
                return NaN;
            }
        } else if (OPERATORS.includes(token) && token !== '%') {
            while (ops.length > 0 && precedence(ops[ops.length - 1]) >= precedence(token)) {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(applyOp(val1, val2, op));
            }
            ops.push(token);
        }
    }

    while (ops.length > 0) {
        const val2 = values.pop();
        const val1 = values.pop();
        const op = ops.pop();
        values.push(applyOp(val1, val2, op));
    }

    return values.length === 1 ? values[0] : NaN;
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.innerText.trim();

    // Validaciones combinadas
    if (expression === '' || /[^\d\+\-\*\/\%\.\s x]/.test(expression) || INVALID_END_CHARS.test(expression)) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
        return;
    }

    const result = evaluateExpression(expression);

    if (isNaN(result) || !isFinite(result)) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
    } else {
        display.innerText = Math.round(result * 100) / 100;
        shouldResetDisplay = true;
    }
}