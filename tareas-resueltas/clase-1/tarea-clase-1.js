/* Buenas tardes! 

Adjunto el código de la resolución de la tarea 1: */

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

const anioActual = Number(prompt('Ingrese el año en la actualidad'));
const anioNacimiento = Number(prompt('Ingrese el año de nacimiento'));

function calcularAnioUsuario(anioActual, anioNacimiento){
    return anioActual - anioNacimiento;
}

console.log('La edad es de: ' + calcularAnioUsuario(anioActual,anioNacimiento) + ' años');


// Preguntar el salario anual y calcular el salario mensual

const salarioAnual = Number(prompt('Ingrese su salario anual'));
function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

console.log('El salario mensual es de $' + calcularSalarioMensual(salarioAnual));

// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioMensual = Number(prompt('Ingrese su salario mensual'));

function calcularSalarioAnual(salarioMensual){
    const mesesEnUnAnio = 12;
    return salarioMensual * mesesEnUnAnio;
}

function calcularSalarioPorSemana(salarioMensual){
    const semanasEnUnMes = 4;
    return salarioMensual / semanasEnUnMes;
}

function calcularSalarioAnualPorHora(salarioMensual){
    const horasTrabajoPorMes = 160;
    return salarioMensual / horasTrabajoPorMes;
}



console.log('El salario anual es de $' + calcularSalarioAnual(salarioMensual));
console.log('El salario por semana es de $' + calcularSalarioPorSemana(salarioMensual));
console.log('El salario por hora es de $' + calcularSalarioAnualPorHora(salarioMensual));