/* Validar el formulario */
const inputs = document.querySelectorAll('form .campo input');
/* Agregar listener */

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});
function validarInput(e) {
    const estado = ['valido', 'no-valido'];
    let clase;
    /* Evalua lo que trae el contenedor input */
    if (e.target.value.length === 0){
        clase = estado[1];
    }else{
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    /* Esto va a hacer que la clase se agregue en el input */
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);
    /* Inyectar el error con HTML */
    if(clase === 'no-valido'){
        /* Construir el error */
        /* Para verificar si el error ya ha sido insertado */
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            /* Insertar el error */        
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    }else{
        /* Limpiar el error */
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

/* Mostrar y ocultar password */
const mostrarPassword = document.querySelector('form .campo span')
mostrarPassword.addEventListener('click', e =>{
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('mostrar')){
        /* Se muestra el texto */
        e.target.classList.remove('mostrar');
        /* Cambia el texto del span a Ocultar */
        e.target.textContent = 'Ocultar';
        /* Cambia de password a texto para mostrar la clave */
        passwordInput.type = 'text';
    }else{
        /* Mostrar el password */
        e.target.classList.add('mostrar');
        /* Cambiar el texto */
        e.target.textContent = 'Mostrar';
        /* Cambiamos a ocultar la contraseña */
        passwordInput.type = 'password';
    }
})