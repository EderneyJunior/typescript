import { Carrinho } from "./Carrinho"
import { VendaCredito } from "./VendaCredito"

const  guido = new Carrinho()

guido.adicionarProduto({
    id: 1,
    descricao: 'Abacaxi',
    categoria: 'Frutas',
    valor: 850,
    quantidade: 12
})

guido.adicionarProduto({
    id: 2,
    descricao: 'Uva',
    categoria: 'Frutas',
    valor: 400,
    quantidade: 6
})

guido.adicionarProduto({
    id: 3,
    descricao: 'Maça',
    categoria: 'Frutas',
    valor: 900,
    quantidade: 8
})

console.log(guido.alterarQuantidadeProduto(3, 15))
console.log(guido.removerProduto(2))

const vendaGuido = new VendaCredito(guido)

vendaGuido.aplicarDesconto()

console.log(vendaGuido.finalizarPedido())