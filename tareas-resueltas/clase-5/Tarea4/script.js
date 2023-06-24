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

function ValorPromedio ( lista ){
    let sumador = 0;
    for(let i = 0 ; i<lista.length ; i++){
        sumador += lista[i];
    }
    return sumador / lista.length;
}

const $valoresDeLista = document.querySelectorAll('li');
const arrayDeValores = obtenerValores( $valoresDeLista );
const arrayOrdenado = ordenarListaValores( arrayDeValores );

console.log(ValorPromedio(arrayOrdenado));

