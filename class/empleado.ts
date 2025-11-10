import { Persona } from "./clase"

export class Empleado extends Persona{
    public puesto : string;
    public ganancia : number;

    constructor(nombre: string, edad: number, dev: boolean, puesto: string, ganancia:number){
        super(nombre,edad,dev);
        this.puesto = puesto;
        this.ganancia = ganancia;
    }

    //creando un metodo publico
    public saludoEmpleado() : string{
        const salud = super.saludar()
        return `Datos del empleado: ${salud} PUESTO: ${this.puesto} GANANCIA: ${this.ganancia}`;
    }

}