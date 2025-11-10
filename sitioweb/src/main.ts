// OBTENCION POR ELEMENT
const h1 = document.querySelector("h1")
console.log(h1?.textContent)


//OBTENCION POR CLASS
//Heading => es para las etiquetas de h1 a h6
const title : HTMLHeadingElement = document.querySelector(".descripcion") as HTMLHeadingElement;
console.log(title?.textContent)


//OBTENCION  POR ID
const input = document.querySelector("#message") as HTMLInputElement
console.log(input.placeholder)




//recompilacion del archivo .ts => tsc -p tsconfig.json -w
// compilacion de wsl: Ctrl + Shift + P => Terminal: Select Default Profile