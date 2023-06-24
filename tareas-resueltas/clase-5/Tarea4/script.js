function obtenerValores( lista ){
    const arrayDeValores = [];
    for(let i = 0 ; i<lista.length ; i++){
        const valor = Number(lista[i].innerText);
        arrayDeValores[i] = valor;
    }
    return arrayDeValores;
}

function ordenarListaValores ( lista ) {
    for(let i = 0 ; i<lista.length ; i++){
        for(let j = 0 ; j<lista.length - i ; j++){
            if(lista[j] > lista[j+1]){
                const valorMayor = lista[j];
                lista[j] = lista[j+1];
                lista[j+1] = valorMayor;
            }
        }
    }
    return lista;
}

function valoresPromedio ( lista ){
    let sumador = 0;
    for(let i = 0 ; i<lista.length ; i++){
        sumador += lista[i];
    }
    return sumador / lista.length;
}

function valorMenor ( lista ){
    return lista[0];
}

function valorMayor ( lista ){
    return lista[lista.length-1];
}

function valoresMasRepetidos ( lista ) {
    let valorActual = null;
    let contadorActual = 0;
    let contadorMasRepetido = 0;
    let valoresMasRepetidos = [];
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === valorActual) {
        contadorActual++;
      } else {
        if (contadorActual > contadorMasRepetido) {
            valoresMasRepetidos = [valorActual];
            contadorMasRepetido = contadorActual;
        } else if (contadorActual === contadorMasRepetido) {
            valoresMasRepetidos.push(valorActual);
        }
            valorActual = lista[i];
            contadorActual = 1;
        }
    }
  
    return valoresMasRepetidos;
}

function mostrarValores( promedio , menor , mayor , masRepetidos){
    const $mostrarValorPromedio = document.querySelector('#valor-promedio');
    const $mostrarValorMenor = document.querySelector('#valor-menor');
    const $mostrarValorMayor = document.querySelector('#valor-mayor');
    const $mostrarValorMasRepetido = document.querySelector('#valor-repetido');
    
    $mostrarValorPromedio.innerText = `Valor promedio: ${promedio}`;
    $mostrarValorMenor.innerText = `Valor menor: ${menor}`;
    $mostrarValorMayor.innerText = `Valor mayor: ${mayor}`;
    $mostrarValorMasRepetido.innerText = `Valor/es más repetido/s: ${masRepetidos}`;
}

const $valoresDeLista = document.querySelectorAll('li');
const arrayDeValores = obtenerValores( $valoresDeLista );
const arrayOrdenado = ordenarListaValores( arrayDeValores );

const valorPromedio = valoresPromedio( arrayOrdenado );
const numeroMenor = valorMenor( arrayOrdenado );
const numeroMayor = valorMayor( arrayOrdenado );
const valoresRepetidos = valoresMasRepetidos( arrayOrdenado );

mostrarValores( valorPromedio , numeroMenor , numeroMayor , valoresRepetidos );

