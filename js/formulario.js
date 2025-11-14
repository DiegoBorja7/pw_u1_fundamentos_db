function save() {
    validateFields();
}

function validateFields() {
    let name = document.getElementById('id_nombre').value;
    let lastName = document.getElementById('id_apellido').value;
    let birthDate = document.getElementById('id_fechaNacimiento').value;
    let email = document.getElementById('id_correoElectronico').value;
    let password = document.getElementById('id_contrasena').value;

    if(name === "" ) {
        showMessage("Por favor complete el nombre.");
        showAsterisk('id_error_nombre');
    }

     if(lastName === "" ) {
        showMessage("Por favor complete el apellido.");
        showAsterisk('id_error_apellido');
    }

    if(email ===""){
        showMessage("Por favor complete el correo electrónico.");
        showAsterisk('id_error_correoElectronico');
    } else if (!validateEmail(email)) {
        showMessage("Por favor ingrese un correo electrónico válido.");
        showAsterisk('id_error_correoElectronico'); 
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
