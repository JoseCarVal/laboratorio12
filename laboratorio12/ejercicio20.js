function descargarArchivo(url, callback) {
    console.log("Descargando...");

    setTimeout(() => {
        callback(url);
    }, 2000); 
}

function mostrarDescargaCompleta(url) {
    console.log(`Descarga completa de ${url}`);
}

descargarArchivo("URL", mostrarDescargaCompleta);