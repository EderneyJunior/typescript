let algumaCoisa2: number | string

algumaCoisa2 = 1

const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
    return usuarios
}

const usuario = {
    nome: 'Guido'
}

const usuarios = [
    {
        nome: 'Ruli'
    },
    {
        nome: 'Diego'
    }
]

console.log(cadastroUsuarios(usuario))

console.log(cadastroUsuarios(usuarios))