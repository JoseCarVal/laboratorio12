function procesarTexto(texto) {
    function limpiarEspacios(txt) {
        return txt.trim();
    }
    function contarPalabras(txt) {
        return txt.split(" ").filter(p => p !== "").length;
    }

    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(textoLimpio);
    return `Texto limpio: "${textoLimpio}", Palabras: ${cantidadPalabras}`;
}
console.log(procesarTexto("Hola mundo"));