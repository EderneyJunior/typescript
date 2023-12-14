import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private notas: number[]

    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        senha: string,
    ) {
        super(nome, email, telefone, senha)
        this.notas = []
    }

    set setNotas(nota: number) {
        this.notas.push(nota)
    }

    obterMedia(): number {
        const somaNotas: number = this.notas.reduce((acumulador, valorTotal): number => {
            return acumulador + valorTotal
        })

        return somaNotas / this.notas.length
    }
}