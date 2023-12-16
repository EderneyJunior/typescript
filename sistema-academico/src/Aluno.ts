import { TipoUsuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[]

    constructor(dados: TipoUsuario) {
        super(dados)
        this.notas = []
    }

    obterMedia(): number {
        return (this.notas.reduce((acumulador, valorAtual) => acumulador + valorAtual)) / this.notas.length
    }
}