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
