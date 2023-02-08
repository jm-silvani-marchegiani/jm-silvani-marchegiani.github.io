function ocultarFormulario(){
    var formulario = document.getElementById("Formulario");
    if (formulario.style.display == "block") {
        formulario.style.display = "none";
    } else if (formulario.style.display == "none") {
		formulario.style.display = "block";
	}
}