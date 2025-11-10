"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clase_1 = require("./clase");
var empleado_1 = require("./empleado");
var usuario = new clase_1.Persona("alvaro", 32, false);
var empleado = new empleado_1.Empleado("Alvaro", 25, true, "Backend Dev", 5000);
console.log(usuario.saludar());
console.log(empleado.saludoEmpleado());
