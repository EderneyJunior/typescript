import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const joao = {
    nome: 'joao',
    email: 'joao@email.com',
    senha: '12345'
}

const ana = {
    nome: 'Ana',
    email: 'ana@email.com',
    senha: '12345'
}

const maria = {
    nome: 'Maria',
    email: 'maria@email.com',
    senha: '12345'
}

const professoraMaria = new Professor(maria, 'Matematica')

const alunoJoao = new Aluno(joao)
const AlunaAna = new Aluno(ana)

professoraMaria.login('12345')
professoraMaria.lancarNota(alunoJoao, 8)
professoraMaria.lancarNota(alunoJoao, 10)

console.log(alunoJoao.obterMedia())