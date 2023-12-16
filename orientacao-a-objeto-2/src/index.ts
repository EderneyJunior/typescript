import { Cliente } from "./classes/Cliente";
import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";

const ederney = new Cliente({
    nome: 'Ederney',
    email: 'ederney@email.com',
    cpf: '12345678910'
})

const guido = new Cliente({
    nome: 'Guido',
    email: 'guido@email.com',
    cpf: '12345678911'
})

const contaPoupancaGuido = new ContaPoupanca({
    cliente: guido,
    numero: '0012-3',
    agencia: '321-3',
    senha: '12345',
    saldo: 50000
})

const contaPoupancaEderney = new ContaPoupanca({
    cliente: ederney,
    numero: '0012-4',
    agencia: '321-3',
    senha: '12345',
    saldo: 100000
})

const contaCorrenteEderney = new ContaCorrente({
    cliente: ederney,
    numero: '0012-4',
    agencia: '321-3',
    senha: '12345',
    saldo: 100000
})

const contaCorrenteGuido = new ContaCorrente({
    cliente: guido,
    numero: '0012-3',
    agencia: '321-3',
    senha: '12345',
    saldo: 50000
})

console.log(contaCorrenteEderney.sacar(150000, '12345'))
console.log(contaCorrenteEderney.sacar(50000, '12345'))
console.log(contaCorrenteEderney.sacar(1, '12345'))

console.log(contaPoupancaGuido.sacar(50000, '12345'))
console.log(contaPoupancaGuido.depositar(10000))