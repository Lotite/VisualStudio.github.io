document.querySelector("button").addEventListener("click" , (e)=>{
    e.preventDefault();
    validarFormulario();
})
function validarFormulario() {
    // Validar fecha
    const fecha = document.getElementById('fechaCreacion')
    if (!esFechaValida(fecha.value)) {
        fecha.style.border = '2px solid red';
        document.getElementById('fechaError').textContent = 'Fecha inválida.';
    } else {
        fecha.style.border = '';
        document.getElementById('fechaError').textContent = '';
    }

    // Validar empleado
    const empleadoRegex = /^[A-Z]{2}[^a-zA-Z0-9]\d{4}$/;
    const empleado = document.getElementById('empleado');
    if (!empleadoRegex.test(empleado.value)) {
        document.getElementById('empleadoError').textContent = 'Formato de empleado inválido. Ejemplo XX$1234.';
        empleado.style.border = '2px solid red';
    } else {
        document.getElementById('empleadoError').textContent = '';
        empleado.style.border = '';
    }

    // Validar destinatario
    const destinatarioRegex = /^[A-Z]{2,3}_[A-Z][a-z]+:\d{4}$/;
    const destinatario = document.getElementById('destinatario');
    if (!destinatarioRegex.test(destinatario.value)) {
        document.getElementById('destinatarioError').textContent = 'Formato de destinatario inválido. Ejemplo XX_Ciudad:1234.';
        destinatario.style.border = '2px solid red';
    } else {
        document.getElementById('destinatarioError').textContent = '';
        destinatario.style.border = '';
    }

    // Validar peso
    const peso = document.getElementById('peso');
    if (peso.value < 100 || peso.value > 5000) {
        document.getElementById('pesoError').textContent = 'El peso debe estar entre 100 y 5000 gramos.';
        peso.style.border = '2px solid red';
    } else {
        document.getElementById('pesoError').textContent = '';
        peso.style.border = '';
    }

    // Validar cuenta
    const cuentaRegex = /^ES\d{2}\s?\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
    const cuenta = document.getElementById('cuenta');
    if (!cuentaRegex.test(cuenta.value)) {
        document.getElementById('cuentaError').textContent = 'Formato de cuenta inválido. Use ESXX XXXX XXXX XXXX XXXX XXXX.';
        cuenta.style.border = '2px solid red';
    } else {
        document.getElementById('cuentaError').textContent = '';
        cuenta.style.border = '';
    }
}

function esFechaValida(stringFecha) {
    const partes = stringFecha.split('/');
    [dia , mes , año] = partes;
    //Los separo por el formato en la clase date es aaaa-mm-dd
    const fecha = new Date(`${año}-${mes}-${dia}`);
    return fecha instanceof Date && !isNaN(fecha);
}
