const $botonMostrar = document.querySelector('#enviar-datos-usuario');

$botonMostrar.onclick = function(){
    
    let $primerNombreUsuario = document.querySelector('#primer-nombre-usuario');
    const validarPrimerNombre = validarNombres($primerNombreUsuario.value);
    const $advertenciaPrimerNombre = document.querySelector('#advertencia-primer-nombre');
    advertencias(validarPrimerNombre , $advertenciaPrimerNombre);

    let $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
    const validarSegundoNombre = validarNombres($segundoNombreUsuario.value);
    const $advertenciaSegundoNombre = document.querySelector('#advertencia-segundo-nombre');
    advertencias(validarSegundoNombre , $advertenciaSegundoNombre);

    let $ApellidosUsuario = document.querySelector('#apellidos-usuario');
    const validarApellido = validarApellidos($ApellidosUsuario.value);
    const $advertenciaApellido = document.querySelector('#advertencia-apellido');
    advertencias(validarApellido , $advertenciaApellido);

    let $edadUsuario = document.querySelector('#edad-usuario');
    const validarEdades = validarEdad(Number($edadUsuario.value));
    const $advertenciaEdad = document.querySelector('#advertencia-edad');
    advertencias(validarEdades , $advertenciaEdad);

    let $mostrarDatos = document.querySelector('#mostrar-datos');
    let $tituloSaludo = document.querySelector('#titulo-saludo');

    $mostrarDatos.innerHTML =   "Primer nombre: " + $primerNombreUsuario.value + "<br>" +
                                "Segundo nombre: " + $segundoNombreUsuario.value + "<br>" +
                                "Apellido/s: " + $ApellidosUsuario.value + "<br>" +
                                "Edad: " + $edadUsuario.value;

    $tituloSaludo.innerText = `Bienvenido, ${$primerNombreUsuario.value}!`;

    return false;
}

function validarNombres ( nombre ){
    const regexNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if(nombre === ""){
        return "El campo está vacío";
    }
    if(nombre.value !== ""){
        if(!regexNombre.test(nombre)){
            return "Solo debe contener letras";
        }
        const cantidadLetrasNombre = nombre.split("").length;
        if(cantidadLetrasNombre < 3){
            return "Cantidad de letras insuficientes";
        }
    }
    return true;
}

function validarApellidos ( apellido ){
    const regexApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{2,40}$/;
    if(apellido !== ""){
        if(!regexApellido.test(apellido)){
            return "Formato incorrecto";
        }
    }
    if(apellido === ""){
        return "El campo está vacío";
    }
    return true;
} 

function validarEdad ( edad ){
    
    if(!isNaN( edad )){
        return "Ingresar un número válido";
    }
    if(edad.value === ""){
        return "El campo está vacío";
    }
    return true;
}

function advertencias ( validacion , advertencia ){
    if(typeof validacion === 'string'){
        advertencia.innerText = validacion;
    } else {
        advertencia.innerText = "";
    }
}
