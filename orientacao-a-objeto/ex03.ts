type Produto = {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {
    private listaTransacoes: Produto[] = []
    private nome: string

    constructor(nome: string){
        this.nome = nome
    }

    registarProduto(produto: Produto) {
        this.listaTransacoes.push(produto)
    }

    fecharFatura(): string {
        let fatura: string = `Cliente: ${this.nome}\n\n`
        let total: number = 0

        for (const produto of this.listaTransacoes) {
            total += produto.quantidade * produto.valor
            fatura += `${produto.quantidade} - ${produto.descricao} (R$ ${((produto.valor / 100).toFixed(2)).replace('.', ',')}) = R$ ${(((produto.quantidade * produto.valor) / 100).toFixed(2)).replace('.', ',')}\n`
        }

        fatura += `\nTotal: ${((total / 100).toFixed(2)).replace('.', ',')}`

        return fatura
    }
}

const ederney3 = new Fatura('Ederney')

ederney3.registarProduto({
    descricao: 'Camisa Preta',
    quantidade: 2,
    valor: 5990
})

ederney3.registarProduto({
    descricao: 'Camisa Azul',
    quantidade: 1,
    valor: 7990
})

console.log(ederney3.fecharFatura());
