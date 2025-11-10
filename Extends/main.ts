const nombre : string = "alvaro"
console.log(nombre.length);
const lista : any[] = ["alvaro","aff",23,true]


//solo acepta aquellos q tienen la propiedad extend
function obtenerCantidad<T extends {length : number}>(obj:T):number{
    const countValues : number = obj.length;
    const tipo : string = typeof obj;
    console.log("El tipo de dato es: ", tipo)
    console.log("Y su longitud es: ", countValues)
    return obj.length
}

function obtenerLista<T extends any[]>(obj:T): string{
    return obj.join(",");
}
//
class Caja<J>{
    public valor: J;
    constructor (valor:J){
        this.valor = valor
    }
}

function obtenerInterfaze<T extends Caja<any>>(obj:T):string{
    return `Contenido: ${obj.valor}`
}



console.log(obtenerCantidad(["alvaro","tny",23]))
console.log(obtenerCantidad("hola"))
//
console.log(obtenerLista(["ae","auto",23,true]))
const value = new Caja("Trabajador");
console.log(obtenerInterfaze(value))