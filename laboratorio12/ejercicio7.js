const calcularDescuento = function(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
};
console.log("Precio con descuento (100, 20%):", calcularDescuento(100, 20));
