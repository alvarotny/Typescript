// PARAMETROS -> PROPIEDADES
//INTEFAZ -> CREAR OBJETOS
interface Persona{
    nombre: string;
    edad: number;
    dev: boolean;
}
let persona : Persona = {
    nombre : "aldo",
    edad: 21,
    dev: false
}
persona.nombre="alvaro"
console.log("La persona es: ", persona);

//Multiples valores para la interfas Persona
let personas: Persona[] = [
    {nombre: "alva", edad: 18, dev: true},
    {nombre: "agustin", edad: 23, dev: false},
    {nombre: "adriel", edad: 89, dev: true}
]
console.log("PERSONAS: ", personas)

// INTEFAZ -> CREAR METODOS
interface Sumar{
    (v1:number, v2:number) : number
}

let sumar : Sumar = (v1: number, v2: number) :number =>{
    return v1 + v2
}

console.log("La suma es: ", sumar(100,90))



// PARAMETROS -> PROPIEDADES
interface Juego {
    nombre : string;
    edad: number;
    ciudad?: string;
}

let minjuego: Juego = {nombre: "alvaro", edad: 23}
console.log(minjuego)


// READONLY => las propiedades se  vuelven modo lectura
interface PersonaRead{
    readonly nombre: string;
    readonly edad: number;
    readonly apellido: string;
}

let ReadPersona: PersonaRead = {
    nombre:"juancito",
    edad: 23,
    apellido : "romer"
}
// ReadPersona.nombre = "ALEX" => no es posible modificar por q sus propiedades son readonly
console.log(ReadPersona)


// INTERFAZE EXTENDIDA
interface Empleado extends Persona{
    readonly puesto: string
}
let readEmpleado: Empleado = {
    nombre: "alvaro",
    edad: 23,
    dev: true,
    puesto: "Dessarrollador"
}

console.log(readEmpleado)