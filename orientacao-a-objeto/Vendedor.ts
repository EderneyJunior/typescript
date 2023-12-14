import { Funcionario } from "./Funcionario";

export class Vendedor extends Funcionario{
    constructor(
        nome: string,
        salario: number,
        private comissao: number
    ) {
        super(nome, salario)
    }

    calcularSalario(): number {
        return this.salario + this.comissao
    }
}