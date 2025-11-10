"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var clase_1 = require("./clase");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, dev, puesto, ganancia) {
        var _this = _super.call(this, nombre, edad, dev) || this;
        _this.puesto = puesto;
        _this.ganancia = ganancia;
        return _this;
    }
    //creando un metodo publico
    Empleado.prototype.saludoEmpleado = function () {
        var salud = _super.prototype.saludar.call(this);
        return "Datos del empleado: ".concat(salud, " PUESTO: ").concat(this.puesto, " GANANCIA: ").concat(this.ganancia);
    };
    return Empleado;
}(clase_1.Persona));
exports.Empleado = Empleado;
