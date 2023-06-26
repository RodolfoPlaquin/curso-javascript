const $botonCrearFormulario = document.querySelector('#generar-formulario');

$botonCrearFormulario.onclick = function (){
    const cantidadMiembros = Number(document.querySelector('#cantidad-miembros-familia').value);
    generarFormulario( cantidadMiembros );
    
    return false;
}
    


function generarFormulario ( cantidad ){
    const $formularioGenerado = document.querySelector('#formulario-calculos');
    $formularioGenerado.innerHTML = "";

    for(let i = 1 ; i<=cantidad ; i++){
        const crearLabel = document.createElement("label");
        crearLabel.textContent = "Edad persona N°" + i + " :";
        
        const crearInput = document.createElement("input");
        crearInput.type = "number";
        crearInput.id = "edadFamiliar" + i;

        $formularioGenerado.appendChild(crearLabel);
        $formularioGenerado.appendChild(crearInput);
    }

    const crearBotonCalcular = document.createElement("button");
    crearBotonCalcular.id = "calcular-edad";
    crearBotonCalcular.textContent = "Calcular";
    $formularioGenerado.appendChild(crearBotonCalcular);

    const mostrarResultado = document.createElement("div");
    mostrarResultado.id = "mostrar-resultados";
    $formularioGenerado.appendChild(mostrarResultado);

    const crearBotonLimpiar = document.createElement("button");
    crearBotonLimpiar.id = "limpiar-formulario";
    crearBotonLimpiar.textContent = "Limpiar";
    $formularioGenerado.appendChild(crearBotonLimpiar);
}

