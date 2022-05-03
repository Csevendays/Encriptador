function desencriptarTexto() {
    if (obtenerTexto() != '') {
        obtenerTexto();
        reemplazarTexto();
        devolverTextoResultado();
        desaparecerMensaje()
        limpiarTextoObtenido();
    }
}

let desencriptar = document.getElementById('btn-desencriptar');
desencriptar.onclick = desencriptarTexto;