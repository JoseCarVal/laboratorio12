function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}

const suma = (a, b) => a + b;
console.log("Ejecutar operación (suma):", ejecutarOperacion(suma, 4, 6));