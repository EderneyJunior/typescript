const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArquivo = (dados: any) => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const arquivo = lerArquivo() as Usuario[]
    arquivo.push(dados)
    escreverArquivo(arquivo)
    return dados
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}

const atualizarUsuario = (dados: Usuario, cpf: string): Usuario | string => {
    const arquivo = lerArquivo() as Usuario[]
    
    let usuario = arquivo.find((usuario: Usuario) => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        return 'Usuario não encontrado'
    }

    usuario = dados

    const posicaoUsuario = arquivo.findIndex((usuario) => {
        return usuario.cpf === cpf
    })

    arquivo.splice(posicaoUsuario, 1)
    arquivo.push(usuario)
    escreverArquivo(arquivo)

    return usuario
}

const detalharUsuario = (cpf: string): Usuario | string => {
    const arquivo = lerArquivo() as Usuario[]
    
    const usuario = arquivo.find((usuario) => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        return 'Usuario não encontrado'
    }

    return usuario
}

const excluirUsuario = (cpf: string): Usuario | string => {
    const arquivo = lerArquivo() as Usuario[]

    const usuario = arquivo.find((usuario) => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        return 'Usuario não encontrado'
    }

    const posicaoUsuario = arquivo.findIndex((usuario) => {
        return usuario.cpf === cpf
    })

    arquivo.splice(posicaoUsuario, 1)
    escreverArquivo(arquivo)

    return usuario
}

const filtrarUsuarioPorProfissao = (profissao: string): Usuario[] => {
    const arquivo = lerArquivo() as Usuario[]

    const filtro = arquivo.filter((usuario) => {
        return usuario.profissao?.toLowerCase().includes(profissao.toLowerCase())
    })

    return filtro
}

// const usuario: Usuario = {
//     nome: 'Pedroso',
//     email: 'pedroso@gmail.com',
//     cpf: '12345678915',
//     profissao: 'Dev',
//     endereco: {
//         cep: '86375000',
//         rua: 'ederney filho',
//         complemento: 'Casa',
//         bairro: 'Centro',
//         cidade: 'itambaracá'
//     }
// }

// console.log(cadastrarUsuario({
//     nome: 'Ederney',
//     email: 'ederney@gmail.com',
//     cpf: '12345678910',
//     profissao: 'Programador',
//     endereco: {
//         cep: '86375000',
//         rua: 'ederney junior',
//         complemento: 'Casa',
//         bairro: 'Centro',
//         cidade: 'itambaracá'
//     }
// }))
// console.log(listarUsuarios())

// const usuario: Usuario = {
//     nome: 'Ederney',
//     email: 'ederney@gmail.com',
//     cpf: '12345678910',
//     profissao: 'Programador',
//     endereco: {
//         cep: '86375000',
//         rua: 'ederney junior',
//         complemento: 'Casa',
//         bairro: 'Centro',
//         cidade: 'itambaracá'
//     }
// }

// console.log(atualizarUsuario(usuario, '12345678911'))
// console.log(detalharUsuario('12345678910'))

// console.log(excluirUsuario('12345678910'))

// console.log(filtrarUsuarioPorProfissao('Programador'))