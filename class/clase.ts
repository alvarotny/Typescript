export class Persona {
    // propiedades
    public nombre: string; //propiedad publica
    protected edad: number; //propiedad protegida => clase -> subclase
    private dev: boolean; // propieda privada => solo en la clase donde se encuentra
    //contructor
    constructor(nombre: string, edad: number, dev: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.dev = dev;
    }
    //metodos
    public saludar(): string {
        const isDev =  this.obtenerDev()
        return `Datos del usuario: ${this.nombre}-${this.edad}-${isDev}`;
    }

    protected obteneredad(): number{
        return this.edad
    }

    private obtenerDev(): boolean{
        return this.dev
    }
}
