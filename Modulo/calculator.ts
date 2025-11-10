export function suma<T extends number[]>(obj:T):number{
    return obj.reduce((acumulado,value) => acumulado + value,0)
}

export function Operaciones<T extends number>(a:T, b:T ,op:"suma" | "resta" | "multi"): number{
    switch(op){
        case "suma":
            return a + b
        case "resta":
            return a - b
        case "multi":
            return a * b
        default:
            throw new Error("Opcion incorrecta")
    }
}

export const Pi = 3.149088