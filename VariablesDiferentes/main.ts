// variable any, no tiene validacion de datos
let variableAny: any

variableAny = "Hola mundo"
variableAny = 32
console.log("Resultado: ", variableAny)

// variable desc, contiene validacion de datos
let variableDesc : unknown
variableDesc = 23
if (typeof variableDesc === "string"){
    console.log("La variable Desc es un string: ", variableDesc)
}else if(typeof variableDesc === "number"){
    console.log("La variable es un Entero: ", variableDesc)
}

//funcion never ->No devuleve ningun valor e nunca termina, gestion de errores
function throwError(message: string) : never{
    //new instancia
    throw new Error(message);
}
throwError("Este es un error")

//funcion void -> No devuelve ningun valor
function logMessage(message:string) : void{
    console.log("message: ", message);
}
logMessage("funcion void")