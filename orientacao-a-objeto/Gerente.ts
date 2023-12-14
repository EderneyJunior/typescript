import { Funcionario } from "./Funcionario"

export class Gerente extends Funcionario {
    constructor(
        nome: string,
        salario: number,
        private senha: string
    ) {
        super(nome, salario)
    }

    validarSenha(senha: string): string {
        if (senha === this.senha) {
            return 'Gerente autorizado'
        }

        return 'Gerente não autorizado'
    }
}