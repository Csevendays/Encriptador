function copiarTexto() {
    document.getElementById('texto-ingresado').value = document.getElementById('texto-resultado').innerHTML;
    document.getElementById('texto-resultado').innerHTML = '';
    aparecerMensaje();
}

let copiar = document.getElementById('btn-copiar');
copiar.onclick = copiarTexto;