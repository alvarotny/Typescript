import { Persona } from "./clase"
import { Empleado } from "./empleado"

const usuario = new Persona("alvaro",32,false)
const empleado = new Empleado("Alvaro", 25, true, "Backend Dev", 5000);
console.log(usuario.saludar())
console.log(empleado.saludoEmpleado())


