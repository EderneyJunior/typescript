import { Aluno } from "./Aluno";
import { TipoUsuario, Usuario } from "./Usuario";

interface IProfessor {
    lancarNota(aluno: Aluno, nota: number): void
}

export class Professor extends Usuario implements IProfessor {
    disciplina: string

    constructor(dados: TipoUsuario, disciplina: string) {
        super(dados)
        this.disciplina = disciplina
    }

    private verificaLogin(): void {
        if (!this.logado) {
            throw new Error('Professor não esta autenticado')
        }
    }

    lancarNota(aluno: Aluno, nota: number): void {
        this.verificaLogin()
        aluno.notas.push(nota)
    }
}