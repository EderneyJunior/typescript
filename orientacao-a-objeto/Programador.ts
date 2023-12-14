import { Funcionario } from "./Funcionario";

export class Programador extends Funcionario {
    constructor(
        nome: string,
        salario: number,
        public linguagens: string[]
    ) {
        super(nome, salario)
    }
}