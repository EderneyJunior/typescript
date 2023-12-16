import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria"

export class ContaPoupanca extends ContaBancaria {
    private taxaRendimento: number

    constructor(contaBancaria: TipoContaBancaria) {
        super(contaBancaria)
        this.taxaRendimento = 0.05
    }

    depositar(valor: number): string {
        this.saldo += valor + (valor * this.taxaRendimento)

        return this.consultarSaldo(this.senha)
    }

    sacar(valor: number, senha: string): string {
        if (senha !== this.senha) {
            return `Senha inválida`
        }

        if (valor > this.saldo) {
            return 'Saldo insuficiente'
        }

        this.saldo -= valor

        return this.consultarSaldo(this.senha)
    }
} 