//variable globales
let shouldResetDisplay = false;

function updateDisplay(value) {
    let display = document.getElementById('display');
    
    // Si hay "Error", limpiar automáticamente antes de agregar nuevo valor
    if (display.innerText === 'Error') {
        display.innerText = '';
    }
    
    // Si es un operador
    if (['+', '-', '*', '/', '%', 'x'].includes(value)) {
        if (display.innerText === '' || display.innerText.endsWith('+') || 
            display.innerText.endsWith('-') || display.innerText.endsWith('*') || 
            display.innerText.endsWith('/') || display.innerText.endsWith('%') ||
            display.innerText.endsWith('x')) {
            return; // Evita operadores duplicados o al inicio
        }
        display.innerText += value;
        shouldResetDisplay = false; // Permitir agregar números después de operador
        return;
    }
    
    // Si es un número o punto
    if (shouldResetDisplay) {
        display.innerText = value;
        shouldResetDisplay = false;
    } else if (display.innerText === '0') {
        display.innerText = value; // Reemplaza '0' inicial
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.innerText = '0';
    shouldResetDisplay = false;
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

// Función auxiliar para determinar precedencia de operadores
function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/' || op === 'x') return 2;
    return 0;
}

// Función auxiliar para aplicar operación
function applyOp(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case 'x': return a * b; // x también es multiplicación
        case '/': return b === 0 ? NaN : a / b; // Evitar división por cero
        default: return 0;
    }
}

// Función para evaluar expresión matemática de manera segura
function evaluateExpression(expression) {
    const tokens = expression.replace(/\s+/g, '').match(/(\d+\.?\d*|\+|\-|\*|\/|%|x)/g);
    if (!tokens) return NaN;

    const values = []; // Stack para números
    const ops = [];    // Stack para operadores

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (!isNaN(token)) {
            // Es un número
            values.push(parseFloat(token));
        } else if (token === '%') {
            // % convierte el último número a porcentaje (multiplica por 0.01)
            if (values.length > 0) {
                values[values.length - 1] *= 0.01;
            } else {
                return NaN; // % sin número anterior es error
            }
        } else if (token === '+' || token === '-' || token === '*' || token === '/' || token === 'x') {
            // Es un operador
            while (ops.length > 0 && precedence(ops[ops.length - 1]) >= precedence(token)) {
                const val2 = values.pop();
                const val1 = values.pop();
                const op = ops.pop();
                values.push(applyOp(val1, val2, op));
            }
            ops.push(token);
        }
    }

    // Aplicar operaciones restantes
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

    // Validaciones básicas
    if (expression === '' || /[^\d\+\-\*\/\%\.\s x]/.test(expression)) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
        return;
    }

    // Verificar que no termine con operador (excepto % que es válido)
    if (/[\+\-\*\/x]$/.test(expression)) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
        return;
    }

    const result = evaluateExpression(expression);

    if (isNaN(result) || !isFinite(result)) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
    } else {
        // Redondear a 2 decimales máximo
        display.innerText = Math.round(result * 100) / 100;
        shouldResetDisplay = true;
    }
}