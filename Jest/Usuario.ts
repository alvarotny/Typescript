export class User{
    nombre: string;
    edad: number;
    email: string;
    dev: boolean

    constructor(nombre:string, edad: number, email: string, dev:boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.dev = dev;
    }

    // Metodo para obtener el name
    getname () : string{
        return this.nombre
    }
    // Metodo para obtener el profile
    getProfile (): string{
        return `Hola ${this.nombre}, usted tiene ${this.edad} año y ${this.dev?"si":"no"} es desarrollador`
    }

    // Metodo para el estado
    isState(): boolean{
        return this.dev
    }
    // 
    getemail(): string{
        return this.email
    }
}
// --save-dev => solo para entornos de desarrollo
// jest => es un framework de testing  => usando para pruebas unitarias
// @types/jest => son definiciones de tipo => permite q la compilacion reconosca la funciones q trae jest
//ts-jest => es un preprocesador => q te permite extender los archivos con formato .ts directamente 

// instalacion de la libreria: npm i --save-dev jest @types/jest ts-jest