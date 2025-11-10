"use strict";
// OBTENCION POR ELEMENT
const h1 = document.querySelector("h1");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
//OBTENCION POR CLASS
//Heading => es para las etiquetas de h1 a h6
const title = document.querySelector(".descripcion");
console.log(title === null || title === void 0 ? void 0 : title.textContent);
//OBTENCION  POR ID
const input = document.querySelector("#message");
console.log(input.placeholder);
//recompilacion del archivo .ts => tsc -p tsconfig.json -w
// compilacion de wsl: Ctrl + Shift + P => Terminal: Select Default Profile
