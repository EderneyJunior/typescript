import { Cliente } from "./Cliente"

export type TipoContaBancaria = {
    saldo: number
    numero: string
    agencia: string
    senha: string
    cliente: Cliente
}
 
export abstract class ContaBancaria {
    protected saldo: number
    public numero: string
    public agencia: string
    protected senha: string
    public cliente: Cliente

    constructor(contaBancaria: TipoContaBancaria) {
        this.saldo = contaBancaria.saldo
        this.numero = contaBancaria.numero
        this.agencia = contaBancaria.agencia
        this.senha = contaBancaria.senha
        this.cliente = contaBancaria.cliente
    }

    consultarSaldo(senha: string): string {
        if (senha === this.senha) {
            return `Saldo: R$ ${((this.saldo / 100).toFixed(2)).replace('.', ',')}`
        }
        return 'Senha inválida'
    }

    abstract depositar(valor: number): string

    abstract sacar(valor: number, senha: string): string
}