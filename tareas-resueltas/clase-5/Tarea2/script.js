const $botonMostrar = document.querySelector('#enviar-datos-usuario');

$botonMostrar.onclick = function(){
    
    let $primerNombreUsuario = document.querySelector('#primer-nombre-usuario');
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
