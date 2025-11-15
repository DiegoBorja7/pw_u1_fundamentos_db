function save() {
    validateFields();
    
    // Si después de la validación no hay mensaje de error, mostramos el alert
    const msg = document.getElementById('msg_error');
    if (!msg || msg.style.display === "none" || msg.innerText.trim() === "") {
        alert("Formulario enviado con éxito.");
    }
}

function validateFields() {
    let name = document.getElementById('id_nombre').value;
    let lastName = document.getElementById('id_apellido').value;
    let birthDate = document.getElementById('id_fechaNacimiento').value;
    let email = document.getElementById('id_correoElectronico').value;
    let password = document.getElementById('id_contrasena').value;

    // Primero limpiamos todos los asteriscos
    hideMessage();

    let errors = []; // Array para almacenar los mensajes de error

    if(name === "" ) {
        errors.push("Por favor complete el nombre.");
        showAsterisk('id_error_nombre');
    }

    if(lastName === "" ) {
        errors.push("Por favor complete el apellido.");
        showAsterisk('id_error_apellido');
    }

    if(birthDate === "") {
        errors.push("Por favor complete la fecha de nacimiento.");
        showAsterisk('id_error_fechaNacimiento');
    }

    if(email ===""){
        errors.push("Por favor complete el correo electrónico.");
        showAsterisk('id_error_correoElectronico');
    } else if (!validateEmail(email)) {
        errors.push("Por favor ingrese un correo electrónico válido.");
        showAsterisk('id_error_correoElectronico'); 
    }

    if(password ===""){
        errors.push("Por favor complete la contraseña.");
        showAsterisk('id_error_contrasena');
    }


    // Si hay errores, mostramos el primer mensaje o un mensaje general si son varios
    if (errors.length > 1) {
        showMessage("Complete los campos faltantes.");
        return;
    } else if (errors.length === 1) {
        showMessage(errors[0]);
        return;
    }
    if(errors.length > 0) {
        showMessage(errors[0]);
    }
    
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

    const Asteriskerror = document.querySelectorAll('.error_asterisco')
    Asteriskerror.forEach(e => {
        e.innerText = "";
    });

}

function validateEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}