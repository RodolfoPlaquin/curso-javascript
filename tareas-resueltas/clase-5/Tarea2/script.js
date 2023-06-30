const $botonMostrar = document.querySelector('#enviar-datos-usuario');

$botonMostrar.onclick = function(){
    
    let $primerNombreUsuario = document.querySelector('#primer-nombre-usuario');
    const errorPrimerNombre = validarNombres($primerNombreUsuario.value);
    const $advertenciaPrimerNombre = document.querySelector('#advertencia-primer-nombre');
    mostrarAdvertencias(errorPrimerNombre , $advertenciaPrimerNombre);

    let $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
    const errorSegundoNombre = validarNombres($segundoNombreUsuario.value);
    const $advertenciaSegundoNombre = document.querySelector('#advertencia-segundo-nombre');
    mostrarAdvertencias(errorSegundoNombre , $advertenciaSegundoNombre);

    let $ApellidosUsuario = document.querySelector('#apellidos-usuario');
    const errorApellidos = validarApellidos($ApellidosUsuario.value);
    const $advertenciaApellido = document.querySelector('#advertencia-apellido');
    mostrarAdvertencias(errorApellidos , $advertenciaApellido);

    let $edadUsuario = document.querySelector('#edad-usuario');
    const errorEdades = validarEdad($edadUsuario.value);
    const $advertenciaEdad = document.querySelector('#advertencia-edad');
    mostrarAdvertencias(errorEdades , $advertenciaEdad);

    const compruebaCampos = validarCampos(validarPrimerNombre , validarSegundoNombre , validarApellido , validarEdades);
    
    mostrarDatos(compruebaCampos , $primerNombreUsuario , $segundoNombreUsuario , $ApellidosUsuario , $edadUsuario);

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
    if(edad === ""){
        return "El campo está vacío";
    }
    const numero = Number(edad);
    if(isNaN( numero)){
        return "Ingresar un número válido";
    }
    if(numero < 0){
        return "Edad inválida";
    }
    return true;
}

function mostrarAdvertencias ( validacion , advertencia ){
    if(typeof validacion === 'string'){
        advertencia.innerText = validacion;
    } else {
        advertencia.innerText = "";
    }
}

function validarCampos( primerNombre , segundoNombre, apellidos, edad ){
    if(typeof primerNombre === 'boolean' && typeof segundoNombre === 'boolean' && typeof apellidos === 'boolean' && typeof edad === 'boolean'){
        return true;
    } else {
        return false;
    }
}
function mostrarDatos( validacion , primerNombre , segundoNombre, apellidos, edad ){
    let $mostrarDatos = document.querySelector('#mostrar-datos');
    let $tituloSaludo = document.querySelector('#titulo-saludo');
    if(validacion){
        $mostrarDatos.style.display = 'block';
        $mostrarDatos.innerHTML =   "Primer nombre: " + primerNombre.value + "<br>" +
                                    "Segundo nombre: " + segundoNombre.value + "<br>" +
                                    "Apellido/s: " + apellidos.value + "<br>" +
                                    "Edad: " + edad.value;
    
        $tituloSaludo.innerText = `Bienvenido, ${primerNombre.value}!`;
    } else {
        $mostrarDatos.style.display = 'none';
        $tituloSaludo.innerText = `Bienvenido!`;
    }
}