// tsc main.ts ==> compila la app de ts -> js
// node main.js ==> compilacion e ejecucion

let nombre: String = "Alvaro"
let edad: number = 18
let dev: boolean = true
let mes: String | undefined
let variableNull: null = null;

mes = "Enero"

console.log("Hola mundo")
console.log(`Hola ${nombre} el mes es: ${mes}`)
console.log(`variableNull: ${variableNull}`)