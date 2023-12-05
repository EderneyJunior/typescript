function imprimir(nome: string): string {
    return `Olá ${nome}`
}

const maiorIdade = (idade: number): boolean => {
    if (idade >= 18) {
        return true
    }

    return false
}

function imprimirUsuario(usuario: {nome: string, idade: number}): string {
    return `${usuario.nome}`
}