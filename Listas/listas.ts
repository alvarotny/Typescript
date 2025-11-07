// ARREGLOS
let nombres: string[] = ["maria", "juan", "pablo"]
let numeros: number[] = [223,323,3]
let mix: any[] = [223,"juan",true]

console.log("Nombres: ", nombres)
console.log("Numeros: ", numeros)
console.log("Mix", mix)

//new interface
interface Persona{nombre : string; edad : number; isdev: boolean;}
let personas : Persona[] = [
    {nombre: "alvaro", edad: 12, isdev: true},
    {nombre: "juan", edad: 23, isdev: false}
]
personas.push({nombre: "maria", edad: 22, isdev: true})
console.log("Interfas de users: ", personas)

// TUPLAS -> no puede ser modificada
let personaT : [string, number, boolean];
personaT = ["juanito", 23,false];
console.log("PersonaT", personaT)

let Personas: [string,number,boolean][] = []
Personas.push(["mario", 78, true])
Personas.push(["maria2", 12, false])

Personas.forEach(persona => {
    console.log("Personas => ", persona)
    let nombre : string = persona[0]
    let edad : number = persona[1]
    let dev: boolean = persona[2]

    console.log(`Datos del dev: ${nombre} la edad: ${edad}, es dev ${dev}`)
})

//ENUMERADORES
enum DiaDelaSemana {
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO
}
let dia: DiaDelaSemana = DiaDelaSemana.DOMINGO;
console.log("Dia", DiaDelaSemana[dia])