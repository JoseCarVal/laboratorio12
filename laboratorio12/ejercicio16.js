function media(...numeros) {
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    return numeros.length > 0 ? suma / numeros.length : 0;
}
console.log("Media:", media(10, 20, 30, 40)); 