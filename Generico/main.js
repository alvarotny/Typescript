// funcion Generico => arg
function identity(arg) {
    return arg;
}
var msj = identity("hola mundo");
var numero = identity(233);
var lista = identity(["alvaro", 23, 3, "pedro", true]);
console.log("Mensaje de texto", msj);
console.log("Valor numerico: ", numero);
lista.forEach(function (value) {
    console.log("Value: ", value);
});
// clase generico
var Caja = /** @class */ (function () {
    function Caja(consumidor) {
        this.consumidor = consumidor;
    }
    Caja.prototype.obtenerData = function () {
        return this.consumidor;
    };
    return Caja;
}());
// Especificar el tipo
var caja = new Caja("Consumidor Mateo");
console.log(caja.obtenerData());
//Especificar el tipo
var persona = {
    nombre: "alvaro",
    correo: "alvar@gmail.com",
    edad: 23
};
console.log("Datos del la person: ", persona);
// funcion generica
function data(arg) {
    return arg;
}
var lista2 = data(["alvar", "temo", 233]);
lista2.forEach(function (value) {
    console.log(value);
});
