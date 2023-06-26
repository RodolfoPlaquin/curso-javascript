const $botonAgregarFamiliar = document.querySelector('#agregar-familiar');
let cantidadFamiliares = 0;
$botonAgregarFamiliar.onclick = function(){
    const $generarFormulario = document.querySelector('#calcular-salario');
    $generarFormulario.innerHTML = "";
    cantidadFamiliares++;
    for(let i = 1 ; i<=cantidadFamiliares ; i++){
        const crearLabel = document.createElement('label');
        crearLabel.id = "labelFamiliar" + i;
        crearLabel.textContent = `Salario de familiar N°${i} :`;
        
        const crearInput = document.createElement('input');
        crearInput.id = "salarioFamiliar" + i;
        crearInput.type = "number";
        
        const crearBotonEliminarRegistro = document.createElement('button');
        crearBotonEliminarRegistro.id = "eliminarRegistro" + i;
        crearBotonEliminarRegistro.textContent = "Eliminar Registro";
        
        $generarFormulario.appendChild(crearLabel);
        $generarFormulario.appendChild(crearInput);
        $generarFormulario.appendChild(crearBotonEliminarRegistro);
        
        
        $generarFormulario.appendChild(crearLabel);
        $generarFormulario.appendChild(crearInput);
        $generarFormulario.appendChild(crearBotonEliminarRegistro);
        
        crearBotonEliminarRegistro.onclick = function() {
            const parent = this.parentNode;
            parent.removeChild(crearLabel);
            parent.removeChild(crearInput);
            parent.removeChild(crearBotonEliminarRegistro);
            cantidadFamiliares--;
        }
    }
    return false;
}
