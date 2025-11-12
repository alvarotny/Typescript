
function personaDes(target:Function){
    console.log(target)

    target.prototype.despedir = function(despedir: string){
        return `Despedido=>${despedir}, ${this.nombre}`
    }
}

@personaDes
class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    public saludar(): string{
        return `Mi nombre es: ${this.nombre} y tengo ${this.edad} años`
    }

    // declaracion del decorador
    //metodo o null | parametro | type a devolver
    despedir!: (despedir:string) => string
}

const user = new Persona("alvaro",23)
console.log(user.saludar())
console.log(user.despedir("adios"))
