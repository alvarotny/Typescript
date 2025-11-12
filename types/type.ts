// ============================TYPES==================================
// la diferencia es q puede tener propiedades pero no metodos
type PersonaType = {
    nombre:string;
    edad: number
};
// asignacion para la aceptacion de valores nulos
type Parcial<T> = {
    [k in keyof T]?: T[k]
}

type personalType = Parcial<PersonaType>;
// el mapped type de personalType de personaType es => {nombre?:string,edad?:number}

// type para solo lectura
type TypeReading<T> = {
    //keyof T >= obtiene toda las claves del tipo => nombre,edad
    // T[k] obtenemos el tipo de valor => string,number
    readonly [k in keyof T]:T[k]
}
//el mapped final es >= {readonly nombre:string, readonly edad:number
type PersonaReading = TypeReading<personalType>

const result : PersonaReading = {
    nombre: "alvaro",
    edad : 23
}

console.log(result)

// ==========================TEMPLATE LITERAL TYPES=============================
type variantes = "pequeño" | "mediano" | "grande"
type clasesCSS = `boton-${variantes}`

const botonPequeño : clasesCSS = "boton-pequeño"
const botonmediano : clasesCSS = "boton-mediano"
const botongrande : clasesCSS = "boton-grande"

// condicional en type => operador terceario
type esNumero<T> = T extends number ? true : false;

// funcion de comparacion

function Esnumero<T>(valor:T): esNumero<T>{
    return (typeof valor === "number") as esNumero<T>
}

const result2 = Esnumero("68")
const result3 = Esnumero(23)







class PersonaClass{
    protected nombre: string;
    public edad: number

    constructor(nombre:string,edad:number){
        this.edad = edad
        this.nombre = nombre
    }

    public saludar(): string{
        return `Mi nombre es: ${this.nombre} y tengo ${this.edad} años`
    }


}




