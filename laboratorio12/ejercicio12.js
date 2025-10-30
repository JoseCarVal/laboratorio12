function operacionesMatematicas() {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : "No se puede dividir entre 0";

    return { sumar, restar, multiplicar, dividir };
}

const op = operacionesMatematicas();
console.log("Suma:", op.sumar(5, 3)); 
console.log("Resta:", op.restar(5, 3)); 
console.log("Multiplicación:", op.multiplicar(5, 3)); 
console.log("División:", op.dividir(6, 3)); 