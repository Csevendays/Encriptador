function obtenerTexto() {
    texto = document.getElementById('texto-ingresado').value.toLowerCase();
    return texto;
}

function devolverTextoResultado() {
    return document.getElementById('texto-resultado').innerHTML = texto;
}

function limpiarTextoObtenido() {
    return document.getElementById('texto-ingresado').value = '';
}

function desaparecerMensaje() {
    document.getElementById('contenedor-mensaje').style.display = 'none';
}

function aparecerMensaje() {
    document.getElementById('contenedor-mensaje').style.display = 'grid';
}


/***Encriptar Texto***/
function obtenerArrayTexto() {
    texto = texto.split('');
    return texto;
}

function reemplazarTextoArray() {
    for (posicion = 0; posicion < texto.length; posicion++) {
        reemplazarLetras('a','ai');
        reemplazarLetras('e','enter');
        reemplazarLetras('i','imes');
        reemplazarLetras('o','ober');
        reemplazarLetras('u','ufat');
    }
    return texto;
}

function reemplazarLetras(entrada,resultado) {
    if (texto[posicion]==entrada) {
        texto[posicion] = texto[posicion].replace(entrada,resultado);
    }
}

function unirArrayTexto() {
    texto = texto.join('');
    return texto;
}


/***Desencriptar Texto***/

function reemplazarDato(entrada,resultado) {
    texto = texto.replaceAll(entrada,resultado);
}

function reemplazarTexto() {
    reemplazarDato(/ai/g,'a');
    reemplazarDato(/enter/g,'e');
    reemplazarDato(/imes/g,'i');
    reemplazarDato(/ober/g,'o');
    reemplazarDato(/ufat/g,'u');
    return texto
}

let texto;
document.getElementById('texto-ingresado').maxLength = 700;

