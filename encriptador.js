function encriptarTexto() {
    if (obtenerTexto()!='') {
        obtenerTexto();
        obtenerArrayTexto();
        reemplazarTextoArray();
        unirArrayTexto();
        devolverTextoResultado();
        desaparecerMensaje()
        limpiarTextoObtenido();
    }
}

let encriptar = document.getElementById('btn-encriptar');
encriptar.onclick = encriptarTexto;

