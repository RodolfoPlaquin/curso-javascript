function obtenerValores( lista ){
    const arrayDeValores = [];
    for(let i = 0 ; i<lista.length ; i++){
        const valor = Number(lista[i].innerText);
        arrayDeValores[i] = valor;
    }
    return arrayDeValores;
}

function obtenerValoresPromedio ( listaNumeros ){
    let sumador = 0;
    for(let i = 0 ; i<listaNumeros.length ; i++){
        sumador += listaNumeros[i];
    }
    return sumador / listaNumeros.length;
}

function obtenerValorMenor ( listaNumeros ){
    return Math.min(...listaNumeros);
}

function obtenerValorMayor ( listaNumeros ){
    return Math.max(...listaNumeros);
}

function obtenerValoresMasRepetidos ( listaNumeros ) {
   
    const contador = {};
    listaNumeros.forEach(numero => {
        contador[numero] = (contador[numero] || 0) + 1;
      });
    
      const frecuenciaMaxima = Math.max(...Object.values(contador));
    
      const valoresMasRepetidos = [];
      for (const numero in contador) {
        if (contador[numero] === frecuenciaMaxima) {
          valoresMasRepetidos.push(Number(numero));
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
const numeros = obtenerValores( $valoresDeLista );

const numeroPromedio = obtenerValoresPromedio( numeros );
const numeroMenor = obtenerValorMenor( numeros );
const numeroMayor = obtenerValorMayor( numeros );
const numerosMasRepetidos = obtenerValoresMasRepetidos( numeros );

mostrarValores( numeroPromedio , numeroMenor , numeroMayor , numerosMasRepetidos );

