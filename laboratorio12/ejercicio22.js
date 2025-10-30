function crearSecuencia(inicio, paso) {
    let actual = inicio - paso; 
    return function() {
        actual += paso;
        return actual;
    };
}

const secuencia = crearSecuencia(2, 3);
console.log(secuencia()); 
console.log(secuencia());
console.log(secuencia()); 
console.log(secuencia()); 