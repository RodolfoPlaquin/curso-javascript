const $botonCalcular = document.querySelector('#boton-calcular-salario');

$botonCalcular.onclick = function(){
    const $salarioAnual = document.querySelector('#salario-anual').value;
    const MESES_EN_EL_ANIO = 12;
    const salarioMensual =  ($salarioAnual / MESES_EN_EL_ANIO).toFixed(2);
    const $SalarioMensual = document.querySelector('#salario-mensual');

    if(!isNaN(salarioMensual)){
        $SalarioMensual.value = salarioMensual; 
    } else {
        $SalarioMensual.value = ""; 
    } 
    return false;
}
