const $botonMostrar = document.querySelector('#enviar-datos-usuario');

$botonMostrar.onclick = function(){
    
    let $primerNombreUsuario = document.querySelector('#primer-nombre-usuario');
    const validarPrimerNombre = validarNombres($primerNombreUsuario.value);
    const $advertenciaPrimerNombre = document.querySelector('#advertencia-primer-nombre');
    advertencias(validarPrimerNombre , $advertenciaPrimerNombre);

    let $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
    let $ApellidosUsuario = document.querySelector('#apellidos-usuario');
    let $edadUsuario = document.querySelector('#edad-usuario');
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
    if(nombre.value !== ""){
        if(!regexNombre.test(nombre)){
            return "Solo debe contener letras";
        }
        const cantidadLetrasNombre = nombre.split("").length;
        if(cantidadLetrasNombre < 3){
            return "Cantidad de letras insuficientes";
        }
    }
    if(nombre.value === ""){
        return "El campo está vacío";
    }
    return true;
}

function validarApellidos ( apellido ){
    const regexApellido = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    if(apellido.value !== ""){
        if(!regexApellido.test(apellido)){
            return "Solo debe contener letras";
        }
        const cantidadLetrasApellido = apellido.split("").length;
        if(cantidadLetrasApellido < 3){
            return "Cantidad de letras insuficientes";
        }
    }
    if(apellido.value === ""){
        return "El campo está vacío";
    }
    return true;
}

function validarEdad ( edad ){
    if(isNaN( edad )){
            return "Ingresar un número válido";
        }
    if(apellido.value === ""){
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
