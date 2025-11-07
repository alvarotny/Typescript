function mensaje(message: string) : void{
    console.log(message);
}

function suma(n1: number, n2: number) : number{
    return n1 + n2;
}
let result : number = suma(20,11);
console.log("El resultado de la funcion es: ", result)


// PARAMETROS OPCIONALES
function message2(nombre: string, saludo?: string) : string{
    if(saludo){
        return `${saludo} => ${nombre}`
    }else{
        return `Hola, ${nombre}`
    }
}

console.log(message2("juan"))
console.log(message2("alvaro","buenas tardes"))

// PARAMETROS MULTIPLES
// coleccion de multiples datos numericos => ...numeros :  number[]
// funcion reduce => extrae los valores
function sumartodos(...numeros:number[]) : number{
    return numeros.reduce((acumulado, valor) => acumulado + valor,0)
}
console.log("Resulatado de todo los numero: ",sumartodos(2,2,2,3,4,11))

// VALORES POR DEFECTO
function despedida(nombre:string, saludo:string = "adios"): string{
    return `${saludo} => ${nombre}`
}
console.log(despedida("aldo"))
console.log(despedida("algo", "hasta luego"))