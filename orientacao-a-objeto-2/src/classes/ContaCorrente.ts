import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
    private limite: number

    constructor (contaBancaria: TipoContaBancaria) {
        super(contaBancaria)
        this.limite = 100000
    }

    depositar(valor: number): string {
        this.saldo += valor

        return this.consultarSaldo(this.senha)
    }

    sacar(valor: number, senha: string): string {
        if (senha !== this.senha) {
            return `Senha inválida`
        }

        if(valor > this.saldo + this.limite) {
            return 'Saldo insuficiente'
        }

        this.saldo -= valor

        return this.consultarSaldo(this.senha)
    }
}