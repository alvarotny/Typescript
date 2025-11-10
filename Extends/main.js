var nombre = "alvaro";
console.log(nombre.length);
var lista = ["alvaro", "aff", 23, true];
//solo acepta aquellos q tienen la propiedad extend
function obtenerCantidad(obj) {
    var countValues = obj.length;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ", tipo);
    console.log("Y su longitud es: ", countValues);
    return obj.length;
}
function obtenerLista(obj) {
    return obj.join(",");
}
//
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.valor = valor;
    }
    return Caja;
}());
function obtenerInterfaze(obj) {
    return "Contenido: ".concat(obj.valor);
}
console.log(obtenerCantidad(["alvaro", "tny", 23]));
console.log(obtenerCantidad("hola"));
//
console.log(obtenerLista(["ae", "auto", 23, true]));
var value = new Caja("Trabajador");
console.log(obtenerInterfaze(value));
