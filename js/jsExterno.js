function changeColor(id_element, color) {
  document.getElementById(id_element).style.color = color;
  document.getElementById(id_element).style.backgroundColor = "black";
}

function addElement(id_element, html) {
  document.getElementById(id_element).innerHTML = html;
}

function buildH1() {
  return '<h1 id="id_h1">Calculadora</h1>';
}

function deleteElement(id_element) {
  document.getElementById(id_element).remove();
}

function hiddenElement(id_element) {
  document.getElementById(id_element).style.display = "none";
}

function showElement(id_element) {
  document.getElementById(id_element).style.display = "block";
}

//funciones de suma, resta, multiplicacion y division
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: División por cero";
  }
  return num1 / num2;
}

function calculate(operation) {
  let num1 = parseFloat(document.getElementById("id_num1").value);
  let num2 = parseFloat(document.getElementById("id_num2").value);
  let result;

  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Operación no válida";
  }

  document.getElementById("id_result").innerText = result;
}
