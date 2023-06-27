const $botonAgregarFamiliar = document.querySelector('#agregar-familiar');
const $generarFormulario = document.querySelector('#formulario-salarios');
let cantidadFamiliares = 0;

function agregarFormulario( formulario ){
    formulario.innerHTML = "";
    
    for(let i = 1 ; i<=cantidadFamiliares ; i++){
        const $crearLabel = document.createElement('label');
        $crearLabel.textContent = `Salario de familiar N°${i} :`;
        
        const $crearInput = document.createElement('input');
        $crearInput.id = "salarioFamiliar" + i;
        $crearInput.type = "number";
        
        const $crearBotonEliminarRegistro = document.createElement('button');
        $crearBotonEliminarRegistro.textContent = "Eliminar Registro";
        $crearBotonEliminarRegistro.addEventListener ('click' , () => eliminarRegistro($crearLabel , $crearInput, $crearBotonEliminarRegistro));
        
        formulario.appendChild($crearLabel);
        formulario.appendChild($crearInput);
        formulario.appendChild($crearBotonEliminarRegistro);
    }
}

function eliminarRegistro(label , input , button){
    label.remove();
    input.remove();
    button.remove();
    cantidadFamiliares--;
    
    if (cantidadFamiliares === 0)
        $generarFormulario.innerHTML = "";
} 

function botonCalcular (formulario){
    if(cantidadFamiliares> 0){
        const $crearBotonCalcular = document.createElement('button');
        $crearBotonCalcular.id = "calcular-salarios";
        $crearBotonCalcular.textContent = "Calcular";
        formulario.appendChild($crearBotonCalcular);
    }
}

$botonAgregarFamiliar.onclick = function(){
    cantidadFamiliares++;
    agregarFormulario($generarFormulario);
    if(cantidadFamiliares > 0)
        botonCalcular($generarFormulario);
   
    return false;
}


