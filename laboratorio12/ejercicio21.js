function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else if (exponente < 0) {
        return 1 / potencia(base, -exponente);
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log("2^4 =", potencia(2, 4)); 
console.log("3^3 =", potencia(3, 3)); 
console.log("2^-2 =", potencia(2, -2)); 