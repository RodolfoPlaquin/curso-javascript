let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

function sumarTiempo ( horas , minutos , segundos ){
    const validacion = validarDatosIngresados (horas, minutos , segundos);
    if(!validacion){
        return false;
    }
    
    horasTotales += horas;
    minutosTotales += minutos;
    segundosTotales += segundos;
    
    if(segundosTotales >= 60){
        minutosTotales += Math.floor(segundosTotales / 60);
        segundosTotales %= 60;
    }
    
    if(minutosTotales >= 60){
        horasTotales += Math.floor(minutosTotales / 60);
        minutosTotales %= 60;
    }
}

function mostrarTiempoTotal( horas , minutos , segundos){
    const horasEnDosDigitos = horas.toString().padStart(2 , "0");
    const minutosEnDosDigitos = minutos.toString().padStart(2 , "0");
    const segundosEnDosDigitos = segundos.toString().padStart(2 , "0");

    const $tiempoTotal = document.querySelector('#tiempo-total');
    $tiempoTotal.textContent = `${horasEnDosDigitos}:${minutosEnDosDigitos}:${segundosEnDosDigitos}`;
}

function limpiarFormulario(){
    const $limpiar = document.querySelector('form');
    $limpiar.reset(); 
}

function validarDatosIngresados (horas, minutos , segundos){
    if( horas < 0 || minutos < 0 || segundos < 0 ){
        alert('No pueden haber números negativos');
        return false;
    }
    if (minutos >= 60 || segundos >= 60){
        alert('Los minutos y segundos no pueden ser más de 59');
        return false;
    }
    return true;
}

const $botonCalcular = document.querySelector('#sumar-tiempo');
$botonCalcular.onclick = function (){
    const $horas = Number(document.querySelector('#horas').value);
    const $minutos = Number(document.querySelector('#minutos').value);
    const $segundos = Number(document.querySelector('#segundos').value);
    
    sumarTiempo ( $horas , $minutos , $segundos );
    mostrarTiempoTotal( horasTotales , minutosTotales , segundosTotales );
    limpiarFormulario();

    return false;
}





