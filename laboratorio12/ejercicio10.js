const componerTransformaciones = (f1, f2) => (texto) => f2(f1(texto));

const mayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";
const transformar = componerTransformaciones(mayusculas, agregarSigno);
console.log(transformar("hola"));