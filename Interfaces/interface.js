var persona = {
    nombre: "aldo",
    edad: 21,
    dev: false
};
persona.nombre = "alvaro";
console.log("La persona es: ", persona);
//Multiples valores para la interfas Persona
var personas = [
    { nombre: "alva", edad: 18, dev: true },
    { nombre: "agustin", edad: 23, dev: false },
    { nombre: "adriel", edad: 89, dev: true }
];
console.log("PERSONAS: ", personas);
var sumar = function (v1, v2) {
    return v1 + v2;
};
console.log("La suma es: ", sumar(100, 90));
var minjuego = { nombre: "alvaro", edad: 23 };
console.log(minjuego);
var ReadPersona = {
    nombre: "juancito",
    edad: 23,
    apellido: "romer"
};
// ReadPersona.nombre = "ALEX" => no es posible modificar por q sus propiedades son readonly
console.log(ReadPersona);
var readEmpleado = {
    nombre: "alvaro",
    edad: 23,
    dev: true,
    puesto: "Dessarrollador"
};
console.log(readEmpleado);
