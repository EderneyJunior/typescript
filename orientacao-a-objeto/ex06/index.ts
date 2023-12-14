import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const joao = new Professor('Joao', 'joao@email.com', '(99) 9 9999-9999', '123')

const maria = new Aluno('Maria', 'maria@email.com', '(99) 9 9999-9999', '123')

console.log(joao.autenticar('123'));
joao.lancarNota(maria, 8)
joao.lancarNota(maria, 6)

console.log(maria.obterMedia());
