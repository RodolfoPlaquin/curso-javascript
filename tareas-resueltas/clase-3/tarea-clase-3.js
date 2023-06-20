// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = 'Rodolfo';
const NOMBRE_AMIGO = 'Nicolás';
const nombreIngresado = prompt('Ingresa tu nombre');

if( MI_NOMBRE === nombreIngresado)
    console.log(`Hola ${nombreIngresado}, te llamás igual que mi ...`);
else if ( MI_NOMBRE === nombreIngresado) 
    console.log(`Hola ${nombreIngresado}, te llamás igual que mi ...`);
else   
    console.log(`Hola ${nombreIngresado}!`);
        


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 34;
const edadIngresada = Number(prompt('Ingrese su edad'));

if(MI_EDAD > edadIngresada)
    console.log('Tu edad es menor que la mía');
else if(MI_EDAD === edadIngresada)
    console.log('Tu edad es menor que la mía');
else 
    console.log('Tu edad es mayor que la mía');


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const poseerDocumento = prompt('Posee documento? Escriba SI por afirmativo o NO por negativo').toLowerCase();
let edadUsuario;

if(poseerDocumento === 'si'){
    edadUsuario = Number(prompt('Escriba su edad'));
    if ( edadUsuario > 18)
        console.log('Usted puede ingresar al bar');
    else 
        console.log('Usted no puede ingresar al bar');
} else if (poseerDocumento === 'no'){
    console.log('Usted no puede ingresar al bar');
} else 
    console.log('No se entiende la respuesta');  
