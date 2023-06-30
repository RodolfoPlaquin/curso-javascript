const $cantidadVideos = Number(document.querySelector('#cantidad-videos').value);
const $botonCrearFormulario = document.querySelector('#crear-formulario');
const $botonCalcular = document.querySelector('#calcular-tiempo-total');
const $botonLimpiar = document.querySelector('#limpiar-formulario');

let segundosTotales = 0;
let minutosTotales = 0;
let horasTotales = 0;


function calcularSegundos (){
    segundosTotales = 0; 
    for(let i = 1 ; i<=$cantidadVideos ; i++){
        const segundos= Number(document.querySelector(`#segundos${i}`).value);
        if (segundos >= 0 && segundos <= 59) {
            segundosTotales += segundos;
        } else {
           
            alert(`Segundos inválidos en el video ${i}. Debe estar entre 0 y 59.`);
            return;
        }
    }
}

function calcularMinutos (){
    minutosTotales = 0;
    for(let i = 1 ; i<=$cantidadVideos ; i++){
        const minutos = Number(document.querySelector(`#minutos${i}`).value);
        if (minutos >= 0 && minutos <= 59) {
            minutosTotales += minutos;
        } else {
            alert(`Minutos inválidos en el video ${i}. Debe estar entre 0 y 59.`);
            return;
        }
    }
    
    if(segundosTotales >= 60){
        minutosTotales += Math.floor(segundosTotales / 60);
        segundosTotales %= 60;
    }
}

function calcularHoras (){
    horasTotales = 0;
    for(let i = 1 ; i<=$cantidadVideos ; i++){
        const horas = Number(document.querySelector(`#horas${i}`).value);
        horasTotales += horas;
    }
    
    if(minutosTotales >= 60){
        horasTotales += Math.floor(minutosTotales / 60);
        minutosTotales %= 60;
    }
}

function calcularTiempoTotal(){
    calcularSegundos();
    calcularMinutos();
    calcularHoras();
}

function mostrarTiempoTotal( horas , minutos , segundos){
    const horasEnDosDigitos = horas.toString().padStart(2 , "0");
    const minutosEnDosDigitos = minutos.toString().padStart(2 , "0");
    const segundosEnDosDigitos = segundos.toString().padStart(2 , "0");
    
    const $tiempoTotal = document.querySelector('#tiempo-total');
    $tiempoTotal.textContent = `${horasEnDosDigitos}:${minutosEnDosDigitos}:${segundosEnDosDigitos}`;
}

function mostrarBotonCalcular(){
    const $botonCalcular = document.querySelector('#calcular-tiempo-total');
    $botonCalcular.style.display = 'block';
}

function ocultarBotonCalcular(){
    const $botonCalcular = document.querySelector('#calcular-tiempo-total');
    $botonCalcular.style.display = 'none';
}

function mostrarBotonLimpiar(){
    const $botonLimpiar = document.querySelector('#limpiar-formulario');
    $botonLimpiar.style.display = 'block';
}

function ocultarBotonLimpiar(){
    const $botonLimpiar = document.querySelector('#limpiar-formulario');
    $botonLimpiar.style.display = 'none';
}

function limpiarFormulario(){
    const $limpiar = document.querySelector('form');
    $limpiar.reset(); 
    segundosTotales = 0;
    minutosTotales = 0;
    horasTotales = 0;
    ocultarBotonCalcular();
    ocultarBotonLimpiar();
}

$botonCrearFormulario.onclick = function(){
    const $generarFormulario = document.querySelector('#generar-formulario');
    $generarFormulario.innerHTML = "";
    $cantidadVideos = Number(document.querySelector('#cantidad-videos').value);
    for( let i = 1 ; i<=$cantidadVideos ; i++){
        const $crearDiv = document.createElement('div');
        $crearDiv.innerHTML = `Video ${i}: 
        <input type="number" id="horas${i}" min="0" required>
        <input type="number" id="minutos${i}" min="0" max="59" required>
        <input type="number" id="segundos${i}" min="0" max="59" required>
        `;

        $generarFormulario.appendChild($crearDiv);
    }
    mostrarBotonCalcular();
    mostrarBotonLimpiar();
    return false;
}

$botonCalcular.onclick = function (){
    calcularTiempoTotal();
    mostrarTiempoTotal( horasTotales , minutosTotales , segundosTotales );
    return false;
}

$botonLimpiar.onclick = function() {
    const $formularioGenerado = document.querySelector('#generar-formulario');
    const $tiempoTotal = document.querySelector('#tiempo-total');
    $formularioGenerado.innerHTML = "";
    $tiempoTotal.innerHTML = "";
    limpiarFormulario();
    return false;
}


