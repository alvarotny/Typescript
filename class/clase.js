"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //contructor
    function Persona(nombre, edad, dev) {
        this.nombre = nombre;
        this.edad = edad;
        this.dev = dev;
    }
    //metodos
    Persona.prototype.saludar = function () {
        var isDev = this.obtenerDev();
        return "Nombre:".concat(this.nombre, "  EDAD:").concat(this.edad, " Y ").concat(isDev ? "si" : "no", " ES DESARROLLADOR");
    };
    Persona.prototype.obteneredad = function () {
        return this.edad;
    };
    Persona.prototype.obtenerDev = function () {
        return this.dev;
    };
    return Persona;
}());
exports.Persona = Persona;
