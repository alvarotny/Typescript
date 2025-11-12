var result = {
    nombre: "alvaro",
    edad: 23
};
console.log(result);
var PersonaClass = /** @class */ (function () {
    function PersonaClass(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }
    PersonaClass.prototype.saludar = function () {
        return "Mi nombre es: ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    return PersonaClass;
}());
