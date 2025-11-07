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
    alert("Error: División por cero.");
    return null;
  }
  return num1 / num2;
}

//funcion principal que llama a las demas segun la operacion
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

  document.getElementById("id_result").value = result;

  // Validar que los campos no estén vacíos
  const v1 = document.getElementById("id_num1").value;
  const v2 = document.getElementById("id_num2").value;

  if (v1.trim() === "" || v2.trim() === "") {
    alert("Por favor, complete ambos campos antes de calcular.");
    document.getElementById("id_result").value = "";
    return;
  }
}

//05 de noviembre de 2025

function fundamentalsJS() {
  /*Tipos de variables*/
  var name = "Diego"; //ya es considerada obsoleta
  let lastName = "Borja"; // nueva forma, variables que pueden cambiar
  let lastName2 = 10;
  lastName2 = "Simbaña"; //reasignacion de variable

  let array = [1, 2, 3, 4]; //arreglo
  let daysWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ]; //arreglo de strings

  const PI = 3.141516; // constante
  const IVA = 15.0;

  console.log("Fundamentos de JavaScript");
  console.log("Hola " + name + " " + lastName);
  console.log("Valor de PI: " + PI);
  console.log("Días de la semana: " + daysWeek);

  /*Arreglos*/
  const arrayDaysWeek = ["Lunes", "Martes", "Miércoles", "Jueves"];
  console.log("Días de la semana: " + arrayDaysWeek);
  arrayDaysWeek.push("Viernes"); //agregar un elemento al final del arreglo
  console.log("Días de la semana: " + arrayDaysWeek);
  arrayDaysWeek.unshift("Días"); //agregar un elemento al inicio del arreglo
  console.log("Días de la semana: " + arrayDaysWeek);

  console.log("Día: " + arrayDaysWeek[2]); //acceder a un elemento del arreglo

  //manejo de Nulos, undefined, y vacio.
  arrayDaysWeek.push(null); //agregar un elemento nulo
  arrayDaysWeek.push(""); //agregar un elemento vacio
  console.log("Día: " + arrayDaysWeek[5]); //acceder a un elemento vacio
  console.log("Día: " + arrayDaysWeek[6]); //acceder a un elemento nulo
  console.log("Día: " + arrayDaysWeek[7]); //acceder a un elemento indefinido

  //unir dos arreglos
  const evenNumbers = [2, 4, 6, 8];
  const oddNumbers = [1, 3, 5, 7, 9];
  const allNumbers = oddNumbers.concat(evenNumbers); // unir dos arreglos
  console.log("Números impares y pares: " + allNumbers); // Imprime todos los números

  /*Sentencias de control*/
  let age = 20;

  //condicional if-else
  if (age < 18) {
    console.log("Menor de edad");
  } else if (age >= 18 && age < 65) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }

  //switch-case
  let day = 3;
  console.log("Día de la semana: ");
  switch (day) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Día inválido");
  }

  //for loop
  for (let i = 0; i < 5; i++) console.log("Iteración número: " + i);

  //for...of loop
  const fruits = ["Manzana", "Sandía", "Papaya", "Naranja"];
  for (let fruit of fruits) {
    console.log("Fruta: " + fruit);
  }

  /* Manejo de objetos */
  const teacher = {
    //objeto literal
    name: "Diego",
    lastName: "Borja",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city: "Quito",
  };

  console.log(teacher);

  teacher.name = "Andres"; //modificar propiedad del objeto
  console.log("Nombre del profesor: " + teacher.name);

  if (teacher.city === "Quito") {
    console.log("El profesor es Quiteño");
  }

  if (teacher.age !== 18) {
    console.log("El profesor es diferente de 18 años");
  } else {
    console.log("El profesor tiene 18 años");
  }

  //for para recorrer las propiedades del objeto
  for (let clave in teacher) {
    console.log(clave + ": " + teacher[clave]);
  }

  //06 de noviembre de 2025

  const student1 = {
    name: "Diego",
    lastName: "Borja",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city: "Quito",
  };

  const student2 = {
    name: "Andres",
    lastName: "Simbaña",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city: "Quito",
  };

  const arrayStudents = [
    student1,
    student2,
    {
      name: "Diego2",
      lastName: "Simbaña",
      age: 25,
      ecuadorian: true,
      genre: "M",
      city: "Quito",
    },
  ];

  console.log(arrayStudents[2]);

  /*desestructuración*/

  const array1 = [10, 20, 30, 40, 50];
  console.log("Arreglo original: " + array1);

  const [p1, p2, p3, p4, p5, p6] = array1;
  console.log("Elemento 1: " + p1);
  console.log("Elemento 2: " + p2);
  console.log("Elemento 3: " + p3);
  console.log("Elemento 4: " + p4);
  console.log("Elemento 5: " + p5);
  console.log("Elemento 6: " + p6);

  const [first, , , , last] = array1;
  console.log("Primer elemento: " + first);
  console.log("Último elemento: " + last);

  //declaracion de manera indirecta
  const [a, b, c] = [100, 200, 300];
  console.log("Arreglo original: " + [100, 200, 300]);
  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);

  print(array1);

  //funcion para imprimir el contenido de un arreglo
  function print(array) {
    console.log("Contenido del arreglo: ");
    console.log(array);
  }

  //destructuración de objetos
  const student3 = {
    name1: "Diego",
    lastName: "Simbaña",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city1: "Quito",
  };

  const {name1, city1} = student3;
  console.log("Nombre del estudiante: " + name1);
  console.log("Ciudad del estudiante: " + city1);

  //en 1 paso
  const {name:nombre, city:ciudad} = {
    name: "Andres",
    lastName: "Simbaña",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city: "Manta",
  };

  console.log("Nombre del estudiante: " + nombre);
  console.log("Ciudad del estudiante: " + ciudad);

  //operador rest
  [a1, b2, ...rest] = [10, 20, 30, 40, 50];
  console.log(rest);

  const student4 = {
    name: "Diego",
    lastName: "Simbaña",
    age: 25,
    ecuadorian: true,
    genre: "M",
    city: "Quito",
    address:{
      street: "Av.America",
      neibghborhood: "La Carolina",
      Number: 155
    }
  };

  console.log("Estudiante 4: ", student4);

  console.log("Dirección: ", student4.address);
  console.log("Númeracion: " + student4.address.Number);

  //desestructuración anidada
  const {age:edad, address} = student4;
  console.log("Edad: " + edad);
  console.log("Dirección: ", address);
  const{street} = address;
  console.log("Calle: " + street);

  const {address:{neibghborhood, street:calle, Number:numeracion}} = student4;
  console.log("Barrio: " + neibghborhood);
  console.log("Calle: " + calle);
  console.log("Número de la dirección: " + numeracion);
}
