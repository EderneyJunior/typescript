function isString(value: string | number | Date | null): value is string {
    return typeof value == 'string'
}

function isNumber(value: string | number | Date | null): value is number {
    return typeof value == 'number'
}

function data1(param: string | number | Date | null) {
    if (param === null) {
        console.log(`${param} é null`)
    }

    if (isString(param)) {
        console.log(`${param} é null`)
    }

    if (isNumber(param)) {
        console.log(`${param} é null`)
    }

    if (param instanceof Date) {
        console.log(`${param} é null`)
    }
}

type Pessoa = {
    nome: string,
    idade?: number
}

function saudacao(pessoa: Pessoa) {
    if ('idade' in pessoa) {
        if (pessoa.idade) {
            console.log(pessoa.idade)
        }
    }

    console.log(pessoa.nome)
}