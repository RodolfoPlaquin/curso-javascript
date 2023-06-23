const $botonCalcular = document.querySelector('#boton-calcular-salario');

$botonCalcular.onclick = function(){
    const $salarioAnual = document.querySelector('#salario-anual').value;
    const MESES_EN_EL_ANIO = 12;
    const salarioMensual =  ($salarioAnual / MESES_EN_EL_ANIO).toFixed(2);

    if(!isNaN(salarioMensual)){
        const $mostrarSalarioMensual = document.querySelector('#salario-mensual');
        $mostrarSalarioMensual.value = salarioMensual; 
    } else {
        const $mostrarSalarioMensual = document.querySelector('#salario-mensual');
        $mostrarSalarioMensual.value = ""; 
    } 

    return false;
}

