// variable any, no tiene validacion de datos
var variableAny;
variableAny = "Hola mundo";
variableAny = 32;
console.log("Resultado: ", variableAny);
// variable desc, contiene validacion de datos
var variableDesc;
variableDesc = 23;
if (typeof variableDesc === "string") {
    console.log("La variable Desc es un string: ", variableDesc);
}
else if (typeof variableDesc === "number") {
    console.log("La variable es un Entero: ", variableDesc);
}
//funcion never -> gestion de errores
// function throwError(message: string) : never{
//     //new instancia
//     throw new Error(message);
// }
// throwError("Este es un error")
//funcion void -> no devuelve ningun valor
function logMessage(message) {
    console.log("message: ", message);
}
logMessage("funcion");
