// list con tipo de arreglo
var nombres = ["maria", "juan", "pablo"];
var numeros = [223, 323, 3];
var mix = [223, "juan", true];
console.log("Nombres: ", nombres);
console.log("Numeros: ", numeros);
console.log("Mix", mix);
var personas = [
    { nombre: "alvaro", edad: 12, isdev: true },
    { nombre: "juan", edad: 23, isdev: false }
];
personas.push({ nombre: "maria", edad: 22, isdev: true });
console.log("Interfas de users: ", personas);
// Tupla -> no puede ser modificada
var personaT;
personaT = ["juanito", 23, false];
console.log("PersonaT", personaT);
var Personas = [];
Personas.push(["mario", 78, true]);
Personas.push(["maria2", 12, false]);
Personas.forEach(function (persona) {
    console.log("Personas => ", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var dev = persona[2];
    console.log("Datos del dev: ".concat(nombre, " la edad: ").concat(edad, ", es dev ").concat(dev));
});
//ENUMERADORES
var DiaDelaSemana;
(function (DiaDelaSemana) {
    DiaDelaSemana[DiaDelaSemana["LUNES"] = 0] = "LUNES";
    DiaDelaSemana[DiaDelaSemana["MARTES"] = 1] = "MARTES";
    DiaDelaSemana[DiaDelaSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiaDelaSemana[DiaDelaSemana["JUEVES"] = 3] = "JUEVES";
    DiaDelaSemana[DiaDelaSemana["VIERNES"] = 4] = "VIERNES";
    DiaDelaSemana[DiaDelaSemana["SABADO"] = 5] = "SABADO";
    DiaDelaSemana[DiaDelaSemana["DOMINGO"] = 6] = "DOMINGO";
})(DiaDelaSemana || (DiaDelaSemana = {}));
var dia = DiaDelaSemana.DOMINGO;
console.log("Dia", DiaDelaSemana[dia]);
