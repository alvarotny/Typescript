function mensaje(message) {
    console.log(message);
}
function suma(n1, n2) {
    return n1 + n2;
}
var result = suma(20, 11);
console.log("El resultado de la funcion es: ", result);
// PARAMETROS OPCIONALES
function message2(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, " => ").concat(nombre);
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
console.log(message2("juan"));
console.log(message2("alvaro", "buenas tardes"));
// PARAMETROS MULTIPLES
// coleccion de multiples datos numericos => ...numeros :  number[]
// funcion reduce => extrae los valores
function sumartodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, valor) { return acumulado + valor; }, 0);
}
console.log("Resulatado de todo los numero: ", sumartodos(2, 2, 2, 3, 4, 11));
// VALORES POR DEFECTO
function despedida(nombre, saludo) {
    if (saludo === void 0) { saludo = "adios"; }
    return "".concat(saludo, " => ").concat(nombre);
}
console.log(despedida("aldo"));
console.log(despedida("algo", "hasta luego"));
