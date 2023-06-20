/* Hola de nuevo

Dejo el código de la tarea 2 */
// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const numero1 = Number(prompt('Escriba el primer número'));
const numero2 = Number(prompt('Escriba el segundo número'));
const operador = prompt('Elija que operación desea realizar (-/+)');

let resultadoOperacion;
if (operador === '+')
    resultadoOperacion = sumar(numero1,numero2);
else if (operador === '+')
    resultadoOperacion = restar(numero1,numero2);
else {
    console.log('No existe esta operación');
    return false
}
console.log(' El resultado de ' + numero1 + ' ' + operador + ' ' + numero2 + ' es ' + resultadoOperacion);

