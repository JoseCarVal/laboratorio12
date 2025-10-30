function mostrarDatos(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}
mostrarDatos("Lucía", 28, "leer", "viajar", "fotografía");