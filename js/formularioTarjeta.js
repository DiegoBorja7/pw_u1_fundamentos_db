function save(){
    validateFields();
}

function validateFields() {
    let cardHolder = document.getElementById('id_nombreTarjeta').value;
    let cardNumber = document.getElementById('id_numeroTarjeta').value;    
    let expiryDate = document.getElementById('id_fechaExpiracion').value;
    let cvv = document.getElementById('id_cvv').value;

    // Primero limpiamos todos los asteriscos
    hideMessage();

    let errors = [];    

    // Validar nombre del titular
    if(cardHolder === "" ) {
        errors.push("Por favor complete el nombre del titular.");
        showAsterisk('id_error_nombreTarjeta');
    }

    // Validar número de tarjeta
    if(cardNumber === "") {
        errors.push("Por favor complete el número de tarjeta.");
        showAsterisk('id_error_numeroTarjeta');
    } else if(!validateCardNumber(cardNumber)) {
        errors.push("Número de tarjeta inválido.");
        showAsterisk('id_error_numeroTarjeta');
    }

    // Validar fecha de expiración
    if(expiryDate === "") {
        errors.push("Por favor complete la fecha de expiración.");
        showAsterisk('id_error_fechaExpiracion');
    } else if(!validateExpiryDate(expiryDate)) {
        errors.push("Formato de fecha inválido (MM/YY).");
        showAsterisk('id_error_fechaExpiracion');
    }

    // Validar CVV
    if(cvv === "") {
        errors.push("Por favor complete el CVV.");
        showAsterisk('id_error_cvv');
    } else if(!/^\d{3,4}$/.test(cvv)) {
        errors.push("CVV debe ser de 3 o 4 dígitos.");
        showAsterisk('id_error_cvv');
    }

    // Mostrar mensaje de error o éxito
    if (errors.length > 1) {
        showMessage("Complete los campos faltantes.");
    } else if (errors.length === 1) {
        showMessage(errors[0]);
    } else {
        alert("✓ Pago procesado correctamente");
    }
}

function validateCardNumber(cardNumber) {
    // Eliminar espacios
    let number = cardNumber.replace(/\s/g, '');
    // Debe tener entre 13 y 19 dígitos
    return /^\d{13,19}$/.test(number);
}

function validateExpiryDate(expiryDate) {
    // Formato MM/YY
    if(!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        return false;
    }
    
    let [month, year] = expiryDate.split('/').map(Number);
    
    // Validar mes
    if(month < 1 || month > 12) {
        return false;
    }
    
    // Validar que no esté vencida
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear() % 100; // Últimos 2 dígitos
    let currentMonth = currentDate.getMonth() + 1;
    
    if(year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }
    
    return true;
}

function showMessage(msg) {
    let mensage = document.getElementById('msg_error');
    mensage.innerText = msg;
    mensage.style.display = "block";
}

function showAsterisk(fieldId) {
    document.getElementById(fieldId).innerText = "*";
}

function hideMessage() {
    let mensage = document.getElementById('msg_error');
    mensage.innerText = "";
    mensage.style.display = "none";
    
    const Asteriskerror = document.querySelectorAll('.error_asterisco');
    Asteriskerror.forEach(e => {
        e.innerText = "";
    });
}