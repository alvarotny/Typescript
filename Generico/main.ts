// funcion Generico => arg
function identity<T>(arg: T): T{
    return arg; 
}

const msj = identity<string>("hola mundo");
const numero = identity<number>(233);
const lista = identity<any[]>(["alvaro",23,3,"pedro",true])
console.log("Mensaje de texto", msj)
console.log("Valor numerico: ", numero)
lista.forEach((value: any) =>{
    console.log("Value: ", value)
})

// clase generico
class Caja<T>{
    private consumidor : T

    constructor (consumidor: T){
        this.consumidor = consumidor;
    }

    public obtenerData(): T{
        return this.consumidor;
    }
}
// Especificar el tipo
const caja = new Caja<string>("Consumidor Mateo")
console.log(caja.obtenerData())


// Interfaz generica 
interface Persona<T>{
    nombre: T;
    correo: T;
    edad: T;
}

//Especificar el tipo
const persona : Persona<string | number> = {
    nombre : "alvaro",
    correo : "alvar@gmail.com",
    edad: 23
}
console.log("Datos del la person: ", persona)

// funcion generica
function data<T>(arg: T) : T{
    return arg;
}
const lista2 = data<any>(["alvar","temo",233]);
lista2.forEach((value:any)=>{
    console.log(value)
})
