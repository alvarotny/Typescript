"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma = suma;
exports.Operaciones = Operaciones;
function suma(obj) {
    return obj.reduce(function (acumulado, value) { return acumulado + value; }, 0);
}
function Operaciones(a, b, op) {
    switch (op) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multi":
            return a * b;
        default:
            throw new Error("Opcion incorrecta");
    }
}
